import nock from 'nock';
import {APIClient} from '../APIClient';
import {AccountAPI, TransactionHistoryRequest, ActivityHistoryRequest} from './AccountAPI';

describe('AccountAPI', () => {
  describe('getTransactionHistory', () => {
    it('returns the transaction history', async () => {
      const transactionHistoryRequest: TransactionHistoryRequest = {
        maxSpanSeconds: 100000000,
      };

      nock(APIClient.URL_DEMO)
        .get(AccountAPI.URL.HISTORY_TRANSACTIONS + '?maxSpanSeconds=' + transactionHistoryRequest.maxSpanSeconds)
        .reply(
          200,
          JSON.stringify({
            metadata: {
              pageData: {
                pageNumber: 1,
                pageSize: 20,
                totalPages: 1,
              },
              size: 2,
            },
            transactions: [
              {
                cashTransaction: false,
                closeLevel: '31578.1',
                currency: 'E',
                date: '2021-01-28',
                dateUtc: '2021-01-28T06:55:35',
                instrumentName: 'Bitcoin (E1)',
                openDateUtc: '2021-01-28T06:13:45',
                openLevel: '31897.1',
                period: '-',
                profitAndLoss: 'E-63.80',
                reference: '4FUBFVBB',
                size: '+0.20',
                transactionType: 'TRADE',
              },
              {
                cashTransaction: false,
                closeLevel: '0',
                currency: 'E',
                date: '2021-01-28',
                dateUtc: '2021-01-28T02:37:44',
                instrumentName: 'Long-Zinsen für US/Kanad. Aktien 27/01/21 $. umgerechnet bei 0,8314',
                openDateUtc: '2021-01-28T02:37:44',
                openLevel: '-',
                period: '-',
                profitAndLoss: 'E-0.15',
                reference: '23146230',
                size: '-',
                transactionType: 'WITH',
              },
            ],
          })
        );

      const getTransactionHistory = await global.client.rest.account.getTransactionHistory(transactionHistoryRequest);
      expect(getTransactionHistory.metadata.size).toBe(2);
      expect(getTransactionHistory.transactions[0].instrumentName).toBe('Bitcoin (E1)');
      expect(getTransactionHistory.transactions[0].reference).toBe('4FUBFVBB');
    });
  });

  describe('getActivityHistory', () => {
    it('returns the activity history', async () => {
      const activityHistoryRequest: ActivityHistoryRequest = {
        detailed: true,
        from: '2021-01-01T00:00:00',
        to: '2021-01-28T00:00:00',
      };

      nock(APIClient.URL_DEMO)
        .get(
          AccountAPI.URL.HISTORY_ACTIVITY +
            '?from=' +
            activityHistoryRequest.from +
            '&to=' +
            activityHistoryRequest.to +
            '&detailed=' +
            activityHistoryRequest.detailed
        )
        .reply(
          200,
          JSON.stringify({
            activities: [
              {
                channel: 'PUBLIC_WEB_API',
                date: '2021-01-27T11:10:59',
                dealId: 'DIAAAAE39UG9VA6',
                description: 'Position eröffnet: 39UG9VA6',
                details: {
                  actions: [
                    {
                      actionType: 'POSITION_OPENED',
                      affectedDealId: 'DIAAAAE39UG9VA6',
                    },
                  ],
                  currency: 'USD',
                  dealReference: 'MGSTPB4KFN744S3',
                  direction: 'BUY',
                  goodTillDate: null,
                  guaranteedStop: false,
                  level: 886.05,
                  limitDistance: null,
                  limitLevel: null,
                  marketName: 'Tesla Motors Inc (All Sessions)',
                  size: 1,
                  stopDistance: null,
                  stopLevel: null,
                  trailingStep: null,
                  trailingStopDistance: null,
                },
                epic: 'UD.D.TSLA.CASH.IP',
                period: '-',
                status: 'ACCEPTED',
                type: 'POSITION',
              },
            ],
            metadata: {
              paging: {
                next: null,
                size: 1,
              },
            },
          })
        );

      const getActivityHistory = await global.client.rest.account.getActivityHistory(activityHistoryRequest);
      expect(getActivityHistory.metadata.paging.size).toBe(1);
      expect(getActivityHistory.activities[0].epic).toBe('UD.D.TSLA.CASH.IP');
      expect(getActivityHistory.activities[0].details?.actions[0].affectedDealId).toBe('DIAAAAE39UG9VA6');
    });
  });
});
