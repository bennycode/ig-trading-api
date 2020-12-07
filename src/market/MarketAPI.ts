import { AxiosInstance } from "axios";

export interface MarketNode {
  id: string;
  name: string;
}

export interface MarketNavigation {
  nodes: MarketNode[];
  markets: null;
}

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
    MARKETNAVIGATION: `/marketnavigation`
  };

  constructor(private readonly apiClient: AxiosInstance) {
  }

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

  /**
   * Returns all top-level nodes (market categories) in the market navigation hierarchy.
   *
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=550
   */
  async getMarketCategories(): Promise<MarketNavigation> {
    const resource = `${MarketAPI.URL.MARKETNAVIGATION}`;
    const response = await this.apiClient.get<MarketNavigation>(resource);
    return response.data;
  }
}
