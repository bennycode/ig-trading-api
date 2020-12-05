import {AxiosInstance} from 'axios';

export interface Market {
  bid?: number;
  delayTime: number;
  epic: string;
  expiry: string;
  high?: number;
  instrumentName: string;
  instrumentType: string;
  low?: number;
  marketStatus: string;
  netChange: number;
  offer?: number;
  percentageChange: number;
  scalingFactor: number;
  streamingPricesAvailable: boolean;
  updateTime: string;
  updateTimeUTC: string;
}

export interface MarketSearch {
  markets: Market[];
}

export class MarketAPI {
  static readonly URL = {
    MARKETS: `/markets`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * Returns all markets matching the search term.
   *
   * @param searchTerm - The term to be used in the search
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=547
   */
  async searchMarkets(searchTerm: string): Promise<MarketSearch> {
    const resource = `${MarketAPI.URL.MARKETS}?searchTerm=${searchTerm}`;
    const response = await this.apiClient.get<MarketSearch>(resource);
    return response.data;
  }
}
