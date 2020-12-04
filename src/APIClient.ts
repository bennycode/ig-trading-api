import {RESTClient} from './client/RESTClient';

export class APIClient {
  readonly rest: RESTClient;

  constructor(apiKey: string) {
    const url = 'https://api.ig.com/gateway/deal/';
    this.rest = new RESTClient(url, apiKey);
  }
}
