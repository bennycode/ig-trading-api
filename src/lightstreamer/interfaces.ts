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

export enum  ChartTickFields {
  BID = 'BID',
  OFR = 'OFR',
  LTP = 'LTP',
  LTV = 'LTV',
  TTV = 'TTV',
  UTM = 'UTM',
  DAY_OPEN_MID = 'DAY_OPEN_MID',
  DAY_NET_CHG_MID = 'DAY_NET_CHG_MID',
  DAY_PERC_CHG_MID = 'DAY_PERC_CHG_MID',
  DAY_HIGH = 'DAY_HIGH',
  DAY_LOW = 'DAY_LOW',
  
}

export declare enum AccountFields {
  PNL = "PNL",
  DEPOSIT = "DEPOSIT",
  AVAILABLE_CASH = "AVAILABLE_CASH",
  PNL_LR = "PNL_LR",
  PNL_NLR = "PNL_NLR",
  FUNDS = "FUNDS",
  MARGIN = "MARGIN",
  MARGIN_LR = "MARGIN_LR",
  MARGIN_NLR = "MARGIN_NLR",
  AVAILABLE_TO_DEAL = "AVAILABLE_TO_DEAL",
  EQUITY = "EQUITY",
  EQUITY_USED = "EQUITY_USED"
}


export declare enum TradeConfirms {




}

export enum TradeSubTypes {
  CONFIRMS = "CONFIRMS",
  OPU = "OPU",
  WOU = "WOU"
}


export enum WorkingOrderUpdate {
  DIRECTION = "direction",
  LIMIT_DISTANCE = "limitDistance",
  DEAL_ID = "dealId",
  STOP_DISTANCE = "stopDistance",
  EXPIRY = "expiry",
  TIMESTAMP = "timestamp",
  SIZE = "size",
  STATUS = "status",
  EPIC = "epic",
  LEVEL = "level",
  GUARANTEED_STOP = "guaranteedStop",
  DEAL_REFERENCE = "dealReference",
  DEAL_STATUS = "dealStatus",
  CURRENCY = "currency",
  ORDER_TYPE = "orderType",
  TIME_IN_FORCE = "timeInForce",
  GOOD_TILL_DATE = "goodTillDate"
}

