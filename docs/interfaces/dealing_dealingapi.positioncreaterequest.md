[ig-trading-api](../README.md) / [Exports](../modules.md) / [dealing/DealingAPI](../modules/dealing_dealingapi.md) / PositionCreateRequest

# Interface: PositionCreateRequest

[dealing/DealingAPI](../modules/dealing_dealingapi.md).PositionCreateRequest

## Hierarchy

- **PositionCreateRequest**

## Table of contents

### Properties

- [currencyCode](dealing_dealingapi.positioncreaterequest.md#currencycode)
- [direction](dealing_dealingapi.positioncreaterequest.md#direction)
- [epic](dealing_dealingapi.positioncreaterequest.md#epic)
- [expiry](dealing_dealingapi.positioncreaterequest.md#expiry)
- [forceOpen](dealing_dealingapi.positioncreaterequest.md#forceopen)
- [goodTillDate](dealing_dealingapi.positioncreaterequest.md#goodtilldate)
- [guaranteedStop](dealing_dealingapi.positioncreaterequest.md#guaranteedstop)
- [level](dealing_dealingapi.positioncreaterequest.md#level)
- [limitDistance](dealing_dealingapi.positioncreaterequest.md#limitdistance)
- [limitLevel](dealing_dealingapi.positioncreaterequest.md#limitlevel)
- [orderType](dealing_dealingapi.positioncreaterequest.md#ordertype)
- [size](dealing_dealingapi.positioncreaterequest.md#size)
- [stopDistance](dealing_dealingapi.positioncreaterequest.md#stopdistance)
- [stopLevel](dealing_dealingapi.positioncreaterequest.md#stoplevel)
- [timeInForce](dealing_dealingapi.positioncreaterequest.md#timeinforce)

## Properties

### currencyCode

• **currencyCode**: _string_

Defined in: [dealing/DealingAPI.ts:78](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L78)

---

### direction

• **direction**: [_Direction_](../enums/dealing_dealingapi.direction.md)

Defined in: [dealing/DealingAPI.ts:79](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L79)

---

### epic

• **epic**: _string_

Defined in: [dealing/DealingAPI.ts:80](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L80)

---

### expiry

• **expiry**: _string_

Defined in: [dealing/DealingAPI.ts:81](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L81)

---

### forceOpen

• **forceOpen**: Boolean

Defined in: [dealing/DealingAPI.ts:82](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L82)

---

### goodTillDate

• `Optional` **goodTillDate**: _undefined_ \| _string_

Defined in: [dealing/DealingAPI.ts:83](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L83)

---

### guaranteedStop

• **guaranteedStop**: Boolean

Defined in: [dealing/DealingAPI.ts:84](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L84)

---

### level

• `Optional` **level**: _undefined_ \| _number_

Defined in: [dealing/DealingAPI.ts:85](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L85)

---

### limitDistance

• `Optional` **limitDistance**: _undefined_ \| _number_

Defined in: [dealing/DealingAPI.ts:86](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L86)

---

### limitLevel

• `Optional` **limitLevel**: _undefined_ \| _number_

Defined in: [dealing/DealingAPI.ts:87](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L87)

---

### orderType

• **orderType**: [_PositionOrderType_](../enums/dealing_dealingapi.positionordertype.md)

Defined in: [dealing/DealingAPI.ts:88](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L88)

---

### size

• **size**: _number_

Defined in: [dealing/DealingAPI.ts:89](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L89)

---

### stopDistance

• `Optional` **stopDistance**: _undefined_ \| _number_

Defined in: [dealing/DealingAPI.ts:90](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L90)

---

### stopLevel

• `Optional` **stopLevel**: _undefined_ \| _number_

Defined in: [dealing/DealingAPI.ts:91](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L91)

---

### timeInForce

• `Optional` **timeInForce**: _undefined_ \| [_EXECUTE_AND_ELIMINATE_](../enums/dealing_dealingapi.positiontimeinforce.md#execute_and_eliminate) \| [_FILL_OR_KILL_](../enums/dealing_dealingapi.positiontimeinforce.md#fill_or_kill)

Defined in: [dealing/DealingAPI.ts:92](https://github.com/bennycode/ig-trading-api/blob/a046dbb/src/dealing/DealingAPI.ts#L92)
