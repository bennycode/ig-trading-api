[ig-trading-api](../README.md) / [Exports](../modules.md) / [market/MarketAPI](../modules/market_marketapi.md) / Instrument

# Interface: Instrument

[market/MarketAPI](../modules/market_marketapi.md).Instrument

## Table of contents

### Properties

- [chartCode](market_marketapi.instrument.md#chartcode)
- [contractSize](market_marketapi.instrument.md#contractsize)
- [controlledRiskAllowed](market_marketapi.instrument.md#controlledriskallowed)
- [country](market_marketapi.instrument.md#country)
- [currencies](market_marketapi.instrument.md#currencies)
- [epic](market_marketapi.instrument.md#epic)
- [expiry](market_marketapi.instrument.md#expiry)
- [expiryDetails](market_marketapi.instrument.md#expirydetails)
- [forceOpenAllowed](market_marketapi.instrument.md#forceopenallowed)
- [limitedRiskPremium](market_marketapi.instrument.md#limitedriskpremium)
- [lotSize](market_marketapi.instrument.md#lotsize)
- [marginDepositBands](market_marketapi.instrument.md#margindepositbands)
- [marginFactor](market_marketapi.instrument.md#marginfactor)
- [marginFactorUnit](market_marketapi.instrument.md#marginfactorunit)
- [marketId](market_marketapi.instrument.md#marketid)
- [name](market_marketapi.instrument.md#name)
- [newsCode](market_marketapi.instrument.md#newscode)
- [onePipMeans](market_marketapi.instrument.md#onepipmeans)
- [openingHours](market_marketapi.instrument.md#openinghours)
- [rolloverDetails](market_marketapi.instrument.md#rolloverdetails)
- [slippageFactor](market_marketapi.instrument.md#slippagefactor)
- [specialInfo](market_marketapi.instrument.md#specialinfo)
- [sprintMarketsMaximumExpiryTime](market_marketapi.instrument.md#sprintmarketsmaximumexpirytime)
- [sprintMarketsMinimumExpiryTime](market_marketapi.instrument.md#sprintmarketsminimumexpirytime)
- [stopsLimitsAllowed](market_marketapi.instrument.md#stopslimitsallowed)
- [streamingPricesAvailable](market_marketapi.instrument.md#streamingpricesavailable)
- [type](market_marketapi.instrument.md#type)
- [unit](market_marketapi.instrument.md#unit)
- [valueOfOnePip](market_marketapi.instrument.md#valueofonepip)

## Properties

### chartCode

• **chartCode**: _string_

Defined in: [market/MarketAPI.ts:40](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L40)

---

### contractSize

• **contractSize**: _string_

Defined in: [market/MarketAPI.ts:41](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L41)

---

### controlledRiskAllowed

• **controlledRiskAllowed**: _boolean_

Defined in: [market/MarketAPI.ts:42](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L42)

---

### country

• **country**: _string_

Defined in: [market/MarketAPI.ts:43](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L43)

---

### currencies

• **currencies**: [_Currency_](market_marketapi.currency.md)[]

Defined in: [market/MarketAPI.ts:44](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L44)

---

### epic

• **epic**: _string_

Defined in: [market/MarketAPI.ts:45](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L45)

---

### expiry

• **expiry**: _string_

Defined in: [market/MarketAPI.ts:46](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L46)

---

### expiryDetails

• `Optional` **expiryDetails**: [_ExpiryDetail_](market_marketapi.expirydetail.md)

Defined in: [market/MarketAPI.ts:47](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L47)

---

### forceOpenAllowed

• **forceOpenAllowed**: _boolean_

Defined in: [market/MarketAPI.ts:48](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L48)

---

### limitedRiskPremium

• **limitedRiskPremium**: [_LimitedRiskPremium_](market_marketapi.limitedriskpremium.md)

Defined in: [market/MarketAPI.ts:49](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L49)

---

### lotSize

• **lotSize**: _number_

Defined in: [market/MarketAPI.ts:50](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L50)

---

### marginDepositBands

• **marginDepositBands**: [_MarginDepositBand_](market_marketapi.margindepositband.md)[]

Defined in: [market/MarketAPI.ts:51](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L51)

---

### marginFactor

• **marginFactor**: _number_

Defined in: [market/MarketAPI.ts:52](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L52)

---

### marginFactorUnit

• **marginFactorUnit**: _string_

Defined in: [market/MarketAPI.ts:53](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L53)

---

### marketId

• **marketId**: _string_

Defined in: [market/MarketAPI.ts:54](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L54)

---

### name

• **name**: _string_

Defined in: [market/MarketAPI.ts:55](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L55)

---

### newsCode

• **newsCode**: _string_

Defined in: [market/MarketAPI.ts:56](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L56)

---

### onePipMeans

• **onePipMeans**: _string_

Defined in: [market/MarketAPI.ts:57](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L57)

---

### openingHours

• `Optional` **openingHours**: _object_

#### Type declaration

| Name          | Type       |
| :------------ | :--------- |
| `marketTimes` | _string_[] |

Defined in: [market/MarketAPI.ts:58](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L58)

---

### rolloverDetails

• `Optional` **rolloverDetails**: [_RolloverDetail_](market_marketapi.rolloverdetail.md)

Defined in: [market/MarketAPI.ts:61](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L61)

---

### slippageFactor

• **slippageFactor**: [_SlippageFactor_](market_marketapi.slippagefactor.md)

Defined in: [market/MarketAPI.ts:62](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L62)

---

### specialInfo

• **specialInfo**: _string_[]

Defined in: [market/MarketAPI.ts:63](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L63)

---

### sprintMarketsMaximumExpiryTime

• `Optional` **sprintMarketsMaximumExpiryTime**: _number_

For sprint markets only, the maximum value to be specified as the expiry of a sprint markets trade.

Defined in: [market/MarketAPI.ts:65](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L65)

---

### sprintMarketsMinimumExpiryTime

• `Optional` **sprintMarketsMinimumExpiryTime**: _number_

For sprint markets only, the minimum value to be specified as the expiry of a sprint markets trade.

Defined in: [market/MarketAPI.ts:67](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L67)

---

### stopsLimitsAllowed

• **stopsLimitsAllowed**: _boolean_

Defined in: [market/MarketAPI.ts:68](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L68)

---

### streamingPricesAvailable

• **streamingPricesAvailable**: _boolean_

Defined in: [market/MarketAPI.ts:69](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L69)

---

### type

• **type**: [_InstrumentType_](../enums/market_marketapi.instrumenttype.md)

Defined in: [market/MarketAPI.ts:70](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L70)

---

### unit

• **unit**: [_InstrumentUnit_](../enums/market_marketapi.instrumentunit.md)

Defined in: [market/MarketAPI.ts:71](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L71)

---

### valueOfOnePip

• **valueOfOnePip**: _string_

Defined in: [market/MarketAPI.ts:72](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/market/MarketAPI.ts#L72)
