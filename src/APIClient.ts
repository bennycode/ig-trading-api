import {RESTClient} from './client/RESTClient';
import {LightstreamerAPI} from './lightstreamer';
export class APIClient {
  readonly rest: RESTClient;
  readonly stream: LightstreamerAPI;

  static URL_DEMO = 'https://demo-api.ig.com/gateway/deal/';
  static URL_LIVE = 'https://api.ig.com/gateway/deal/';

  constructor(baseUrl: string, apiKey: string) {
    this.rest = new RESTClient(baseUrl, apiKey);
    this.stream = new LightstreamerAPI(this.rest.auth);
  }
}
