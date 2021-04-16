import {initClient} from './initClient';
import {
  Direction,
  PositionCloseRequest,
  PositionCreateRequest,
  PositionOrderType,
  PositionUpdateRequest,
} from '../dealing';

async function main(): Promise<void> {
  const client = await initClient();

  const firstGetAllPositionsSession = await client.rest.dealing.getAllOpenPositions();
  firstGetAllPositionsSession.positions.forEach(position => {
    console.info(`Position deal id: "${position.position.dealId}".`);
  });
  console.info(`There are ${firstGetAllPositionsSession.positions.length} positions.`);

  const createPositionRequest: PositionCreateRequest = {
    currencyCode: 'USD',
    direction: Direction.BUY,
    epic: 'UD.D.TSLA.CASH.IP',
    expiry: '-',
    forceOpen: true,
    guaranteedStop: false,
    level: 900.4,
    orderType: PositionOrderType.LIMIT,
    size: 1,
  };

  const createPositionSession = await client.rest.dealing.createPosition(createPositionRequest);
  console.info(`Your position deal reference is "${createPositionSession.dealReference}".`);

  const secondGetAllPositionsSession = await client.rest.dealing.getAllOpenPositions();
  console.info(`There are ${secondGetAllPositionsSession.positions.length} positions now.`);

  const confirmSession = await client.rest.dealing.confirmTrade(createPositionSession);
  console.info(`Creating position with ${confirmSession.dealStatus}.`);

  const updatePositionRequest: PositionUpdateRequest = {
    limitLevel: 950.4,
  };
  const updatePositionSession = await client.rest.dealing.updatePosition(confirmSession.dealId, updatePositionRequest);
  console.info(`Your updated position deal reference is "${updatePositionSession.dealReference}".`);

  const closePositionRequest: PositionCloseRequest = {
    dealId: confirmSession.dealId,
    direction: Direction.SELL,
    expiry: createPositionRequest.expiry,
    level: 860.4,
    orderType: createPositionRequest.orderType,
    size: createPositionRequest.size,
  };

  const closePositionSession = await client.rest.dealing.closePosition(closePositionRequest);
  console.info(`Your position "${closePositionSession.dealReference}" was closed`);

  process.exit(0);
}

main().catch(console.error);
