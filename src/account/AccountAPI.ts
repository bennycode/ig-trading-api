import {AxiosInstance} from 'axios';
import {Direction} from 'readline';

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

export interface Action {
  actionType: ActionType;
  affectedDealId: string;
}

export interface Details {
  dealReference: string;
  actions: Action[];
  marketName: string;
  goodTillDate: string;
  currency: string;
  size: number;
  direction: Direction;
  level: number;
  stopLevel?: any;
  stopDistance?: any;
  guaranteedStop: boolean;
  trailingStopDistance?: any;
  trailingStep?: any;
  limitLevel?: number;
  limitDistance?: number;
}

export interface Activity {
  date: Date;
  epic: string;
  period: string;
  dealId: string;
  channel: Channel;
  type: ActivityType;
  status: ActivityStatus;
  description: string;
  details?: Details;
}

export interface ActivityPaging {
  size: number;
  next: string;
}

export interface ActivityMetadata {
  paging: ActivityPaging;
}

export interface ActivityHistoryRequest {
  from?: string;
  to?: string;
  detailed?: boolean;
  dealId?: string;
  filter?: string;
  pageSize?: number;
}

export interface ActivityHistoryResponse {
  activities: Activity[];
  metadata: ActivityMetadata;
}

export interface Transaction {
  date: string;
  dateUtc: Date;
  openDateUtc: Date;
  instrumentName: string;
  period: string;
  profitAndLoss: string;
  transactionType: string;
  reference: string;
  openLevel: string;
  closeLevel: string;
  size: string;
  currency: string;
  cashTransaction: boolean;
}

export interface TransactionPaging {
  pageSize: number;
  pageNumber: number;
  totalPages: number;
}

export interface TransactionMetadata {
  size: number;
  pageData: TransactionPaging;
}

export interface TransactionHistoryRequest {
  type?: TransactionType;
  from?: string;
  to?: string;
  maxSpanSeconds?: number;
  pageSize?: number;
  pageNumber?: number;
}

export interface TransactionHistoryResponse {
  transactions: Transaction[];
  metadata: TransactionMetadata;
}

export class AccountAPI {
  static readonly URL = {
    HISTORY_ACTIVITY: '/history/activity/',
    HISTORY_TRANSACTIONS: '/history/transactions',
  };

  constructor(private readonly apiClient: AxiosInstance) {}

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
