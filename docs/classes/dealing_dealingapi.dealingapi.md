[ig-trading-api](../README.md) / [Exports](../modules.md) / [dealing/DealingAPI](../modules/dealing_dealingapi.md) / DealingAPI

# Class: DealingAPI

[dealing/DealingAPI](../modules/dealing_dealingapi.md).DealingAPI

## Hierarchy

- **DealingAPI**

## Table of contents

### Constructors

- [constructor](dealing_dealingapi.dealingapi.md#constructor)

### Properties

- [URL](dealing_dealingapi.dealingapi.md#url)

### Methods

- [closePosition](dealing_dealingapi.dealingapi.md#closeposition)
- [confirmTrade](dealing_dealingapi.dealingapi.md#confirmtrade)
- [createOrder](dealing_dealingapi.dealingapi.md#createorder)
- [createPosition](dealing_dealingapi.dealingapi.md#createposition)
- [deleteOrder](dealing_dealingapi.dealingapi.md#deleteorder)
- [getAllOpenPositions](dealing_dealingapi.dealingapi.md#getallopenpositions)
- [getAllOrders](dealing_dealingapi.dealingapi.md#getallorders)
- [getPosition](dealing_dealingapi.dealingapi.md#getposition)
- [updateOrder](dealing_dealingapi.dealingapi.md#updateorder)
- [updatePosition](dealing_dealingapi.dealingapi.md#updateposition)

## Constructors

### constructor

\+ **new DealingAPI**(`apiClient`: AxiosInstance): [_DealingAPI_](dealing_dealingapi.dealingapi.md)

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [_DealingAPI_](dealing_dealingapi.dealingapi.md)

Defined in: [dealing/DealingAPI.ts:211](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/dealing/DealingAPI.ts#L211)

## Properties

### URL

▪ `Readonly` `Static` **URL**: { `CONFIRMS`: _string_ = '/confirms/'; `POSITIONS`: _string_ = '/positions/'; `POSITIONS_OTC`: _string_ = '/positions/otc/'; `WORKINGORDERS`: _string_ = '/workingorders/'; `WORKINGORDERS_OTC`: _string_ = '/workingorders/otc/' }

#### Type declaration:

| Name                | Type     |
| ------------------- | -------- |
| `CONFIRMS`          | _string_ |
| `POSITIONS`         | _string_ |
| `POSITIONS_OTC`     | _string_ |
| `WORKINGORDERS`     | _string_ |
| `WORKINGORDERS_OTC` | _string_ |

Defined in: [dealing/DealingAPI.ts:205](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/dealing/DealingAPI.ts#L205)

## Methods

### closePosition

▸ **closePosition**(`closePositionRequest`: [_PositionCloseRequest_](../interfaces/dealing_dealingapi.positioncloserequest.md)): _Promise_<[_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md)\>

Closes an OTC position.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=542

#### Parameters:

| Name                   | Type                                                                               |
| ---------------------- | ---------------------------------------------------------------------------------- |
| `closePositionRequest` | [_PositionCloseRequest_](../interfaces/dealing_dealingapi.positioncloserequest.md) |

**Returns:** _Promise_<[_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md)\>

Defined in: [dealing/DealingAPI.ts:255](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/dealing/DealingAPI.ts#L255)

---

### confirmTrade

▸ **confirmTrade**(`dealReference`: [_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md)): _Promise_<[_DealConfirmation_](../interfaces/dealing_dealingapi.dealconfirmation.md)\>

Returns a deal confirmation for the given deal reference.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=546

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `dealReference` | [_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md) | The dealReference of the deal to be retrieved |

**Returns:** _Promise_<[_DealConfirmation_](../interfaces/dealing_dealingapi.dealconfirmation.md)\>

Defined in: [dealing/DealingAPI.ts:283](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/dealing/DealingAPI.ts#L283)

---

### createOrder

▸ **createOrder**(`createOrderRequest`: [_OrderCreateRequest_](../interfaces/dealing_dealingapi.ordercreaterequest.md)): _Promise_<[_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md)\>

Creates an OTC working order.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=533

#### Parameters:

| Name                 | Type                                                                           |
| -------------------- | ------------------------------------------------------------------------------ |
| `createOrderRequest` | [_OrderCreateRequest_](../interfaces/dealing_dealingapi.ordercreaterequest.md) |

**Returns:** _Promise_<[_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md)\>

Defined in: [dealing/DealingAPI.ts:306](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/dealing/DealingAPI.ts#L306)

---

### createPosition

▸ **createPosition**(`createPositionRequest`: [_PositionCreateRequest_](../interfaces/dealing_dealingapi.positioncreaterequest.md)): _Promise_<[_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md)\>

Creates an OTC position.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=542

#### Parameters:

| Name                    | Type                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------ |
| `createPositionRequest` | [_PositionCreateRequest_](../interfaces/dealing_dealingapi.positioncreaterequest.md) |

**Returns:** _Promise_<[_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md)\>

Defined in: [dealing/DealingAPI.ts:243](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/dealing/DealingAPI.ts#L243)

---

### deleteOrder

▸ **deleteOrder**(`dealId`: String): _Promise_<[_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md)\>

Deletes an OTC working order.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=526

#### Parameters:

| Name     | Type   |
| -------- | ------ |
| `dealId` | String |

**Returns:** _Promise_<[_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md)\>

Defined in: [dealing/DealingAPI.ts:322](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/dealing/DealingAPI.ts#L322)

---

### getAllOpenPositions

▸ **getAllOpenPositions**(): _Promise_<[_PositionListResponse_](../interfaces/dealing_dealingapi.positionlistresponse.md)\>

Returns all open positions for the active account.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=545

**Returns:** _Promise_<[_PositionListResponse_](../interfaces/dealing_dealingapi.positionlistresponse.md)\>

Defined in: [dealing/DealingAPI.ts:220](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/dealing/DealingAPI.ts#L220)

---

### getAllOrders

▸ **getAllOrders**(): _Promise_<[_OrderListResponse_](../interfaces/dealing_dealingapi.orderlistresponse.md)\>

Returns all open working orders for the active account.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=555

**Returns:** _Promise_<[_OrderListResponse_](../interfaces/dealing_dealingapi.orderlistresponse.md)\>

Defined in: [dealing/DealingAPI.ts:294](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/dealing/DealingAPI.ts#L294)

---

### getPosition

▸ **getPosition**(`dealId`: String): _Promise_<[_Position_](../interfaces/dealing_dealingapi.position.md)\>

Returns an open position for the active account by deal identifier.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=541

#### Parameters:

| Name     | Type   |
| -------- | ------ |
| `dealId` | String |

**Returns:** _Promise_<[_Position_](../interfaces/dealing_dealingapi.position.md)\>

Defined in: [dealing/DealingAPI.ts:231](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/dealing/DealingAPI.ts#L231)

---

### updateOrder

▸ **updateOrder**(`dealId`: String, `orderRequest`: [_OrderUpdateRequest_](../interfaces/dealing_dealingapi.orderupdaterequest.md)): _Promise_<[_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md)\>

Updates an OTC working order.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=526

#### Parameters:

| Name           | Type                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| `dealId`       | String                                                                         |
| `orderRequest` | [_OrderUpdateRequest_](../interfaces/dealing_dealingapi.orderupdaterequest.md) |

**Returns:** _Promise_<[_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md)\>

Defined in: [dealing/DealingAPI.ts:343](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/dealing/DealingAPI.ts#L343)

---

### updatePosition

▸ **updatePosition**(`dealId`: String, `updatePositionRequest`: [_PositionUpdateRequest_](../interfaces/dealing_dealingapi.positionupdaterequest.md)): _Promise_<[_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md)\>

Closes an OTC position.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=542

#### Parameters:

| Name                    | Type                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------ |
| `dealId`                | String                                                                               |
| `updatePositionRequest` | [_PositionUpdateRequest_](../interfaces/dealing_dealingapi.positionupdaterequest.md) |

**Returns:** _Promise_<[_DealReferenceResponse_](../interfaces/dealing_dealingapi.dealreferenceresponse.md)\>

Defined in: [dealing/DealingAPI.ts:271](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/dealing/DealingAPI.ts#L271)
