[ig-trading-api](../../README.md) / [Exports](../../modules.md) / [market/MarketAPI](../../modules/market_marketapi.md) / MarketAPI

# Class: MarketAPI

[market/MarketAPI](../../modules/market_marketapi.md).MarketAPI

## Hierarchy

- **MarketAPI**

## Table of contents

### Constructors

- [constructor](marketapi.marketapi.md#constructor)

### Properties

- [URL](marketapi.marketapi.md#url)

### Methods

- [getMarketCategories](marketapi.marketapi.md#getmarketcategories)
- [getMarketDetails](marketapi.marketapi.md#getmarketdetails)
- [searchMarkets](marketapi.marketapi.md#searchmarkets)

## Constructors

### constructor

\+ **new MarketAPI**(`apiClient`: AxiosInstance): [_MarketAPI_](marketapi.marketapi.md)

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [_MarketAPI_](marketapi.marketapi.md)

Defined in: [market/MarketAPI.ts:187](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L187)

## Properties

### URL

▪ `Readonly` `Static` **URL**: { `MARKETNAVIGATION`: _string_ ; `MARKETS`: _string_ }

#### Type declaration:

| Name               | Type     |
| ------------------ | -------- |
| `MARKETNAVIGATION` | _string_ |
| `MARKETS`          | _string_ |

Defined in: [market/MarketAPI.ts:184](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L184)

## Methods

### getMarketCategories

▸ **getMarketCategories**(`nodeId?`: _string_): _Promise_<[_MarketNavigation_](../../interfaces/market/marketapi.marketnavigation.md)\>

Returns all nodes (market categories) in the market navigation hierarchy.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=550

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=544

#### Parameters:

| Name      | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| `nodeId?` | _string_ | The identifier of the node to browse |

**Returns:** _Promise_<[_MarketNavigation_](../../interfaces/market/marketapi.marketnavigation.md)\>

Defined in: [market/MarketAPI.ts:210](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L210)

---

### getMarketDetails

▸ **getMarketDetails**(`epic`: _string_): _Promise_<[_MarketDetail_](../../interfaces/market/marketapi.marketdetail.md)\>

Returns the details of the given market(s).

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=528

#### Parameters:

| Name   | Type     | Description                            |
| ------ | -------- | -------------------------------------- |
| `epic` | _string_ | The epic of the market to be retrieved |

**Returns:** _Promise_<[_MarketDetail_](../../interfaces/market/marketapi.marketdetail.md)\>

Defined in: [market/MarketAPI.ts:222](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L222)

▸ **getMarketDetails**(`epic`: _string_[]): _Promise_<[_MarketDetails_](../../modules/market_marketapi.md#marketdetails)\>

#### Parameters:

| Name   | Type       |
| ------ | ---------- |
| `epic` | _string_[] |

**Returns:** _Promise_<[_MarketDetails_](../../modules/market_marketapi.md#marketdetails)\>

Defined in: [market/MarketAPI.ts:223](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L223)

---

### searchMarkets

▸ **searchMarkets**(`searchTerm`: _string_): _Promise_<[_MarketSearch_](../../interfaces/market/marketapi.marketsearch.md)\>

Returns all markets matching the search term.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=547

#### Parameters:

| Name         | Type     | Description                       |
| ------------ | -------- | --------------------------------- |
| `searchTerm` | _string_ | The term to be used in the search |

**Returns:** _Promise_<[_MarketSearch_](../../interfaces/market/marketapi.marketsearch.md)\>

Defined in: [market/MarketAPI.ts:197](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L197)
