import nock from 'nock';
import {APIClient} from '../APIClient';
import {MarketAPI} from './MarketAPI';

describe('MarketAPI', () => {
  describe('searchMarkets', () => {
    it('returns all markets matching the search term', async () => {
      nock(APIClient.URL_DEMO)
        .get(MarketAPI.URL.MARKETS)
        .query({searchTerm: 'PFE'})
        .reply(
          200,
          JSON.stringify({
            markets: [
              {
                bid: null,
                delayTime: 0,
                epic: 'SE.D.PFE.CASH.IP',
                expiry: '-',
                high: 40.49,
                instrumentName: 'Pfizer Inc (All Sessions)',
                instrumentType: 'SHARES',
                low: 38.24,
                marketStatus: 'EDITS_ONLY',
                netChange: 0.18,
                offer: null,
                percentageChange: 0.45,
                scalingFactor: 100,
                streamingPricesAvailable: false,
                updateTime: '22:59:58',
                updateTimeUTC: '21:59:58',
              },
              {
                bid: null,
                delayTime: 0,
                epic: 'SI.D.PFNXUS.CASH.IP',
                expiry: '-',
                high: null,
                instrumentName: 'Pfenex Inc',
                instrumentType: 'SHARES',
                low: null,
                marketStatus: 'CLOSED',
                netChange: 0,
                offer: null,
                percentageChange: 0,
                scalingFactor: 100,
                streamingPricesAvailable: false,
                updateTime: '15:30:00',
                updateTimeUTC: '14:30:00',
              },
              {
                bid: null,
                delayTime: 0,
                epic: 'ED.D.PFVGY.CASH.IP',
                expiry: '-',
                high: 157,
                instrumentName: 'Pfeiffer Vacuum Technology AG',
                instrumentType: 'SHARES',
                low: 152.4,
                marketStatus: 'EDITS_ONLY',
                netChange: 2.6,
                offer: null,
                percentageChange: 1.69,
                scalingFactor: 100,
                streamingPricesAvailable: false,
                updateTime: '17:30:00',
                updateTimeUTC: '16:30:00',
              },
            ],
          })
        );

      const marketSearch = await global.client.rest.market.searchMarkets('PFE');
      expect(marketSearch.markets.length).toBe(3);
      expect(marketSearch.markets[0].epic).toBe('SE.D.PFE.CASH.IP');
      expect(marketSearch.markets[2].updateTimeUTC).toBe('16:30:00');
    });
  });
});
