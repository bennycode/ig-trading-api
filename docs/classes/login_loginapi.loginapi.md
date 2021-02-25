[ig-trading-api](../README.md) / [Exports](../modules.md) / [login/LoginAPI](../modules/login_loginapi.md) / LoginAPI

# Class: LoginAPI

[login/LoginAPI](../modules/login_loginapi.md).LoginAPI

## Table of contents

### Constructors

- [constructor](login_loginapi.loginapi.md#constructor)

### Properties

- [URL](login_loginapi.loginapi.md#url)

### Methods

- [createSession](login_loginapi.loginapi.md#createsession)
- [getSession](login_loginapi.loginapi.md#getsession)
- [getSessionToken](login_loginapi.loginapi.md#getsessiontoken)
- [refreshToken](login_loginapi.loginapi.md#refreshtoken)

## Constructors

### constructor

\+ **new LoginAPI**(`apiClient`: AxiosInstance, `auth`: [_Authorization_](../interfaces/client_restclient.authorization.md)): [_LoginAPI_](login_loginapi.loginapi.md)

#### Parameters:

| Name        | Type                                                                |
| :---------- | :------------------------------------------------------------------ |
| `apiClient` | AxiosInstance                                                       |
| `auth`      | [_Authorization_](../interfaces/client_restclient.authorization.md) |

**Returns:** [_LoginAPI_](login_loginapi.loginapi.md)

Defined in: [login/LoginAPI.ts:24](https://github.com/bennycode/ig-trading-api/blob/afea174/src/login/LoginAPI.ts#L24)

## Properties

### URL

▪ `Readonly` `Static` **URL**: _object_

#### Type declaration:

| Name            | Type     |
| :-------------- | :------- |
| `REFRESH_TOKEN` | _string_ |
| `SESSION`       | _string_ |

Defined in: [login/LoginAPI.ts:21](https://github.com/bennycode/ig-trading-api/blob/afea174/src/login/LoginAPI.ts#L21)

## Methods

### createSession

▸ **createSession**(`username`: _string_, `password`: _string_): _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Creates a trading session, obtaining session tokens for subsequent API access.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

#### Parameters:

| Name       | Type     | Description |
| :--------- | :------- | :---------- |
| `username` | _string_ | Username    |
| `password` | _string_ | Password    |

**Returns:** _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Defined in: [login/LoginAPI.ts:35](https://github.com/bennycode/ig-trading-api/blob/afea174/src/login/LoginAPI.ts#L35)

---

### getSession

▸ **getSession**(): _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Returns the user's session details.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

**Returns:** _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Defined in: [login/LoginAPI.ts:80](https://github.com/bennycode/ig-trading-api/blob/afea174/src/login/LoginAPI.ts#L80)

---

### getSessionToken

▸ **getSessionToken**(): _Promise_<boolean\>

Saves the user's session details.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

**Returns:** _Promise_<boolean\>

Defined in: [login/LoginAPI.ts:67](https://github.com/bennycode/ig-trading-api/blob/afea174/src/login/LoginAPI.ts#L67)

---

### refreshToken

▸ **refreshToken**(): _Promise_<[_OauthToken_](../interfaces/login_loginapi.oauthtoken.md)\>

Refreshes a trading session, obtaining new session tokens for subsequent API access.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=523

**Returns:** _Promise_<[_OauthToken_](../interfaces/login_loginapi.oauthtoken.md)\>

Defined in: [login/LoginAPI.ts:91](https://github.com/bennycode/ig-trading-api/blob/afea174/src/login/LoginAPI.ts#L91)
