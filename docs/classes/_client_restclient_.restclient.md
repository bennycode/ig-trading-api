**[ig-trading-api](../README.md)**

> [Globals](../globals.md) / ["client/RESTClient"](../modules/_client_restclient_.md) / RESTClient

# Class: RESTClient

## Hierarchy

* **RESTClient**

## Index

### Constructors

* [constructor](_client_restclient_.restclient.md#constructor)

### Properties

* [apiKey](_client_restclient_.restclient.md#apikey)
* [auth](_client_restclient_.restclient.md#auth)
* [httpClient](_client_restclient_.restclient.md#httpclient)
* [login](_client_restclient_.restclient.md#login)

### Accessors

* [defaults](_client_restclient_.restclient.md#defaults)
* [interceptors](_client_restclient_.restclient.md#interceptors)

## Constructors

### constructor

\+ **new RESTClient**(`baseURL`: string, `apiKey`: string): [RESTClient](_client_restclient_.restclient.md)

*Defined in [client/RESTClient.ts:24](https://github.com/bennycode/ig-trading-api/blob/6ef211b/src/client/RESTClient.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`baseURL` | string |
`apiKey` | string |

**Returns:** [RESTClient](_client_restclient_.restclient.md)

## Properties

### apiKey

• `Private` `Readonly` **apiKey**: string

*Defined in [client/RESTClient.ts:26](https://github.com/bennycode/ig-trading-api/blob/6ef211b/src/client/RESTClient.ts#L26)*

___

### auth

• `Private` `Readonly` **auth**: [Authorization](../interfaces/_client_restclient_.authorization.md)

*Defined in [client/RESTClient.ts:24](https://github.com/bennycode/ig-trading-api/blob/6ef211b/src/client/RESTClient.ts#L24)*

___

### httpClient

• `Private` `Readonly` **httpClient**: AxiosInstance

*Defined in [client/RESTClient.ts:23](https://github.com/bennycode/ig-trading-api/blob/6ef211b/src/client/RESTClient.ts#L23)*

___

### login

• `Readonly` **login**: [LoginAPI](_login_loginapi_.loginapi.md)

*Defined in [client/RESTClient.ts:21](https://github.com/bennycode/ig-trading-api/blob/6ef211b/src/client/RESTClient.ts#L21)*

## Accessors

### defaults

• get **defaults**(): AxiosRequestConfig

*Defined in [client/RESTClient.ts:10](https://github.com/bennycode/ig-trading-api/blob/6ef211b/src/client/RESTClient.ts#L10)*

**Returns:** AxiosRequestConfig

___

### interceptors

• get **interceptors**(): object

*Defined in [client/RESTClient.ts:14](https://github.com/bennycode/ig-trading-api/blob/6ef211b/src/client/RESTClient.ts#L14)*

**Returns:** object

Name | Type |
------ | ------ |
`request` | AxiosInterceptorManager\<AxiosRequestConfig> |
`response` | AxiosInterceptorManager\<AxiosResponse> |
