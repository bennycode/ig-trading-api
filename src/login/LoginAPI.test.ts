import nock from 'nock';
import {APIClient} from '../APIClient';
import {LoginAPI} from './LoginAPI';

describe('LoginAPI', () => {
  describe('createSession', () => {
    it('creates a trading session', async () => {
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
            lightstreamerEndpoint: 'https://apd.marketdatasystems.com',
            reroutingEnvironment: null,
            timezoneOffset: 1,
            trailingStopsEnabled: false,
          })
        );

      const session = await global.client.rest.login.createSession('test-user', 'test-password');
      expect(session.accounts[0].accountId).toBe('ABC123');
      expect(session.clientId).toBe('133721337');
    });
  });
});
