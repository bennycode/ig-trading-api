import axios, {AxiosInstance} from 'axios';
import {APIClient} from '../APIClient';
import {Authorization} from '../client';

export interface OauthToken {
  access_token: string;
  expires_in: string;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface TradingSession {
  accountId: string;
  clientId: string;
  lightstreamerEndpoint: string;
  oauthToken: OauthToken;
  timezoneOffset: number;
}

export interface SwitchAccountResposonse {
  dealingEnabled: boolean;
  hasActiveDemoAccounts: boolean;
  hasActiveLiveAccounts: boolean;
  trailingStopsEnabled: boolean;
}

export class LoginAPI {
  static readonly URL = {
    REFRESH_TOKEN: `/session/refresh-token`,
    SESSION: `/session`,
  };

  constructor(private readonly apiClient: AxiosInstance, private auth: Authorization) {}

  /**
   * Creates a trading session, obtaining session tokens for subsequent API access. Please note that region-specific
   * login restrictions may apply.
   *
   * @param username - Username
   * @param password - Password
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=534
   */
  async createSession(username: string, password: string): Promise<TradingSession> {
    delete this.auth.accessToken;

    const resource = LoginAPI.URL.SESSION;
    const response = await this.apiClient.post<TradingSession>(
      resource,
      {
        identifier: username,
        password,
      },
      {
        'axios-retry': {
          retries: 0,
        },
        headers: {
          Version: '3',
        },
      }
    );

    this.auth.accessToken = response.data.oauthToken.access_token;
    this.auth.refreshToken = response.data.oauthToken.refresh_token;

    this.auth.accountId = response.data.accountId;
    this.auth.lightstreamerEndpoint = response.data.lightstreamerEndpoint;

    await this.getSessionToken();

    return response.data;
  }

  /**
   * Switches accounts
   *
   * @param accountId - Account ID
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=534
   */
  async switchAccount(accountId: string): Promise<SwitchAccountResposonse> {
    const resource = LoginAPI.URL.SESSION;
    const response = await this.apiClient.put<SwitchAccountResposonse>(
      resource,
      {
        accountId: accountId,
        defaultAccount: false,
      },
      {
        'axios-retry': {
          retries: 0,
        },
        headers: {
          Version: '1',
        },
      }
    );

    this.auth.accountId = accountId;

    return response.data;
  }

  /**
   * Saves the user's session details.
   *
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=534
   */
  async getSessionToken(): Promise<boolean> {
    const resource = LoginAPI.URL.SESSION + '?fetchSessionTokens=true';
    const response = await this.apiClient.get(resource);
    this.auth.securityToken = response.headers['x-security-token'];
    this.auth.clientSessionToken = response.headers.cst;
    return true;
  }

  /**
   * Creates a session from predefined token values.
   */
  createSessionFromToken(securityToken: string, cst: string, accountId: string, lightstreamerEndpoint: string): void {
    this.auth.accountId = accountId;
    this.auth.clientSessionToken = cst;
    this.auth.lightstreamerEndpoint = lightstreamerEndpoint;
    this.auth.securityToken = securityToken;
  }

  /**
   * Creates a session using the IG Mobile App API.
   *
   * WARNING: This endpoint only works with a production environment.
   */
  async createSessionFromMobileLogin(username: string, password: string): Promise<TradingSession> {
    delete this.auth.accessToken;

    const resource = 'https://api.ig.com/clientsecurity/session';
    const response = await axios.post<TradingSession>(
      resource,
      {
        enc: false,
        password,
        username: username,
      },
      {
        'axios-retry': {
          retries: 0,
        },
      }
    );

    this.auth.securityToken = response.headers['x-security-token'];
    this.auth.clientSessionToken = response.headers.cst;
    this.auth.accountId = response.data.accountId;
    this.auth.lightstreamerEndpoint = response.data.lightstreamerEndpoint;

    return response.data;
  }

  /**
   * Returns the user's session details.
   *
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=534
   */
  async getSession(): Promise<TradingSession> {
    const resource = LoginAPI.URL.SESSION + '?fetchSessionTokens=true';
    const response = await this.apiClient.get<TradingSession>(resource);
    return response.data;
  }

  async login(username: string, password: string): Promise<TradingSession> {
    const isLive = this.apiClient.defaults.baseURL === APIClient.URL_LIVE;

    if (isLive) {
      return this.createSessionFromMobileLogin(username, password);
    }
    return this.createSession(username, password);
  }

  /**
   * Log out of the current session.
   *
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=600
   */
  async logout(): Promise<void> {
    const resource = LoginAPI.URL.SESSION;
    return this.apiClient.delete(resource, {
      'axios-retry': {
        retries: 0,
      },
    });
  }

  /**
   * Refreshes a trading session, obtaining new session tokens for subsequent API access.
   *
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=523
   */
  async refreshToken(): Promise<OauthToken> {
    delete this.auth.accessToken;

    const resource = LoginAPI.URL.REFRESH_TOKEN;
    const response = await this.apiClient.post<OauthToken>(resource, {
      refresh_token: this.auth.refreshToken,
    });
    this.auth.accessToken = response.data.access_token;
    this.auth.refreshToken = response.data.refresh_token;

    return response.data;
  }
}
