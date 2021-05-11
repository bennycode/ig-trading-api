import {APIClient} from '../../APIClient';
import nock from 'nock';

declare global {
  module NodeJS {
    interface Global {
      client: APIClient;
    }
  }
}

beforeEach(() => {
  global.client = new APIClient(APIClient.URL_DEMO, 'global-demo-api-key');
});

afterEach(() => nock.cleanAll());
