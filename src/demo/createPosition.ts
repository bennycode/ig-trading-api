import 'dotenv-defaults/config';

import {APIClient} from '../APIClient';
import {OTCPositionRequest} from '../dealing';

async function main(): Promise<void> {
  const {IG_API_KEY: apiKey, IG_USERNAME: username, IG_PASSWORD: password} = process.env;
  const client = new APIClient(APIClient.URL_DEMO, `${apiKey}`);
  const session = await client.rest.login.createSession(`${username}`, `${password}`);
  console.info(`Your client ID is "${session.clientId}".`);

  const order: OTCPositionRequest = {
    epic: 'IX.D.FTSE.DAILY.IP',
    expiry: 'DFB',
    direction: 'SELL',
    size: '2.0',
    forceOpen: 'false',
    orderType: 'MARKET',
    currencyCode: 'GBP',
    guaranteedStop: 'false',
  };
  const dealSession = await client.rest.dealing.createOTCPosition(order);
  console.info(`Your deal reference is "${dealSession.dealReference}".`);

  const confirmSession = await client.rest.dealing.confirmTrade(dealSession);
  console.info(`Your trade was "${confirmSession.dealStatus}" with reason "${confirmSession.reason}".`);
}

main().catch(console.error);
