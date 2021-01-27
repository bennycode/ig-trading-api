import nock from 'nock';
import {APIClient} from '../../APIClient';
import {InstrumentType, PricesAPI, Resolution} from './PricesAPI';

describe('PricesAPI', () => {
  describe('getPrices', () => {
    it('returns n number of price points from now', async () => {
      const expectedPrices = [
        {
          closePrice: {bid: 13663.8, ask: 13664.7, lastTraded: null},
          highPrice: {bid: 13676.8, ask: 13678.1, lastTraded: null},
          lastTradedVolume: 16435,
          lowPrice: {bid: 13659.5, ask: 13661, lastTraded: null},
          openPrice: {bid: 13676.1, ask: 13677.6, lastTraded: null},
          snapshotTime: '2021/01/26 00:00:00',
          snapshotTimeUTC: '2021-01-26T00:00:00',
        },
        {
          closePrice: {bid: 13611.5, ask: 13613, lastTraded: null},
          highPrice: {bid: 13666, ask: 13667.1, lastTraded: null},
          lastTradedVolume: 22061,
          lowPrice: {bid: 13609.2, ask: 13610.1, lastTraded: null},
          openPrice: {bid: 13663.7, ask: 13664.6, lastTraded: null},
          snapshotTime: '2021/01/26 04:00:00',
          snapshotTimeUTC: '2021-01-26T04:00:00',
        },
        {
          closePrice: {bid: 13674.1, ask: 13675.6, lastTraded: null},
          highPrice: {bid: 13676.2, ask: 13677.1, lastTraded: null},
          lastTradedVolume: 29631,
          lowPrice: {bid: 13610.5, ask: 13611.8, lastTraded: null},
          openPrice: {bid: 13611.8, ask: 13612.7, lastTraded: null},
          snapshotTime: '2021/01/26 08:00:00',
          snapshotTimeUTC: '2021-01-26T08:00:00',
        },
        {
          closePrice: {bid: 13741.5, ask: 13742.4, lastTraded: null},
          highPrice: {bid: 13744, ask: 13745, lastTraded: null},
          lastTradedVolume: 31848,
          lowPrice: {bid: 13670.5, ask: 13671.4, lastTraded: null},
          openPrice: {bid: 13675.2, ask: 13676.1, lastTraded: null},
          snapshotTime: '2021/01/26 12:00:00',
          snapshotTimeUTC: '2021-01-26T12:00:00',
        },
        {
          closePrice: {bid: 13731.4, ask: 13732.3, lastTraded: null},
          highPrice: {bid: 13742.9, ask: 13743.8, lastTraded: null},
          lastTradedVolume: 12235,
          lowPrice: {bid: 13717.5, ask: 13718.4, lastTraded: null},
          openPrice: {bid: 13741.4, ask: 13742.3, lastTraded: null},
          snapshotTime: '2021/01/26 16:00:00',
          snapshotTimeUTC: '2021-01-26T16:00:00',
        },
      ];

      nock(APIClient.URL_DEMO)
        .get(`${PricesAPI.URL.PRICES}/CS.D.GBPUSD.TODAY.IP?max=5&pageNumber=1&pageSize=0&resolution=HOUR_4`)
        .reply(
          200,
          JSON.stringify({
            prices: expectedPrices,
            instrumentType: 'CURRENCIES',
            metadata: {
              allowance: {remainingAllowance: 9945, totalAllowance: 10000, allowanceExpiry: 524060},
              size: 5,
              pageData: {pageSize: 20, pageNumber: 1, totalPages: 1},
            },
          })
        );

      const getPrices = await global.client.rest.market.prices.getPrices('CS.D.GBPUSD.TODAY.IP', Resolution.HOUR_4, 5);
      expect(getPrices.prices.length).toBe(expectedPrices.length);
      expect(getPrices.instrumentType).toBe('CURRENCIES');
    });
  });
  describe('getPricesBetweenDates', () => {
    it('returns prices between given dates', async () => {
      const expectedPrices = [
        {
          closePrice: {bid: 13681.4, ask: 13682.9, lastTraded: null},
          highPrice: {bid: 13697.4, ask: 13698.9, lastTraded: null},
          lastTradedVolume: 22064,
          lowPrice: {bid: 13674.1, ask: 13675.3, lastTraded: null},
          openPrice: {bid: 13681.9, ask: 13684, lastTraded: null},
          snapshotTime: '2021/01/15 00:00:00',
          snapshotTimeUTC: '2021-01-15T00:00:00',
        },
        {
          closePrice: {bid: 13662.4, ask: 13663.3, lastTraded: null},
          highPrice: {bid: 13684.3, ask: 13685.3, lastTraded: null},
          lastTradedVolume: 24315,
          lowPrice: {bid: 13657, ask: 13658.4, lastTraded: null},
          openPrice: {bid: 13681.3, ask: 13682.8, lastTraded: null},
          snapshotTime: '2021/01/15 04:00:00',
          snapshotTimeUTC: '2021-01-15T04:00:00',
        },
        {
          closePrice: {bid: 13638.9, ask: 13639.8, lastTraded: null},
          highPrice: {bid: 13669.7, ask: 13670.6, lastTraded: null},
          lastTradedVolume: 32672,
          lowPrice: {bid: 13636.9, ask: 13637.9, lastTraded: null},
          openPrice: {bid: 13662.3, ask: 13663.2, lastTraded: null},
          snapshotTime: '2021/01/15 08:00:00',
          snapshotTimeUTC: '2021-01-15T08:00:00',
        },
        {
          closePrice: {bid: 13583.5, ask: 13584.4, lastTraded: null},
          highPrice: {bid: 13641.3, ask: 13642.2, lastTraded: null},
          lastTradedVolume: 43169,
          lowPrice: {bid: 13571.8, ask: 13572.7, lastTraded: null},
          openPrice: {bid: 13638.4, ask: 13639.3, lastTraded: null},
          snapshotTime: '2021/01/15 12:00:00',
          snapshotTimeUTC: '2021-01-15T12:00:00',
        },
        {
          closePrice: {bid: 13579.2, ask: 13580.7, lastTraded: null},
          highPrice: {bid: 13606.2, ask: 13607.1, lastTraded: null},
          lastTradedVolume: 23937,
          lowPrice: {bid: 13574.2, ask: 13575.1, lastTraded: null},
          openPrice: {bid: 13583.6, ask: 13584.5, lastTraded: null},
          snapshotTime: '2021/01/15 16:00:00',
          snapshotTimeUTC: '2021-01-15T16:00:00',
        },
        {
          closePrice: {bid: 13582.1, ask: 13592.1, lastTraded: null},
          highPrice: {bid: 13589.1, ask: 13596.3, lastTraded: null},
          lastTradedVolume: 8749,
          lowPrice: {bid: 13574.8, ask: 13576.3, lastTraded: null},
          openPrice: {bid: 13579.1, ask: 13580.6, lastTraded: null},
          snapshotTime: '2021/01/15 20:00:00',
          snapshotTimeUTC: '2021-01-15T20:00:00',
        },
      ];

      nock(APIClient.URL_DEMO)
        .get(
          `${PricesAPI.URL.PRICES}/CS.D.GBPUSD.TODAY.IP?from=2021-01-15T00%3A00%3A00.000Z&pageNumber=1&pageSize=0&resolution=HOUR_4&to=2021-01-16T00%3A00%3A00.000Z`
        )
        // .query(true)
        .reply(
          200,
          JSON.stringify({
            prices: expectedPrices,
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
          })
        );

      const getPricesBetweenDates = await global.client.rest.market.prices.getPricesBetweenDates(
        'CS.D.GBPUSD.TODAY.IP',
        Resolution.HOUR_4,
        new Date('2021-01-15T00:00:00'),
        new Date('2021-01-16T00:00:00')
      );

      expect(getPricesBetweenDates.prices.length).toBe(expectedPrices.length);
      expect(getPricesBetweenDates.instrumentType).toBe(InstrumentType.CURRENCIES);
    });
  });
});
