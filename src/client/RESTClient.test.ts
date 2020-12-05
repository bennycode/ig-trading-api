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
      expect(rest.defaults.timeout).toBe(5000);
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
        .post(LoginAPI.URL.SESSION)
        .query(true)
        .reply(200, JSON.stringify({}));
    });

    it('supports custom HTTP interceptors', async () => {
      const rest = createRESTClient();

      const onRequest = jasmine.createSpy('onRequest').and.callFake((config: AxiosRequestConfig) => config);

      const myInterceptor = rest.interceptors.request.use(onRequest);
      await rest.login.createSession('test-user', 'test-password');
      expect(onRequest).toHaveBeenCalledTimes(1);

      rest.interceptors.request.eject(myInterceptor);
      await rest.login.createSession('test-user', 'test-password');
      expect(onRequest).toHaveBeenCalledTimes(1);
    });
  });
});
