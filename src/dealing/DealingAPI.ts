import {AxiosInstance} from 'axios';
import {Market} from '../market';

export enum Direction {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum PositionOrderType {
  LIMIT = 'LIMIT',
  MARKET = 'MARKET',
  QUOTE = 'QUOTE',
}

export enum PositionTimeInForce {
  EXECUTE_AND_ELIMINATE = 'EXECUTE_AND_ELIMINATE',
  FILL_OR_KILL = 'FILL_OR_KILL',
}

export enum OrderType {
  LIMIT = 'LIMIT',
  STOP = 'STOP',
}

export enum OrderTimeInForce {
  GOOD_TILL_CANCELLED = 'GOOD_TILL_CANCELLED',
  GOOD_TILL_DATE = 'GOOD_TILL_DATE',
}

export enum AffectedDealStatus {
  AMENDED = 'AMENDED',
  DELETED = 'DELETED',
  FULLY_CLOSED = 'FULLY_CLOSED',
  OPENED = 'OPENED',
  PARTIALLY_CLOSED = 'PARTIALLY_CLOSED',
}

export enum DealStatus {
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export enum Status {
  AMENDED = 'AMENDED',
  CLOSED = 'CLOSED',
  DELETED = 'DELETED',
  OPEN = 'OPEN',
  PARTIALLY_CLOSED = 'PARTIALLY_CLOSED',
}

export interface Position {
  contractSize: number;
  controlledRisk: boolean;
  createdDate: Date;
  createdDateUTC: Date;
  currency: string;
  dealId: string;
  dealReference: string;
  direction: Direction;
  level: number;
  limitLevel?: number;
  size: number;
  stopLevel?: number;
  trailingStep?: number;
  trailingStopDistance?: number;
}

export interface PositionResponse {
  market: Market;
  position: Position;
}

export interface PositionListResponse {
  positions: PositionResponse[];
}

export interface PositionCreateRequest {
  currencyCode: string;
  direction: Direction;
  epic: string;
  expiry: string;
  forceOpen: Boolean;
  goodTillDate?: string;
  guaranteedStop: Boolean;
  level?: number;
  limitDistance?: number;
  limitLevel?: number;
  orderType: PositionOrderType;
  size: number;
  stopDistance?: number;
  stopLevel?: number;
  timeInForce?: PositionTimeInForce;
}

export interface PositionCloseRequest {
  dealId?: string;
  direction: Direction;
  epic?: string;
  expiry: string;
  level: number;
  orderType: PositionOrderType;
  quoteId?: string;
  size: number;
  timeInForce?: PositionTimeInForce;
}

export interface PositionUpdateRequest {
  limitLevel?: number;
  stopLevel?: number;
  trailingStop?: Boolean;
  trailingStopDistance?: number;
  trailingStopIncrement?: number;
}

export interface Order {
  createdDate: Date;
  createdDateUTC: Date;
  currencyCode: string;
  dealId: string;
  direction: Direction;
  dma: boolean;
  epic: string;
  goodTillDate?: Date;
  goodTillDateISO?: Date;
  guaranteedStop: boolean;
  limitDistance: number;
  orderLevel: number;
  orderSize: number;
  orderType: OrderType;
  stopDistance: number;
  timeInForce: OrderTimeInForce;
}

export interface OrderResponse {
  marketData: Market;
  workingOrderData: Order;
}

export interface OrderListResponse {
  workingOrders: OrderResponse[];
}

export interface OrderCreateRequest {
  currencyCode: string;
  direction: Direction;
  epic: string;
  expiry: string;
  forceOpen: Boolean;
  goodTillDate?: Date;
  guaranteedStop: Boolean;
  level: number;
  limitDistance?: number;
  limitLevel?: number;
  size: number;
  stopDistance?: number;
  stopLevel?: number;
  timeInForce: OrderTimeInForce;
  type: OrderType;
}

export interface OrderUpdateRequest {
  goodTillDate?: Date;
  level: number;
  limitDistance?: number;
  limitLevel?: number;
  stopDistance?: number;
  stopLevel?: number;
  timeInForce: OrderTimeInForce;
  type: OrderType;
}

export interface DealReferenceResponse {
  dealReference: string;
}

export interface AffectedDeal {
  dealId: string;
  status: AffectedDealStatus;
}

export interface DealConfirmation {
  affectedDeals: AffectedDeal[];
  date: Date;
  dealId: string;
  dealReference: string;
  dealStatus: DealStatus;
  direction: Direction;
  epic: string;
  expiry: string;
  guaranteedStop: boolean;
  level: number;
  limitDistance?: number;
  limitLevel?: number;
  profit?: number;
  profitCurrency?: string;
  reason: string;
  size: number;
  status: Status;
  stopDistance?: number;
  stopLevel?: number;
  trailingStop: boolean;
}

export class DealingAPI {
  static readonly URL = {
    CONFIRMS: '/confirms/',
    POSITIONS: '/positions/',
    POSITIONS_OTC: '/positions/otc/',
    WORKINGORDERS: '/workingorders/',
    WORKINGORDERS_OTC: '/workingorders/otc/',
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * Returns all open positions for the active account.
   *
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=545
   */
  async getAllOpenPositions(): Promise<PositionListResponse> {
    const resource = DealingAPI.URL.POSITIONS;
    const response = await this.apiClient.get<PositionListResponse>(resource);
    return response.data;
  }

  /**
   * Returns an open position for the active account by deal identifier.
   *
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=541
   */
  async getPosition(dealId: String): Promise<Position> {
    const resource = DealingAPI.URL.POSITIONS + dealId;
    const response = await this.apiClient.get<Position>(resource);
    return response.data;
  }

  /**
   * Creates an OTC position.
   *
   * @param PositionCreateRequest - The Information to create the Position
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=542
   */
  async createPosition(createPositionRequest: PositionCreateRequest): Promise<DealReferenceResponse> {
    const resource = DealingAPI.URL.POSITIONS_OTC;
    const response = await this.apiClient.post<DealReferenceResponse>(resource, createPositionRequest);
    return response.data;
  }

  /**
   * Closes an OTC position.
   *
   * @param PositionCloseRequest - The Information to close the Position
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=542
   */
  async closePosition(closePositionRequest: PositionCloseRequest): Promise<DealReferenceResponse> {
    const resource = DealingAPI.URL.POSITIONS_OTC;
    const response = await this.apiClient.post<DealReferenceResponse>(resource, closePositionRequest, {
      headers: {
        _method: 'DELETE',
      },
    });
    return response.data;
  }

  /**
   * Closes an OTC position.
   *
   * @param PositionUpdateRequest - The Information to close the Position
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=542
   */
  async updatePosition(dealId: String, updatePositionRequest: PositionUpdateRequest): Promise<DealReferenceResponse> {
    const resource = DealingAPI.URL.POSITIONS_OTC + dealId;
    const response = await this.apiClient.put<DealReferenceResponse>(resource, updatePositionRequest);
    return response.data;
  }

  /**
   * Returns a deal confirmation for the given deal reference.
   *
   * @param dealReference - The dealReference of the deal to be retrieved
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=546
   */
  async confirmTrade(dealReference: DealReferenceResponse): Promise<DealConfirmation> {
    const resource = DealingAPI.URL.CONFIRMS + dealReference.dealReference;
    const response = await this.apiClient.get<DealConfirmation>(resource);
    return response.data;
  }

  /**
   * Returns all open working orders for the active account.
   *
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=555
   */
  async getAllOrders(): Promise<OrderListResponse> {
    const resource = DealingAPI.URL.WORKINGORDERS;
    const response = await this.apiClient.get<OrderListResponse>(resource);
    return response.data;
  }

  /**
   * Creates an OTC working order.
   *
   * @param OrderCreateRequest - The Information to create the Order
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=533
   */
  async createOrder(createOrderRequest: OrderCreateRequest): Promise<DealReferenceResponse> {
    const resource = DealingAPI.URL.WORKINGORDERS_OTC;
    const response = await this.apiClient.post<DealReferenceResponse>(resource, createOrderRequest, {
      headers: {
        VERSION: '2',
      },
    });
    return response.data;
  }

  /**
   * Deletes an OTC working order.
   *
   * @param DealId - The Id of the working order which should be deleted
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=526
   */
  async deleteOrder(dealId: String): Promise<DealReferenceResponse> {
    const resource = DealingAPI.URL.WORKINGORDERS_OTC + dealId;
    const response = await this.apiClient.post<DealReferenceResponse>(
      resource,
      {},
      {
        headers: {
          _method: 'DELETE',
        },
      }
    );
    return response.data;
  }

  /**
   * Updates an OTC working order.
   *
   * @param DealId - The Id of the working order which should be updated
   * @param OrderUpdateRequest - The Information to update the Working Order
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=526
   */
  async updateOrder(dealId: String, orderRequest: OrderUpdateRequest): Promise<DealReferenceResponse> {
    const resource = DealingAPI.URL.WORKINGORDERS_OTC + dealId;
    const response = await this.apiClient.put<DealReferenceResponse>(resource, orderRequest);
    return response.data;
  }
}
