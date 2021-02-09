[ig-trading-api](../README.md) / [Exports](../modules.md) / [account/AccountAPI](../modules/account_accountapi.md) / AccountAPI

# Class: AccountAPI

[account/AccountAPI](../modules/account_accountapi.md).AccountAPI

## Hierarchy

- **AccountAPI**

## Table of contents

### Constructors

- [constructor](account_accountapi.accountapi.md#constructor)

### Properties

- [URL](account_accountapi.accountapi.md#url)

### Methods

- [getActivityHistory](account_accountapi.accountapi.md#getactivityhistory)
- [getTransactionHistory](account_accountapi.accountapi.md#gettransactionhistory)

## Constructors

### constructor

\+ **new AccountAPI**(`apiClient`: AxiosInstance): [_AccountAPI_](account_accountapi.accountapi.md)

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [_AccountAPI_](account_accountapi.accountapi.md)

Defined in: [account/AccountAPI.ts:157](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/account/AccountAPI.ts#L157)

## Properties

### URL

▪ `Readonly` `Static` **URL**: { `HISTORY_ACTIVITY`: _string_ = '/history/activity/'; `HISTORY_TRANSACTIONS`: _string_ = '/history/transactions' }

#### Type declaration:

| Name                   | Type     |
| ---------------------- | -------- |
| `HISTORY_ACTIVITY`     | _string_ |
| `HISTORY_TRANSACTIONS` | _string_ |

Defined in: [account/AccountAPI.ts:154](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/account/AccountAPI.ts#L154)

## Methods

### getActivityHistory

▸ **getActivityHistory**(`activityHistoryRequest`: [_ActivityHistoryRequest_](../interfaces/account_accountapi.activityhistoryrequest.md)): _Promise_<[_ActivityHistoryResponse_](../interfaces/account_accountapi.activityhistoryresponse.md)\>

Returns the account activity history.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=543

#### Parameters:

| Name                     | Type                                                                                   |
| ------------------------ | -------------------------------------------------------------------------------------- |
| `activityHistoryRequest` | [_ActivityHistoryRequest_](../interfaces/account_accountapi.activityhistoryrequest.md) |

**Returns:** _Promise_<[_ActivityHistoryResponse_](../interfaces/account_accountapi.activityhistoryresponse.md)\>

Defined in: [account/AccountAPI.ts:167](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/account/AccountAPI.ts#L167)

---

### getTransactionHistory

▸ **getTransactionHistory**(`transactionHistoryRequest`: [_TransactionHistoryRequest_](../interfaces/account_accountapi.transactionhistoryrequest.md)): _Promise_<[_TransactionHistoryResponse_](../interfaces/account_accountapi.transactionhistoryresponse.md)\>

Returns the account transaction history.

**`see`** https://labs.ig.com/rest-trading-api-reference/service-detail?id=525

#### Parameters:

| Name | Type |
| --- | --- |
| `transactionHistoryRequest` | [_TransactionHistoryRequest_](../interfaces/account_accountapi.transactionhistoryrequest.md) |

**Returns:** _Promise_<[_TransactionHistoryResponse_](../interfaces/account_accountapi.transactionhistoryresponse.md)\>

Defined in: [account/AccountAPI.ts:184](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/account/AccountAPI.ts#L184)
