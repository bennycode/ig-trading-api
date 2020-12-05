import {RESTClient} from './client/RESTClient';

export class APIClient {
  readonly rest: RESTClient;

  static URL_DEMO = 'https://demo-api.ig.com/gateway/deal/';
  static URL_LIVE = 'https://api.ig.com/gateway/deal/';

  constructor(baseUrl: string, apiKey: string) {
    this.rest = new RESTClient(baseUrl, apiKey);
  }
}
