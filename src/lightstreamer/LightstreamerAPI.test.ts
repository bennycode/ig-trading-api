import nock from 'nock';
import {APIClient} from '../APIClient';
import {LoginAPI} from '../login/LoginAPI';

import {ChartResolution} from './interfaces';
import {ItemUpdate} from 'lightstreamer-client-node';

describe('LightstreamerAPI', () => {
  describe('subscribeChart', () => {
    it('can subscribe and re-subscribe to chart data', async () => {
      nock(APIClient.URL_DEMO)
        .post(LoginAPI.URL.SESSION)
        .query(true)
        .reply(
          200,
          JSON.stringify({
            accountId: 'ABC123',
            clientId: '133721337',
            lightstreamerEndpoint: 'https://demo-apd.marketdatasystems.com',
            oauthToken: {
              access_token: '6ba8e2bd-1337-40e5-9299-68f60474f986',
              expires_in: '60',
              refresh_token: '83c056b8-1337-46d3-821d-92a1dffd7f1e',
              scope: 'profile',
              token_type: 'Bearer',
            },
            timezoneOffset: 1,
          })
        );

      nock(APIClient.URL_DEMO)
        .get(LoginAPI.URL.SESSION + '?fetchSessionTokens=true')
        .reply(
          200,
          JSON.stringify({
            accountId: 'ABC123',
            clientId: '133721337',
            currency: 'EUR',
            lightstreamerEndpoint: 'https://demo-apd.marketdatasystems.com',
            locale: 'de_DE',
            timezoneOffset: 1,
          }),
          {
            cst: 'a608da13371337e4f600bfa82e3ea43520eb664f22ce18b15a36879bd0eb28CU01113',
            'x-security-token': '5e6843dea133713375fe000a5e8b5ec6da09946c0e97bd557f13a6d699CD01113',
          }
        );

      await global.client.rest.login.createSession('test-user', 'test-password');

      global.client.stream.subscribeCandles(['CS.D.BITCOIN.TODAY.IP'], ChartResolution.MINUTE, (epic, candle) => {
        expect(epic).toBe('CS.D.BITCOIN.TODAY.IP');
        expect(candle.closePrice.ask).toBe(10);
      });

      const listeners = global.client.stream.candleSubscription!.getListeners()[0];
      if (listeners.onItemUpdate) {
        listeners.onItemUpdate(({
          getItemName() {
            return 'CHART:CS.D.BITCOIN.TODAY.IP:1MINUTE';
          },
          getValue() {
            return '10';
          },
        } as unknown) as ItemUpdate);
      }

      global.client.stream.subscribeCandles(['CS.D.ETHUSD.TODAY.IP'], ChartResolution.MINUTE, (epic, _candle) => {
        expect(epic).toBe('CS.D.ETHUSD.TODAY.IP');
      });
    });
  });
});
