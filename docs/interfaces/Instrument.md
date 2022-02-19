[ig-trading-api](../README.md) / [Exports](../modules.md) / Instrument

# Interface: Instrument

## Table of contents

### Properties

- [chartCode](Instrument.md#chartcode)
- [contractSize](Instrument.md#contractsize)
- [controlledRiskAllowed](Instrument.md#controlledriskallowed)
- [country](Instrument.md#country)
- [currencies](Instrument.md#currencies)
- [epic](Instrument.md#epic)
- [expiry](Instrument.md#expiry)
- [expiryDetails](Instrument.md#expirydetails)
- [forceOpenAllowed](Instrument.md#forceopenallowed)
- [limitedRiskPremium](Instrument.md#limitedriskpremium)
- [lotSize](Instrument.md#lotsize)
- [marginDepositBands](Instrument.md#margindepositbands)
- [marginFactor](Instrument.md#marginfactor)
- [marginFactorUnit](Instrument.md#marginfactorunit)
- [marketId](Instrument.md#marketid)
- [name](Instrument.md#name)
- [newsCode](Instrument.md#newscode)
- [onePipMeans](Instrument.md#onepipmeans)
- [openingHours](Instrument.md#openinghours)
- [rolloverDetails](Instrument.md#rolloverdetails)
- [slippageFactor](Instrument.md#slippagefactor)
- [specialInfo](Instrument.md#specialinfo)
- [sprintMarketsMaximumExpiryTime](Instrument.md#sprintmarketsmaximumexpirytime)
- [sprintMarketsMinimumExpiryTime](Instrument.md#sprintmarketsminimumexpirytime)
- [stopsLimitsAllowed](Instrument.md#stopslimitsallowed)
- [streamingPricesAvailable](Instrument.md#streamingpricesavailable)
- [type](Instrument.md#type)
- [unit](Instrument.md#unit)
- [valueOfOnePip](Instrument.md#valueofonepip)

## Properties

### chartCode

• **chartCode**: `string`

#### Defined in

[market/MarketAPI.ts:40](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L40)

---

### contractSize

• **contractSize**: `string`

#### Defined in

[market/MarketAPI.ts:41](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L41)

---

### controlledRiskAllowed

• **controlledRiskAllowed**: `boolean`

#### Defined in

[market/MarketAPI.ts:42](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L42)

---

### country

• **country**: `string`

#### Defined in

[market/MarketAPI.ts:43](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L43)

---

### currencies

• **currencies**: [`Currency`](Currency.md)[]

#### Defined in

[market/MarketAPI.ts:44](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L44)

---

### epic

• **epic**: `string`

#### Defined in

[market/MarketAPI.ts:45](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L45)

---

### expiry

• **expiry**: `string`

#### Defined in

[market/MarketAPI.ts:46](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L46)

---

### expiryDetails

• `Optional` **expiryDetails**: [`ExpiryDetail`](ExpiryDetail.md)

#### Defined in

[market/MarketAPI.ts:47](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L47)

---

### forceOpenAllowed

• **forceOpenAllowed**: `boolean`

#### Defined in

[market/MarketAPI.ts:48](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L48)

---

### limitedRiskPremium

• **limitedRiskPremium**: [`LimitedRiskPremium`](LimitedRiskPremium.md)

#### Defined in

[market/MarketAPI.ts:49](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L49)

---

### lotSize

• **lotSize**: `number`

#### Defined in

[market/MarketAPI.ts:50](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L50)

---

### marginDepositBands

• **marginDepositBands**: [`MarginDepositBand`](MarginDepositBand.md)[]

#### Defined in

[market/MarketAPI.ts:51](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L51)

---

### marginFactor

• **marginFactor**: `number`

#### Defined in

[market/MarketAPI.ts:52](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L52)

---

### marginFactorUnit

• **marginFactorUnit**: `string`

#### Defined in

[market/MarketAPI.ts:53](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L53)

---

### marketId

• **marketId**: `string`

#### Defined in

[market/MarketAPI.ts:54](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L54)

---

### name

• **name**: `string`

#### Defined in

[market/MarketAPI.ts:55](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L55)

---

### newsCode

• **newsCode**: `string`

#### Defined in

[market/MarketAPI.ts:56](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L56)

---

### onePipMeans

• **onePipMeans**: `string`

#### Defined in

[market/MarketAPI.ts:57](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L57)

---

### openingHours

• `Optional` **openingHours**: `Object`

#### Type declaration

| Name          | Type       |
| :------------ | :--------- |
| `marketTimes` | `string`[] |

#### Defined in

[market/MarketAPI.ts:58](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L58)

---

### rolloverDetails

• `Optional` **rolloverDetails**: [`RolloverDetail`](RolloverDetail.md)

#### Defined in

[market/MarketAPI.ts:61](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L61)

---

### slippageFactor

• **slippageFactor**: [`SlippageFactor`](SlippageFactor.md)

#### Defined in

[market/MarketAPI.ts:62](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L62)

---

### specialInfo

• **specialInfo**: `string`[]

#### Defined in

[market/MarketAPI.ts:63](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L63)

---

### sprintMarketsMaximumExpiryTime

• `Optional` **sprintMarketsMaximumExpiryTime**: `number`

For sprint markets only, the maximum value to be specified as the expiry of a sprint markets trade.

#### Defined in

[market/MarketAPI.ts:65](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L65)

---

### sprintMarketsMinimumExpiryTime

• `Optional` **sprintMarketsMinimumExpiryTime**: `number`

For sprint markets only, the minimum value to be specified as the expiry of a sprint markets trade.

#### Defined in

[market/MarketAPI.ts:67](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L67)

---

### stopsLimitsAllowed

• **stopsLimitsAllowed**: `boolean`

#### Defined in

[market/MarketAPI.ts:68](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L68)

---

### streamingPricesAvailable

• **streamingPricesAvailable**: `boolean`

#### Defined in

[market/MarketAPI.ts:69](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L69)

---

### type

• **type**: [`InstrumentType`](../enums/InstrumentType.md)

#### Defined in

[market/MarketAPI.ts:70](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L70)

---

### unit

• **unit**: [`InstrumentUnit`](../enums/InstrumentUnit.md)

#### Defined in

[market/MarketAPI.ts:71](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L71)

---

### valueOfOnePip

• **valueOfOnePip**: `string`

#### Defined in

[market/MarketAPI.ts:72](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/market/MarketAPI.ts#L72)
