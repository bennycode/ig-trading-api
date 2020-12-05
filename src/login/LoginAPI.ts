import {AxiosInstance} from 'axios';
import {Authorization} from '../client';

export type ReroutingEnvironment = 'DEMO' | 'LIVE' | 'TEST' | 'UAT';

export interface AccountInfo {
  available: number;
  balance: number;
  deposit: number;
  profitLoss: number;
}

export interface Account {
  accountId: string;
  accountName: string;
  accountType: string;
  preferred: boolean;
}

export interface TradingSession {
  accountInfo: AccountInfo;
  accounts: Account[];
  accountType: string;
  clientId: string;
  currencyIsoCode: string;
  currencySymbol: string;
  currentAccountId: string;
  dealingEnabled: boolean;
  hasActiveDemoAccounts: boolean;
  hasActiveLiveAccounts: boolean;
  lightstreamerEndpoint: string;
  reroutingEnvironment?: ReroutingEnvironment;
  timezoneOffset: number;
  trailingStopsEnabled: boolean;
}

export class LoginAPI {
  static readonly URL = {
    SESSION: `/session`,
  };

  constructor(private readonly apiClient: AxiosInstance, private auth: Authorization) {}

  /**
   * Creates a trading session, obtaining session tokens for subsequent API access.
   *
   * @param username - Username
   * @param password - Password
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=534
   */
  async createSession(username: string, password: string): Promise<TradingSession> {
    const resource = LoginAPI.URL.SESSION;
    const response = await this.apiClient.post<TradingSession>(resource, {
      identifier: username,
      password,
    });
    this.auth.clientSessionToken = response.headers.cst;
    this.auth.securityToken = response.headers['x-security-token'];
    return response.data;
  }
}
