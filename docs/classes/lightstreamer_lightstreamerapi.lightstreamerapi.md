[ig-trading-api](../README.md) / [Exports](../modules.md) / [lightstreamer/LightstreamerAPI](../modules/lightstreamer_lightstreamerapi.md) / LightstreamerAPI

# Class: LightstreamerAPI

[lightstreamer/LightstreamerAPI](../modules/lightstreamer_lightstreamerapi.md).LightstreamerAPI

## Hierarchy

- **LightstreamerAPI**

## Table of contents

### Constructors

- [constructor](lightstreamer_lightstreamerapi.lightstreamerapi.md#constructor)

### Properties

- [candleSubscription](lightstreamer_lightstreamerapi.lightstreamerapi.md#candlesubscription)
- [lightstream](lightstreamer_lightstreamerapi.lightstreamerapi.md#lightstream)

### Methods

- [subscribeCandles](lightstreamer_lightstreamerapi.lightstreamerapi.md#subscribecandles)

## Constructors

### constructor

\+ **new LightstreamerAPI**(`auth`: [_Authorization_](../interfaces/client_restclient.authorization.md)): [_LightstreamerAPI_](lightstreamer_lightstreamerapi.lightstreamerapi.md)

#### Parameters:

| Name   | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| `auth` | [_Authorization_](../interfaces/client_restclient.authorization.md) |

**Returns:** [_LightstreamerAPI_](lightstreamer_lightstreamerapi.lightstreamerapi.md)

Defined in: [lightstreamer/LightstreamerAPI.ts:9](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/lightstreamer/LightstreamerAPI.ts#L9)

## Properties

### candleSubscription

• `Optional` **candleSubscription**: _undefined_ \| _Subscription_

Defined in: [lightstreamer/LightstreamerAPI.ts:9](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/lightstreamer/LightstreamerAPI.ts#L9)

---

### lightstream

• `Optional` **lightstream**: _undefined_ \| _LightstreamerClient_

Defined in: [lightstreamer/LightstreamerAPI.ts:8](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/lightstreamer/LightstreamerAPI.ts#L8)

## Methods

### subscribeCandles

▸ **subscribeCandles**(`epicList`: _string_[], `resolution`: [_ChartResolution_](../enums/lightstreamer_interfaces.chartresolution.md), `onCandleUpdate`: (`epic`: _string_, `candle`: [_CandleStick_](../interfaces/market_prices_priceapi.candlestick.md)) => _void_): _void_

#### Parameters:

| Name | Type |
| --- | --- |
| `epicList` | _string_[] |
| `resolution` | [_ChartResolution_](../enums/lightstreamer_interfaces.chartresolution.md) |
| `onCandleUpdate` | (`epic`: _string_, `candle`: [_CandleStick_](../interfaces/market_prices_priceapi.candlestick.md)) => _void_ |

**Returns:** _void_

Defined in: [lightstreamer/LightstreamerAPI.ts:25](https://github.com/bennycode/ig-trading-api/blob/1448b27/src/lightstreamer/LightstreamerAPI.ts#L25)
