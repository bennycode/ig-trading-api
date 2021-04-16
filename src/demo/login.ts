import {initClient} from './initClient';

async function main(): Promise<void> {
  await initClient();
}

main().catch(console.error);
