import {AxiosInstance} from 'axios';
import querystring from 'querystring';
import {InstrumentType} from '../MarketAPI';

export interface BidAsk {
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
  snapshotTime: string;
  snapshotTimeUTC: string;
}
export interface TickPrice {
  BID: number;
  DAY_HIGH: number;
  DAY_LOW: number;
  DAY_NET_CHG_MID: number;
  DAY_OPEN_MID: number;
  DAY_PERC_CHG_MID: number;
  LTP: number;
  LTV: number;
  OFR: number;
  snapshotTime: string;
  snapshotTimeUTC: string;
  TTV: number;
  UTM: number;
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
  instrumentType: InstrumentType;
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

export enum ResolutionInMillis {
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

export class PriceAPI {
  static readonly URL = {
    PRICES: '/prices',
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * Returns historical prices between given dates.
   *
   * @note Uses the v3 API response
   * @param epic - Instrument identifier
   * @param resolution - Time resolution
   * @param startDate - Start date as ISO 8601 string, i.e. "2021-01-15T00:00:00.000Z"
   * @param endDate - End date as ISO 8601 string, i.e. "2021-01-16T00:00:00.000Z"
   * @param pageSize - Number of candles per page of results (defaults to 0, no pagination)
   * @param pageNumber - Page of results to return (pagination)
   * @see https://labs.ig.com/rest-trading-api-reference/service-detail?id=521
   */
  async getPricesBetweenDates(
    epic: string,
    resolution: Resolution,
    startDate: string,
    endDate: string,
    pageSize: number = 0,
    pageNumber: number = 1
  ): Promise<HistoricalPricesResponse> {
    const qs = querystring.stringify({
      from: startDate,
      pageNumber,
      pageSize,
      resolution,
      to: endDate,
    });

    const resource = `${PriceAPI.URL.PRICES}/${epic}?${qs}`;
    const response = await this.apiClient.get<HistoricalPricesResponse>(resource, {headers: {Version: 3}});
    return response.data;
  }

  /**
   * Returns historical prices for a particular instrument.
   *
   * @param epic - Instrument identifier
   * @param resolution - Time resolution
   * @param pointCount - Limits the number of price points (not applicable if a date range has been specified)
   * @param pageSize - Number of candles per page of results (defaults to 0, no pagination)
   * @param pageNumber - Page of results to return (pagination)
   */
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
    const resource = `${PriceAPI.URL.PRICES}/${epic}?${qs}`;
    const response = await this.apiClient.get<HistoricalPricesResponse>(resource, {headers: {Version: 3}});
    return response.data;
  }
}
