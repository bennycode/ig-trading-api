import 'dotenv-defaults/config';
import {APIClient} from '../APIClient';

export async function initDemoClient(): Promise<APIClient> {
  const {IG_API_KEY: apiKey, IG_USERNAME: username, IG_PASSWORD: password} = process.env;
  const client = new APIClient(APIClient.URL_DEMO, `${apiKey}`);
  const session = await client.rest.login.createSession(`${username}`, `${password}`);
  console.info(`Your client ID is "${session.clientId}".`);
  return client;
}
