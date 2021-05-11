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
- [switchAccount](login_loginapi.loginapi.md#switchaccount)

## Constructors

### constructor

\+ **new LoginAPI**(`apiClient`: AxiosInstance, `auth`: [_Authorization_](../interfaces/client_restclient.authorization.md)): [_LoginAPI_](login_loginapi.loginapi.md)

#### Parameters

| Name        | Type                                                                |
| :---------- | :------------------------------------------------------------------ |
| `apiClient` | AxiosInstance                                                       |
| `auth`      | [_Authorization_](../interfaces/client_restclient.authorization.md) |

**Returns:** [_LoginAPI_](login_loginapi.loginapi.md)

Defined in: [login/LoginAPI.ts:32](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/login/LoginAPI.ts#L32)

## Properties

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration

| Name            | Type     |
| :-------------- | :------- |
| `REFRESH_TOKEN` | _string_ |
| `SESSION`       | _string_ |

Defined in: [login/LoginAPI.ts:29](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/login/LoginAPI.ts#L29)

## Methods

### createSession

▸ **createSession**(`username?`: _string_, `password?`: _string_): _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Creates a trading session, obtaining session tokens for subsequent API access. Please note that region-specific login restrictions may apply.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `username?` | _string_ | Username    |
| `password?` | _string_ | Password    |

**Returns:** _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Defined in: [login/LoginAPI.ts:44](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/login/LoginAPI.ts#L44)

---

### createSessionFromMobileLogin

▸ **createSessionFromMobileLogin**(`username`: _string_, `password`: _string_): _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Creates a session using the IG Mobile App API.

WARNING: This endpoint only works with a production environment.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `username` | _string_ |
| `password` | _string_ |

**Returns:** _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Defined in: [login/LoginAPI.ts:132](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/login/LoginAPI.ts#L132)

---

### createSessionFromToken

▸ **createSessionFromToken**(`securityToken`: _string_, `cst`: _string_, `accountId`: _string_, `lightstreamerEndpoint`: _string_): _void_

Creates a session from predefined token values.

#### Parameters

| Name                    | Type     |
| :---------------------- | :------- |
| `securityToken`         | _string_ |
| `cst`                   | _string_ |
| `accountId`             | _string_ |
| `lightstreamerEndpoint` | _string_ |

**Returns:** _void_

Defined in: [login/LoginAPI.ts:120](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/login/LoginAPI.ts#L120)

---

### getSession

▸ **getSession**(): _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Returns the user's session details.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

**Returns:** _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Defined in: [login/LoginAPI.ts:163](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/login/LoginAPI.ts#L163)

---

### getSessionToken

▸ **getSessionToken**(): _Promise_<boolean\>

Saves the user's session details.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

**Returns:** _Promise_<boolean\>

Defined in: [login/LoginAPI.ts:109](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/login/LoginAPI.ts#L109)

---

### login

▸ **login**(`username`: _string_, `password`: _string_): _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `username` | _string_ |
| `password` | _string_ |

**Returns:** _Promise_<[_TradingSession_](../interfaces/login_loginapi.tradingsession.md)\>

Defined in: [login/LoginAPI.ts:169](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/login/LoginAPI.ts#L169)

---

### logout

▸ **logout**(): _Promise_<void\>

Log out of the current session.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=600

**Returns:** _Promise_<void\>

Defined in: [login/LoginAPI.ts:183](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/login/LoginAPI.ts#L183)

---

### refreshToken

▸ **refreshToken**(): _Promise_<[_OauthToken_](../interfaces/login_loginapi.oauthtoken.md)\>

Refreshes a trading session, obtaining new session tokens for subsequent API access.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=523

**Returns:** _Promise_<[_OauthToken_](../interfaces/login_loginapi.oauthtoken.md)\>

Defined in: [login/LoginAPI.ts:197](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/login/LoginAPI.ts#L197)

---

### switchAccount

▸ **switchAccount**(`accountId`: _string_): _Promise_<[_SwitchAccountResponse_](../interfaces/login_loginapi.switchaccountresponse.md)\>

Switches active accounts, optionally setting the default IG account (of type CFD or spreadbet), against which trades may be made.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `accountId` | _string_ | Account ID  |

**Returns:** _Promise_<[_SwitchAccountResponse_](../interfaces/login_loginapi.switchaccountresponse.md)\>

Defined in: [login/LoginAPI.ts:81](https://github.com/bennycode/ig-trading-api/blob/362f41a/src/login/LoginAPI.ts#L81)
