import 'dotenv-defaults/config';
// import {ItemUpdate} from 'lightstreamer-client-node';
import {APIClient} from '../APIClient';

import {ChartResolution} from './interfaces';

describe('LightstreamerAPI', () => {
  describe('subscribeChart', () => {
    it('can subscribe and resub to chart data', async () => {
      const {IG_API_KEY: apiKey, IG_USERNAME: username, IG_PASSWORD: password} = process.env;
      const client = new APIClient(APIClient.URL_DEMO, apiKey as string);
      await client.rest.login.createSession(`${username}`, `${password}`);

      client.ls.subscribeCandles(['CS.D.BITCOIN.TODAY.IP'], ChartResolution.MINUTE, (epic, candle) => {
        expect(epic).toBe('CS.D.BITCOIN.TODAY.IP');
        expect(candle.closePrice.ask).toBe(10);
      });

      const listeners = client.ls.candleSubscription.getListeners()[0];
      if (listeners.onItemUpdate) {
        //@ts-ignore
        listeners.onItemUpdate({
          getItemName() {
            return 'CHART:CS.D.BITCOIN.TODAY.IP:1MINUTE';
          },
          getValue(_name) {
            return '10';
          },
        });
      }

      client.ls.subscribeCandles(['CS.D.ETHUSD.TODAY.IP'], ChartResolution.MINUTE, (epic, _candle) => {
        expect(epic).toBe('CS.D.ETHUSD.TODAY.IP');
      });
    });
  });
});
