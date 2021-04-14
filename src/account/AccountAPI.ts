import {AxiosInstance} from 'axios';
import {Direction} from '../dealing/DealingAPI';

export enum AccountStatus {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED',
  SUSPENDED_FROM_DEALING = 'SUSPENDED_FROM_DEALING',
}

export enum AccountType {
  CFD = 'CFD',
  PHYSICAL = 'PHYSICAL',
  SPREADBET = 'SPREADBET',
}

export enum TransactionType {
  ALL = 'ALL',
  ALL_DEAL = 'ALL_DEAL',
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
}

export enum Channel {
  DEALER = 'DEALER',
  MOBILE = 'MOBILE',
  PUBLIC_FIX_API = 'PUBLIC_FIX_API',
  PUBLIC_WEB_API = 'PUBLIC_WEB_API',
  SYSTEM = 'SYSTEM',
  WEB = 'WEB',
}

export enum ActionType {
  LIMIT_ORDER_AMENDED = 'LIMIT_ORDER_AMENDED',
  LIMIT_ORDER_DELETED = 'LIMIT_ORDER_DELETED',
  LIMIT_ORDER_FILLED = 'LIMIT_ORDER_FILLED',
  LIMIT_ORDER_OPENED = 'LIMIT_ORDER_OPENED',
  LIMIT_ORDER_ROLLED = 'LIMIT_ORDER_ROLLED',
  POSITION_CLOSED = 'POSITION_CLOSED',
  POSITION_DELETED = 'POSITION_DELETED',
  POSITION_OPENED = 'POSITION_OPENED',
  POSITION_PARTIALLY_CLOSED = 'POSITION_PARTIALLY_CLOSED',
  POSITION_ROLLED = 'POSITION_ROLLED',
  STOP_LIMIT_AMENDED = 'STOP_LIMIT_AMENDED',
  STOP_ORDER_AMENDED = 'STOP_ORDER_AMENDED',
  STOP_ORDER_DELETED = 'STOP_ORDER_DELETED',
  STOP_ORDER_FILLED = 'STOP_ORDER_FILLED',
  STOP_ORDER_OPENED = 'STOP_ORDER_OPENED',
  STOP_ORDER_ROLLED = 'STOP_ORDER_ROLLED',
  UNKNOWN = 'UNKNOWN',
  WORKING_ORDER_DELETED = 'WORKING_ORDER_DELETED',
}

export enum ActivityStatus {
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  UNKNOWN = 'UNKNOWN',
}

export enum ActivityType {
  EDIT_STOP_AND_LIMIT = 'EDIT_STOP_AND_LIMIT',
  POSITION = 'POSITION',
  SYSTEM = 'SYSTEM',
  WORKING_ORDER = 'WORKING_ORDER',
}

export interface Balance {
  available: number;
  balance: number;
  deposit: number;
  profitLoss: number;
}

export interface Account {
  accountAlias?: any;
  accountId: string;
  accountName: string;
  accountType: AccountType;
  balance: Balance;
  canTransferFrom: boolean;
  canTransferTo: boolean;
  currency: string;
  preferred: boolean;
  status: AccountStatus;
}

export interface AccountsResponse {
  accounts: Account[];
}

export interface Action {
  actionType: ActionType;
  affectedDealId: string;
}

export interface Details {
  actions: Action[];
  currency: string;
  dealReference: string;
  direction: Direction;
  goodTillDate: string;
  guaranteedStop: boolean;
  level: number;
  limitDistance?: number;
  limitLevel?: number;
  marketName: string;
  size: number;
  stopDistance?: any;
  stopLevel?: any;
  trailingStep?: any;
  trailingStopDistance?: any;
}

export interface Activity {
  channel: Channel;
  date: Date;
  dealId: string;
  description: string;
  details?: Details;
  epic: string;
  period: string;
  status: ActivityStatus;
  type: ActivityType;
}

export interface ActivityPaging {
  next: string;
  size: number;
}

export interface ActivityMetadata {
  paging: ActivityPaging;
}

export interface ActivityHistoryRequest {
  dealId?: string;
  detailed?: boolean;
  filter?: string;
  from?: string;
  pageSize?: number;
  to?: string;
}

export interface ActivityHistoryResponse {
  activities: Activity[];
  metadata: ActivityMetadata;
}

export interface Transaction {
  cashTransaction: boolean;
  closeLevel: string;
  currency: string;
  date: string;
  dateUtc: Date;
  instrumentName: string;
  openDateUtc: Date;
  openLevel: string;
  period: string;
  profitAndLoss: string;
  reference: string;
  size: string;
  transactionType: string;
}

export interface TransactionPaging {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

export interface TransactionMetadata {
  pageData: TransactionPaging;
  size: number;
}

export interface TransactionHistoryRequest {
  from?: string;
  maxSpanSeconds?: number;
  pageNumber?: number;
  pageSize?: number;
  to?: string;
  type?: TransactionType;
}

export interface TransactionHistoryResponse {
  metadata: TransactionMetadata;
  transactions: Transaction[];
}

export class AccountAPI {
  static readonly URL = {
    ACCOUNTS: '/accounts/',
    HISTORY_ACTIVITY: '/history/activity/',
    HISTORY_TRANSACTIONS: '/history/transactions',
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * Returns a list of accounts belonging to the logged-in client.
   *
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=553
   */
  async getAccounts(): Promise<AccountsResponse> {
    const resource = AccountAPI.URL.ACCOUNTS;
    const response = await this.apiClient.get<AccountsResponse>(resource);
    return response.data;
  }

  /**
   * Returns the account activity history.
   *
   * @param PositionCreateRequest - The Information to create the Position
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=543
   */
  async getActivityHistory(activityHistoryRequest: ActivityHistoryRequest): Promise<ActivityHistoryResponse> {
    const resource = AccountAPI.URL.HISTORY_ACTIVITY;
    const response = await this.apiClient.get<ActivityHistoryResponse>(resource, {
      headers: {
        VERSION: '3',
      },
      params: activityHistoryRequest,
    });
    return response.data;
  }

  /**
   * Returns the account transaction history.
   *
   * @param PositionCreateRequest - The Information to create the Position
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=525
   */
  async getTransactionHistory(
    transactionHistoryRequest: TransactionHistoryRequest
  ): Promise<TransactionHistoryResponse> {
    const resource = AccountAPI.URL.HISTORY_TRANSACTIONS;
    const response = await this.apiClient.get<TransactionHistoryResponse>(resource, {
      headers: {
        VERSION: '2',
      },
      params: transactionHistoryRequest,
    });
    return response.data;
  }
}
