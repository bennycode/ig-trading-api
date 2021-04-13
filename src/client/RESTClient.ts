import axios, {AxiosError, AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from 'axios';
import {LoginAPI} from '../login';
import {MarketAPI} from '../market';
import {DealingAPI} from '../dealing';
import {AccountAPI} from '../account';
import axiosRetry, {isNetworkOrIdempotentRequestError} from 'axios-retry';

export interface Authorization {
  accessToken?: string;
  accountId?: string;
  clientSessionToken?: string;
  lightstreamerEndpoint?: string;
  refreshToken?: string;
  securityToken?: string;
  username?: string;
}

export class RESTClient {
  get defaults(): AxiosRequestConfig {
    return this.httpClient.defaults;
  }

  get interceptors(): {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  } {
    return this.httpClient.interceptors;
  }

  readonly login: LoginAPI;
  readonly market: MarketAPI;
  readonly dealing: DealingAPI;
  readonly account: AccountAPI;

  readonly httpClient: AxiosInstance;
  readonly auth: Authorization = {};

  constructor(baseURL: string, private readonly apiKey: string) {
    this.httpClient = axios.create({
      baseURL: baseURL,
      timeout: 5000,
    });

    function randomNum(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    axiosRetry(this.httpClient, {
      retries: Infinity,
      retryCondition: (error: AxiosError) => {
        const gotRateLimited = error.response?.data?.errorCode === 'error.public-api.exceeded-api-key-allowance';
        const expiredSecurityToken = error.response?.data?.errorCode === 'error.security.oauth-token-invalid';
        const missingToken = error.response?.data?.errorCode === 'error.security.client-token-missing';

        if (gotRateLimited) {
          return true;
        } else if (expiredSecurityToken || missingToken) {
          void this.login.refreshToken();
          return true;
        }

        return isNetworkOrIdempotentRequestError(error);
      },
      retryDelay: (retryCount: number) => {
        /** Rate limits: https://labs.ig.com/faq */
        return randomNum(1000, 3000) * retryCount;
      },
    });

    this.httpClient.interceptors.request.use(async config => {
      const updatedHeaders = {
        ...config.headers,
        'X-IG-API-KEY': this.apiKey,
      };

      const {accessToken, accountId} = this.auth;

      if (accessToken) {
        updatedHeaders.Authorization = 'Bearer ' + accessToken;
      }
      if (accountId) {
        updatedHeaders['IG-ACCOUNT-ID'] = accountId;
      }

      config.headers = updatedHeaders;

      return config;
    });

    this.login = new LoginAPI(this.httpClient, this.auth);
    this.market = new MarketAPI(this.httpClient);
    this.dealing = new DealingAPI(this.httpClient);
    this.account = new AccountAPI(this.httpClient);
  }
}
