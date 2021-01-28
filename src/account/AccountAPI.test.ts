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
            transactions: [
              {
                date: '2021-01-28',
                dateUtc: '2021-01-28T06:55:35',
                openDateUtc: '2021-01-28T06:13:45',
                instrumentName: 'Bitcoin (E1)',
                period: '-',
                profitAndLoss: 'E-63.80',
                transactionType: 'TRADE',
                reference: '4FUBFVBB',
                openLevel: '31897.1',
                closeLevel: '31578.1',
                size: '+0.20',
                currency: 'E',
                cashTransaction: false,
              },
              {
                date: '2021-01-28',
                dateUtc: '2021-01-28T02:37:44',
                openDateUtc: '2021-01-28T02:37:44',
                instrumentName: 'Long-Zinsen für US/Kanad. Aktien 27/01/21 $. umgerechnet bei 0,8314',
                period: '-',
                profitAndLoss: 'E-0.15',
                transactionType: 'WITH',
                reference: '23146230',
                openLevel: '-',
                closeLevel: '0',
                size: '-',
                currency: 'E',
                cashTransaction: false,
              },
            ],
            metadata: {
              size: 2,
              pageData: {
                pageSize: 20,
                pageNumber: 1,
                totalPages: 1,
              },
            },
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
        from: '2021-01-01T00:00:00',
        to: '2021-01-28T00:00:00',
        detailed: true,
      };

      nock(APIClient.URL_DEMO)
        .get(AccountAPI.URL.HISTORY_ACTIVITY + '?from=' + activityHistoryRequest.from + '&to=' + activityHistoryRequest.to + '&detailed=' + activityHistoryRequest.detailed)
        .reply(
          200,
          JSON.stringify({
            activities: [
              {
                date: '2021-01-27T11:10:59',
                epic: 'UD.D.TSLA.CASH.IP',
                period: '-',
                dealId: 'DIAAAAE39UG9VA6',
                channel: 'PUBLIC_WEB_API',
                type: 'POSITION',
                status: 'ACCEPTED',
                description: 'Position eröffnet: 39UG9VA6',
                details: {
                  dealReference: 'MGSTPB4KFN744S3',
                  actions: [
                    {
                      actionType: 'POSITION_OPENED',
                      affectedDealId: 'DIAAAAE39UG9VA6',
                    },
                  ],
                  marketName: 'Tesla Motors Inc (All Sessions)',
                  goodTillDate: null,
                  currency: 'USD',
                  size: 1,
                  direction: 'BUY',
                  level: 886.05,
                  stopLevel: null,
                  stopDistance: null,
                  guaranteedStop: false,
                  trailingStopDistance: null,
                  trailingStep: null,
                  limitLevel: null,
                  limitDistance: null,
                },
              },
            ],
            metadata: {
              paging: {
                size: 1,
                next: null,
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
