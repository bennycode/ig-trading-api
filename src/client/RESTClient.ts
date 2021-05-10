import axios, {AxiosError, AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from 'axios';
import {LoginAPI} from '../login';
import {MarketAPI} from '../market';
import {DealingAPI} from '../dealing';
import {AccountAPI} from '../account';
import axiosRetry from 'axios-retry';

export interface Authorization {
  accessToken?: string;
  accountId?: string;
  apiKey?: string;
  clientSessionToken?: string;
  lightstreamerEndpoint?: string;
  password?: string;
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

  constructor(baseURL: string, private readonly apiKey: string | Authorization) {
    this.httpClient = axios.create({
      baseURL: baseURL,
    });

    function isAuthorization(candidate: any): candidate is Authorization {
      return typeof candidate !== 'string';
    }

    if (isAuthorization(this.apiKey)) {
      this.auth = this.apiKey;
    }

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
        'X-IG-API-KEY': isAuthorization(this.apiKey) ? this.apiKey.apiKey : this.apiKey,
      };

      const {accessToken, accountId, securityToken, clientSessionToken} = this.auth;

      if (config.url === LoginAPI.URL.SESSION && config.method === 'put') {
        // Edge case to switch accounts which doesn't work with Bearer tokens
        updatedHeaders['X-SECURITY-TOKEN'] = securityToken;
        updatedHeaders.CST = clientSessionToken;
      } else {
        if (accessToken) {
          updatedHeaders.Authorization = 'Bearer ' + accessToken;
        } else if (securityToken && clientSessionToken) {
          updatedHeaders['X-SECURITY-TOKEN'] = securityToken;
          updatedHeaders.CST = clientSessionToken;
        }

        if (accountId) {
          updatedHeaders['IG-ACCOUNT-ID'] = accountId;
        }
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
