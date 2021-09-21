[ig-trading-api](../README.md) / [Exports](../modules.md) / [dealing/DealingAPI](../modules/dealing_DealingAPI.md) / DealingAPI

# Class: DealingAPI

[dealing/DealingAPI](../modules/dealing_DealingAPI.md).DealingAPI

## Table of contents

### Constructors

- [constructor](dealing_DealingAPI.DealingAPI.md#constructor)

### Properties

- [URL](dealing_DealingAPI.DealingAPI.md#url)

### Methods

- [closePosition](dealing_DealingAPI.DealingAPI.md#closeposition)
- [confirmTrade](dealing_DealingAPI.DealingAPI.md#confirmtrade)
- [createOrder](dealing_DealingAPI.DealingAPI.md#createorder)
- [createPosition](dealing_DealingAPI.DealingAPI.md#createposition)
- [deleteOrder](dealing_DealingAPI.DealingAPI.md#deleteorder)
- [getAllOpenPositions](dealing_DealingAPI.DealingAPI.md#getallopenpositions)
- [getAllOrders](dealing_DealingAPI.DealingAPI.md#getallorders)
- [getPosition](dealing_DealingAPI.DealingAPI.md#getposition)
- [updateOrder](dealing_DealingAPI.DealingAPI.md#updateorder)
- [updatePosition](dealing_DealingAPI.DealingAPI.md#updateposition)

## Constructors

### constructor

• **new DealingAPI**(`apiClient`)

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `apiClient` | `AxiosInstance` |

#### Defined in

[dealing/DealingAPI.ts:213](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/dealing/DealingAPI.ts#L213)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name                | Type     |
| :------------------ | :------- |
| `CONFIRMS`          | `string` |
| `POSITIONS`         | `string` |
| `POSITIONS_OTC`     | `string` |
| `WORKINGORDERS`     | `string` |
| `WORKINGORDERS_OTC` | `string` |

#### Defined in

[dealing/DealingAPI.ts:205](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/dealing/DealingAPI.ts#L205)

## Methods

### closePosition

▸ **closePosition**(`closePositionRequest`): `Promise`<[`DealReferenceResponse`](../interfaces/dealing_DealingAPI.DealReferenceResponse.md)\>

Closes an OTC position.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=542

#### Parameters

| Name                   | Type                                                                               |
| :--------------------- | :--------------------------------------------------------------------------------- |
| `closePositionRequest` | [`PositionCloseRequest`](../interfaces/dealing_DealingAPI.PositionCloseRequest.md) |

#### Returns

`Promise`<[`DealReferenceResponse`](../interfaces/dealing_DealingAPI.DealReferenceResponse.md)\>

#### Defined in

[dealing/DealingAPI.ts:267](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/dealing/DealingAPI.ts#L267)

---

### confirmTrade

▸ **confirmTrade**(`dealReference`): `Promise`<[`DealConfirmation`](../interfaces/dealing_DealingAPI.DealConfirmation.md)\>

Returns a deal confirmation for the given deal reference.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=546

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `dealReference` | [`DealReferenceResponse`](../interfaces/dealing_DealingAPI.DealReferenceResponse.md) | The dealReference of the deal to be retrieved |

#### Returns

`Promise`<[`DealConfirmation`](../interfaces/dealing_DealingAPI.DealConfirmation.md)\>

#### Defined in

[dealing/DealingAPI.ts:299](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/dealing/DealingAPI.ts#L299)

---

### createOrder

▸ **createOrder**(`createOrderRequest`): `Promise`<[`DealReferenceResponse`](../interfaces/dealing_DealingAPI.DealReferenceResponse.md)\>

Creates an OTC working order.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=533

#### Parameters

| Name                 | Type                                                                           |
| :------------------- | :----------------------------------------------------------------------------- |
| `createOrderRequest` | [`OrderCreateRequest`](../interfaces/dealing_DealingAPI.OrderCreateRequest.md) |

#### Returns

`Promise`<[`DealReferenceResponse`](../interfaces/dealing_DealingAPI.DealReferenceResponse.md)\>

#### Defined in

[dealing/DealingAPI.ts:326](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/dealing/DealingAPI.ts#L326)

---

### createPosition

▸ **createPosition**(`createPositionRequest`): `Promise`<[`DealReferenceResponse`](../interfaces/dealing_DealingAPI.DealReferenceResponse.md)\>

Creates an OTC position.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=542

#### Parameters

| Name                    | Type                                                                                 |
| :---------------------- | :----------------------------------------------------------------------------------- |
| `createPositionRequest` | [`PositionCreateRequest`](../interfaces/dealing_DealingAPI.PositionCreateRequest.md) |

#### Returns

`Promise`<[`DealReferenceResponse`](../interfaces/dealing_DealingAPI.DealReferenceResponse.md)\>

#### Defined in

[dealing/DealingAPI.ts:251](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/dealing/DealingAPI.ts#L251)

---

### deleteOrder

▸ **deleteOrder**(`dealId`): `Promise`<[`DealReferenceResponse`](../interfaces/dealing_DealingAPI.DealReferenceResponse.md)\>

Deletes an OTC working order.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=526

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `dealId` | `String` |

#### Returns

`Promise`<[`DealReferenceResponse`](../interfaces/dealing_DealingAPI.DealReferenceResponse.md)\>

#### Defined in

[dealing/DealingAPI.ts:342](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/dealing/DealingAPI.ts#L342)

---

### getAllOpenPositions

▸ **getAllOpenPositions**(): `Promise`<[`PositionListResponse`](../interfaces/dealing_DealingAPI.PositionListResponse.md)\>

Returns all open positions for the active account.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=545

#### Returns

`Promise`<[`PositionListResponse`](../interfaces/dealing_DealingAPI.PositionListResponse.md)\>

#### Defined in

[dealing/DealingAPI.ts:220](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/dealing/DealingAPI.ts#L220)

---

### getAllOrders

▸ **getAllOrders**(): `Promise`<[`OrderListResponse`](../interfaces/dealing_DealingAPI.OrderListResponse.md)\>

Returns all open working orders for the active account.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=555

#### Returns

`Promise`<[`OrderListResponse`](../interfaces/dealing_DealingAPI.OrderListResponse.md)\>

#### Defined in

[dealing/DealingAPI.ts:310](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/dealing/DealingAPI.ts#L310)

---

### getPosition

▸ **getPosition**(`dealId`): `Promise`<[`Position`](../interfaces/dealing_DealingAPI.Position.md)\>

Returns an open position for the active account by deal identifier.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=541

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `dealId` | `String` |

#### Returns

`Promise`<[`Position`](../interfaces/dealing_DealingAPI.Position.md)\>

#### Defined in

[dealing/DealingAPI.ts:235](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/dealing/DealingAPI.ts#L235)

---

### updateOrder

▸ **updateOrder**(`dealId`, `orderRequest`): `Promise`<[`DealReferenceResponse`](../interfaces/dealing_DealingAPI.DealReferenceResponse.md)\>

Updates an OTC working order.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=526

#### Parameters

| Name           | Type                                                                           |
| :------------- | :----------------------------------------------------------------------------- |
| `dealId`       | `String`                                                                       |
| `orderRequest` | [`OrderUpdateRequest`](../interfaces/dealing_DealingAPI.OrderUpdateRequest.md) |

#### Returns

`Promise`<[`DealReferenceResponse`](../interfaces/dealing_DealingAPI.DealReferenceResponse.md)\>

#### Defined in

[dealing/DealingAPI.ts:364](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/dealing/DealingAPI.ts#L364)

---

### updatePosition

▸ **updatePosition**(`dealId`, `updatePositionRequest`): `Promise`<[`DealReferenceResponse`](../interfaces/dealing_DealingAPI.DealReferenceResponse.md)\>

Updates an OTC position.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=542

#### Parameters

| Name                    | Type                                                                                 |
| :---------------------- | :----------------------------------------------------------------------------------- |
| `dealId`                | `String`                                                                             |
| `updatePositionRequest` | [`PositionUpdateRequest`](../interfaces/dealing_DealingAPI.PositionUpdateRequest.md) |

#### Returns

`Promise`<[`DealReferenceResponse`](../interfaces/dealing_DealingAPI.DealReferenceResponse.md)\>

#### Defined in

[dealing/DealingAPI.ts:283](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/dealing/DealingAPI.ts#L283)
