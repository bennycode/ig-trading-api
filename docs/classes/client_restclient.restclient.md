[ig-trading-api](../README.md) / [Exports](../modules.md) / [client/RESTClient](../modules/client_RESTClient.md) / RESTClient

# Class: RESTClient

[client/RESTClient](../modules/client_RESTClient.md).RESTClient

## Table of contents

### Constructors

- [constructor](client_RESTClient.RESTClient.md#constructor)

### Properties

- [account](client_RESTClient.RESTClient.md#account)
- [auth](client_RESTClient.RESTClient.md#auth)
- [dealing](client_RESTClient.RESTClient.md#dealing)
- [httpClient](client_RESTClient.RESTClient.md#httpclient)
- [login](client_RESTClient.RESTClient.md#login)
- [market](client_RESTClient.RESTClient.md#market)

### Accessors

- [defaults](client_RESTClient.RESTClient.md#defaults)
- [interceptors](client_RESTClient.RESTClient.md#interceptors)

## Constructors

### constructor

• **new RESTClient**(`baseURL`, `apiKey`)

#### Parameters

| Name      | Type                                                                            |
| :-------- | :------------------------------------------------------------------------------ |
| `baseURL` | `string`                                                                        |
| `apiKey`  | `string` \| [`Authorization`](../interfaces/client_RESTClient.Authorization.md) |

#### Defined in

[client/RESTClient.ts:40](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/client/RESTClient.ts#L40)

## Properties

### account

• `Readonly` **account**: [`AccountAPI`](account_AccountAPI.AccountAPI.md)

#### Defined in

[client/RESTClient.ts:35](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/client/RESTClient.ts#L35)

---

### auth

• `Readonly` **auth**: [`Authorization`](../interfaces/client_RESTClient.Authorization.md) = `{}`

#### Defined in

[client/RESTClient.ts:38](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/client/RESTClient.ts#L38)

---

### dealing

• `Readonly` **dealing**: [`DealingAPI`](dealing_DealingAPI.DealingAPI.md)

#### Defined in

[client/RESTClient.ts:34](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/client/RESTClient.ts#L34)

---

### httpClient

• `Readonly` **httpClient**: `AxiosInstance`

#### Defined in

[client/RESTClient.ts:37](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/client/RESTClient.ts#L37)

---

### login

• `Readonly` **login**: [`LoginAPI`](login_LoginAPI.LoginAPI.md)

#### Defined in

[client/RESTClient.ts:32](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/client/RESTClient.ts#L32)

---

### market

• `Readonly` **market**: [`MarketAPI`](market_MarketAPI.MarketAPI.md)

#### Defined in

[client/RESTClient.ts:33](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/client/RESTClient.ts#L33)

## Accessors

### defaults

• `get` **defaults**(): `AxiosRequestConfig`

#### Returns

`AxiosRequestConfig`

#### Defined in

[client/RESTClient.ts:21](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/client/RESTClient.ts#L21)

---

### interceptors

• `get` **interceptors**(): `Object`

#### Returns

`Object`

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `request`  | `AxiosInterceptorManager`<`AxiosRequestConfig`\>    |
| `response` | `AxiosInterceptorManager`<`AxiosResponse`<`any`\>\> |

#### Defined in

[client/RESTClient.ts:25](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/client/RESTClient.ts#L25)
