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

export enum ChartTickFields {
  BID = 'BID',
  DAY_HIGH = 'DAY_HIGH',
  DAY_LOW = 'DAY_LOW',
  DAY_NET_CHG_MID = 'DAY_NET_CHG_MID',
  DAY_OPEN_MID = 'DAY_OPEN_MID',
  DAY_PERC_CHG_MID = 'DAY_PERC_CHG_MID',
  LTP = 'LTP',
  LTV = 'LTV',
  OFR = 'OFR',
  TTV = 'TTV',
  UTM = 'UTM',
}

export enum AccountFields {
  AVAILABLE_CASH = 'AVAILABLE_CASH',
  AVAILABLE_TO_DEAL = 'AVAILABLE_TO_DEAL',
  DEPOSIT = 'DEPOSIT',
  EQUITY = 'EQUITY',
  EQUITY_USED = 'EQUITY_USED',
  FUNDS = 'FUNDS',
  MARGIN = 'MARGIN',
  MARGIN_LR = 'MARGIN_LR',
  MARGIN_NLR = 'MARGIN_NLR',
  PNL = 'PNL',
  PNL_LR = 'PNL_LR',
  PNL_NLR = 'PNL_NLR',
}

export enum TradeSubTypes {
  CONFIRMS = 'CONFIRMS',
  OPU = 'OPU',
  WOU = 'WOU',
}

export enum WorkingOrderUpdate {
  CURRENCY = 'currency',
  DEAL_ID = 'dealId',
  DEAL_REFERENCE = 'dealReference',
  DEAL_STATUS = 'dealStatus',
  DIRECTION = 'direction',
  EPIC = 'epic',
  EXPIRY = 'expiry',
  GOOD_TILL_DATE = 'goodTillDate',
  GUARANTEED_STOP = 'guaranteedStop',
  LEVEL = 'level',
  LIMIT_DISTANCE = 'limitDistance',
  ORDER_TYPE = 'orderType',
  SIZE = 'size',
  STATUS = 'status',
  STOP_DISTANCE = 'stopDistance',
  TIME_IN_FORCE = 'timeInForce',
  TIMESTAMP = 'timestamp',
}
