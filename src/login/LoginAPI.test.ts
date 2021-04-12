import nock from 'nock';
import {APIClient} from '../APIClient';
import {DealingAPI} from '../dealing/DealingAPI';
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

      const session = await global.client.rest.login.createSession('test-user', 'test-password');
      expect(session.accountId).toBe('ABC123');
      expect(session.clientId).toBe('133721337');
      expect(session.oauthToken.access_token).toBe('6ba8e2bd-1337-40e5-9299-68f60474f986');

      const dealId = '12345';

      nock(APIClient.URL_DEMO)
        .post(
          DealingAPI.URL.WORKINGORDERS_OTC + dealId,
          {},
          {
            reqheaders: {
              Authorization: '83c056b8-1337-46d3-821d-92a1dffd7f1e',
            },
          }
        )
        .reply(
          200,
          JSON.stringify({
            dealReference: '54321',
          })
        );

      const deleteOrder = await global.client.rest.dealing.deleteOrder(dealId);
      expect(deleteOrder.dealReference).toBe('54321');
    });
  });

  describe('getSession', () => {
    it('returns the trading session', async () => {
      nock(APIClient.URL_DEMO)
        .get(LoginAPI.URL.SESSION + '?fetchSessionTokens=true')
        .reply(
          200,
          JSON.stringify({
            accountId: 'XYZ123',
            clientId: '1234567',
            currency: 'EUR',
            lightstreamerEndpoint: 'https://demo-apd.marketdatasystems.com',
            locale: 'de_DE',
            timezoneOffset: 1,
          })
        );

      const session = await global.client.rest.login.getSession();
      expect(session.accountId).toBe('XYZ123');
      expect(session.clientId).toBe('1234567');
      expect(session.timezoneOffset).toBe(1);
    });
  });

  describe('refreshSession', () => {
    it('refreshing a trading session', async () => {
      const dealId = '12345';

      nock(APIClient.URL_DEMO)
        .post(
          DealingAPI.URL.WORKINGORDERS_OTC + dealId,
          {},
          {
            reqheaders: {
              _method: 'DELETE',
            },
          }
        )
        .reply(
          401,
          JSON.stringify({
            errorCode: 'error.security.oauth-token-invalid',
          })
        );

      nock(APIClient.URL_DEMO)
        .post(LoginAPI.URL.REFRESH_TOKEN)
        .query(true)
        .reply(
          200,
          JSON.stringify({
            access_token: 'New-Access-Token',
            expires_in: '60',
            refresh_token: '83c056b8-1337-46d3-821d-92a1dffd7f1e',
            scope: 'profile',
            token_type: 'Bearer',
          })
        );

      nock(APIClient.URL_DEMO)
        .post(
          DealingAPI.URL.WORKINGORDERS_OTC + dealId,
          {},
          {
            reqheaders: {
              Authorization: 'Bearer New-Access-Token',
            },
          }
        )
        .reply(
          200,
          JSON.stringify({
            dealReference: '54321',
          })
        );

      const deleteOrder = await global.client.rest.dealing.deleteOrder(dealId);
      expect(deleteOrder.dealReference).toBe('54321');
    });
  });

  describe('logout', () => {
    it('sends a DELETE HTTP request to destroy the current session', async () => {
      nock(APIClient.URL_DEMO).delete(LoginAPI.URL.SESSION).reply(200);

      await global.client.rest.login.logout();
    });
  });
});
