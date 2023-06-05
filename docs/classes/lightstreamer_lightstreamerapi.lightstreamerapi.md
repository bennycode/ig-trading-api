[ig-trading-api](../README.md) / [Exports](../modules.md) / [lightstreamer/LightstreamerAPI](../modules/lightstreamer_LightstreamerAPI.md) / LightstreamerAPI

# Class: LightstreamerAPI

[lightstreamer/LightstreamerAPI](../modules/lightstreamer_LightstreamerAPI.md).LightstreamerAPI

## Table of contents

### Constructors

- [constructor](lightstreamer_LightstreamerAPI.LightstreamerAPI.md#constructor)

### Properties

- [candleSubscription](lightstreamer_LightstreamerAPI.LightstreamerAPI.md#candlesubscription)
- [lightstream](lightstreamer_LightstreamerAPI.LightstreamerAPI.md#lightstream)

### Methods

- [subscribeCandles](lightstreamer_LightstreamerAPI.LightstreamerAPI.md#subscribecandles)

## Constructors

### constructor

• **new LightstreamerAPI**(`auth`)

#### Parameters

| Name   | Type                                                                |
| :----- | :------------------------------------------------------------------ |
| `auth` | [`Authorization`](../interfaces/client_RESTClient.Authorization.md) |

#### Defined in

[lightstreamer/LightstreamerAPI.ts:11](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/lightstreamer/LightstreamerAPI.ts#L11)

## Properties

### candleSubscription

• `Optional` **candleSubscription**: `Subscription`

#### Defined in

[lightstreamer/LightstreamerAPI.ts:9](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/lightstreamer/LightstreamerAPI.ts#L9)

---

### lightstream

• `Optional` **lightstream**: `LightstreamerClient`

#### Defined in

[lightstreamer/LightstreamerAPI.ts:8](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/lightstreamer/LightstreamerAPI.ts#L8)

## Methods

### subscribeCandles

▸ **subscribeCandles**(`epicList`, `resolution`, `onCandleUpdate`): `LightstreamerClient`

#### Parameters

| Name | Type |
| :-- | :-- |
| `epicList` | `string`[] |
| `resolution` | [`ChartResolution`](../enums/lightstreamer_interfaces.ChartResolution.md) |
| `onCandleUpdate` | (`epic`: `string`, `candle`: [`CandleStick`](../interfaces/market_prices_PriceAPI.CandleStick.md)) => `void` |

#### Returns

`LightstreamerClient`

#### Defined in

[lightstreamer/LightstreamerAPI.ts:25](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/lightstreamer/LightstreamerAPI.ts#L25)
