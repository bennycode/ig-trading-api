export enum ChartResolution {
  HOUR = 'HOUR',
  MINUTE = '1MINUTE',
  MINUTE_5 = '5MINUTE',
  SECOND = 'SECOND',
}

export enum ChartFields {
  BID_CLOSE = 'BID_CLOSE',
  BID_HIGH = 'BID_HIGH',
  BID_LOW = 'BID_LOW',
  BID_OPEN = 'BID_OPEN',
  CONS_END = 'CONS_END',
  CONS_TICK_COUNT = 'CONS_TICK_COUNT',
  DAY_HIGH = 'DAY_HIGH',
  DAY_LOW = 'DAY_LOW',
  DAY_NET_CHG_MID = 'DAY_NET_CHG_MID',
  DAY_OPEN_MID = 'DAY_OPEN_MID',
  DAY_PERC_CHG_MID = 'DAY_PERC_CHG_MID',
  LTP_CLOSE = 'LTP_CLOSE',
  LTP_HIGH = 'LTP_HIGH',
  LTP_LOW = 'LTP_LOW',
  LTP_OPEN = 'LTP_OPEN',
  LTV = 'LTV',
  OFR_CLOSE = 'OFR_CLOSE',
  OFR_HIGH = 'OFR_HIGH',
  OFR_LOW = 'OFR_LOW',
  OFR_OPEN = 'OFR_OPEN',
  TTV = 'TTV',
  UTM = 'UTM',
}

export enum MarketState {
  CLOSED = 'CLOSED',
  OFFLINE = 'OFFLINE',
  TRADEABLE = 'TRADEABLE',
  EDIT = 'EDIT',
  AUCTION = 'AUCTION',
  AUCTION_NO_EDIT = 'AUCTION_NO_EDIT',
  SUSPENDED = 'SUSPENDED',
}

export enum MarketFields {
  MID_OPEN = 'MID_OPEN',
  HIGH = 'HIGH',
  LOW = 'LOW',
  CHANGE = 'CHANGE',
  CHANGE_PCT = 'CHANGE_PCT',
  UPDATE_TIME = 'UPDATE_TIME',
  MARKET_DELAY = 'MARKET_DELAY',
  MARKET_STATE = 'MARKET_STATE',
  BID = 'BID',
  OFFER = 'OFFER',
  STRIKE_PRICE = 'STRIKE_PRICE',
  ODDS = 'ODDS',
}

export interface MarketData {
  midOpen: number;
  high: number;
  low: number;
  change: number;
  changePct: number;
  updateTime: string;
  marketDelay: number;
  marketState: string;
  bid: number;
  offer: number;
  strikePrice: number;
  odds: number;
}
