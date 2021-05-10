[ig-trading-api](../README.md) / [Exports](../modules.md) / [account/AccountAPI](../modules/account_accountapi.md) / AccountAPI

# Class: AccountAPI

[account/AccountAPI](../modules/account_accountapi.md).AccountAPI

## Table of contents

### Constructors

- [constructor](account_accountapi.accountapi.md#constructor)

### Properties

- [URL](account_accountapi.accountapi.md#url)

### Methods

- [getAccounts](account_accountapi.accountapi.md#getaccounts)
- [getActivityHistory](account_accountapi.accountapi.md#getactivityhistory)
- [getTransactionHistory](account_accountapi.accountapi.md#gettransactionhistory)

## Constructors

### constructor

\+ **new AccountAPI**(`apiClient`: AxiosInstance): [_AccountAPI_](account_accountapi.accountapi.md)

#### Parameters:

| Name        | Type          |
| :---------- | :------------ |
| `apiClient` | AxiosInstance |

**Returns:** [_AccountAPI_](account_accountapi.accountapi.md)

Defined in: [account/AccountAPI.ts:194](https://github.com/bennycode/ig-trading-api/blob/a8e1c4a/src/account/AccountAPI.ts#L194)

## Properties

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration:

| Name                   | Type     |
| :--------------------- | :------- |
| `ACCOUNTS`             | _string_ |
| `HISTORY_ACTIVITY`     | _string_ |
| `HISTORY_TRANSACTIONS` | _string_ |

Defined in: [account/AccountAPI.ts:190](https://github.com/bennycode/ig-trading-api/blob/a8e1c4a/src/account/AccountAPI.ts#L190)

## Methods

### getAccounts

▸ **getAccounts**(): _Promise_<[_AccountsResponse_](../interfaces/account_accountapi.accountsresponse.md)\>

Returns a list of accounts belonging to the logged-in client.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=553

**Returns:** _Promise_<[_AccountsResponse_](../interfaces/account_accountapi.accountsresponse.md)\>

Defined in: [account/AccountAPI.ts:203](https://github.com/bennycode/ig-trading-api/blob/a8e1c4a/src/account/AccountAPI.ts#L203)

---

### getActivityHistory

▸ **getActivityHistory**(`activityHistoryRequest`: [_ActivityHistoryRequest_](../interfaces/account_accountapi.activityhistoryrequest.md)): _Promise_<[_ActivityHistoryResponse_](../interfaces/account_accountapi.activityhistoryresponse.md)\>

Returns the account activity history. The first element in the array is the latest activity. The last element is the oldest activity.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=543

#### Parameters:

| Name                     | Type                                                                                   |
| :----------------------- | :------------------------------------------------------------------------------------- |
| `activityHistoryRequest` | [_ActivityHistoryRequest_](../interfaces/account_accountapi.activityhistoryrequest.md) |

**Returns:** _Promise_<[_ActivityHistoryResponse_](../interfaces/account_accountapi.activityhistoryresponse.md)\>

Defined in: [account/AccountAPI.ts:215](https://github.com/bennycode/ig-trading-api/blob/a8e1c4a/src/account/AccountAPI.ts#L215)

---

### getTransactionHistory

▸ **getTransactionHistory**(`transactionHistoryRequest`: [_TransactionHistoryRequest_](../interfaces/account_accountapi.transactionhistoryrequest.md)): _Promise_<[_TransactionHistoryResponse_](../interfaces/account_accountapi.transactionhistoryresponse.md)\>

Returns the account transaction history.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=525

#### Parameters:

| Name | Type |
| :-- | :-- |
| `transactionHistoryRequest` | [_TransactionHistoryRequest_](../interfaces/account_accountapi.transactionhistoryrequest.md) |

**Returns:** _Promise_<[_TransactionHistoryResponse_](../interfaces/account_accountapi.transactionhistoryresponse.md)\>

Defined in: [account/AccountAPI.ts:232](https://github.com/bennycode/ig-trading-api/blob/a8e1c4a/src/account/AccountAPI.ts#L232)
