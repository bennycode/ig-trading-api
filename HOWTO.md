# HOWTO

## Prerequisites

Before using theses samples, you have to authenticate first.
```
// Note that we import "Resolution" too
import { APIClient, Resolution } from 'ig-trading-api';

// Create a client instance
const client = new APIClient(APIClient.URL_LIVE, process.env.IG_API_KEY);

// Let's log in
const session = await client.rest.login.createSession(process.env.IG_IDENTIFIER, process.env.IG_PASSWORD);
```

## Search for an IG epic code

```
const response = await client.rest.market.searchMarkets('BITCOIN');
console.log(JSON.stringify(response, null, 4));
console.log(response.markets[0].epic);
```

## Subscribe to realtime candles updates with IG epic codes

```
const epics = [
  'CS.D.BITCOIN.OPTCALL.IP'
];

client.stream.subscribeCandles(epics, Resolution.SECOND, (epic, candle) => {
  console.log(epic);
  console.log(candle)
});
```


## Retrieve historical data of an IG epic code

```
const prices = await client.rest.market.price.getPrices('CS.D.BITCOIN.OPTCALL.IP', Resolution.DAY, 5);
console.log(JSON.stringify(prices, null, 4));

```


## Available resolutions
```
console.log(Resolution)
```