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
- [createSessionFromMobileLogin](login_loginapi.loginapi.md#createsessionfrommobilelogin)
- [createSessionFromToken](login_loginapi.loginapi.md#createsessionfromtoken)
- [getSession](login_loginapi.loginapi.md#getsession)
- [getSessionToken](login_loginapi.loginapi.md#getsessiontoken)
- [login](login_loginapi.loginapi.md#login)
- [logout](login_loginapi.loginapi.md#logout)
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

Defined in: [login/LoginAPI.ts:25](https://github.com/bennycode/ig-trading-api/blob/6347f7e/src/login/LoginAPI.ts#L25)

## Properties

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration:

| Name            | Type     |
| :-------------- | :------- |
| `REFRESH_TOKEN` | _string_ |
| `SESSION`       | _string_ |

Defined in: [login/LoginAPI.ts:22](https://github.com/bennycode/ig-trading-api/blob/6347f7e/src/login/LoginAPI.ts#L22)

## Methods

### createSession

▸ **createSession**(`username`: _string_, `password`: _string_): _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Creates a trading session, obtaining session tokens for subsequent API access. Please note that region-specific login restrictions may apply.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

#### Parameters:

| Name       | Type     | Description |
| :--------- | :------- | :---------- |
| `username` | _string_ | Username    |
| `password` | _string_ | Password    |

**Returns:** _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Defined in: [login/LoginAPI.ts:37](https://github.com/bennycode/ig-trading-api/blob/6347f7e/src/login/LoginAPI.ts#L37)

---

### createSessionFromMobileLogin

▸ **createSessionFromMobileLogin**(`username`: _string_, `password`: _string_): _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Creates a session using the IG Mobile App API.

WARNING: This endpoint only works with a production environment.

#### Parameters:

| Name       | Type     |
| :--------- | :------- |
| `username` | _string_ |
| `password` | _string_ |

**Returns:** _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Defined in: [login/LoginAPI.ts:96](https://github.com/bennycode/ig-trading-api/blob/6347f7e/src/login/LoginAPI.ts#L96)

---

### createSessionFromToken

▸ **createSessionFromToken**(`securityToken`: _string_, `cst`: _string_, `accountId`: _string_, `lightstreamerEndpoint`: _string_): _void_

Creates a session from predefined token values.

#### Parameters:

| Name                    | Type     |
| :---------------------- | :------- |
| `securityToken`         | _string_ |
| `cst`                   | _string_ |
| `accountId`             | _string_ |
| `lightstreamerEndpoint` | _string_ |

**Returns:** _void_

Defined in: [login/LoginAPI.ts:84](https://github.com/bennycode/ig-trading-api/blob/6347f7e/src/login/LoginAPI.ts#L84)

---

### getSession

▸ **getSession**(): _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Returns the user's session details.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

**Returns:** _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Defined in: [login/LoginAPI.ts:127](https://github.com/bennycode/ig-trading-api/blob/6347f7e/src/login/LoginAPI.ts#L127)

---

### getSessionToken

▸ **getSessionToken**(): _Promise_<boolean\>

Saves the user's session details.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

**Returns:** _Promise_<boolean\>

Defined in: [login/LoginAPI.ts:73](https://github.com/bennycode/ig-trading-api/blob/6347f7e/src/login/LoginAPI.ts#L73)

---

### login

▸ **login**(`username`: _string_, `password`: _string_): _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

#### Parameters:

| Name       | Type     |
| :--------- | :------- |
| `username` | _string_ |
| `password` | _string_ |

**Returns:** _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Defined in: [login/LoginAPI.ts:133](https://github.com/bennycode/ig-trading-api/blob/6347f7e/src/login/LoginAPI.ts#L133)

---

### logout

▸ **logout**(): _Promise_<void\>

Log out of the current session.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=600

**Returns:** _Promise_<void\>

Defined in: [login/LoginAPI.ts:147](https://github.com/bennycode/ig-trading-api/blob/6347f7e/src/login/LoginAPI.ts#L147)

---

### refreshToken

▸ **refreshToken**(): _Promise_<[_OauthToken_](../interfaces/login_loginapi.oauthtoken.md)\>

Refreshes a trading session, obtaining new session tokens for subsequent API access.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=523

**Returns:** _Promise_<[_OauthToken_](../interfaces/login_loginapi.oauthtoken.md)\>

Defined in: [login/LoginAPI.ts:161](https://github.com/bennycode/ig-trading-api/blob/6347f7e/src/login/LoginAPI.ts#L161)
