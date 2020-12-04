**[ig-trading-api](../README.md)**

> [Globals](../globals.md) / ["login/LoginAPI"](../modules/_login_loginapi_.md) / LoginAPI

# Class: LoginAPI

## Hierarchy

* **LoginAPI**

## Index

### Constructors

* [constructor](_login_loginapi_.loginapi.md#constructor)

### Properties

* [apiClient](_login_loginapi_.loginapi.md#apiclient)
* [auth](_login_loginapi_.loginapi.md#auth)

### Methods

* [createSession](_login_loginapi_.loginapi.md#createsession)

### Object literals

* [URL](_login_loginapi_.loginapi.md#url)

## Constructors

### constructor

\+ **new LoginAPI**(`apiClient`: AxiosInstance, `auth`: [Authorization](../interfaces/_client_restclient_.authorization.md)): [LoginAPI](_login_loginapi_.loginapi.md)

*Defined in [login/LoginAPI.ts:38](https://github.com/bennycode/ig-trading-api/blob/6ef211b/src/login/LoginAPI.ts#L38)*

#### Parameters:

Name | Type |
------ | ------ |
`apiClient` | AxiosInstance |
`auth` | [Authorization](../interfaces/_client_restclient_.authorization.md) |

**Returns:** [LoginAPI](_login_loginapi_.loginapi.md)

## Properties

### apiClient

• `Private` `Readonly` **apiClient**: AxiosInstance

*Defined in [login/LoginAPI.ts:40](https://github.com/bennycode/ig-trading-api/blob/6ef211b/src/login/LoginAPI.ts#L40)*

___

### auth

• `Private` **auth**: [Authorization](../interfaces/_client_restclient_.authorization.md)

*Defined in [login/LoginAPI.ts:40](https://github.com/bennycode/ig-trading-api/blob/6ef211b/src/login/LoginAPI.ts#L40)*

## Methods

### createSession

▸ **createSession**(`username`: string, `password`: string): Promise\<[TradingSession](../interfaces/_login_loginapi_.tradingsession.md)>

*Defined in [login/LoginAPI.ts:49](https://github.com/bennycode/ig-trading-api/blob/6ef211b/src/login/LoginAPI.ts#L49)*

Creates a trading session, obtaining session tokens for subsequent API access.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`username` | string | Username |
`password` | string | Password |

**Returns:** Promise\<[TradingSession](../interfaces/_login_loginapi_.tradingsession.md)>

## Object literals

### URL

▪ `Static` `Readonly` **URL**: object

*Defined in [login/LoginAPI.ts:36](https://github.com/bennycode/ig-trading-api/blob/6ef211b/src/login/LoginAPI.ts#L36)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`SESSION` | string | \`/session\` |
