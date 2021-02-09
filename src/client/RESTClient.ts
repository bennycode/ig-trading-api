import axios, {AxiosError, AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from 'axios';
import {LoginAPI} from '../login';
import {MarketAPI} from '../market';
import {DealingAPI} from '../dealing';
import {AccountAPI} from '../account';

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

    this.httpClient.interceptors.response.use(
      response => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response!.status == 401 && error.response!.data.errorCode == 'error.security.oauth-token-invalid') {
          const config = error.config;
          return this.login.refreshToken().then(_ => {
            const {accessToken} = this.auth;
            config.headers.Authorization = 'Bearer ' + accessToken;
            return axios(config);
          });
        }
        return Promise.reject(error.config);
      }
    );

    this.login = new LoginAPI(this.httpClient, this.auth);
    this.market = new MarketAPI(this.httpClient);
    this.dealing = new DealingAPI(this.httpClient);
    this.account = new AccountAPI(this.httpClient);
  }
}
