[ig-trading-api](../README.md) / [Exports](../modules.md) / MarketAPI

# Class: MarketAPI

## Table of contents

### Constructors

- [constructor](MarketAPI.md#constructor)

### Properties

- [price](MarketAPI.md#price)
- [URL](MarketAPI.md#url)

### Methods

- [getMarketCategories](MarketAPI.md#getmarketcategories)
- [getMarketDetails](MarketAPI.md#getmarketdetails)
- [searchMarkets](MarketAPI.md#searchmarkets)

## Constructors

### constructor

• **new MarketAPI**(`apiClient`)

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `apiClient` | `AxiosInstance` |

#### Defined in

[market/MarketAPI.ts:221](https://github.com/bennycode/ig-trading-api/blob/0c7d281/src/market/MarketAPI.ts#L221)

## Properties

### price

• **price**: [`PriceAPI`](PriceAPI.md)

#### Defined in

[market/MarketAPI.ts:219](https://github.com/bennycode/ig-trading-api/blob/0c7d281/src/market/MarketAPI.ts#L219)

---

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name               | Type     |
| :----------------- | :------- |
| `MARKETNAVIGATION` | `string` |
| `MARKETS`          | `string` |

#### Defined in

[market/MarketAPI.ts:215](https://github.com/bennycode/ig-trading-api/blob/0c7d281/src/market/MarketAPI.ts#L215)

## Methods

### getMarketCategories

▸ **getMarketCategories**(`nodeId?`): `Promise`<[`MarketNavigation`](../interfaces/MarketNavigation.md)\>

Returns all nodes (market categories) in the market navigation hierarchy.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=550

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=544

#### Parameters

| Name      | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `nodeId?` | `string` | The identifier of the node to browse |

#### Returns

`Promise`<[`MarketNavigation`](../interfaces/MarketNavigation.md)\>

#### Defined in

[market/MarketAPI.ts:244](https://github.com/bennycode/ig-trading-api/blob/0c7d281/src/market/MarketAPI.ts#L244)

---

### getMarketDetails

▸ **getMarketDetails**(`epic`): `Promise`<[`MarketDetail`](../interfaces/MarketDetail.md)\>

Returns the details of the given market(s).

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=528

#### Parameters

| Name   | Type     | Description                            |
| :----- | :------- | :------------------------------------- |
| `epic` | `string` | The epic of the market to be retrieved |

#### Returns

`Promise`<[`MarketDetail`](../interfaces/MarketDetail.md)\>

#### Defined in

[market/MarketAPI.ts:256](https://github.com/bennycode/ig-trading-api/blob/0c7d281/src/market/MarketAPI.ts#L256)

▸ **getMarketDetails**(`epic`): `Promise`<[`MarketDetails`](../modules.md#marketdetails)\>

#### Parameters

| Name   | Type       |
| :----- | :--------- |
| `epic` | `string`[] |

#### Returns

`Promise`<[`MarketDetails`](../modules.md#marketdetails)\>

#### Defined in

[market/MarketAPI.ts:257](https://github.com/bennycode/ig-trading-api/blob/0c7d281/src/market/MarketAPI.ts#L257)

---

### searchMarkets

▸ **searchMarkets**(`searchTerm`): `Promise`<[`MarketSearch`](../interfaces/MarketSearch.md)\>

Returns all markets matching the search term.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=547

#### Parameters

| Name         | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `searchTerm` | `string` | The term to be used in the search |

#### Returns

`Promise`<[`MarketSearch`](../interfaces/MarketSearch.md)\>

#### Defined in

[market/MarketAPI.ts:231](https://github.com/bennycode/ig-trading-api/blob/0c7d281/src/market/MarketAPI.ts#L231)
