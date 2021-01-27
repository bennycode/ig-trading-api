import nock from 'nock';
import {APIClient} from '../../APIClient';
import {InstrumentType} from '../MarketAPI';
import {PriceAPI, Resolution} from './PriceAPI';

describe('PricesAPI', () => {
  describe('getPrices', () => {
    it('returns the number of price points from now', async () => {
      const expectedPrices = [
        {
          closePrice: {ask: 13664.7, bid: 13663.8, lastTraded: null},
          highPrice: {ask: 13678.1, bid: 13676.8, lastTraded: null},
          lastTradedVolume: 16435,
          lowPrice: {ask: 13661, bid: 13659.5, lastTraded: null},
          openPrice: {ask: 13677.6, bid: 13676.1, lastTraded: null},
          snapshotTime: '2021/01/26 00:00:00',
          snapshotTimeUTC: '2021-01-26T00:00:00',
        },
        {
          closePrice: {ask: 13613, bid: 13611.5, lastTraded: null},
          highPrice: {ask: 13667.1, bid: 13666, lastTraded: null},
          lastTradedVolume: 22061,
          lowPrice: {ask: 13610.1, bid: 13609.2, lastTraded: null},
          openPrice: {ask: 13664.6, bid: 13663.7, lastTraded: null},
          snapshotTime: '2021/01/26 04:00:00',
          snapshotTimeUTC: '2021-01-26T04:00:00',
        },
        {
          closePrice: {ask: 13675.6, bid: 13674.1, lastTraded: null},
          highPrice: {ask: 13677.1, bid: 13676.2, lastTraded: null},
          lastTradedVolume: 29631,
          lowPrice: {ask: 13611.8, bid: 13610.5, lastTraded: null},
          openPrice: {ask: 13612.7, bid: 13611.8, lastTraded: null},
          snapshotTime: '2021/01/26 08:00:00',
          snapshotTimeUTC: '2021-01-26T08:00:00',
        },
        {
          closePrice: {ask: 13742.4, bid: 13741.5, lastTraded: null},
          highPrice: {ask: 13745, bid: 13744, lastTraded: null},
          lastTradedVolume: 31848,
          lowPrice: {ask: 13671.4, bid: 13670.5, lastTraded: null},
          openPrice: {ask: 13676.1, bid: 13675.2, lastTraded: null},
          snapshotTime: '2021/01/26 12:00:00',
          snapshotTimeUTC: '2021-01-26T12:00:00',
        },
        {
          closePrice: {ask: 13732.3, bid: 13731.4, lastTraded: null},
          highPrice: {ask: 13743.8, bid: 13742.9, lastTraded: null},
          lastTradedVolume: 12235,
          lowPrice: {ask: 13718.4, bid: 13717.5, lastTraded: null},
          openPrice: {ask: 13742.3, bid: 13741.4, lastTraded: null},
          snapshotTime: '2021/01/26 16:00:00',
          snapshotTimeUTC: '2021-01-26T16:00:00',
        },
      ];

      nock(APIClient.URL_DEMO)
        .get(`${PriceAPI.URL.PRICES}/CS.D.GBPUSD.TODAY.IP?max=5&pageNumber=1&pageSize=0&resolution=HOUR_4`)
        .reply(
          200,
          JSON.stringify({
            instrumentType: InstrumentType.CURRENCIES,
            metadata: {
              allowance: {allowanceExpiry: 524060, remainingAllowance: 9945, totalAllowance: 10000},
              pageData: {pageNumber: 1, pageSize: 20, totalPages: 1},
              size: 5,
            },
            prices: expectedPrices,
          })
        );

      const getPrices = await global.client.rest.market.price.getPrices('CS.D.GBPUSD.TODAY.IP', Resolution.HOUR_4, 5);
      expect(getPrices.prices.length).toBe(expectedPrices.length);
      expect(getPrices.instrumentType).toBe(InstrumentType.CURRENCIES);
    });
  });
  describe('getPricesBetweenDates', () => {
    it('returns prices between given dates', async () => {
      const expectedPrices = [
        {
          closePrice: {ask: 13682.9, bid: 13681.4, lastTraded: null},
          highPrice: {ask: 13698.9, bid: 13697.4, lastTraded: null},
          lastTradedVolume: 22064,
          lowPrice: {ask: 13675.3, bid: 13674.1, lastTraded: null},
          openPrice: {ask: 13684, bid: 13681.9, lastTraded: null},
          snapshotTime: '2021/01/15 00:00:00',
          snapshotTimeUTC: '2021-01-15T00:00:00',
        },
        {
          closePrice: {ask: 13663.3, bid: 13662.4, lastTraded: null},
          highPrice: {ask: 13685.3, bid: 13684.3, lastTraded: null},
          lastTradedVolume: 24315,
          lowPrice: {ask: 13658.4, bid: 13657, lastTraded: null},
          openPrice: {ask: 13682.8, bid: 13681.3, lastTraded: null},
          snapshotTime: '2021/01/15 04:00:00',
          snapshotTimeUTC: '2021-01-15T04:00:00',
        },
        {
          closePrice: {ask: 13639.8, bid: 13638.9, lastTraded: null},
          highPrice: {ask: 13670.6, bid: 13669.7, lastTraded: null},
          lastTradedVolume: 32672,
          lowPrice: {ask: 13637.9, bid: 13636.9, lastTraded: null},
          openPrice: {ask: 13663.2, bid: 13662.3, lastTraded: null},
          snapshotTime: '2021/01/15 08:00:00',
          snapshotTimeUTC: '2021-01-15T08:00:00',
        },
        {
          closePrice: {ask: 13584.4, bid: 13583.5, lastTraded: null},
          highPrice: {ask: 13642.2, bid: 13641.3, lastTraded: null},
          lastTradedVolume: 43169,
          lowPrice: {ask: 13572.7, bid: 13571.8, lastTraded: null},
          openPrice: {ask: 13639.3, bid: 13638.4, lastTraded: null},
          snapshotTime: '2021/01/15 12:00:00',
          snapshotTimeUTC: '2021-01-15T12:00:00',
        },
        {
          closePrice: {ask: 13580.7, bid: 13579.2, lastTraded: null},
          highPrice: {ask: 13607.1, bid: 13606.2, lastTraded: null},
          lastTradedVolume: 23937,
          lowPrice: {ask: 13575.1, bid: 13574.2, lastTraded: null},
          openPrice: {ask: 13584.5, bid: 13583.6, lastTraded: null},
          snapshotTime: '2021/01/15 16:00:00',
          snapshotTimeUTC: '2021-01-15T16:00:00',
        },
        {
          closePrice: {ask: 13592.1, bid: 13582.1, lastTraded: null},
          highPrice: {ask: 13596.3, bid: 13589.1, lastTraded: null},
          lastTradedVolume: 8749,
          lowPrice: {ask: 13576.3, bid: 13574.8, lastTraded: null},
          openPrice: {ask: 13580.6, bid: 13579.1, lastTraded: null},
          snapshotTime: '2021/01/15 20:00:00',
          snapshotTimeUTC: '2021-01-15T20:00:00',
        },
      ];

      nock(APIClient.URL_DEMO)
        .get(
          `${PriceAPI.URL.PRICES}/CS.D.GBPUSD.TODAY.IP?from=2021-01-15T00%3A00%3A00.000Z&pageNumber=1&pageSize=0&resolution=HOUR_4&to=2021-01-16T00%3A00%3A00.000Z`
        )
        .reply(
          200,
          JSON.stringify({
            instrumentType: InstrumentType.CURRENCIES,
            metadata: {
              allowance: {
                allowanceExpiry: 604799,
                remainingAllowance: 9994,
                totalAllowance: 10000,
              },
              pageData: {
                pageNumber: 1,
                pageSize: 6,
                totalPages: 1,
              },
              size: 6,
            },
            prices: expectedPrices,
          })
        );

      const getPricesBetweenDates = await global.client.rest.market.price.getPricesBetweenDates(
        'CS.D.GBPUSD.TODAY.IP',
        Resolution.HOUR_4,
        '2021-01-15T00:00:00.000Z',
        '2021-01-16T00:00:00.000Z'
      );

      expect(getPricesBetweenDates.prices.length).toBe(expectedPrices.length);
      expect(getPricesBetweenDates.instrumentType).toBe(InstrumentType.CURRENCIES);
    });
  });
});
