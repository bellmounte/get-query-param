# get-query-param [![Build Status](https://travis-ci.org/bellmounte/get-query-param.svg?branch=master)](https://travis-ci.org/bellmounte/get-query-param)

Get a particular search query param from the current url or a specified url.

## Installation
```bash
npm install --save bellmounte-get-query-param
```

## Usage

```javascript
const getQueryParam = require('bellmounte-get-query-param');

// http://example.com/test?test=true
getQueryParam('test');  // true
getQueryParam('test', 'test=false');  // false
getQueryParam('true');  // undefined
```

## License

MIT
