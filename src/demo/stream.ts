import {initClient} from './initClient';
import {ChartResolution} from '../lightstreamer/interfaces';
import {CandleStick} from '../market';

async function main(): Promise<void> {
  const client = await initClient();

  client.stream.subscribeCandles(
    ['CS.D.BITCOIN.TODAY.IP', 'CS.D.ETHXBT.TODAY.IP'],
    ChartResolution.MINUTE,
    (epic: string, candle: CandleStick) => {
      console.info('Streaming API Event', epic, candle);
    }
  );
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
