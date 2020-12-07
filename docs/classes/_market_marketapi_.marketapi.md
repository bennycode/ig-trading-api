**[ig-trading-api](../README.md)**

> [Globals](../globals.md) / ["market/MarketAPI"](../modules/_market_marketapi_.md) / MarketAPI

# Class: MarketAPI

## Hierarchy

* **MarketAPI**

## Index

### Constructors

* [constructor](_market_marketapi_.marketapi.md#constructor)

### Methods

* [getMarketCategories](_market_marketapi_.marketapi.md#getmarketcategories)
* [getMarketDetails](_market_marketapi_.marketapi.md#getmarketdetails)
* [searchMarkets](_market_marketapi_.marketapi.md#searchmarkets)

### Object literals

* [URL](_market_marketapi_.marketapi.md#url)

## Constructors

### constructor

\+ **new MarketAPI**(`apiClient`: AxiosInstance): [MarketAPI](_market_marketapi_.marketapi.md)

*Defined in [market/MarketAPI.ts:187](https://github.com/bennycode/ig-trading-api/blob/3c6eaee/src/market/MarketAPI.ts#L187)*

#### Parameters:

Name | Type |
------ | ------ |
`apiClient` | AxiosInstance |

**Returns:** [MarketAPI](_market_marketapi_.marketapi.md)

## Methods

### getMarketCategories

▸ **getMarketCategories**(`nodeId?`: undefined \| string): Promise\<[MarketNavigation](../interfaces/_market_marketapi_.marketnavigation.md)>

*Defined in [market/MarketAPI.ts:210](https://github.com/bennycode/ig-trading-api/blob/3c6eaee/src/market/MarketAPI.ts#L210)*

Returns all nodes (market categories) in the market navigation hierarchy.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=550

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=544

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`nodeId?` | undefined \| string | The identifier of the node to browse |

**Returns:** Promise\<[MarketNavigation](../interfaces/_market_marketapi_.marketnavigation.md)>

___

### getMarketDetails

▸ **getMarketDetails**(`epic`: string): Promise\<[MarketDetail](../interfaces/_market_marketapi_.marketdetail.md)>

*Defined in [market/MarketAPI.ts:222](https://github.com/bennycode/ig-trading-api/blob/3c6eaee/src/market/MarketAPI.ts#L222)*

Returns the details of the given market(s).

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=528

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`epic` | string | The epic of the market to be retrieved |

**Returns:** Promise\<[MarketDetail](../interfaces/_market_marketapi_.marketdetail.md)>

▸ **getMarketDetails**(`epic`: string[]): Promise\<[MarketDetails](../modules/_market_marketapi_.md#marketdetails)>

*Defined in [market/MarketAPI.ts:223](https://github.com/bennycode/ig-trading-api/blob/3c6eaee/src/market/MarketAPI.ts#L223)*

#### Parameters:

Name | Type |
------ | ------ |
`epic` | string[] |

**Returns:** Promise\<[MarketDetails](../modules/_market_marketapi_.md#marketdetails)>

___

### searchMarkets

▸ **searchMarkets**(`searchTerm`: string): Promise\<[MarketSearch](../interfaces/_market_marketapi_.marketsearch.md)>

*Defined in [market/MarketAPI.ts:197](https://github.com/bennycode/ig-trading-api/blob/3c6eaee/src/market/MarketAPI.ts#L197)*

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

*Defined in [market/MarketAPI.ts:184](https://github.com/bennycode/ig-trading-api/blob/3c6eaee/src/market/MarketAPI.ts#L184)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`MARKETNAVIGATION` | string | \`/marketnavigation\` |
`MARKETS` | string | \`/markets\` |
