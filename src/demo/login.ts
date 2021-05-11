import {initClient} from './initClient';

async function main(): Promise<void> {
  await initClient();
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
