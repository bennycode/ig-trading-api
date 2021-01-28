import 'dotenv-defaults/config';

import {APIClient} from '../APIClient';
import {TransactionHistoryRequest, ActivityHistoryRequest} from '../account/AccountAPI';

async function main(): Promise<void> {
  const {IG_API_KEY: apiKey, IG_USERNAME: username, IG_PASSWORD: password} = process.env;
  const client = new APIClient(APIClient.URL_DEMO, `${apiKey}`);
  const session = await client.rest.login.createSession(`${username}`, `${password}`);
  console.info(`Your client ID is "${session.clientId}".`);

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
