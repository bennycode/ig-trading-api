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

Defined in: [APIClient.ts:7](https://github.com/bennycode/ig-trading-api/blob/b3c6a4e/src/APIClient.ts#L7)

## Properties

### rest

• `Readonly` **rest**: [_RESTClient_](client_restclient.restclient.md)

Defined in: [APIClient.ts:4](https://github.com/bennycode/ig-trading-api/blob/b3c6a4e/src/APIClient.ts#L4)

---

### URL_DEMO

▪ `Static` **URL_DEMO**: _string_= 'https://demo-api.ig.com/gateway/deal/'

Defined in: [APIClient.ts:6](https://github.com/bennycode/ig-trading-api/blob/b3c6a4e/src/APIClient.ts#L6)

---

### URL_LIVE

▪ `Static` **URL_LIVE**: _string_= 'https://api.ig.com/gateway/deal/'

Defined in: [APIClient.ts:7](https://github.com/bennycode/ig-trading-api/blob/b3c6a4e/src/APIClient.ts#L7)
