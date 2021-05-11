[ig-trading-api](../README.md) / [Exports](../modules.md) / [market/prices/PriceAPI](../modules/market_prices_priceapi.md) / PriceAPI

# Class: PriceAPI

[market/prices/PriceAPI](../modules/market_prices_priceapi.md).PriceAPI

## Table of contents

### Constructors

- [constructor](market_prices_priceapi.priceapi.md#constructor)

### Properties

- [URL](market_prices_priceapi.priceapi.md#url)

### Methods

- [getPrices](market_prices_priceapi.priceapi.md#getprices)
- [getPricesBetweenDates](market_prices_priceapi.priceapi.md#getpricesbetweendates)

## Constructors

### constructor

\+ **new PriceAPI**(`apiClient`: AxiosInstance): [_PriceAPI_](market_prices_priceapi.priceapi.md)

#### Parameters

| Name        | Type          |
| :---------- | :------------ |
| `apiClient` | AxiosInstance |

**Returns:** [_PriceAPI_](market_prices_priceapi.priceapi.md)

Defined in: [market/prices/PriceAPI.ts:84](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/prices/PriceAPI.ts#L84)

## Properties

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration

| Name     | Type     |
| :------- | :------- |
| `PRICES` | _string_ |

Defined in: [market/prices/PriceAPI.ts:82](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/prices/PriceAPI.ts#L82)

## Methods

### getPrices

▸ **getPrices**(`epic`: _string_, `resolution`: [_Resolution_](../enums/market_prices_priceapi.resolution.md), `pointCount`: _number_, `pageSize?`: _number_, `pageNumber?`: _number_): _Promise_<[_HistoricalPricesResponse_](../interfaces/market_prices_priceapi.historicalpricesresponse.md)\>

Returns historical prices for a particular instrument.

#### Parameters

| Name | Type | Default value | Description |
| :-- | :-- | :-- | :-- |
| `epic` | _string_ | - | Instrument identifier |
| `resolution` | [_Resolution_](../enums/market_prices_priceapi.resolution.md) | - | Time resolution |
| `pointCount` | _number_ | - | Limits the number of price points (not applicable if a date range has been specified) |
| `pageSize` | _number_ | 0 | Number of candles per page of results (defaults to 0, no pagination) |
| `pageNumber` | _number_ | 1 | Page of results to return (pagination) |

**Returns:** _Promise_<[_HistoricalPricesResponse_](../interfaces/market_prices_priceapi.historicalpricesresponse.md)\>

Defined in: [market/prices/PriceAPI.ts:130](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/prices/PriceAPI.ts#L130)

---

### getPricesBetweenDates

▸ **getPricesBetweenDates**(`epic`: _string_, `resolution`: [_Resolution_](../enums/market_prices_priceapi.resolution.md), `startDate`: _string_, `endDate`: _string_, `pageSize?`: _number_, `pageNumber?`: _number_): _Promise_<[_HistoricalPricesResponse_](../interfaces/market_prices_priceapi.historicalpricesresponse.md)\>

Returns historical prices between given dates.

**`note`** Uses the v3 API response

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=521

#### Parameters

| Name | Type | Default value | Description |
| :-- | :-- | :-- | :-- |
| `epic` | _string_ | - | Instrument identifier |
| `resolution` | [_Resolution_](../enums/market_prices_priceapi.resolution.md) | - | Time resolution |
| `startDate` | _string_ | - | Start date as ISO 8601 string, i.e. "2021-01-15T00:00:00.000Z" |
| `endDate` | _string_ | - | End date as ISO 8601 string, i.e. "2021-01-16T00:00:00.000Z" |
| `pageSize` | _number_ | 0 | Number of candles per page of results (defaults to 0, no pagination) |
| `pageNumber` | _number_ | 1 | Page of results to return (pagination) |

**Returns:** _Promise_<[_HistoricalPricesResponse_](../interfaces/market_prices_priceapi.historicalpricesresponse.md)\>

Defined in: [market/prices/PriceAPI.ts:100](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/prices/PriceAPI.ts#L100)
