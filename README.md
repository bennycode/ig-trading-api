# IG Trading API

![Language Details](https://img.shields.io/github/languages/top/bennycode/ig-trading-api) ![Code Coverage](https://img.shields.io/codecov/c/github/bennycode/ig-trading-api/main) ![License](https://img.shields.io/npm/l/ig-trading-api.svg) ![Package Version](https://img.shields.io/npm/v/ig-trading-api.svg) ![Dependency Updates](https://img.shields.io/david/bennycode/ig-trading-api.svg)

Unofficial [IG Trading API](https://labs.ig.com/rest-trading-api-guide) for Node.js, written in TypeScript and covered by tests.

## Features

- **Typed.** Source code is 100% TypeScript. No need to install external typings.
- **Tested.** Code coverage is 100%. No surprises when using [ig-trading-api][1].
- **Maintained.** Automated security updates. No threats from outdated dependencies.
- **Documented.** Get started with the [generated documentation][2].

## Installation

**npm**

```bash
npm install ig-trading-api
```

**Yarn**

```bash
yarn add ig-trading-api
```

## Usage

You can set the API gateway, when initializing the API client. Use `APIClient.URL_DEMO` (demo-api.ig.com) for demo accounts and `APIClient.URL_LIVE` (api.ig.com) for live account access.

### TypeScript

Recommended:

```typescript
import {APIClient} from 'ig-trading-api';
const client = new APIClient(APIClient.URL_LIVE, 'your-api-key');
const session = await client.rest.login.createSession('your-username', 'your-password');
console.info(`Your client ID is "${session.clientId}".`);
```

Alternative:

```typescript
import {APIClient} from 'ig-trading-api';
const client = new APIClient(APIClient.URL_LIVE, {
  apiKey: 'your-api-key',
  username: 'your-username',
  password: 'your-password',
});
```

## Resources

- [IG REST Trading API Reference](https://labs.ig.com/rest-trading-api-reference)
- [IG API Companion](https://labs.ig.com/sample-apps/api-companion/index.html)
- [IG Streaming Companion](https://labs.ig.com/sample-apps/streaming-companion/index.html)
- [IG REST Trading API Limits](https://labs.ig.com/faq)
- [Spreads, commissions and margins](https://www.ig.com/en/cfd-trading/charges-and-margins) ([in Germany](https://www.ig.com/de/hilfe-und-support/cfds/kosten-und-gebuehren/wie-lauten-die-produktinformationen-fuer-aktien-cfds#information-banner-dismiss))

### IG Instrument Identifier (Epic)

Breakdown for "IX.D.DOW.DAILY.IP":

| Symbol | Description                     | Example                                                            |
| ------ | ------------------------------- | ------------------------------------------------------------------ |
| IX     | Hours of trading                | "[Index Out of Hours](https://www.ig.com/uk/out-of-hours-trading)" |
| D      | Tradability                     | "D" when tradeable                                                 |
| DOW    | Underlying market               | "Dow Jones"                                                        |
| DAILY  | Indicator for processing method | "Daily" funded bet                                                 |
| IP     | Asset type                      | "Intellectual Property"                                            |

Epics for testing:

| Epic                | Name                | Environment | Trading Time           |
| ------------------- | ------------------- | ----------- | ---------------------- |
| ED.D.DHERGY.CASH.IP | Delivery Hero SE    | Live / Demo | Germany: 09:00 - 17:30 |
| UC.D.MSFT.CASH.IP   | Microsoft Corp      | Live / Demo | Germany: 10:00 - 03:00 |
| UA.D.COINUS.CASH.IP | Coinbase Global Inc | Live        | Germany: 15:30 - 22:00 |

## Development Setup

You can get up and running in just a few simple steps:

1. Run `yarn` (to install or update third-party dependencies)
1. Have a look at the [.env.defaults](./.env.defaults) file and make a copy (including your own credentials) with the name `.env` in the root directory of this repository ([read more about dotenv files](https://github.com/mrsteele/dotenv-defaults#usage))
1. Run `yarn demo:login` to test your credentials

## Maintainers

[![Benny Neugebauer on Stack Exchange][stack_exchange_bennyn_badge]][stack_exchange_bennyn_url]

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/bennycode/ig-trading-api/issues).

## License

This project is [MIT](./LICENSE) licensed.

## ⭐️ Show your support ⭐️

[Please leave a star](https://github.com/bennycode/ig-trading-api/stargazers) if you find this project useful.

[1]: https://www.npmjs.com/package/ig-trading-api
[2]: https://bennycode.com/ig-trading-api
[stack_exchange_bennyn_badge]: https://stackexchange.com/users/flair/203782.png?theme=default
[stack_exchange_bennyn_url]: https://stackexchange.com/users/203782/benny-neugebauer?tab=accounts
