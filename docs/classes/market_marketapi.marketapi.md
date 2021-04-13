[ig-trading-api](../README.md) / [Exports](../modules.md) / [market/MarketAPI](../modules/market_marketapi.md) / MarketAPI

# Class: MarketAPI

[market/MarketAPI](../modules/market_marketapi.md).MarketAPI

## Table of contents

### Constructors

- [constructor](market_marketapi.marketapi.md#constructor)

### Properties

- [price](market_marketapi.marketapi.md#price)
- [URL](market_marketapi.marketapi.md#url)

### Methods

- [getMarketCategories](market_marketapi.marketapi.md#getmarketcategories)
- [getMarketDetails](market_marketapi.marketapi.md#getmarketdetails)
- [searchMarkets](market_marketapi.marketapi.md#searchmarkets)

## Constructors

### constructor

\+ **new MarketAPI**(`apiClient`: AxiosInstance): [_MarketAPI_](market_marketapi.marketapi.md)

#### Parameters:

| Name        | Type          |
| :---------- | :------------ |
| `apiClient` | AxiosInstance |

**Returns:** [_MarketAPI_](market_marketapi.marketapi.md)

Defined in: [market/MarketAPI.ts:219](https://github.com/bennycode/ig-trading-api/blob/eb2ba64/src/market/MarketAPI.ts#L219)

## Properties

### price

• **price**: [_PriceAPI_](market_prices_priceapi.priceapi.md)

Defined in: [market/MarketAPI.ts:219](https://github.com/bennycode/ig-trading-api/blob/eb2ba64/src/market/MarketAPI.ts#L219)

---

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration:

| Name               | Type     |
| :----------------- | :------- |
| `MARKETNAVIGATION` | _string_ |
| `MARKETS`          | _string_ |

Defined in: [market/MarketAPI.ts:215](https://github.com/bennycode/ig-trading-api/blob/eb2ba64/src/market/MarketAPI.ts#L215)

## Methods

### getMarketCategories

▸ **getMarketCategories**(`nodeId?`: _string_): _Promise_<[_MarketNavigation_](../interfaces/market_marketapi.marketnavigation.md)\>

Returns all nodes (market categories) in the market navigation hierarchy.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=550

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=544

#### Parameters:

| Name      | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `nodeId?` | _string_ | The identifier of the node to browse |

**Returns:** _Promise_<[_MarketNavigation_](../interfaces/market_marketapi.marketnavigation.md)\>

Defined in: [market/MarketAPI.ts:244](https://github.com/bennycode/ig-trading-api/blob/eb2ba64/src/market/MarketAPI.ts#L244)

---

### getMarketDetails

▸ **getMarketDetails**(`epic`: _string_): _Promise_<[_MarketDetail_](../interfaces/market_marketapi.marketdetail.md)\>

Returns the details of the given market(s).

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=528

#### Parameters:

| Name   | Type     | Description                            |
| :----- | :------- | :------------------------------------- |
| `epic` | _string_ | The epic of the market to be retrieved |

**Returns:** _Promise_<[_MarketDetail_](../interfaces/market_marketapi.marketdetail.md)\>

Defined in: [market/MarketAPI.ts:256](https://github.com/bennycode/ig-trading-api/blob/eb2ba64/src/market/MarketAPI.ts#L256)

▸ **getMarketDetails**(`epic`: _string_[]): _Promise_<[_MarketDetails_](../modules/market_marketapi.md#marketdetails)\>

#### Parameters:

| Name   | Type       |
| :----- | :--------- |
| `epic` | _string_[] |

**Returns:** _Promise_<[_MarketDetails_](../modules/market_marketapi.md#marketdetails)\>

Defined in: [market/MarketAPI.ts:257](https://github.com/bennycode/ig-trading-api/blob/eb2ba64/src/market/MarketAPI.ts#L257)

---

### searchMarkets

▸ **searchMarkets**(`searchTerm`: _string_): _Promise_<[_MarketSearch_](../interfaces/market_marketapi.marketsearch.md)\>

Returns all markets matching the search term.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=547

#### Parameters:

| Name         | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `searchTerm` | _string_ | The term to be used in the search |

**Returns:** _Promise_<[_MarketSearch_](../interfaces/market_marketapi.marketsearch.md)\>

Defined in: [market/MarketAPI.ts:231](https://github.com/bennycode/ig-trading-api/blob/eb2ba64/src/market/MarketAPI.ts#L231)
