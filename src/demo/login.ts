import {initDemoClient} from './initDemoClient';

async function main(): Promise<void> {
  await initDemoClient();
}

main().catch(console.error);
