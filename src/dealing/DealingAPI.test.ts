import nock from 'nock';
import {APIClient} from '../APIClient';
import {
  DealingAPI,
  PositionCreateRequest,
  PositionCloseRequest,
  PositionUpdateRequest,
  DealReferenceResponse,
  OrderCreateRequest,
  OrderUpdateRequest,
  Direction,
  PositionOrderType,
  DealStatus,
  AffectedDealStatus,
  OrderTimeInForce,
  OrderType,
} from './DealingAPI';

describe('DealingAPI', () => {
  describe('getAllOpenPositions', () => {
    it('returns all open positions', async () => {
      nock(APIClient.URL_DEMO)
        .get(DealingAPI.URL.POSITIONS)
        .reply(
          200,
          JSON.stringify({
            positions: [
              {
                market: {
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
                position: {
                  contractSize: 1,
                  controlledRisk: false,
                  createdDate: Date(),
                  createdDateUTC: Date(),
                  currency: 'EUR',
                  dealId: '12345',
                  dealReference: '54321',
                  direction: 'BUY',
                  level: 20.0,
                  limitLevel: null,
                  size: 1,
                  stopLevel: null,
                  trailingStep: null,
                  trailingStopDistance: null,
                },
              },
            ],
          })
        );
      const getPositions = await global.client.rest.dealing.getAllOpenPositions();
      expect(getPositions.positions.length).toBe(1);
      expect(getPositions.positions[0].market.epic).toBe('SE.D.PFE.CASH.IP');
      expect(getPositions.positions[0].position.dealReference).toBe('54321');
    });
  });

  describe('getPosition', () => {
    it('returns an open position', async () => {
      nock(APIClient.URL_DEMO)
        .get(DealingAPI.URL.POSITIONS + '12345')
        .reply(
          200,
          JSON.stringify({
            contractSize: 1,
            controlledRisk: false,
            createdDate: Date(),
            createdDateUTC: Date(),
            currency: 'EUR',
            dealId: '12345',
            dealReference: '54321',
            direction: 'BUY',
            level: 20.0,
            limitLevel: null,
            size: 1,
            stopLevel: null,
            trailingStep: null,
            trailingStopDistance: null,
          })
        );
      const getPosition = await global.client.rest.dealing.getPosition('12345');
      expect(getPosition.dealId).toBe('12345');
      expect(getPosition.dealReference).toBe('54321');
      expect(getPosition.level).toBe(20.0);
    });
  });

  describe('createPosition', () => {
    it('creates a position', async () => {
      const createPositionRequest: PositionCreateRequest = {
        currencyCode: 'USD',
        direction: Direction.BUY,
        epic: 'UD.D.TSLA.CASH.IP',
        expiry: '-',
        forceOpen: true,
        guaranteedStop: false,
        level: 900.4,
        orderType: PositionOrderType.LIMIT,
        size: 1,
      };

      nock(APIClient.URL_DEMO)
        .post(DealingAPI.URL.POSITIONS_OTC, {
          currencyCode: 'USD',
          direction: 'BUY',
          epic: 'UD.D.TSLA.CASH.IP',
          expiry: '-',
          forceOpen: true,
          guaranteedStop: false,
          level: 900.4,
          orderType: 'LIMIT',
          size: 1,
        })
        .reply(
          200,
          JSON.stringify({
            dealReference: '54321',
          })
        );
      const createPosition = await global.client.rest.dealing.createPosition(createPositionRequest);
      expect(createPosition.dealReference).toBe('54321');
    });
  });

  describe('closePosition', () => {
    it('closes a position', async () => {
      const closePositionRequest: PositionCloseRequest = {
        dealId: '12345',
        direction: Direction.SELL,
        expiry: '-',
        level: 860.4,
        orderType: PositionOrderType.LIMIT,
        size: 1,
      };

      nock(APIClient.URL_DEMO)
        .post(
          DealingAPI.URL.POSITIONS_OTC,
          {
            dealId: '12345',
            direction: 'SELL',
            expiry: '-',
            level: 860.4,
            orderType: 'LIMIT',
            size: 1,
          },
          {
            reqheaders: {
              _method: 'DELETE',
            },
          }
        )
        .reply(
          200,
          JSON.stringify({
            dealReference: '54321',
          })
        );
      const closePosition = await global.client.rest.dealing.closePosition(closePositionRequest);
      expect(closePosition.dealReference).toBe('54321');
    });
  });

  describe('updatePosition', () => {
    it('updates a position', async () => {
      const updatePositionRequest: PositionUpdateRequest = {
        limitLevel: 950.4,
      };
      const dealId = '12345';

      nock(APIClient.URL_DEMO)
        .put(DealingAPI.URL.POSITIONS_OTC + dealId, {
          limitLevel: 950.4,
        })
        .reply(
          200,
          JSON.stringify({
            dealReference: '54321',
          })
        );
      const updatePosition = await global.client.rest.dealing.updatePosition(dealId, updatePositionRequest);
      expect(updatePosition.dealReference).toBe('54321');
    });
  });

  describe('confirmTrade', () => {
    it('confirms a trade', async () => {
      const dealReference: DealReferenceResponse = {
        dealReference: '54321',
      };

      nock(APIClient.URL_DEMO)
        .get(DealingAPI.URL.CONFIRMS + dealReference.dealReference)
        .reply(
          200,
          JSON.stringify({
            affectedDeals: [
              {
                dealId: '12345',
                status: 'OPENED',
              },
            ],
            date: Date(),
            dealId: '12345',
            dealReference: '54321',
            dealStatus: 'ACCEPTED',
            direction: 'BUY',
            epic: 'UD.D.TSLA.CASH.IP',
            expiry: '-',
            guaranteedStop: false,
            level: 900.4,
            limitDistance: null,
            limitLevel: null,
            profit: null,
            profitCurrency: 'USD',
            reason: 'Some reason',
            size: 1,
            status: 'OPEN',
            stopDistance: null,
            stopLevel: null,
            trailingStop: false,
          })
        );

      const confirmedPosition = await global.client.rest.dealing.confirmTrade(dealReference);
      expect(confirmedPosition.dealId).toBe('12345');
      expect(confirmedPosition.dealStatus).toBe(DealStatus.ACCEPTED);
      expect(confirmedPosition.epic).toBe('UD.D.TSLA.CASH.IP');
      expect(confirmedPosition.level).toBe(900.4);
      expect(confirmedPosition.affectedDeals[0].status).toBe(AffectedDealStatus.OPENED);
    });
  });

  describe('getAllOrders', () => {
    it('gets all orders', async () => {
      nock(APIClient.URL_DEMO)
        .get(DealingAPI.URL.WORKINGORDERS)
        .reply(
          200,
          JSON.stringify({
            workingOrders: [
              {
                marketData: {
                  bid: null,
                  delayTime: 0,
                  epic: 'UD.D.TSLA.CASH.IP',
                  expiry: '-',
                  high: 40.49,
                  instrumentName: 'Tesla Inc',
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
                workingOrderData: {
                  createdDate: Date(),
                  createdDateUTC: Date(),
                  currencyCode: 'USD',
                  dealId: '12345',
                  direction: 'BUY',
                  dma: false,
                  epic: 'UD.D.TSLA.CASH.IP',
                  goodTillDate: null,
                  goodTillDateISO: null,
                  guaranteedStop: false,
                  limitDistance: 2000,
                  orderLevel: false,
                  orderSize: 1,
                  orderType: 'LIMIT',
                  stopDistance: 1000,
                  timeInForce: 'GOOD_TILL_CANCELLED',
                },
              },
            ],
          })
        );

      const getOrders = await global.client.rest.dealing.getAllOrders();
      expect(getOrders.workingOrders[0].workingOrderData.dealId).toBe('12345');
      expect(getOrders.workingOrders[0].workingOrderData.epic).toBe('UD.D.TSLA.CASH.IP');
      expect(getOrders.workingOrders[0].marketData.epic).toBe('UD.D.TSLA.CASH.IP');
    });
  });

  describe('createOrder', () => {
    it('creates an order', async () => {
      const createOrderRequest: OrderCreateRequest = {
        currencyCode: 'USD',
        direction: Direction.BUY,
        epic: 'UD.D.TSLA.CASH.IP',
        expiry: '-',
        forceOpen: true,
        guaranteedStop: false,
        level: 811.4,
        size: 1,
        timeInForce: OrderTimeInForce.GOOD_TILL_CANCELLED,
        type: OrderType.LIMIT,
      };

      nock(APIClient.URL_DEMO)
        .post(DealingAPI.URL.WORKINGORDERS_OTC, {
          currencyCode: 'USD',
          direction: 'BUY',
          epic: 'UD.D.TSLA.CASH.IP',
          expiry: '-',
          forceOpen: true,
          guaranteedStop: false,
          level: 811.4,
          size: 1,
          timeInForce: 'GOOD_TILL_CANCELLED',
          type: 'LIMIT',
        })
        .reply(
          200,
          JSON.stringify({
            dealReference: '54321',
          })
        );

      const createOrder = await global.client.rest.dealing.createOrder(createOrderRequest);
      expect(createOrder.dealReference).toBe('54321');
    });
  });

  describe('deleteOrder', () => {
    it('closes an order', async () => {
      const dealId = '12345';

      nock(APIClient.URL_DEMO)
        .post(
          DealingAPI.URL.WORKINGORDERS_OTC + dealId,
          {},
          {
            reqheaders: {
              _method: 'DELETE',
            },
          }
        )
        .reply(
          200,
          JSON.stringify({
            dealReference: '54321',
          })
        );

      const deleteOrder = await global.client.rest.dealing.deleteOrder(dealId);
      expect(deleteOrder.dealReference).toBe('54321');
    });
  });

  describe('updateOrder', () => {
    it('updates an order', async () => {
      const dealId = '12345';
      const updateOrderRequest: OrderUpdateRequest = {
        level: 519.1,
        timeInForce: OrderTimeInForce.GOOD_TILL_CANCELLED,
        type: OrderType.LIMIT,
      };

      nock(APIClient.URL_DEMO)
        .put(DealingAPI.URL.WORKINGORDERS_OTC + dealId, {
          level: 519.1,
          timeInForce: 'GOOD_TILL_CANCELLED',
          type: 'LIMIT',
        })
        .reply(
          200,
          JSON.stringify({
            dealReference: '54321',
          })
        );

      const updateOrder = await global.client.rest.dealing.updateOrder(dealId, updateOrderRequest);
      expect(updateOrder.dealReference).toBe('54321');
    });
  });

  describe('failedDelete', () => {
    it('fails to delete an order', async () => {
      const dealId = '12345';

      nock(APIClient.URL_DEMO)
        .post(
          DealingAPI.URL.WORKINGORDERS_OTC + dealId,
          {},
          {
            reqheaders: {
              _method: 'DELETE',
            },
          }
        )
        .reply(403);

      global.client.rest.defaults['axios-retry'] = {
        retries: 1,
      };
      await expectAsync(global.client.rest.dealing.deleteOrder(dealId)).toBeRejected();
    });
  });
});
