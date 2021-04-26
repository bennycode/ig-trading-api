import {RESTClient} from '.';
import {APIClient} from '../APIClient';
import nock from 'nock';
import {LoginAPI} from '../login';
import {AxiosRequestConfig} from 'axios';

describe('RESTClient', () => {
  function createRESTClient(): RESTClient {
    return new RESTClient(APIClient.URL_DEMO, '');
  }

  describe('defaults', () => {
    it('supports overriding the timeout limit', () => {
      const rest = createRESTClient();
      rest.defaults.timeout = 2500;
      expect(rest.defaults.timeout).toBe(2500);
    });
  });

  describe('interceptors', () => {
    beforeAll(() => {
      nock(APIClient.URL_DEMO)
        .persist()
        .defaultReplyHeaders({
          CST: 'test',
          'X-SECURITY-TOKEN': 'test',
        })
        .get(LoginAPI.URL.SESSION + '?fetchSessionTokens=true')
        .reply(200, JSON.stringify({}));

      nock(APIClient.URL_DEMO)
        .persist()
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
    });

    it('supports custom HTTP interceptors', async () => {
      const rest = createRESTClient();

      const onRequest = jasmine.createSpy('onRequest').and.callFake((config: AxiosRequestConfig) => config);

      const myInterceptor = rest.interceptors.request.use(onRequest);
      await rest.login.createSession('test-user', 'test-password');
      expect(onRequest).toHaveBeenCalledTimes(2);

      rest.interceptors.request.eject(myInterceptor);
      await rest.login.createSession('test-user', 'test-password');
      expect(onRequest).toHaveBeenCalledTimes(2);
    });
  });
});
