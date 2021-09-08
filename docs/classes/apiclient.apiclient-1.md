[ig-trading-api](../README.md) / [Exports](../modules.md) / [APIClient](../modules/APIClient.md) / APIClient

# Class: APIClient

[APIClient](../modules/APIClient.md).APIClient

## Table of contents

### Constructors

- [constructor](APIClient.APIClient-1.md#constructor)

### Properties

- [rest](APIClient.APIClient-1.md#rest)
- [stream](APIClient.APIClient-1.md#stream)
- [URL_DEMO](APIClient.APIClient-1.md#url_demo)
- [URL_LIVE](APIClient.APIClient-1.md#url_live)

### Accessors

- [isLive](APIClient.APIClient-1.md#islive)

## Constructors

### constructor

• **new APIClient**(`baseUrl`, `apiKey`)

#### Parameters

| Name      | Type                                                                            |
| :-------- | :------------------------------------------------------------------------------ |
| `baseUrl` | `string`                                                                        |
| `apiKey`  | `string` \| [`Authorization`](../interfaces/client_RESTClient.Authorization.md) |

#### Defined in

[APIClient.ts:11](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/APIClient.ts#L11)

## Properties

### rest

• `Readonly` **rest**: [`RESTClient`](client_RESTClient.RESTClient.md)

#### Defined in

[APIClient.ts:5](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/APIClient.ts#L5)

---

### stream

• `Readonly` **stream**: [`LightstreamerAPI`](lightstreamer_LightstreamerAPI.LightstreamerAPI.md)

#### Defined in

[APIClient.ts:6](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/APIClient.ts#L6)

---

### URL_DEMO

▪ `Static` **URL_DEMO**: `string` = `'https://demo-api.ig.com/gateway/deal/'`

#### Defined in

[APIClient.ts:8](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/APIClient.ts#L8)

---

### URL_LIVE

▪ `Static` **URL_LIVE**: `string` = `'https://api.ig.com/gateway/deal/'`

#### Defined in

[APIClient.ts:9](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/APIClient.ts#L9)

## Accessors

### isLive

• `get` **isLive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[APIClient.ts:16](https://github.com/bennycode/ig-trading-api/blob/98182c7/src/APIClient.ts#L16)
