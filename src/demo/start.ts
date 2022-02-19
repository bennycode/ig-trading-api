import {initClient} from './initClient';
import {APIClient} from '../APIClient';

declare global {
  var IGClient: APIClient;
}

async function main(): Promise<void> {
  const client = await initClient(true);
  global.IGClient = client;
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
