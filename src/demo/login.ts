import 'dotenv-defaults/config';

import {APIClient} from '../APIClient';

async function main(): Promise<void> {
  const {IG_API_KEY: apiKey, IG_USERNAME: username, IG_PASSWORD: password} = process.env;
  const client = new APIClient(APIClient.URL_DEMO, `${apiKey}`);
  const session = await client.rest.login.createSession(`${username}`, `${password}`);
  console.info(`Your client ID is "${session.clientId}".`);
}

main().catch(console.error);
