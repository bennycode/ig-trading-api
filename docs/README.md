**[ig-trading-api](README.md)**

> [Globals](globals.md)

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

## Setup

You can set the API gateway, when initializing the API client. Use `APIClient.URL_DEMO` (demo-api.ig.com) for demo accounts and `APIClient.URL_LIVE` (api.ig.com) for live account access. 

**JavaScript / Node.js**

```javascript
const {APIClient} = require('ig-trading-api');
const client = new APIClient(APIClient.URL_LIVE, 'your-api-key');
```

**TypeScript**

```typescript
import {APIClient} from 'ig-trading-api';
const client = new APIClient(APIClient.URL_LIVE, 'your-api-key');
```

## Usage

### Login

```typescript
const session = await client.rest.login.createSession('your-username', 'your-password');
console.info(`Your client ID is "${session.clientId}".`);
```

## Useful links

- [IG API Companion](https://labs.ig.com/sample-apps/api-companion/index.html)
- [IG REST Trading API Reference](https://labs.ig.com/rest-trading-api-reference)

[1]: https://www.npmjs.com/package/ig-trading-api
[2]: https://bennycode.com/ig-trading-api
