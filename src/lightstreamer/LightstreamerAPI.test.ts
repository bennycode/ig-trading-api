import nock from 'nock';
// import {ItemUpdate} from 'lightstreamer-client-node';
import {APIClient} from '../APIClient';
import {LoginAPI} from '../login/LoginAPI';

import {ChartResolution} from './interfaces';

describe('LightstreamerAPI', () => {
  describe('subscribeChart', () => {
    it('can subscribe and resub to chart data', async () => {
      nock(APIClient.URL_DEMO)
        .post(LoginAPI.URL.SESSION)
        .query(true)
        .reply(
          200,
          JSON.stringify({
            accountInfo: {
              available: 0,
              balance: 0,
              deposit: 0,
              profitLoss: 0,
            },
            accountType: 'CFD',
            accounts: [
              {
                accountId: 'ABC123',
                accountName: 'CFD',
                accountType: 'CFD',
                preferred: true,
              },
            ],
            clientId: '133721337',
            currencyIsoCode: 'EUR',
            currencySymbol: 'E',
            currentAccountId: 'ABC123',
            dealingEnabled: false,
            hasActiveDemoAccounts: true,
            hasActiveLiveAccounts: true,
            lightstreamerEndpoint: 'http://push.lightstreamer.com:80',
            reroutingEnvironment: null,
            timezoneOffset: 1,
            trailingStopsEnabled: false,
          })
        );

      await global.client.rest.login.createSession('test-user', 'test-password');

      global.client.stream.subscribeCandles(['CS.D.BITCOIN.TODAY.IP'], ChartResolution.MINUTE, (epic, candle) => {
        expect(epic).toBe('CS.D.BITCOIN.TODAY.IP');
        expect(candle.closePrice.ask).toBe(10);
      });

      const listeners = global.client.stream.candleSubscription.getListeners()[0];
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

      global.client.stream.subscribeCandles(['CS.D.ETHUSD.TODAY.IP'], ChartResolution.MINUTE, (epic, _candle) => {
        expect(epic).toBe('CS.D.ETHUSD.TODAY.IP');
      });
    });
  });
});
