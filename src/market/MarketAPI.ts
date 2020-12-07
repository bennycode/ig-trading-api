import { AxiosInstance } from "axios";

export interface Currency {
  baseExchangeRate: number;
  code: string;
  exchangeRate: number;
  isDefault: boolean;
  symbol: string;
}

export interface MarginDepositBand {
  currency: string;
  margin: number;
  max?: number;
  min: number;
}

export interface SlippageFactor {
  unit: string;
  value: number;
}

export interface LimitedRiskPremium {
  unit: string;
  value: number;
}

export interface ExpiryDetail {
  lastDealingDate: string;
  settlementInfo: string;
}

export interface RolloverDetail {
  lastRolloverTime: string;
  rolloverInfo: string;
}

export interface Instrument {
  chartCode: string;
  contractSize: string;
  controlledRiskAllowed: boolean;
  country: string;
  currencies: Currency[];
  epic: string;
  expiry: string;
  expiryDetails?: ExpiryDetail;
  forceOpenAllowed: boolean;
  limitedRiskPremium: LimitedRiskPremium;
  lotSize: number;
  marginDepositBands: MarginDepositBand[];
  marginFactor: number;
  marginFactorUnit: string;
  marketId: string;
  name: string;
  newsCode: string;
  onePipMeans: string;
  openingHours?: {
    marketTimes: string[];
  };
  rolloverDetails?: RolloverDetail;
  slippageFactor: SlippageFactor;
  specialInfo: string[];
  /** For sprint markets only, the maximum value to be specified as the expiry of a sprint markets trade. */
  sprintMarketsMaximumExpiryTime?: number;
  /** For sprint markets only, the minimum value to be specified as the expiry of a sprint markets trade. */
  sprintMarketsMinimumExpiryTime?: number;
  stopsLimitsAllowed: boolean;
  streamingPricesAvailable: boolean;
  type:
    | "BUNGEE_COMMODITIES"
    | "BUNGEE_CURRENCIES"
    | "BUNGEE_INDICES"
    | "COMMODITIES"
    | "CURRENCIES"
    | "INDICES"
    | "OPT_COMMODITIES"
    | "OPT_CURRENCIES"
    | "OPT_INDICES"
    | "OPT_RATES"
    | "OPT_SHARES"
    | "RATES"
    | "SECTORS"
    | "SHARES"
    | "SPRINT_MARKET"
    | "TEST_MARKET"
    | "UNKNOWN";
  unit: "AMOUNT" | "CONTRACTS" | "SHARES";
  valueOfOnePip: string;
}

export interface MinStepDistance {
  unit: string;
  value: number;
}

export interface MinDealSize {
  unit: string;
  value: number;
}

export interface MinControlledRiskStopDistance {
  unit: string;
  value: number;
}

export interface MinNormalStopOrLimitDistance {
  unit: string;
  value: number;
}

export interface MaxStopOrLimitDistance {
  unit: string;
  value: number;
}

export interface DealingRules {
  marketOrderPreference: "AVAILABLE_DEFAULT_OFF" | "AVAILABLE_DEFAULT_ON" | "NOT_AVAILABLE";
  maxStopOrLimitDistance: MaxStopOrLimitDistance;
  minControlledRiskStopDistance: MinControlledRiskStopDistance;
  minDealSize: MinDealSize;
  minNormalStopOrLimitDistance: MinNormalStopOrLimitDistance;
  minStepDistance: MinStepDistance;
  trailingStopsPreference: "AVAILABLE" | "NOT_AVAILABLE";
}

export interface Snapshot {
  bid: number;
  binaryOdds?: number;
  controlledRiskExtraSpread: number;
  decimalPlacesFactor: number;
  delayTime: number;
  high: number;
  low: number;
  marketStatus: "CLOSED" | "EDITS_ONLY" | "OFFLINE" | "ON_AUCTION" | "ON_AUCTION_NO_EDITS" | "SUSPENDED" | "TRADEABLE";
  netChange: number;
  offer: number;
  percentageChange: number;
  scalingFactor: number;
  updateTime: string;
}

export interface MarketDetail {
  dealingRules: DealingRules;
  instrument: Instrument;
  snapshot: Snapshot;
}

export type MarketDetails = { marketDetails: MarketDetail[] }

export interface MarketNode {
  id: string;
  name: string;
}

export interface MarketNavigation {
  markets?: Market[];
  nodes?: MarketNode[];
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
    MARKETNAVIGATION: `/marketnavigation`,
    MARKETS: `/markets`
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
   * Returns all nodes (market categories) in the market navigation hierarchy.
   *
   * @param nodeId - The identifier of the node to browse
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=550
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=544
   */
  async getMarketCategories(nodeId?: string): Promise<MarketNavigation> {
    const resource = nodeId ? `${MarketAPI.URL.MARKETNAVIGATION}/${nodeId}` : MarketAPI.URL.MARKETNAVIGATION;
    const response = await this.apiClient.get<MarketNavigation>(resource);
    return response.data;
  }

  /**
   * Returns the details of the given market(s).
   *
   * @param epic - The epic of the market to be retrieved
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=528
   */
  async getMarketDetails(epic: string): Promise<MarketDetail>;
  async getMarketDetails(epic: string[]): Promise<MarketDetails>;
  async getMarketDetails(epic: string | string[]): Promise<MarketDetail | MarketDetails> {
    const resource = Array.isArray(epic)
      ? `${MarketAPI.URL.MARKETS}?epics=${encodeURIComponent(epic.join(","))}`
      : `${MarketAPI.URL.MARKETS}/${epic}`;
    const response = await this.apiClient.get(resource);
    return response.data;
  }
}
