import {AxiosInstance} from 'axios';

export interface Position {}

export interface OTCPositionRequest {
  currencyCode: string;
  direction: string;
  expiry: string;
  size: string;
  forceOpen: string;
  level?: string;
  orderType: string;
  epic: string;
  limitDistance?: string;
  limitLevel?: string;
  guaranteedStop: string;
  stopLevel?: string;
  stopDistance?: string;
  goodTillDate?: string;
  timeInForce?: string;
}

export interface DealReference {
  dealReference: string;
}

export interface DealConfirmation {
  dealStatus: string;
  reason: string;
}

export class DealingAPI {
  static readonly URL = {
    CONFIRMS: '/confirms/',
    POSITIONS: '/positions',
    POSITIONS_OTC: '/positions/otc',
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  async createOTCPosition(createOTCPositionRequest: OTCPositionRequest): Promise<DealReference> {
    const resource = DealingAPI.URL.POSITIONS_OTC;
    const response = await this.apiClient.post<DealReference>(resource, createOTCPositionRequest);
    return response.data;
  }

  async confirmTrade(dealReference: DealReference): Promise<DealConfirmation> {
    const resource = DealingAPI.URL.CONFIRMS + dealReference.dealReference;
    const response = await this.apiClient.get<DealConfirmation>(resource);
    return response.data;
  }
}
