import axios, {AxiosError, AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from 'axios';
import {LoginAPI} from '../login';
import {MarketAPI} from '../market';
import {DealingAPI} from '../dealing';
import {AccountAPI} from '../account';
import axiosRetry from 'axios-retry';

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
    });

    function randomNum(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    axiosRetry(this.httpClient, {
      retries: Infinity,
      retryCondition: (error: AxiosError) => {
        const errorCode = error.response?.data?.errorCode;

        const gotRateLimited = errorCode === 'error.public-api.exceeded-api-key-allowance';
        const expiredSecurityToken = errorCode === 'error.security.oauth-token-invalid';
        const missingToken = errorCode === 'error.security.client-token-missing';

        if (gotRateLimited) {
          return true;
        } else if (expiredSecurityToken || missingToken) {
          void this.login.refreshToken();
          return true;
        }

        return true;
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

      const {accessToken, accountId, securityToken, clientSessionToken} = this.auth;

      if (accessToken) {
        updatedHeaders.Authorization = 'Bearer ' + accessToken;
      } else if (securityToken && clientSessionToken) {
        updatedHeaders['X-SECURITY-TOKEN'] = securityToken;
        updatedHeaders.CST = clientSessionToken;
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
