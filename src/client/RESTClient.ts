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

    axiosRetry(this.httpClient, {
      retries: Infinity,
      retryCondition: (error: AxiosError) => {
        const errorCode = error.response?.data?.errorCode;

        switch (errorCode) {
          case 'error.public-api.exceeded-api-key-allowance':
            // Got rate limited
            return true;
          case 'error.security.oauth-token-invalid':
            // Security token expired
            void this.login.refreshToken();
            return true;
          case 'error.security.client-token-missing':
            // Trading session has not been initialized
            const {username, password} = this.auth;
            if (username && password) {
              void this.login.createSession(this.auth.username, this.auth.password);
              return true;
            }
            throw new Error(
              `Cannot fulfill request because there is no active session and username & password have not been provided.`
            );
          default:
            return true;
        }
      },
      retryDelay: axiosRetry.exponentialDelay,
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
          updatedHeaders.Authorization = `Bearer ${accessToken}`;
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
