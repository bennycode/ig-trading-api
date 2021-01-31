import 'dotenv-defaults/config';
declare const process: any;
import {APIClient} from '../APIClient';
import {ChartResolution} from '../lightstreamer/interfaces';

async function main(): Promise<void> {
  const {IG_API_KEY: apiKey, IG_USERNAME: username, IG_PASSWORD: password} = process.env;
  const client = new APIClient(APIClient.URL_DEMO, `${apiKey}`);
  const session = await client.rest.login.createSession(`${username}`, `${password}`);

  client.stream.subscribeCandles(
    ['CS.D.BITCOIN.TODAY.IP', 'CS.D.ETHXBT.TODAY.IP'],
    ChartResolution.MINUTE,
    (epic, val) => {
      console.info('ls', epic, val);
    }
  );
  console.info(`Your client ID is "${session.clientId}".`);
}

main().catch(console.error);
