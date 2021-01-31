import {LightstreamerClient, Subscription} from 'lightstreamer-client-node';
import {DateTime} from 'luxon';
import {Authorization} from '../client';
import {CandleStick} from '../market';
import {ChartFields, ChartResolution} from './interfaces';

export class LightstreamerAPI {
  lightstream!: LightstreamerClient;
  candleSubscription!: Subscription;

  constructor(private readonly auth: Authorization) {}

  private _createLightstream(): void {
    if (!this.lightstream) {
      this.lightstream = new LightstreamerClient(this.auth.lightstreamerEndpoint, '');
      this.lightstream.connectionDetails.setUser(this.auth.user as string);
      this.lightstream.connectionDetails.setPassword(
        `CST-${this.auth.clientSessionToken}|XST-${this.auth.securityToken}`
      );
    }
  }

  subscribeCandles(
    epicList: string[],
    resolution: ChartResolution,
    // fields: ChartFields[] = [],
    onCandleUpdate: (epic: string, candle: CandleStick) => void
  ): void {
    this._createLightstream();

    // if (fields.length === 0) {
    //   fields = Object.values(ChartFields);
    // }

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
      this.lightstream.unsubscribe(this.candleSubscription);
    }
    const epics = epicList.map(x => `CHART:${x}:${resolution}`);
    this.candleSubscription = new Subscription('MERGE', epics, fields);

    this.candleSubscription.addListener({
      onItemUpdate: item => {
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
          snapshotTimeUTC: dt.toFormat("yyyy/LL/dd'T'hh:mm:ss"),
        };

        onCandleUpdate(epic, candle);
      },
    });
    this.lightstream.connect();
    this.lightstream.subscribe(this.candleSubscription);
  }
}
