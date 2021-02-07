import {initDemoClient} from './initDemoClient';
import {ActivityHistoryRequest, TransactionHistoryRequest} from '../account/AccountAPI';

async function main(): Promise<void> {
  const client = await initDemoClient();

  const transactionHistoryRequest: TransactionHistoryRequest = {
    maxSpanSeconds: 100000000,
  };

  const transactionHistorySession = await client.rest.account.getTransactionHistory(transactionHistoryRequest);
  transactionHistorySession.transactions.forEach(transaction => {
    console.info(transaction.instrumentName);
  });

  const activityHistoryRequest: ActivityHistoryRequest = {
    from: '2021-01-01T00:00:00',
    to: '2021-01-28T00:00:00',
  };

  const activityHistorySession = await client.rest.account.getActivityHistory(activityHistoryRequest);
  activityHistorySession.activities.forEach(activity => {
    console.info(activity.dealId);
  });
}

main().catch(console.error);
