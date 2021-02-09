import {initDemoClient} from './initDemoClient';
import {OrderUpdateRequest, OrderCreateRequest, Direction, OrderTimeInForce, OrderType} from '../dealing';

async function main(): Promise<void> {
  const client = await initDemoClient();

  const firstGetAllOrdersSession = await client.rest.dealing.getAllOrders();
  firstGetAllOrdersSession.workingOrders.forEach(order => {
    console.info(`Working order deal id: "${order.workingOrderData.dealId}".`);
  });
  console.info(`There are ${firstGetAllOrdersSession.workingOrders.length} orders.`);

  const createOrderRequest: OrderCreateRequest = {
    currencyCode: 'USD',
    direction: Direction.BUY,
    epic: 'UD.D.TSLA.CASH.IP',
    expiry: '-',
    forceOpen: true,
    guaranteedStop: false,
    level: 811.4,
    size: 1,
    timeInForce: OrderTimeInForce.GOOD_TILL_CANCELLED,
    type: OrderType.LIMIT,
  };
  const createOrderSession = await client.rest.dealing.createOrder(createOrderRequest);
  console.info(`Your order deal reference is "${createOrderSession.dealReference}".`);

  const secondGetAllOrdersSession = await client.rest.dealing.getAllOrders();
  console.info(`There are ${secondGetAllOrdersSession.workingOrders.length} orders now.`);

  const confirmOrderSession = await client.rest.dealing.confirmTrade(createOrderSession);
  console.info(`Creating order with ${confirmOrderSession.dealStatus}.`);

  const updateOrderRequest: OrderUpdateRequest = {
    level: 519.1,
    timeInForce: OrderTimeInForce.GOOD_TILL_CANCELLED,
    type: OrderType.LIMIT,
  };
  const updateOrderSession = await client.rest.dealing.updateOrder(confirmOrderSession.dealId, updateOrderRequest);
  console.info(`Your updated order deal reference is "${updateOrderSession.dealReference}".`);

  const closeOrderSession = await client.rest.dealing.deleteOrder(confirmOrderSession.dealId);
  console.info(`Your deleted order deal reference is "${closeOrderSession.dealReference}".`);
}

main().catch(console.error);
