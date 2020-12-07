**[ig-trading-api](../README.md)**

> [Globals](../globals.md) / ["APIClient"](../modules/_apiclient_.md) / APIClient

# Class: APIClient

## Hierarchy

* **APIClient**

## Index

### Constructors

* [constructor](_apiclient_.apiclient.md#constructor)

### Properties

* [rest](_apiclient_.apiclient.md#rest)
* [URL\_DEMO](_apiclient_.apiclient.md#url_demo)
* [URL\_LIVE](_apiclient_.apiclient.md#url_live)

## Constructors

### constructor

\+ **new APIClient**(`baseUrl`: string, `apiKey`: string): [APIClient](_apiclient_.apiclient.md)

*Defined in [APIClient.ts:7](https://github.com/bennycode/ig-trading-api/blob/3c6eaee/src/APIClient.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`baseUrl` | string |
`apiKey` | string |

**Returns:** [APIClient](_apiclient_.apiclient.md)

## Properties

### rest

• `Readonly` **rest**: [RESTClient](_client_restclient_.restclient.md)

*Defined in [APIClient.ts:4](https://github.com/bennycode/ig-trading-api/blob/3c6eaee/src/APIClient.ts#L4)*

___

### URL\_DEMO

▪ `Static` **URL\_DEMO**: string = "https://demo-api.ig.com/gateway/deal/"

*Defined in [APIClient.ts:6](https://github.com/bennycode/ig-trading-api/blob/3c6eaee/src/APIClient.ts#L6)*

___

### URL\_LIVE

▪ `Static` **URL\_LIVE**: string = "https://api.ig.com/gateway/deal/"

*Defined in [APIClient.ts:7](https://github.com/bennycode/ig-trading-api/blob/3c6eaee/src/APIClient.ts#L7)*
