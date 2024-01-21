import {initClient} from './initClient';
import {ChartResolution} from '../lightstreamer/interfaces';
import {CandleStick, TickPrice} from '../market';
import {tradeSubscriptionUpdate} from '../dealing';
import {AccountUpdate} from '../account';

async function main(): Promise<void> {
  const client = await initClient();
  client.stream.subscribeCandles(
    ['CS.D.BITCOIN.TODAY.IP', 'CS.D.ETHXBT.TODAY.IP'],
    ChartResolution.MINUTE,
    (epic: string, candle: CandleStick) => {
      console.info('Streaming API Event  (subscribeCandles) : ', epic, candle);
    }
  );
  client.stream.subscribeTicks(['CS.D.EOSUSD.CFD.IP'], (epic: string, tickPrice: TickPrice) => {
    console.info('Streaming API Event (subscribeTicks) : ', epic, tickPrice);
  });
  client.stream.subscribeTrade((accountId: string, tradeSubscriptionUpdate: tradeSubscriptionUpdate) => {
    console.info('Streaming API Event (subscribeTrade) : ' , accountId, tradeSubscriptionUpdate);
  });
  client.stream.subscribeAccount((accountId: string, accountUpdate: AccountUpdate) => {
    console.info('Streaming API Event (subscribeAccount) : ', accountId, accountUpdate);
  });
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
