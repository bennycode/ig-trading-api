import {initClient} from './initClient';
import {APIClient} from '../APIClient';

declare global {
  namespace NodeJS {
    interface Global {
      IGClient: APIClient;
    }
  }
}

async function main(): Promise<void> {
  const client = await initClient(true);
  global.IGClient = client;
}

main().catch(console.error);
