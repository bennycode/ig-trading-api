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

  describe('getMarketCategories', () => {
    it('returns all top-level nodes (market categories) in the market navigation hierarchy', async () => {
      nock(APIClient.URL_DEMO)
        .get(MarketAPI.URL.MARKETNAVIGATION)
        .reply(
          200,
          JSON.stringify({
            markets: null,
            nodes: [
              {id: '404243', name: 'IPOs'},
              {id: '88877247', name: 'Shares - Euronext Dublin (Ireland)'},
              {id: '118179919', name: 'Shares - NZX (New Zealand)'},
              {id: '186563295', name: 'Weekend Markets'},
            ],
          })
        );

      const marketCategories = await global.client.rest.market.getMarketCategories();
      const marketNodes = marketCategories.nodes!;
      expect(marketNodes.length).toBe(4);
      expect(marketNodes[marketNodes.length - 1].name).toBe('Weekend Markets');
    });

    it('returns all sub-nodes of the given node in the market navigation hierarchy', async () => {
      const nodeId = '138425500';

      nock(APIClient.URL_DEMO)
        .get(`${MarketAPI.URL.MARKETNAVIGATION}/${nodeId}`)
        .reply(
          200,
          JSON.stringify({
            markets: [
              {
                bid: null,
                delayTime: 0,
                epic: 'EZ.D.WEWGREY.Month2.IP',
                expiry: 'DEC-20',
                high: 15.0,
                instrumentName: 'WeWork IPO Market Cap ($Bn)',
                instrumentType: 'SHARES',
                lotSize: 10,
                low: 14.0,
                marketStatus: 'TRADEABLE',
                netChange: 0.0,
                offer: null,
                otcTradeable: true,
                percentageChange: 0.0,
                scalingFactor: 1,
                streamingPricesAvailable: true,
                updateTime: '-3600000',
                updateTimeUTC: '00:00:00',
              },
            ],
            nodes: null,
          })
        );

      const marketCategories = await global.client.rest.market.getMarketCategories(nodeId);
      expect(marketCategories.nodes).toBeNull();
      expect(marketCategories.markets![0].marketStatus).toBe('TRADEABLE');
    });
  });

  describe('getMarketDetails', () => {
    it('returns the details of the given market', async () => {
      const epic = 'IX.D.FTSE.CFD.IP';

      nock(APIClient.URL_DEMO)
        .get(`${MarketAPI.URL.MARKETS}/${epic}`)
        .reply(
          200,
          JSON.stringify({
            dealingRules: {
              marketOrderPreference: 'AVAILABLE_DEFAULT_OFF',
              maxStopOrLimitDistance: {
                unit: 'PERCENTAGE',
                value: 75,
              },
              minControlledRiskStopDistance: {
                unit: 'POINTS',
                value: 8,
              },
              minDealSize: {
                unit: 'POINTS',
                value: 0.25,
              },
              minNormalStopOrLimitDistance: {
                unit: 'POINTS',
                value: 8,
              },
              minStepDistance: {
                unit: 'POINTS',
                value: 1,
              },
              trailingStopsPreference: 'AVAILABLE',
            },
            instrument: {
              chartCode: 'UKX',
              contractSize: '10',
              controlledRiskAllowed: true,
              country: 'GB',
              currencies: [
                {
                  baseExchangeRate: 0.9064129,
                  code: 'GBP',
                  exchangeRate: 1,
                  isDefault: false,
                  symbol: '£',
                },
              ],
              epic: 'IX.D.FTSE.CFD.IP',
              expiry: '-',
              expiryDetails: null,
              forceOpenAllowed: true,
              limitedRiskPremium: {
                unit: 'POINTS',
                value: 1,
              },
              lotSize: 10,
              marginDepositBands: [
                {
                  currency: 'GBP',
                  margin: 5,
                  max: 15,
                  min: 0,
                },
                {
                  currency: 'GBP',
                  margin: 5,
                  max: 150,
                  min: 15,
                },
                {
                  currency: 'GBP',
                  margin: 5,
                  max: 225,
                  min: 150,
                },
                {
                  currency: 'GBP',
                  margin: 15,
                  max: null,
                  min: 225,
                },
              ],
              marginFactor: 5,
              marginFactorUnit: 'PERCENTAGE',
              marketId: 'FT100',
              name: 'FTSE 100 Kassa (10£)',
              newsCode: '.FTSE',
              onePipMeans: '1 Index Point',
              openingHours: null,
              rolloverDetails: null,
              slippageFactor: {
                unit: 'pct',
                value: 50,
              },
              specialInfo: [
                'MIN KNOCK OUT LEVEL DISTANCE',
                'MAX KNOCK OUT LEVEL DISTANCE',
                'DEFAULT KNOCK OUT LEVEL DISTANCE',
                '24-Std. notiert- zugrunde liegender Markt handelt von 08:00 - 16:35 Mittlere Greenwich Zeit (MGZ)',
              ],
              sprintMarketsMaximumExpiryTime: null,
              sprintMarketsMinimumExpiryTime: null,
              stopsLimitsAllowed: true,
              streamingPricesAvailable: true,
              type: 'INDICES',
              unit: 'CONTRACTS',
              valueOfOnePip: '10.00',
            },
            snapshot: {
              bid: 6524.8,
              binaryOdds: null,
              controlledRiskExtraSpread: 1,
              decimalPlacesFactor: 1,
              delayTime: 0,
              high: 6567.3,
              low: 6517,
              marketStatus: 'TRADEABLE',
              netChange: -33.3,
              offer: 6528.8,
              percentageChange: -0.51,
              scalingFactor: 1,
              updateTime: '23:05:06',
            },
          })
        );

      const marketDetails = await global.client.rest.market.getMarketDetails(epic);
      expect(marketDetails.snapshot.bid).toBe(6524.8);
    });

    it('returns the details of multiple given markets', async () => {
      const epics = ['IX.D.FTSE.CFD.IP', 'SE.D.PFE.CASH.IP'];

      nock(APIClient.URL_DEMO)
        .get(`${MarketAPI.URL.MARKETS}?epics=${encodeURIComponent(epics.join(','))}`)
        .reply(
          200,
          JSON.stringify({
            marketDetails: [
              {
                dealingRules: {
                  marketOrderPreference: 'AVAILABLE_DEFAULT_OFF',
                  maxStopOrLimitDistance: {
                    unit: 'PERCENTAGE',
                    value: 75,
                  },
                  minControlledRiskStopDistance: {
                    unit: 'PERCENTAGE',
                    value: 2,
                  },
                  minDealSize: {
                    unit: 'POINTS',
                    value: 0.25,
                  },
                  minNormalStopOrLimitDistance: {
                    unit: 'POINTS',
                    value: 8,
                  },
                  minStepDistance: {
                    unit: 'POINTS',
                    value: 1,
                  },
                  trailingStopsPreference: 'AVAILABLE',
                },
                instrument: {
                  chartCode: 'UKX',
                  contractSize: '10',
                  controlledRiskAllowed: true,
                  country: 'GB',
                  currencies: [
                    {
                      baseExchangeRate: 0.90695953,
                      code: 'GBP',
                      exchangeRate: 1,
                      isDefault: false,
                      symbol: '£',
                    },
                  ],
                  epic: 'IX.D.FTSE.CFD.IP',
                  expiry: '-',
                  expiryDetails: null,
                  forceOpenAllowed: true,
                  limitedRiskPremium: {
                    unit: 'POINTS',
                    value: 1,
                  },
                  lotSize: 10,
                  marginDepositBands: [
                    {
                      currency: 'GBP',
                      margin: 5,
                      max: 15,
                      min: 0,
                    },
                    {
                      currency: 'GBP',
                      margin: 5,
                      max: 150,
                      min: 15,
                    },
                    {
                      currency: 'GBP',
                      margin: 5,
                      max: 225,
                      min: 150,
                    },
                    {
                      currency: 'GBP',
                      margin: 15,
                      max: null,
                      min: 225,
                    },
                  ],
                  marginFactor: 5,
                  marginFactorUnit: 'PERCENTAGE',
                  marketId: 'FT100',
                  name: 'FTSE 100 Kassa (10£)',
                  newsCode: '.FTSE',
                  onePipMeans: '1 Index Point',
                  openingHours: null,
                  rolloverDetails: null,
                  slippageFactor: {
                    unit: 'pct',
                    value: 50,
                  },
                  specialInfo: [
                    'MIN KNOCK OUT LEVEL DISTANCE',
                    'MAX KNOCK OUT LEVEL DISTANCE',
                    'DEFAULT KNOCK OUT LEVEL DISTANCE',
                    '24-Std. notiert- zugrunde liegender Markt handelt von 08:00 - 16:35 Mittlere Greenwich Zeit (MGZ)',
                  ],
                  sprintMarketsMaximumExpiryTime: null,
                  sprintMarketsMinimumExpiryTime: null,
                  stopsLimitsAllowed: true,
                  streamingPricesAvailable: true,
                  type: 'INDICES',
                  unit: 'CONTRACTS',
                  valueOfOnePip: '10.00',
                },
                snapshot: {
                  bid: 6523.2,
                  binaryOdds: null,
                  controlledRiskExtraSpread: 1,
                  decimalPlacesFactor: 1,
                  delayTime: 0,
                  high: 6567.3,
                  low: 6517,
                  marketStatus: 'TRADEABLE',
                  netChange: -34.9,
                  offer: 6527.2,
                  percentageChange: -0.53,
                  scalingFactor: 1,
                  updateTime: '23:25:45',
                },
              },
              {
                dealingRules: {
                  marketOrderPreference: 'AVAILABLE_DEFAULT_OFF',
                  maxStopOrLimitDistance: {
                    unit: 'PERCENTAGE',
                    value: 90,
                  },
                  minControlledRiskStopDistance: {
                    unit: 'PERCENTAGE',
                    value: 20,
                  },
                  minDealSize: {
                    unit: 'POINTS',
                    value: 1,
                  },
                  minNormalStopOrLimitDistance: {
                    unit: 'POINTS',
                    value: 10,
                  },
                  minStepDistance: {
                    unit: 'POINTS',
                    value: 1,
                  },
                  trailingStopsPreference: 'AVAILABLE',
                },
                instrument: {
                  chartCode: 'PFE',
                  contractSize: null,
                  controlledRiskAllowed: true,
                  country: 'US',
                  currencies: [
                    {
                      baseExchangeRate: 1.211207,
                      code: 'USD',
                      exchangeRate: 0.77,
                      isDefault: false,
                      symbol: '$',
                    },
                  ],
                  epic: 'SE.D.PFE.CASH.IP',
                  expiry: '-',
                  expiryDetails: null,
                  forceOpenAllowed: true,
                  limitedRiskPremium: {
                    unit: 'PERCENTAGE',
                    value: 1,
                  },
                  lotSize: 0.01,
                  marginDepositBands: [
                    {
                      currency: 'USD',
                      margin: 20,
                      max: 51200,
                      min: 0,
                    },
                    {
                      currency: 'USD',
                      margin: 20,
                      max: 256000,
                      min: 51200,
                    },
                    {
                      currency: 'USD',
                      margin: 40,
                      max: 1024000,
                      min: 256000,
                    },
                    {
                      currency: 'USD',
                      margin: 75,
                      max: null,
                      min: 1024000,
                    },
                  ],
                  marginFactor: 20,
                  marginFactorUnit: 'PERCENTAGE',
                  marketId: 'PFE-US',
                  name: 'Pfizer Inc (All Sessions)',
                  newsCode: 'PFE.N',
                  onePipMeans: null,
                  openingHours: {
                    marketTimes: [
                      {
                        closeTime: '01:00',
                        openTime: '09:00',
                      },
                    ],
                  },
                  rolloverDetails: null,
                  slippageFactor: {
                    unit: 'pct',
                    value: 100,
                  },
                  specialInfo: [
                    'MAX KNOCK OUT LEVEL DISTANCE',
                    'DEFAULT KNOCK OUT LEVEL DISTANCE',
                    'Please note US (All Sessions) shares close early at 22:00 UK time on Friday evenings.',
                  ],
                  sprintMarketsMaximumExpiryTime: null,
                  sprintMarketsMinimumExpiryTime: null,
                  stopsLimitsAllowed: true,
                  streamingPricesAvailable: false,
                  type: 'SHARES',
                  unit: 'SHARES',
                  valueOfOnePip: null,
                },
                snapshot: {
                  bid: null,
                  binaryOdds: null,
                  controlledRiskExtraSpread: 0,
                  decimalPlacesFactor: 4,
                  delayTime: 0,
                  high: 41.4,
                  low: 40.34,
                  marketStatus: 'TRADEABLE',
                  netChange: 1.01,
                  offer: null,
                  percentageChange: 2.5,
                  scalingFactor: 100,
                  updateTime: '23:25:13',
                },
              },
            ],
          })
        );

      const {marketDetails} = await global.client.rest.market.getMarketDetails(epics);
      expect(marketDetails[1].snapshot.high).toBe(41.4);
    });
  });
});
