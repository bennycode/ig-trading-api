[ig-trading-api](../README.md) / [Exports](../modules.md) / [client/RESTClient](../modules/client_restclient.md) / RESTClient

# Class: RESTClient

[client/RESTClient](../modules/client_restclient.md).RESTClient

## Hierarchy

- **RESTClient**

## Table of contents

### Constructors

- [constructor](client_restclient.restclient.md#constructor)

### Properties

- [dealing](client_restclient.restclient.md#dealing)
- [httpClient](client_restclient.restclient.md#httpclient)
- [login](client_restclient.restclient.md#login)
- [market](client_restclient.restclient.md#market)

### Accessors

- [defaults](client_restclient.restclient.md#defaults)
- [interceptors](client_restclient.restclient.md#interceptors)

## Constructors

### constructor

\+ **new RESTClient**(`baseURL`: _string_, `apiKey`: _string_): [_RESTClient_](client_restclient.restclient.md)

#### Parameters:

| Name      | Type     |
| --------- | -------- |
| `baseURL` | _string_ |
| `apiKey`  | _string_ |

**Returns:** [_RESTClient_](client_restclient.restclient.md)

Defined in: [client/RESTClient.ts:28](https://github.com/bennycode/ig-trading-api/blob/e06a01d/src/client/RESTClient.ts#L28)

## Properties

### dealing

• `Readonly` **dealing**: [_DealingAPI_](dealing_dealingapi.dealingapi.md)

Defined in: [client/RESTClient.ts:25](https://github.com/bennycode/ig-trading-api/blob/e06a01d/src/client/RESTClient.ts#L25)

---

### httpClient

• `Readonly` **httpClient**: AxiosInstance

Defined in: [client/RESTClient.ts:27](https://github.com/bennycode/ig-trading-api/blob/e06a01d/src/client/RESTClient.ts#L27)

---

### login

• `Readonly` **login**: [_LoginAPI_](login_loginapi.loginapi.md)

Defined in: [client/RESTClient.ts:23](https://github.com/bennycode/ig-trading-api/blob/e06a01d/src/client/RESTClient.ts#L23)

---

### market

• `Readonly` **market**: [_MarketAPI_](market_marketapi.marketapi.md)

Defined in: [client/RESTClient.ts:24](https://github.com/bennycode/ig-trading-api/blob/e06a01d/src/client/RESTClient.ts#L24)

## Accessors

### defaults

• **defaults**(): AxiosRequestConfig

**Returns:** AxiosRequestConfig

Defined in: [client/RESTClient.ts:12](https://github.com/bennycode/ig-trading-api/blob/e06a01d/src/client/RESTClient.ts#L12)

---

### interceptors

• **interceptors**(): _object_

**Returns:** _object_

| Name       | Type                                                |
| ---------- | --------------------------------------------------- |
| `request`  | _AxiosInterceptorManager_<AxiosRequestConfig\>      |
| `response` | _AxiosInterceptorManager_<_AxiosResponse_<_any_\>\> |

Defined in: [client/RESTClient.ts:16](https://github.com/bennycode/ig-trading-api/blob/e06a01d/src/client/RESTClient.ts#L16)
