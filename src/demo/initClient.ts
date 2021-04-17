import 'dotenv-defaults/config';
import {APIClient} from '../APIClient';

export async function initClient(useLive: boolean = false): Promise<APIClient> {
  const logout = async (): Promise<void> => {
    console.info('Logging out...');
    return client.rest.login.logout();
  };

  process.once('SIGINT', logout);
  process.once('SIGTERM', logout);

  const apiKey = useLive ? process.env.IG_LIVE_API_KEY : process.env.IG_DEMO_API_KEY;
  const username = useLive ? process.env.IG_LIVE_USERNAME : process.env.IG_DEMO_USERNAME;
  const password = useLive ? process.env.IG_LIVE_PASSWORD : process.env.IG_DEMO_PASSWORD;
  const baseUrl = useLive ? APIClient.URL_LIVE : APIClient.URL_DEMO;

  const client = new APIClient(baseUrl, apiKey!);
  const session = await client.rest.login.login(username!, password!);

  console.info(`Your client ID is "${session.clientId}".`);

  return client;
}
