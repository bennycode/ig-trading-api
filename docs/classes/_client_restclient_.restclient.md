**[ig-trading-api](../README.md)**

> [Globals](../globals.md) / ["client/RESTClient"](../modules/_client_restclient_.md) / RESTClient

# Class: RESTClient

## Hierarchy

* **RESTClient**

## Index

### Constructors

* [constructor](_client_restclient_.restclient.md#constructor)

### Properties

* [login](_client_restclient_.restclient.md#login)
* [market](_client_restclient_.restclient.md#market)

### Accessors

* [defaults](_client_restclient_.restclient.md#defaults)
* [interceptors](_client_restclient_.restclient.md#interceptors)

## Constructors

### constructor

\+ **new RESTClient**(`baseURL`: string, `apiKey`: string): [RESTClient](_client_restclient_.restclient.md)

*Defined in [client/RESTClient.ts:26](https://github.com/bennycode/ig-trading-api/blob/609342c/src/client/RESTClient.ts#L26)*

#### Parameters:

Name | Type |
------ | ------ |
`baseURL` | string |
`apiKey` | string |

**Returns:** [RESTClient](_client_restclient_.restclient.md)

## Properties

### login

• `Readonly` **login**: [LoginAPI](_login_loginapi_.loginapi.md)

*Defined in [client/RESTClient.ts:22](https://github.com/bennycode/ig-trading-api/blob/609342c/src/client/RESTClient.ts#L22)*

___

### market

• `Readonly` **market**: [MarketAPI](_market_marketapi_.marketapi.md)

*Defined in [client/RESTClient.ts:23](https://github.com/bennycode/ig-trading-api/blob/609342c/src/client/RESTClient.ts#L23)*

## Accessors

### defaults

• get **defaults**(): AxiosRequestConfig

*Defined in [client/RESTClient.ts:11](https://github.com/bennycode/ig-trading-api/blob/609342c/src/client/RESTClient.ts#L11)*

**Returns:** AxiosRequestConfig

___

### interceptors

• get **interceptors**(): object

*Defined in [client/RESTClient.ts:15](https://github.com/bennycode/ig-trading-api/blob/609342c/src/client/RESTClient.ts#L15)*

**Returns:** object

Name | Type |
------ | ------ |
`request` | AxiosInterceptorManager\<AxiosRequestConfig> |
`response` | AxiosInterceptorManager\<AxiosResponse> |
