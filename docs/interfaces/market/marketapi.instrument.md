[ig-trading-api](../../README.md) / [Exports](../../modules.md) / [market/MarketAPI](../../modules/market_marketapi.md) / Instrument

# Interface: Instrument

[market/MarketAPI](../../modules/market_marketapi.md).Instrument

## Hierarchy

- **Instrument**

## Table of contents

### Properties

- [chartCode](marketapi.instrument.md#chartcode)
- [contractSize](marketapi.instrument.md#contractsize)
- [controlledRiskAllowed](marketapi.instrument.md#controlledriskallowed)
- [country](marketapi.instrument.md#country)
- [currencies](marketapi.instrument.md#currencies)
- [epic](marketapi.instrument.md#epic)
- [expiry](marketapi.instrument.md#expiry)
- [expiryDetails](marketapi.instrument.md#expirydetails)
- [forceOpenAllowed](marketapi.instrument.md#forceopenallowed)
- [limitedRiskPremium](marketapi.instrument.md#limitedriskpremium)
- [lotSize](marketapi.instrument.md#lotsize)
- [marginDepositBands](marketapi.instrument.md#margindepositbands)
- [marginFactor](marketapi.instrument.md#marginfactor)
- [marginFactorUnit](marketapi.instrument.md#marginfactorunit)
- [marketId](marketapi.instrument.md#marketid)
- [name](marketapi.instrument.md#name)
- [newsCode](marketapi.instrument.md#newscode)
- [onePipMeans](marketapi.instrument.md#onepipmeans)
- [openingHours](marketapi.instrument.md#openinghours)
- [rolloverDetails](marketapi.instrument.md#rolloverdetails)
- [slippageFactor](marketapi.instrument.md#slippagefactor)
- [specialInfo](marketapi.instrument.md#specialinfo)
- [sprintMarketsMaximumExpiryTime](marketapi.instrument.md#sprintmarketsmaximumexpirytime)
- [sprintMarketsMinimumExpiryTime](marketapi.instrument.md#sprintmarketsminimumexpirytime)
- [stopsLimitsAllowed](marketapi.instrument.md#stopslimitsallowed)
- [streamingPricesAvailable](marketapi.instrument.md#streamingpricesavailable)
- [type](marketapi.instrument.md#type)
- [unit](marketapi.instrument.md#unit)
- [valueOfOnePip](marketapi.instrument.md#valueofonepip)

## Properties

### chartCode

• **chartCode**: _string_

Defined in: [market/MarketAPI.ts:39](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L39)

---

### contractSize

• **contractSize**: _string_

Defined in: [market/MarketAPI.ts:40](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L40)

---

### controlledRiskAllowed

• **controlledRiskAllowed**: _boolean_

Defined in: [market/MarketAPI.ts:41](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L41)

---

### country

• **country**: _string_

Defined in: [market/MarketAPI.ts:42](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L42)

---

### currencies

• **currencies**: [_Currency_](marketapi.currency.md)[]

Defined in: [market/MarketAPI.ts:43](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L43)

---

### epic

• **epic**: _string_

Defined in: [market/MarketAPI.ts:44](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L44)

---

### expiry

• **expiry**: _string_

Defined in: [market/MarketAPI.ts:45](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L45)

---

### expiryDetails

• `Optional` **expiryDetails**: _undefined_ \| [_ExpiryDetail_](marketapi.expirydetail.md)

Defined in: [market/MarketAPI.ts:46](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L46)

---

### forceOpenAllowed

• **forceOpenAllowed**: _boolean_

Defined in: [market/MarketAPI.ts:47](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L47)

---

### limitedRiskPremium

• **limitedRiskPremium**: [_LimitedRiskPremium_](marketapi.limitedriskpremium.md)

Defined in: [market/MarketAPI.ts:48](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L48)

---

### lotSize

• **lotSize**: _number_

Defined in: [market/MarketAPI.ts:49](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L49)

---

### marginDepositBands

• **marginDepositBands**: [_MarginDepositBand_](marketapi.margindepositband.md)[]

Defined in: [market/MarketAPI.ts:50](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L50)

---

### marginFactor

• **marginFactor**: _number_

Defined in: [market/MarketAPI.ts:51](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L51)

---

### marginFactorUnit

• **marginFactorUnit**: _string_

Defined in: [market/MarketAPI.ts:52](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L52)

---

### marketId

• **marketId**: _string_

Defined in: [market/MarketAPI.ts:53](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L53)

---

### name

• **name**: _string_

Defined in: [market/MarketAPI.ts:54](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L54)

---

### newsCode

• **newsCode**: _string_

Defined in: [market/MarketAPI.ts:55](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L55)

---

### onePipMeans

• **onePipMeans**: _string_

Defined in: [market/MarketAPI.ts:56](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L56)

---

### openingHours

• `Optional` **openingHours**: _undefined_ \| { `marketTimes`: _string_[] }

Defined in: [market/MarketAPI.ts:57](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L57)

---

### rolloverDetails

• `Optional` **rolloverDetails**: _undefined_ \| [_RolloverDetail_](marketapi.rolloverdetail.md)

Defined in: [market/MarketAPI.ts:60](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L60)

---

### slippageFactor

• **slippageFactor**: [_SlippageFactor_](marketapi.slippagefactor.md)

Defined in: [market/MarketAPI.ts:61](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L61)

---

### specialInfo

• **specialInfo**: _string_[]

Defined in: [market/MarketAPI.ts:62](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L62)

---

### sprintMarketsMaximumExpiryTime

• `Optional` **sprintMarketsMaximumExpiryTime**: _undefined_ \| _number_

For sprint markets only, the maximum value to be specified as the expiry of a sprint markets trade.

Defined in: [market/MarketAPI.ts:64](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L64)

---

### sprintMarketsMinimumExpiryTime

• `Optional` **sprintMarketsMinimumExpiryTime**: _undefined_ \| _number_

For sprint markets only, the minimum value to be specified as the expiry of a sprint markets trade.

Defined in: [market/MarketAPI.ts:66](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L66)

---

### stopsLimitsAllowed

• **stopsLimitsAllowed**: _boolean_

Defined in: [market/MarketAPI.ts:67](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L67)

---

### streamingPricesAvailable

• **streamingPricesAvailable**: _boolean_

Defined in: [market/MarketAPI.ts:68](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L68)

---

### type

• **type**: _BUNGEE_COMMODITIES_ \| _BUNGEE_CURRENCIES_ \| _BUNGEE_INDICES_ \| _COMMODITIES_ \| _CURRENCIES_ \| _INDICES_ \| _OPT_COMMODITIES_ \| _OPT_CURRENCIES_ \| _OPT_INDICES_ \| _OPT_RATES_ \| _OPT_SHARES_ \| _RATES_ \| _SECTORS_ \| _SHARES_ \| _SPRINT_MARKET_ \| _TEST_MARKET_ \| _UNKNOWN_

Defined in: [market/MarketAPI.ts:69](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L69)

---

### unit

• **unit**: _SHARES_ \| _AMOUNT_ \| _CONTRACTS_

Defined in: [market/MarketAPI.ts:87](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L87)

---

### valueOfOnePip

• **valueOfOnePip**: _string_

Defined in: [market/MarketAPI.ts:88](https://github.com/bennycode/ig-trading-api/blob/d998514/src/market/MarketAPI.ts#L88)
