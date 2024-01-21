import {ItemUpdate, LightstreamerClient, Subscription} from 'lightstreamer-client-node';
import {DateTime} from 'luxon';
import {Authorization} from '../client';
import {CandleStick, TickPrice} from '../market';
import {AccountUpdate} from '../account';
import {ChartFields, ChartResolution, AccountFields, ChartTickFields, TradeSubTypes} from './interfaces';
import {tradeSubscriptionUpdate} from '../dealing';

export class LightstreamerAPI {
  lightstream?: LightstreamerClient;
  candleSubscription?: Subscription;

  tickSubscription?: Subscription;
  accountSubscription?: Subscription;
  orderSubscription?: Subscription;
  tradeSubscription?: Subscription;

  constructor(private readonly auth: Authorization) {}

  private createLightStream(): LightstreamerClient {
    if (!this.lightstream) {
      this.lightstream = new LightstreamerClient(this.auth.lightstreamerEndpoint, '');
      this.lightstream.connectionDetails.setUser(this.auth.accountId as string);
      this.lightstream.connectionDetails.setPassword(
        `CST-${this.auth.clientSessionToken}|XST-${this.auth.securityToken}`
      );
    }

    return this.lightstream;
  }

  subscribeCandles(
    epicList: string[],
    resolution: ChartResolution,
    onCandleUpdate: (epic: string, candle: CandleStick) => void
  ): LightstreamerClient {
    const lightstream = this.createLightStream();

    const fields = [
      ChartFields.BID_HIGH,
      ChartFields.BID_LOW,
      ChartFields.BID_CLOSE,
      ChartFields.BID_OPEN,
      ChartFields.OFR_CLOSE,
      ChartFields.OFR_HIGH,
      ChartFields.OFR_LOW,
      ChartFields.OFR_OPEN,
      ChartFields.UTM,
      ChartFields.LTP_CLOSE,
      ChartFields.LTP_HIGH,
      ChartFields.LTP_LOW,
      ChartFields.LTP_OPEN,
      ChartFields.LTV,
    ];

    if (this.candleSubscription) {
      lightstream.unsubscribe(this.candleSubscription);
    }
    const epics = epicList.map(x => `CHART:${x}:${resolution}`);
    this.candleSubscription = new Subscription('MERGE', epics, fields);

    this.candleSubscription.addListener({
      onItemUpdate: (item: ItemUpdate) => {
        const dt = DateTime.fromMillis(parseInt(item.getValue(ChartFields.UTM)));
        const epic = item.getItemName().split(':')[1];
        const candle: CandleStick = {
          closePrice: {
            ask: parseFloat(item.getValue(ChartFields.OFR_CLOSE)),
            bid: parseFloat(item.getValue(ChartFields.BID_CLOSE)),
            lastTraded: parseFloat(item.getValue(ChartFields.LTP_CLOSE)),
          },
          highPrice: {
            ask: parseFloat(item.getValue(ChartFields.OFR_HIGH)),
            bid: parseFloat(item.getValue(ChartFields.BID_HIGH)),
            lastTraded: parseFloat(item.getValue(ChartFields.LTP_HIGH)),
          },
          lastTradedVolume: parseInt(item.getValue(ChartFields.LTV)),
          lowPrice: {
            ask: parseFloat(item.getValue(ChartFields.OFR_LOW)),
            bid: parseFloat(item.getValue(ChartFields.BID_LOW)),
            lastTraded: parseFloat(item.getValue(ChartFields.LTP_LOW)),
          },
          openPrice: {
            ask: parseFloat(item.getValue(ChartFields.OFR_OPEN)),
            bid: parseFloat(item.getValue(ChartFields.BID_OPEN)),
            lastTraded: parseFloat(item.getValue(ChartFields.LTP_OPEN)),
          },
          snapshotTime: dt.toFormat('yyyy/LL/dd HH:mm:ss'),
          snapshotTimeUTC: dt.toFormat("yyyy-LL-dd'T'HH:mm:ss"),
        };

        onCandleUpdate(epic, candle);
      },
    });

    lightstream.connect();
    lightstream.subscribe(this.candleSubscription);
    return lightstream;
  }
  subscribeTicks(epicList: string[], onTickUpdate: (epic: string, tick: TickPrice) => void): LightstreamerClient {
    const lightstream = this.createLightStream();

    const fields = [
      ChartTickFields.BID,
      ChartTickFields.OFR,
      ChartTickFields.LTP,
      ChartTickFields.LTV,
      ChartTickFields.TTV,
      ChartTickFields.UTM,
      ChartTickFields.DAY_OPEN_MID,
      ChartTickFields.DAY_NET_CHG_MID,
      ChartTickFields.DAY_PERC_CHG_MID,
      ChartTickFields.DAY_HIGH,
      ChartTickFields.DAY_LOW,
    ];

    if (this.tickSubscription) {
      lightstream.unsubscribe(this.tickSubscription);
    }
    const epics = epicList.map(x => `CHART:${x}:TICK`);
    this.tickSubscription = new Subscription('DISTINCT', epics, fields);

    this.tickSubscription.addListener({
      onItemUpdate: (item: ItemUpdate) => {
        const dt = DateTime.fromMillis(parseInt(item.getValue(ChartTickFields.UTM)));
        const epic = item.getItemName().split(':')[1];
        const tick: TickPrice = {
          BID: parseFloat(item.getValue(ChartTickFields.BID)),
          DAY_HIGH: parseFloat(item.getValue(ChartTickFields.DAY_HIGH)),
          DAY_LOW: parseFloat(item.getValue(ChartTickFields.DAY_LOW)),
          DAY_NET_CHG_MID: parseFloat(item.getValue(ChartTickFields.DAY_NET_CHG_MID)),
          DAY_OPEN_MID: parseFloat(item.getValue(ChartTickFields.DAY_OPEN_MID)),
          DAY_PERC_CHG_MID: parseFloat(item.getValue(ChartTickFields.DAY_PERC_CHG_MID)),
          LTP: parseFloat(item.getValue(ChartTickFields.LTP)),
          LTV: parseFloat(item.getValue(ChartTickFields.LTV)),
          OFR: parseFloat(item.getValue(ChartTickFields.OFR)),
          TTV: parseFloat(item.getValue(ChartTickFields.TTV)),
          UTM: parseFloat(item.getValue(ChartTickFields.UTM)),

          snapshotTime: dt.toFormat('yyyy/LL/dd HH:mm:ss'),
          snapshotTimeUTC: dt.toFormat("yyyy-LL-dd'T'HH:mm:ss"),
        };

        onTickUpdate(epic, tick);
      },
    });

    lightstream.connect();
    lightstream.subscribe(this.tickSubscription);
    return lightstream;
  }
  subscribeAccount(onAccountUpdate: (accountId: string, AccountUpdate: AccountUpdate) => void): LightstreamerClient {
    const lightstream = this.createLightStream();

    const fields = [
      AccountFields.PNL,
      AccountFields.DEPOSIT,
      AccountFields.AVAILABLE_CASH,
      AccountFields.PNL_LR,
      AccountFields.PNL_NLR,
      AccountFields.FUNDS,
      AccountFields.MARGIN,
      AccountFields.MARGIN_LR,
      AccountFields.MARGIN_NLR,
      AccountFields.AVAILABLE_TO_DEAL,
      AccountFields.EQUITY,
      AccountFields.EQUITY_USED,
    ];

    if (this.accountSubscription) {
      lightstream.unsubscribe(this.accountSubscription);
    }

    const account = [`ACCOUNT:${this.auth.accountId}`];
    this.accountSubscription = new Subscription('MERGE', account, fields);

    this.accountSubscription.addListener({
      onItemUpdate: (item: ItemUpdate) => {
        const dt = DateTime.fromMillis(new Date().getTime());
        const accountId = item.getItemName().split(':')[1];
        const AccountResponse = {
          AVAILABLE_CASH: parseFloat(item.getValue(AccountFields.AVAILABLE_CASH)),
          AVAILABLE_TO_DEAL: parseFloat(item.getValue(AccountFields.AVAILABLE_TO_DEAL)),
          DEPOSIT: parseFloat(item.getValue(AccountFields.DEPOSIT)),
          EQUITY: parseFloat(item.getValue(AccountFields.EQUITY)),
          EQUTY_USED: parseFloat(item.getValue(AccountFields.EQUITY_USED)),
          FUNDS: parseFloat(item.getValue(AccountFields.FUNDS)),
          MARGIN: parseFloat(item.getValue(AccountFields.MARGIN)),
          MARGIN_LR: parseFloat(item.getValue(AccountFields.MARGIN_LR)),
          MARGIN_NLR: parseFloat(item.getValue(AccountFields.MARGIN_NLR)),
          PNL: parseFloat(item.getValue(AccountFields.PNL)),
          PNL_LR: parseFloat(item.getValue(AccountFields.PNL_LR)),
          PNL_NLR: parseFloat(item.getValue(AccountFields.PNL_NLR)),

          snapshotTime: dt.toFormat('yyyy/LL/dd HH:mm:ss'),
          snapshotTimeUTC: dt.toFormat("yyyy-LL-dd'T'HH:mm:ss"),
        };
        onAccountUpdate(accountId, AccountResponse);
      },
    });
    lightstream.connect();
    lightstream.subscribe(this.accountSubscription);
    return lightstream;
  }

