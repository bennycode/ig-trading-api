[ig-trading-api](../README.md) / [Exports](../modules.md) / [market/MarketAPI](../modules/market_MarketAPI.md) / Instrument

# Interface: Instrument

[market/MarketAPI](../modules/market_MarketAPI.md).Instrument

## Table of contents

### Properties

- [chartCode](market_MarketAPI.Instrument.md#chartcode)
- [contractSize](market_MarketAPI.Instrument.md#contractsize)
- [controlledRiskAllowed](market_MarketAPI.Instrument.md#controlledriskallowed)
- [country](market_MarketAPI.Instrument.md#country)
- [currencies](market_MarketAPI.Instrument.md#currencies)
- [epic](market_MarketAPI.Instrument.md#epic)
- [expiry](market_MarketAPI.Instrument.md#expiry)
- [expiryDetails](market_MarketAPI.Instrument.md#expirydetails)
- [forceOpenAllowed](market_MarketAPI.Instrument.md#forceopenallowed)
- [limitedRiskPremium](market_MarketAPI.Instrument.md#limitedriskpremium)
- [lotSize](market_MarketAPI.Instrument.md#lotsize)
- [marginDepositBands](market_MarketAPI.Instrument.md#margindepositbands)
- [marginFactor](market_MarketAPI.Instrument.md#marginfactor)
- [marginFactorUnit](market_MarketAPI.Instrument.md#marginfactorunit)
- [marketId](market_MarketAPI.Instrument.md#marketid)
- [name](market_MarketAPI.Instrument.md#name)
- [newsCode](market_MarketAPI.Instrument.md#newscode)
- [onePipMeans](market_MarketAPI.Instrument.md#onepipmeans)
- [openingHours](market_MarketAPI.Instrument.md#openinghours)
- [rolloverDetails](market_MarketAPI.Instrument.md#rolloverdetails)
- [slippageFactor](market_MarketAPI.Instrument.md#slippagefactor)
- [specialInfo](market_MarketAPI.Instrument.md#specialinfo)
- [sprintMarketsMaximumExpiryTime](market_MarketAPI.Instrument.md#sprintmarketsmaximumexpirytime)
- [sprintMarketsMinimumExpiryTime](market_MarketAPI.Instrument.md#sprintmarketsminimumexpirytime)
- [stopsLimitsAllowed](market_MarketAPI.Instrument.md#stopslimitsallowed)
- [streamingPricesAvailable](market_MarketAPI.Instrument.md#streamingpricesavailable)
- [type](market_MarketAPI.Instrument.md#type)
- [unit](market_MarketAPI.Instrument.md#unit)
- [valueOfOnePip](market_MarketAPI.Instrument.md#valueofonepip)

## Properties

### chartCode

• **chartCode**: `string`

#### Defined in

[market/MarketAPI.ts:40](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L40)

---

### contractSize

• **contractSize**: `string`

#### Defined in

[market/MarketAPI.ts:41](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L41)

---

### controlledRiskAllowed

• **controlledRiskAllowed**: `boolean`

#### Defined in

[market/MarketAPI.ts:42](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L42)

---

### country

• **country**: `string`

#### Defined in

[market/MarketAPI.ts:43](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L43)

---

### currencies

• **currencies**: [`Currency`](market_MarketAPI.Currency.md)[]

#### Defined in

[market/MarketAPI.ts:44](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L44)

---

### epic

• **epic**: `string`

#### Defined in

[market/MarketAPI.ts:45](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L45)

---

### expiry

• **expiry**: `string`

#### Defined in

[market/MarketAPI.ts:46](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L46)

---

### expiryDetails

• `Optional` **expiryDetails**: [`ExpiryDetail`](market_MarketAPI.ExpiryDetail.md)

#### Defined in

[market/MarketAPI.ts:47](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L47)

---

### forceOpenAllowed

• **forceOpenAllowed**: `boolean`

#### Defined in

[market/MarketAPI.ts:48](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L48)

---

### limitedRiskPremium

• **limitedRiskPremium**: [`LimitedRiskPremium`](market_MarketAPI.LimitedRiskPremium.md)

#### Defined in

[market/MarketAPI.ts:49](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L49)

---

### lotSize

• **lotSize**: `number`

#### Defined in

[market/MarketAPI.ts:50](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L50)

---

### marginDepositBands

• **marginDepositBands**: [`MarginDepositBand`](market_MarketAPI.MarginDepositBand.md)[]

#### Defined in

[market/MarketAPI.ts:51](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L51)

---

### marginFactor

• **marginFactor**: `number`

#### Defined in

[market/MarketAPI.ts:52](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L52)

---

### marginFactorUnit

• **marginFactorUnit**: `string`

#### Defined in

[market/MarketAPI.ts:53](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L53)

---

### marketId

• **marketId**: `string`

#### Defined in

[market/MarketAPI.ts:54](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L54)

---

### name

• **name**: `string`

#### Defined in

[market/MarketAPI.ts:55](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L55)

---

### newsCode

• **newsCode**: `string`

#### Defined in

[market/MarketAPI.ts:56](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L56)

---

### onePipMeans

• **onePipMeans**: `string`

#### Defined in

[market/MarketAPI.ts:57](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L57)

---

### openingHours

• `Optional` **openingHours**: `Object`

#### Type declaration

| Name          | Type       |
| :------------ | :--------- |
| `marketTimes` | `string`[] |

#### Defined in

[market/MarketAPI.ts:58](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L58)

---

### rolloverDetails

• `Optional` **rolloverDetails**: [`RolloverDetail`](market_MarketAPI.RolloverDetail.md)

#### Defined in

[market/MarketAPI.ts:61](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L61)

---

### slippageFactor

• **slippageFactor**: [`SlippageFactor`](market_MarketAPI.SlippageFactor.md)

#### Defined in

[market/MarketAPI.ts:62](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L62)

---

### specialInfo

• **specialInfo**: `string`[]

#### Defined in

[market/MarketAPI.ts:63](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L63)

---

### sprintMarketsMaximumExpiryTime

• `Optional` **sprintMarketsMaximumExpiryTime**: `number`

For sprint markets only, the maximum value to be specified as the expiry of a sprint markets trade.

#### Defined in

[market/MarketAPI.ts:65](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L65)

---

### sprintMarketsMinimumExpiryTime

• `Optional` **sprintMarketsMinimumExpiryTime**: `number`

For sprint markets only, the minimum value to be specified as the expiry of a sprint markets trade.

#### Defined in

[market/MarketAPI.ts:67](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L67)

---

### stopsLimitsAllowed

• **stopsLimitsAllowed**: `boolean`

#### Defined in

[market/MarketAPI.ts:68](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L68)

---

### streamingPricesAvailable

• **streamingPricesAvailable**: `boolean`

#### Defined in

[market/MarketAPI.ts:69](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L69)

---

### type

• **type**: [`InstrumentType`](../enums/market_MarketAPI.InstrumentType.md)

#### Defined in

[market/MarketAPI.ts:70](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L70)

---

### unit

• **unit**: [`InstrumentUnit`](../enums/market_MarketAPI.InstrumentUnit.md)

#### Defined in

[market/MarketAPI.ts:71](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L71)

---

### valueOfOnePip

• **valueOfOnePip**: `string`

#### Defined in

[market/MarketAPI.ts:72](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/market/MarketAPI.ts#L72)
