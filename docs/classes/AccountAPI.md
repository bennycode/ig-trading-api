[ig-trading-api](../README.md) / [Exports](../modules.md) / AccountAPI

# Class: AccountAPI

## Table of contents

### Constructors

- [constructor](AccountAPI.md#constructor)

### Properties

- [URL](AccountAPI.md#url)

### Methods

- [getAccounts](AccountAPI.md#getaccounts)
- [getActivityHistory](AccountAPI.md#getactivityhistory)
- [getTransactionHistory](AccountAPI.md#gettransactionhistory)

## Constructors

### constructor

• **new AccountAPI**(`apiClient`)

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `apiClient` | `AxiosInstance` |

#### Defined in

[account/AccountAPI.ts:196](https://github.com/bennycode/ig-trading-api/blob/0c7d281/src/account/AccountAPI.ts#L196)

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

[account/AccountAPI.ts:190](https://github.com/bennycode/ig-trading-api/blob/0c7d281/src/account/AccountAPI.ts#L190)

## Methods

### getAccounts

▸ **getAccounts**(): `Promise`<[`AccountsResponse`](../interfaces/AccountsResponse.md)\>

Returns a list of accounts belonging to the logged-in client.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=553

#### Returns

`Promise`<[`AccountsResponse`](../interfaces/AccountsResponse.md)\>

#### Defined in

[account/AccountAPI.ts:203](https://github.com/bennycode/ig-trading-api/blob/0c7d281/src/account/AccountAPI.ts#L203)

---

### getActivityHistory

▸ **getActivityHistory**(`activityHistoryRequest`): `Promise`<[`ActivityHistoryResponse`](../interfaces/ActivityHistoryResponse.md)\>

Returns the account activity history. The first element in the array is the latest activity. The last element is the oldest activity.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=543

#### Parameters

| Name                     | Type                                                                |
| :----------------------- | :------------------------------------------------------------------ |
| `activityHistoryRequest` | [`ActivityHistoryRequest`](../interfaces/ActivityHistoryRequest.md) |

#### Returns

`Promise`<[`ActivityHistoryResponse`](../interfaces/ActivityHistoryResponse.md)\>

#### Defined in

[account/AccountAPI.ts:215](https://github.com/bennycode/ig-trading-api/blob/0c7d281/src/account/AccountAPI.ts#L215)

---

### getTransactionHistory

▸ **getTransactionHistory**(`transactionHistoryRequest`): `Promise`<[`TransactionHistoryResponse`](../interfaces/TransactionHistoryResponse.md)\>

Returns the account transaction history.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=525

#### Parameters

| Name                        | Type                                                                      |
| :-------------------------- | :------------------------------------------------------------------------ |
| `transactionHistoryRequest` | [`TransactionHistoryRequest`](../interfaces/TransactionHistoryRequest.md) |

#### Returns

`Promise`<[`TransactionHistoryResponse`](../interfaces/TransactionHistoryResponse.md)\>

#### Defined in

[account/AccountAPI.ts:232](https://github.com/bennycode/ig-trading-api/blob/0c7d281/src/account/AccountAPI.ts#L232)