  subscribeTrade(
    onTradeUpdate: (accountId: string, tradeSubscriptionUpdate: tradeSubscriptionUpdate) => void
  ): LightstreamerClient {
    const lightstream = this.createLightStream();

    const fields = [TradeSubTypes.CONFIRMS, TradeSubTypes.OPU, TradeSubTypes.WOU];

    if (this.tradeSubscription) {
      lightstream.unsubscribe(this.tradeSubscription);
    }

    const account = [`ACCOUNT:${this.auth.accountId}`];
    this.tradeSubscription = new Subscription('DISTINCT', account, fields);

    this.tradeSubscription.addListener({
      onItemUpdate: (item: ItemUpdate) => {
        const dt = DateTime.fromMillis(new Date().getTime());
        const accountId = item.getItemName().split(':')[1];

        const CONFIRM = JSON.parse(item.getValue(TradeSubTypes.CONFIRMS));
        const OPU = JSON.parse(item.getValue(TradeSubTypes.OPU));
        const WPU = JSON.parse(item.getValue(TradeSubTypes.WOU));

        const tradeSubscriptionUpdate: tradeSubscriptionUpdate = {
          CONFIRMS: CONFIRM,
          OPU: OPU,
          WOU: WPU,
          snapshotTime: dt.toFormat('yyyy/LL/dd HH:mm:ss'),
          snapshotTimeUTC: dt.toFormat("yyyy-LL-dd'T'HH:mm:ss"),
          timestamp: dt,
        };
        onTradeUpdate(accountId, tradeSubscriptionUpdate);
      },
    });
    lightstream.connect();
    lightstream.subscribe(this.tradeSubscription);
    return lightstream;
  }
}
