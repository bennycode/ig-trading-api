import axios, {AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from 'axios';
import {LoginAPI} from '../login';
import {MarketAPI} from '../market';

export interface Authorization {
  clientSessionToken?: string;
  securityToken?: string;
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

  private readonly httpClient: AxiosInstance;
  private readonly auth: Authorization = {};

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

      const {clientSessionToken, securityToken} = this.auth;

      if (clientSessionToken) {
        updatedHeaders.CST = clientSessionToken;
      }

      if (securityToken) {
        updatedHeaders['X-SECURITY-TOKEN'] = securityToken;
      }

      config.headers = updatedHeaders;

      return config;
    });

    this.login = new LoginAPI(this.httpClient, this.auth);
    this.market = new MarketAPI(this.httpClient);
  }
}
