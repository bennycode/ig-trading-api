[ig-trading-api](../README.md) / [Exports](../modules.md) / [login/LoginAPI](../modules/login_loginapi.md) / LoginAPI

# Class: LoginAPI

[login/LoginAPI](../modules/login_loginapi.md).LoginAPI

## Hierarchy

- **LoginAPI**

## Table of contents

### Constructors

- [constructor](login_loginapi.loginapi.md#constructor)

### Properties

- [URL](login_loginapi.loginapi.md#url)

### Methods

- [createSession](login_loginapi.loginapi.md#createsession)

## Constructors

### constructor

\+ **new LoginAPI**(`apiClient`: AxiosInstance, `auth`: [_Authorization_](../interfaces/client_restclient.authorization.md)): [_LoginAPI_](login_loginapi.loginapi.md)

#### Parameters:

| Name        | Type                                                                |
| ----------- | ------------------------------------------------------------------- |
| `apiClient` | AxiosInstance                                                       |
| `auth`      | [_Authorization_](../interfaces/client_restclient.authorization.md) |

**Returns:** [_LoginAPI_](login_loginapi.loginapi.md)

Defined in: [login/LoginAPI.ts:40](https://github.com/bennycode/ig-trading-api/blob/76cc822/src/login/LoginAPI.ts#L40)

## Properties

### URL

▪ `Readonly` `Static` **URL**: { `SESSION`: _string_ }

#### Type declaration:

| Name      | Type     |
| --------- | -------- |
| `SESSION` | _string_ |

Defined in: [login/LoginAPI.ts:38](https://github.com/bennycode/ig-trading-api/blob/76cc822/src/login/LoginAPI.ts#L38)

## Methods

### createSession

▸ **createSession**(`username`: _string_, `password`: _string_): _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Creates a trading session, obtaining session tokens for subsequent API access.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

#### Parameters:

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| `username` | _string_ | Username    |
| `password` | _string_ | Password    |

**Returns:** _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Defined in: [login/LoginAPI.ts:51](https://github.com/bennycode/ig-trading-api/blob/76cc822/src/login/LoginAPI.ts#L51)
