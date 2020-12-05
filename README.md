# IG Trading API

Unofficial [IG Trading API](https://labs.ig.com/rest-trading-api-guide) for Node.js, written in TypeScript.

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

**JavaScript / Node.js**

```javascript
const {APIClient} = require('ig-trading-api');
const client = new APIClient('your-api-key');
```

**TypeScript**

```typescript
import {APIClient} from 'ig-trading-api';
const client = new APIClient('your-api-key');
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
