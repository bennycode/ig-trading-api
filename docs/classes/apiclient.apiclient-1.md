[ig-trading-api](../README.md) / [Exports](../modules.md) / [APIClient](../modules/apiclient.md) / APIClient

# Class: APIClient

[APIClient](../modules/apiclient.md).APIClient

## Hierarchy

- **APIClient**

## Table of contents

### Constructors

- [constructor](apiclient.apiclient-1.md#constructor)

### Properties

- [rest](apiclient.apiclient-1.md#rest)
- [stream](apiclient.apiclient-1.md#stream)
- [URL_DEMO](apiclient.apiclient-1.md#url_demo)
- [URL_LIVE](apiclient.apiclient-1.md#url_live)

## Constructors

### constructor

\+ **new APIClient**(`baseUrl`: _string_, `apiKey`: _string_): [_APIClient_](apiclient.apiclient-1.md)

#### Parameters:

| Name      | Type     |
| --------- | -------- |
| `baseUrl` | _string_ |
| `apiKey`  | _string_ |

**Returns:** [_APIClient_](apiclient.apiclient-1.md)

Defined in: [APIClient.ts:8](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/APIClient.ts#L8)

## Properties

### rest

• `Readonly` **rest**: [_RESTClient_](client_restclient.restclient.md)

Defined in: [APIClient.ts:4](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/APIClient.ts#L4)

---

### stream

• `Readonly` **stream**: [_LightstreamerAPI_](lightstreamer_lightstreamerapi.lightstreamerapi.md)

Defined in: [APIClient.ts:5](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/APIClient.ts#L5)

---

### URL_DEMO

▪ `Static` **URL_DEMO**: _string_= 'https://demo-api.ig.com/gateway/deal/'

Defined in: [APIClient.ts:7](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/APIClient.ts#L7)

---

### URL_LIVE

▪ `Static` **URL_LIVE**: _string_= 'https://api.ig.com/gateway/deal/'

Defined in: [APIClient.ts:8](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/APIClient.ts#L8)
