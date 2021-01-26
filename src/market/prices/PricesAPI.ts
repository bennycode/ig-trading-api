import {AxiosInstance} from 'axios';
import querystring from 'querystring';
interface BidAsk {
  ask: number;
  bid: number;
  lastTraded: number | null;
}
export interface CandleStick {
  closePrice: BidAsk;
  highPrice: BidAsk;
  lastTradedVolume: number;
  lowPrice: BidAsk;
  openPrice: BidAsk;
  snapshotTime: Date | string;
  snapshotTimeUTC: Date | string;
}

export interface HistoricalPricesAllowance {
  allowanceExpiry: number;
  remainingAllowance: number;
  totalAllowance: number;
}

export interface HistoricalPricesMetadata {
  allowance: HistoricalPricesAllowance;
  pageData: HistoricalPricesPagination;
  size: number;
}

export interface HistoricalPricesPagination {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

export interface HistoricalPricesResponse {
  instrumentType:
    | 'BUNGEE_COMMODITIES'
    | 'BUNGEE_CURRENCIES'
    | 'BUNGEE_INDICES'
    | 'COMMODITIES'
    | 'CURRENCIES'
    | 'INDICES'
    | 'OPT_COMMODITIES'
    | 'OPT_CURRENCIES'
    | 'OPT_INDICES'
    | 'OPT_RATES'
    | 'OPT_SHARES'
    | 'RATES'
    | 'SECTORS'
    | 'SHARES'
    | 'SPRINT_MARKET'
    | 'TEST_MARKET'
    | 'UNKNOWN';
  metadata: HistoricalPricesMetadata;
  prices: CandleStick[];
}

export enum Resolution {
  DAY = 'DAY',
  HOUR = 'HOUR',
  HOUR_2 = 'HOUR_2',
  HOUR_3 = 'HOUR_3',
  HOUR_4 = 'HOUR_4',
  MINUTE = 'MINUTE',
  MINUTE_10 = 'MINUTE_10',
  MINUTE_15 = 'MINUTE_15',
  MINUTE_2 = 'MINUTE_2',
  MINUTE_3 = 'MINUTE_3',
  MINUTE_30 = 'MINUTE_30',
  MINUTE_5 = 'MINUTE_5',
  MONTH = 'MONTH',
  SECOND = 'SECOND',
  WEEK = 'WEEK',
}

export enum ResolutionTime {
  DAY = 86400000,
  HOUR = 3600000,
  HOUR_2 = 7200000,
  HOUR_3 = 10800000,
  HOUR_4 = 14400000,
  MINUTE = 60000,
  MINUTE_10 = 600000,
  MINUTE_15 = 900000,
  MINUTE_2 = 120000,
  MINUTE_3 = 180000,
  MINUTE_30 = 1800000,
  MINUTE_5 = 300000,
  MONTH = 2419200000,
  SECOND = 1000,
  WEEK = 604800000,
}

export class PricesAPI {
  static readonly URL = {
    PRICES: '/prices',
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * Returns historical prices between given dates
   * NOTE: Uses the V3 API response
   * @param epic - The epic of the market to be retrieved
   * @param resolution - the time resolution to get
   * @param startDate - Start date
   * @param endDate - End date - must be later than start date
   * @param pageSize - Number of candles per page of results (default 0 - no pagination)
   * @param pageNumber - the page of results to return
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=521
   */
  async getPricesBetweenDates(
    epic: string,
    resolution: Resolution,
    startDate: Date,
    endDate: Date,
    pageSize: number = 0,
    pageNumber: number = 1
  ): Promise<HistoricalPricesResponse> {
    const qs = querystring.stringify({
      from: startDate.toISOString(),
      pageNumber,
      pageSize,
      resolution,
      to: endDate.toISOString(),
    });

    const resource = `${PricesAPI.URL.PRICES}/${epic}?${qs}`;

    const response = await this.apiClient.get<HistoricalPricesResponse>(resource, {headers: {Version: 3}});

    return response.data;
  }

  async getPrices(
    epic: string,
    resolution: Resolution,
    pointCount: number,
    pageSize: number = 0,
    pageNumber: number = 1
  ): Promise<HistoricalPricesResponse> {
    const qs = querystring.stringify({
      max: pointCount,
      pageNumber,
      pageSize,
      resolution,
    });
    const resource = `${PricesAPI.URL.PRICES}/${epic}?${qs}`;
    const response = await this.apiClient.get<HistoricalPricesResponse>(resource, {headers: {Version: 3}});
    return response.data;
  }
}
