[ig-trading-api](../README.md) / [Exports](../modules.md) / LoginAPI

# Class: LoginAPI

## Table of contents

### Constructors

- [constructor](LoginAPI.md#constructor)

### Properties

- [URL](LoginAPI.md#url)

### Methods

- [createSession](LoginAPI.md#createsession)
- [createSessionFromMobileLogin](LoginAPI.md#createsessionfrommobilelogin)
- [createSessionFromToken](LoginAPI.md#createsessionfromtoken)
- [getSession](LoginAPI.md#getsession)
- [getSessionToken](LoginAPI.md#getsessiontoken)
- [login](LoginAPI.md#login)
- [logout](LoginAPI.md#logout)
- [refreshToken](LoginAPI.md#refreshtoken)
- [switchAccount](LoginAPI.md#switchaccount)

## Constructors

### constructor

• **new LoginAPI**(`apiClient`, `auth`)

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `apiClient` | `AxiosInstance` |
| `auth`      | `Authorization` |

#### Defined in

[login/LoginAPI.ts:34](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/login/LoginAPI.ts#L34)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name            | Type     |
| :-------------- | :------- |
| `REFRESH_TOKEN` | `string` |
| `SESSION`       | `string` |

#### Defined in

[login/LoginAPI.ts:29](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/login/LoginAPI.ts#L29)

## Methods

### createSession

▸ **createSession**(`username?`, `password?`): `Promise`<[`TradingSession`](../interfaces/TradingSession.md)\>

Creates a trading session, obtaining session tokens for subsequent API access. Please note that region-specific login restrictions may apply.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `username?` | `string` | Username    |
| `password?` | `string` | Password    |

#### Returns

`Promise`<[`TradingSession`](../interfaces/TradingSession.md)\>

#### Defined in

[login/LoginAPI.ts:44](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/login/LoginAPI.ts#L44)

---

### createSessionFromMobileLogin

▸ **createSessionFromMobileLogin**(`username`, `password`): `Promise`<[`TradingSession`](../interfaces/TradingSession.md)\>

Creates a session using the IG Mobile App API.

WARNING: This endpoint only works with a production environment.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `username` | `string` |
| `password` | `string` |

#### Returns

`Promise`<[`TradingSession`](../interfaces/TradingSession.md)\>

#### Defined in

[login/LoginAPI.ts:132](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/login/LoginAPI.ts#L132)

---

### createSessionFromToken

▸ **createSessionFromToken**(`securityToken`, `cst`, `accountId`, `lightstreamerEndpoint`): `void`

Creates a session from predefined token values.

#### Parameters

| Name                    | Type     |
| :---------------------- | :------- |
| `securityToken`         | `string` |
| `cst`                   | `string` |
| `accountId`             | `string` |
| `lightstreamerEndpoint` | `string` |

#### Returns

`void`

#### Defined in

[login/LoginAPI.ts:120](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/login/LoginAPI.ts#L120)

---

### getSession

▸ **getSession**(): `Promise`<[`TradingSession`](../interfaces/TradingSession.md)\>

Returns the user's session details.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

#### Returns

`Promise`<[`TradingSession`](../interfaces/TradingSession.md)\>

#### Defined in

[login/LoginAPI.ts:163](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/login/LoginAPI.ts#L163)

---

### getSessionToken

▸ **getSessionToken**(): `Promise`<`boolean`\>

Saves the user's session details.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

#### Returns

`Promise`<`boolean`\>

#### Defined in

[login/LoginAPI.ts:109](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/login/LoginAPI.ts#L109)

---

### login

▸ **login**(`username`, `password`): `Promise`<[`TradingSession`](../interfaces/TradingSession.md)\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `username` | `string` |
| `password` | `string` |

#### Returns

`Promise`<[`TradingSession`](../interfaces/TradingSession.md)\>

#### Defined in

[login/LoginAPI.ts:169](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/login/LoginAPI.ts#L169)

---

### logout

▸ **logout**(): `Promise`<`void`\>

Log out of the current session.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=600

#### Returns

`Promise`<`void`\>

#### Defined in

[login/LoginAPI.ts:183](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/login/LoginAPI.ts#L183)

---

### refreshToken

▸ **refreshToken**(): `Promise`<[`OauthToken`](../interfaces/OauthToken.md)\>

Refreshes a trading session, obtaining new session tokens for subsequent API access.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=523

#### Returns

`Promise`<[`OauthToken`](../interfaces/OauthToken.md)\>

#### Defined in

[login/LoginAPI.ts:197](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/login/LoginAPI.ts#L197)

---

### switchAccount

▸ **switchAccount**(`accountId`): `Promise`<[`SwitchAccountResponse`](../interfaces/SwitchAccountResponse.md)\>

Switches active accounts, optionally setting the default IG account (of type CFD or spreadbet), against which trades may be made.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=534

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `accountId` | `string` | Account ID  |

#### Returns

`Promise`<[`SwitchAccountResponse`](../interfaces/SwitchAccountResponse.md)\>

#### Defined in

[login/LoginAPI.ts:81](https://github.com/bennycode/ig-trading-api/blob/c7d6810/src/login/LoginAPI.ts#L81)
