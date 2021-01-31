[ig-trading-api](../README.md) / [Exports](../modules.md) / [client/RESTClient](../modules/client_restclient.md) / RESTClient

# Class: RESTClient

[client/RESTClient](../modules/client_restclient.md).RESTClient

## Hierarchy

- **RESTClient**

## Table of contents

### Constructors

- [constructor](client_restclient.restclient.md#constructor)

### Properties

- [account](client_restclient.restclient.md#account)
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

Defined in: [client/RESTClient.ts:30](https://github.com/bennycode/ig-trading-api/blob/2436905/src/client/RESTClient.ts#L30)

## Properties

### account

• `Readonly` **account**: [_AccountAPI_](account_accountapi.accountapi.md)

Defined in: [client/RESTClient.ts:27](https://github.com/bennycode/ig-trading-api/blob/2436905/src/client/RESTClient.ts#L27)

---

### dealing

• `Readonly` **dealing**: [_DealingAPI_](dealing_dealingapi.dealingapi.md)

Defined in: [client/RESTClient.ts:26](https://github.com/bennycode/ig-trading-api/blob/2436905/src/client/RESTClient.ts#L26)

---

### httpClient

• `Readonly` **httpClient**: AxiosInstance

Defined in: [client/RESTClient.ts:29](https://github.com/bennycode/ig-trading-api/blob/2436905/src/client/RESTClient.ts#L29)

---

### login

• `Readonly` **login**: [_LoginAPI_](login_loginapi.loginapi.md)

Defined in: [client/RESTClient.ts:24](https://github.com/bennycode/ig-trading-api/blob/2436905/src/client/RESTClient.ts#L24)

---

### market

• `Readonly` **market**: [_MarketAPI_](market_marketapi.marketapi.md)

Defined in: [client/RESTClient.ts:25](https://github.com/bennycode/ig-trading-api/blob/2436905/src/client/RESTClient.ts#L25)

## Accessors

### defaults

• **defaults**(): AxiosRequestConfig

**Returns:** AxiosRequestConfig

Defined in: [client/RESTClient.ts:13](https://github.com/bennycode/ig-trading-api/blob/2436905/src/client/RESTClient.ts#L13)

---

### interceptors

• **interceptors**(): _object_

**Returns:** _object_

| Name       | Type                                                |
| ---------- | --------------------------------------------------- |
| `request`  | _AxiosInterceptorManager_<AxiosRequestConfig\>      |
| `response` | _AxiosInterceptorManager_<_AxiosResponse_<_any_\>\> |

Defined in: [client/RESTClient.ts:17](https://github.com/bennycode/ig-trading-api/blob/2436905/src/client/RESTClient.ts#L17)
