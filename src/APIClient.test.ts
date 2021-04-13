import {APIClient} from './APIClient';

describe('APIClient', () => {
  describe('constructor', () => {
    it('knows if it is running with a demo URL', () => {
      const apiClient = new APIClient(APIClient.URL_DEMO, '123');
      expect(apiClient.isLive).toBe(false);
    });

    it('knows if it is running with a production URL', () => {
      const apiClient = new APIClient(APIClient.URL_LIVE, '123');
      expect(apiClient.isLive).toBe(true);
    });
  });
});
