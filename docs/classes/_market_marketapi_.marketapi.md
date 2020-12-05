**[ig-trading-api](../README.md)**

> [Globals](../globals.md) / ["market/MarketAPI"](../modules/_market_marketapi_.md) / MarketAPI

# Class: MarketAPI

## Hierarchy

* **MarketAPI**

## Index

### Constructors

* [constructor](_market_marketapi_.marketapi.md#constructor)

### Methods

* [searchMarkets](_market_marketapi_.marketapi.md#searchmarkets)

### Object literals

* [URL](_market_marketapi_.marketapi.md#url)

## Constructors

### constructor

\+ **new MarketAPI**(`apiClient`: AxiosInstance): [MarketAPI](_market_marketapi_.marketapi.md)

*Defined in [market/MarketAPI.ts:29](https://github.com/bennycode/ig-trading-api/blob/609342c/src/market/MarketAPI.ts#L29)*

#### Parameters:

Name | Type |
------ | ------ |
`apiClient` | AxiosInstance |

**Returns:** [MarketAPI](_market_marketapi_.marketapi.md)

## Methods

### searchMarkets

▸ **searchMarkets**(`searchTerm`: string): Promise\<[MarketSearch](../interfaces/_market_marketapi_.marketsearch.md)>

*Defined in [market/MarketAPI.ts:39](https://github.com/bennycode/ig-trading-api/blob/609342c/src/market/MarketAPI.ts#L39)*

Returns all markets matching the search term.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=547

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`searchTerm` | string | The term to be used in the search |

**Returns:** Promise\<[MarketSearch](../interfaces/_market_marketapi_.marketsearch.md)>

## Object literals

### URL

▪ `Static` `Readonly` **URL**: object

*Defined in [market/MarketAPI.ts:27](https://github.com/bennycode/ig-trading-api/blob/609342c/src/market/MarketAPI.ts#L27)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`MARKETS` | string | \`/markets\` |
