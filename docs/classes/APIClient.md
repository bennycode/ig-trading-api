[ig-trading-api](../README.md) / [Exports](../modules.md) / APIClient

# Class: APIClient

## Table of contents

### Constructors

- [constructor](APIClient.md#constructor)

### Properties

- [rest](APIClient.md#rest)
- [stream](APIClient.md#stream)
- [URL_DEMO](APIClient.md#url_demo)
- [URL_LIVE](APIClient.md#url_live)

### Accessors

- [isLive](APIClient.md#islive)

## Constructors

### constructor

• **new APIClient**(`baseUrl`, `apiKey`)

#### Parameters

| Name      | Type                        |
| :-------- | :-------------------------- |
| `baseUrl` | `string`                    |
| `apiKey`  | `string` \| `Authorization` |

#### Defined in

[APIClient.ts:11](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/APIClient.ts#L11)

## Properties

### rest

• `Readonly` **rest**: `RESTClient`

#### Defined in

[APIClient.ts:5](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/APIClient.ts#L5)

---

### stream

• `Readonly` **stream**: `LightstreamerAPI`

#### Defined in

[APIClient.ts:6](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/APIClient.ts#L6)

---

### URL_DEMO

▪ `Static` **URL_DEMO**: `string` = `'https://demo-api.ig.com/gateway/deal/'`

#### Defined in

[APIClient.ts:8](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/APIClient.ts#L8)

---

### URL_LIVE

▪ `Static` **URL_LIVE**: `string` = `'https://api.ig.com/gateway/deal/'`

#### Defined in

[APIClient.ts:9](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/APIClient.ts#L9)

## Accessors

### isLive

• `get` **isLive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[APIClient.ts:16](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/APIClient.ts#L16)
