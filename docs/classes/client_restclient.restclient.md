[ig-trading-api](../README.md) / [Exports](../modules.md) / [client/RESTClient](../modules/client_restclient.md) / RESTClient

# Class: RESTClient

[client/RESTClient](../modules/client_restclient.md).RESTClient

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

\+ **new RESTClient**(`baseURL`: _string_, `apiKey`: _string_ \| [_Authorization_](../interfaces/client_restclient.authorization.md)): [_RESTClient_](client_restclient.restclient.md)

#### Parameters

| Name      | Type                                                                            |
| :-------- | :------------------------------------------------------------------------------ |
| `baseURL` | _string_                                                                        |
| `apiKey`  | _string_ \| [_Authorization_](../interfaces/client_restclient.authorization.md) |

**Returns:** [_RESTClient_](client_restclient.restclient.md)

Defined in: [client/RESTClient.ts:38](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/client/RESTClient.ts#L38)

## Properties

### account

• `Readonly` **account**: [_AccountAPI_](account_accountapi.accountapi.md)

Defined in: [client/RESTClient.ts:35](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/client/RESTClient.ts#L35)

---

### auth

• `Readonly` **auth**: [_Authorization_](../interfaces/client_restclient.authorization.md)= {}

Defined in: [client/RESTClient.ts:38](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/client/RESTClient.ts#L38)

---

### dealing

• `Readonly` **dealing**: [_DealingAPI_](dealing_dealingapi.dealingapi.md)

Defined in: [client/RESTClient.ts:34](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/client/RESTClient.ts#L34)

---

### httpClient

• `Readonly` **httpClient**: AxiosInstance

Defined in: [client/RESTClient.ts:37](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/client/RESTClient.ts#L37)

---

### login

• `Readonly` **login**: [_LoginAPI_](login_loginapi.loginapi.md)

Defined in: [client/RESTClient.ts:32](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/client/RESTClient.ts#L32)

---

### market

• `Readonly` **market**: [_MarketAPI_](market_marketapi.marketapi.md)

Defined in: [client/RESTClient.ts:33](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/client/RESTClient.ts#L33)

## Accessors

### defaults

• get **defaults**(): AxiosRequestConfig

**Returns:** AxiosRequestConfig

Defined in: [client/RESTClient.ts:21](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/client/RESTClient.ts#L21)

---

### interceptors

• get **interceptors**(): _object_

**Returns:** _object_

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `request`  | _AxiosInterceptorManager_<AxiosRequestConfig\>  |
| `response` | _AxiosInterceptorManager_<AxiosResponse<any\>\> |

Defined in: [client/RESTClient.ts:25](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/client/RESTClient.ts#L25)
