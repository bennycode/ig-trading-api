import {APIClient} from '../../APIClient';
import nock from 'nock';

declare global {
  var client: APIClient;
}

beforeEach(() => {
  global.client = new APIClient(APIClient.URL_DEMO, 'global-demo-api-key');
});

afterEach(() => nock.cleanAll());
