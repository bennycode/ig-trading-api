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
- [auth](client_restclient.restclient.md#auth)
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

Defined in: [client/RESTClient.ts:32](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/client/RESTClient.ts#L32)

## Properties

### account

• `Readonly` **account**: [_AccountAPI_](account_accountapi.accountapi.md)

Defined in: [client/RESTClient.ts:29](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/client/RESTClient.ts#L29)

---

### auth

• `Readonly` **auth**: [_Authorization_](../interfaces/client_restclient.authorization.md)

Defined in: [client/RESTClient.ts:32](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/client/RESTClient.ts#L32)

---

### dealing

• `Readonly` **dealing**: [_DealingAPI_](dealing_dealingapi.dealingapi.md)

Defined in: [client/RESTClient.ts:28](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/client/RESTClient.ts#L28)

---

### httpClient

• `Readonly` **httpClient**: AxiosInstance

Defined in: [client/RESTClient.ts:31](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/client/RESTClient.ts#L31)

---

### login

• `Readonly` **login**: [_LoginAPI_](login_loginapi.loginapi.md)

Defined in: [client/RESTClient.ts:26](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/client/RESTClient.ts#L26)

---

### market

• `Readonly` **market**: [_MarketAPI_](market_marketapi.marketapi.md)

Defined in: [client/RESTClient.ts:27](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/client/RESTClient.ts#L27)

## Accessors

### defaults

• **defaults**(): AxiosRequestConfig

**Returns:** AxiosRequestConfig

Defined in: [client/RESTClient.ts:15](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/client/RESTClient.ts#L15)

---

### interceptors

• **interceptors**(): _object_

**Returns:** _object_

| Name       | Type                                                |
| ---------- | --------------------------------------------------- |
| `request`  | _AxiosInterceptorManager_<AxiosRequestConfig\>      |
| `response` | _AxiosInterceptorManager_<_AxiosResponse_<_any_\>\> |

Defined in: [client/RESTClient.ts:19](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/client/RESTClient.ts#L19)
