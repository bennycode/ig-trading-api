[ig-trading-api](README.md) / Exports

# ig-trading-api

## Table of contents

### Enumerations

- [AccountStatus](enums/AccountStatus.md)
- [AccountType](enums/AccountType.md)
- [ActionType](enums/ActionType.md)
- [ActivityStatus](enums/ActivityStatus.md)
- [ActivityType](enums/ActivityType.md)
- [AffectedDealStatus](enums/AffectedDealStatus.md)
- [Channel](enums/Channel.md)
- [DealStatus](enums/DealStatus.md)
- [Direction](enums/Direction.md)
- [InstrumentType](enums/InstrumentType.md)
- [InstrumentUnit](enums/InstrumentUnit.md)
- [MarketOrderPreference](enums/MarketOrderPreference.md)
- [MarketStatus](enums/MarketStatus.md)
- [OrderTimeInForce](enums/OrderTimeInForce.md)
- [OrderType](enums/OrderType.md)
- [PositionOrderType](enums/PositionOrderType.md)
- [PositionTimeInForce](enums/PositionTimeInForce.md)
- [Resolution](enums/Resolution.md)
- [ResolutionInMillis](enums/ResolutionInMillis.md)
- [Status](enums/Status.md)
- [TrailingStopPreference](enums/TrailingStopPreference.md)
- [TransactionType](enums/TransactionType.md)

### Classes

- [APIClient](classes/APIClient.md)
- [AccountAPI](classes/AccountAPI.md)
- [DealingAPI](classes/DealingAPI.md)
- [LoginAPI](classes/LoginAPI.md)
- [MarketAPI](classes/MarketAPI.md)
- [PriceAPI](classes/PriceAPI.md)

### Interfaces

- [Account](interfaces/Account.md)
- [AccountsResponse](interfaces/AccountsResponse.md)
- [Action](interfaces/Action.md)
- [Activity](interfaces/Activity.md)
- [ActivityHistoryRequest](interfaces/ActivityHistoryRequest.md)
- [ActivityHistoryResponse](interfaces/ActivityHistoryResponse.md)
- [ActivityMetadata](interfaces/ActivityMetadata.md)
- [ActivityPaging](interfaces/ActivityPaging.md)
- [AffectedDeal](interfaces/AffectedDeal.md)
- [Balance](interfaces/Balance.md)
- [BidAsk](interfaces/BidAsk.md)
- [CandleStick](interfaces/CandleStick.md)
- [Currency](interfaces/Currency.md)
- [DealConfirmation](interfaces/DealConfirmation.md)
- [DealReferenceResponse](interfaces/DealReferenceResponse.md)
- [DealingRules](interfaces/DealingRules.md)
- [Details](interfaces/Details.md)
- [ExpiryDetail](interfaces/ExpiryDetail.md)
- [HistoricalPricesAllowance](interfaces/HistoricalPricesAllowance.md)
- [HistoricalPricesMetadata](interfaces/HistoricalPricesMetadata.md)
- [HistoricalPricesPagination](interfaces/HistoricalPricesPagination.md)
- [HistoricalPricesResponse](interfaces/HistoricalPricesResponse.md)
- [Instrument](interfaces/Instrument.md)
- [LimitedRiskPremium](interfaces/LimitedRiskPremium.md)
- [MarginDepositBand](interfaces/MarginDepositBand.md)
- [Market](interfaces/Market.md)
- [MarketDetail](interfaces/MarketDetail.md)
- [MarketNavigation](interfaces/MarketNavigation.md)
- [MarketNode](interfaces/MarketNode.md)
- [MarketSearch](interfaces/MarketSearch.md)
- [MaxStopOrLimitDistance](interfaces/MaxStopOrLimitDistance.md)
- [MinControlledRiskStopDistance](interfaces/MinControlledRiskStopDistance.md)
- [MinDealSize](interfaces/MinDealSize.md)
- [MinNormalStopOrLimitDistance](interfaces/MinNormalStopOrLimitDistance.md)
- [MinStepDistance](interfaces/MinStepDistance.md)
- [OauthToken](interfaces/OauthToken.md)
- [Order](interfaces/Order.md)
- [OrderCreateRequest](interfaces/OrderCreateRequest.md)
- [OrderListResponse](interfaces/OrderListResponse.md)
- [OrderResponse](interfaces/OrderResponse.md)
- [OrderUpdateRequest](interfaces/OrderUpdateRequest.md)
- [Position](interfaces/Position.md)
- [PositionCloseRequest](interfaces/PositionCloseRequest.md)
- [PositionCreateRequest](interfaces/PositionCreateRequest.md)
- [PositionListResponse](interfaces/PositionListResponse.md)
- [PositionResponse](interfaces/PositionResponse.md)
- [PositionUpdateRequest](interfaces/PositionUpdateRequest.md)
- [RolloverDetail](interfaces/RolloverDetail.md)
- [SlippageFactor](interfaces/SlippageFactor.md)
- [Snapshot](interfaces/Snapshot.md)
- [SwitchAccountResponse](interfaces/SwitchAccountResponse.md)
- [TradingSession](interfaces/TradingSession.md)
- [Transaction](interfaces/Transaction.md)
- [TransactionHistoryRequest](interfaces/TransactionHistoryRequest.md)
- [TransactionHistoryResponse](interfaces/TransactionHistoryResponse.md)
- [TransactionMetadata](interfaces/TransactionMetadata.md)
- [TransactionPaging](interfaces/TransactionPaging.md)

### Type Aliases

- [MarketDetails](modules.md#marketdetails)

## Type Aliases

### MarketDetails

Ƭ **MarketDetails**: `Object`

#### Type declaration

| Name            | Type                                           |
| :-------------- | :--------------------------------------------- |
| `marketDetails` | [`MarketDetail`](interfaces/MarketDetail.md)[] |

#### Defined in

[market/MarketAPI.ts:179](https://github.com/bennycode/ig-trading-api/blob/0c7d281/src/market/MarketAPI.ts#L179)
