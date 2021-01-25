[ig-trading-api](../../README.md) / [Exports](../../modules.md) / [client/RESTClient](../../modules/client_restclient.md) / RESTClient

# Class: RESTClient

[client/RESTClient](../../modules/client_restclient.md).RESTClient

## Hierarchy

- **RESTClient**

## Table of contents

### Constructors

- [constructor](restclient.restclient.md#constructor)

### Properties

- [httpClient](restclient.restclient.md#httpclient)
- [login](restclient.restclient.md#login)
- [market](restclient.restclient.md#market)

### Accessors

- [defaults](restclient.restclient.md#defaults)
- [interceptors](restclient.restclient.md#interceptors)

## Constructors

### constructor

\+ **new RESTClient**(`baseURL`: _string_, `apiKey`: _string_): [_RESTClient_](restclient.restclient.md)

#### Parameters:

| Name      | Type     |
| --------- | -------- |
| `baseURL` | _string_ |
| `apiKey`  | _string_ |

**Returns:** [_RESTClient_](restclient.restclient.md)

Defined in: [client/RESTClient.ts:26](https://github.com/bennycode/ig-trading-api/blob/d998514/src/client/RESTClient.ts#L26)

## Properties

### httpClient

• `Readonly` **httpClient**: AxiosInstance

Defined in: [client/RESTClient.ts:25](https://github.com/bennycode/ig-trading-api/blob/d998514/src/client/RESTClient.ts#L25)

---

### login

• `Readonly` **login**: [_LoginAPI_](../login/loginapi.loginapi.md)

Defined in: [client/RESTClient.ts:22](https://github.com/bennycode/ig-trading-api/blob/d998514/src/client/RESTClient.ts#L22)

---

### market

• `Readonly` **market**: [_MarketAPI_](../market/marketapi.marketapi.md)

Defined in: [client/RESTClient.ts:23](https://github.com/bennycode/ig-trading-api/blob/d998514/src/client/RESTClient.ts#L23)

## Accessors

### defaults

• **defaults**(): AxiosRequestConfig

**Returns:** AxiosRequestConfig

Defined in: [client/RESTClient.ts:11](https://github.com/bennycode/ig-trading-api/blob/d998514/src/client/RESTClient.ts#L11)

---

### interceptors

• **interceptors**(): _object_

**Returns:** _object_

| Name       | Type                                                |
| ---------- | --------------------------------------------------- |
| `request`  | _AxiosInterceptorManager_<AxiosRequestConfig\>      |
| `response` | _AxiosInterceptorManager_<_AxiosResponse_<_any_\>\> |

Defined in: [client/RESTClient.ts:15](https://github.com/bennycode/ig-trading-api/blob/d998514/src/client/RESTClient.ts#L15)
