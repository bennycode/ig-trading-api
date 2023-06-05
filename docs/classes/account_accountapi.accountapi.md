[ig-trading-api](../README.md) / [Exports](../modules.md) / [account/AccountAPI](../modules/account_AccountAPI.md) / AccountAPI

# Class: AccountAPI

[account/AccountAPI](../modules/account_AccountAPI.md).AccountAPI

## Table of contents

### Constructors

- [constructor](account_AccountAPI.AccountAPI.md#constructor)

### Properties

- [URL](account_AccountAPI.AccountAPI.md#url)

### Methods

- [getAccounts](account_AccountAPI.AccountAPI.md#getaccounts)
- [getActivityHistory](account_AccountAPI.AccountAPI.md#getactivityhistory)
- [getTransactionHistory](account_AccountAPI.AccountAPI.md#gettransactionhistory)

## Constructors

### constructor

• **new AccountAPI**(`apiClient`)

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `apiClient` | `AxiosInstance` |

#### Defined in

[account/AccountAPI.ts:196](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/account/AccountAPI.ts#L196)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name                   | Type     |
| :--------------------- | :------- |
| `ACCOUNTS`             | `string` |
| `HISTORY_ACTIVITY`     | `string` |
| `HISTORY_TRANSACTIONS` | `string` |

#### Defined in

[account/AccountAPI.ts:190](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/account/AccountAPI.ts#L190)

## Methods

### getAccounts

▸ **getAccounts**(): `Promise`<[`AccountsResponse`](../interfaces/account_AccountAPI.AccountsResponse.md)\>

Returns a list of accounts belonging to the logged-in client.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=553

#### Returns

`Promise`<[`AccountsResponse`](../interfaces/account_AccountAPI.AccountsResponse.md)\>

#### Defined in

[account/AccountAPI.ts:203](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/account/AccountAPI.ts#L203)

---

### getActivityHistory

▸ **getActivityHistory**(`activityHistoryRequest`): `Promise`<[`ActivityHistoryResponse`](../interfaces/account_AccountAPI.ActivityHistoryResponse.md)\>

Returns the account activity history. The first element in the array is the latest activity. The last element is the oldest activity.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=543

#### Parameters

| Name                     | Type                                                                                   |
| :----------------------- | :------------------------------------------------------------------------------------- |
| `activityHistoryRequest` | [`ActivityHistoryRequest`](../interfaces/account_AccountAPI.ActivityHistoryRequest.md) |

#### Returns

`Promise`<[`ActivityHistoryResponse`](../interfaces/account_AccountAPI.ActivityHistoryResponse.md)\>

#### Defined in

[account/AccountAPI.ts:215](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/account/AccountAPI.ts#L215)

---

### getTransactionHistory

▸ **getTransactionHistory**(`transactionHistoryRequest`): `Promise`<[`TransactionHistoryResponse`](../interfaces/account_AccountAPI.TransactionHistoryResponse.md)\>

Returns the account transaction history.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=525

#### Parameters

| Name | Type |
| :-- | :-- |
| `transactionHistoryRequest` | [`TransactionHistoryRequest`](../interfaces/account_AccountAPI.TransactionHistoryRequest.md) |

#### Returns

`Promise`<[`TransactionHistoryResponse`](../interfaces/account_AccountAPI.TransactionHistoryResponse.md)\>

#### Defined in

[account/AccountAPI.ts:232](https://github.com/bennycode/ig-trading-api/blob/f7fd8d0/src/account/AccountAPI.ts#L232)
