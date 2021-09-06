import {ItemUpdate, LightstreamerClient, Subscription} from 'lightstreamer-client-node';
import {DateTime} from 'luxon';
import {Authorization} from '../client';
import {CandleStick} from '../market';
import {ChartFields, ChartResolution, MarketData, MarketFields} from './interfaces';

export class LightstreamerAPI {
  lightstream?: LightstreamerClient;
  candleSubscription?: Subscription;
  marketSubscription?: Subscription;

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

    if (this.candleSubscription && this.candleSubscription.isSubscribed) {
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
          snapshotTime: dt.toFormat('yyyy/LL/dd hh:mm:ss'),
          snapshotTimeUTC: dt.toFormat("yyyy-LL-dd'T'hh:mm:ss"),
        };

        onCandleUpdate(epic, candle);
      },
    });

    lightstream.connect();
    lightstream.subscribe(this.candleSubscription);
    return lightstream;
  }

  subscribeMarket(epicList: string[], onMarketUpdate: (epic: string, data: MarketData) => void): LightstreamerClient {
    const lightstream = this.createLightStream();

    const fields = [
      MarketFields.MID_OPEN,
      MarketFields.HIGH,
      MarketFields.LOW,
      MarketFields.CHANGE,
      MarketFields.CHANGE_PCT,
      MarketFields.UPDATE_TIME,
      MarketFields.MARKET_DELAY,
      MarketFields.MARKET_STATE,
      MarketFields.BID,
      MarketFields.OFFER,
      MarketFields.STRIKE_PRICE,
      MarketFields.ODDS,
    ];

    if (this.marketSubscription && this.marketSubscription.isSubscribed) {
      lightstream.unsubscribe(this.marketSubscription);
    }

    this.marketSubscription = new Subscription('MERGE', epicList, fields);

    this.marketSubscription.addListener({
      onItemUpdate: (item: ItemUpdate) => {
        const epic = item.getItemName();
        const market: MarketData = {
          midOpen: parseFloat(item.getValue(MarketFields.MID_OPEN)),
          high: parseFloat(item.getValue(MarketFields.HIGH)),
          low: parseFloat(item.getValue(MarketFields.LOW)),
          change: parseFloat(item.getValue(MarketFields.CHANGE)),
          changePct: parseFloat(item.getValue(MarketFields.CHANGE_PCT)),
          updateTime: item.getValue(MarketFields.UPDATE_TIME),
          marketDelay: parseFloat(item.getValue(MarketFields.MARKET_DELAY)),
          marketState: item.getValue(MarketFields.MARKET_STATE),
          bid: parseFloat(item.getValue(MarketFields.BID)),
          offer: parseFloat(item.getValue(MarketFields.OFFER)),
          strikePrice: parseFloat(item.getValue(MarketFields.STRIKE_PRICE)),
          odds: parseFloat(item.getValue(MarketFields.ODDS)),
        };

        onMarketUpdate(epic, market);
      },
    });

    lightstream.connect();
    lightstream.subscribe(this.marketSubscription);
    return lightstream;
  }
}
