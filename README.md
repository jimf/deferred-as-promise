# deferred-as-promise

Wrap a deferred as a native `Promise`.

[![npm Version][npm-badge]][npm]
[![Build Status][build-badge]][build-status]
[![Test Coverage][coverage-badge]][coverage-result]
[![Dependency Status][dep-badge]][dep-status]

## Installation

Install using npm:

    $ npm install deferred-as-promise

## Usage

```js
var $ = require('jquery');
var deferredAsPromise = require('deferred-as-promise');

deferredAsPromise($.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json'
})).then(function(result) {
    console.log(result);
}).catch(function(err) {
    console.error(err);
});
```

## License

MIT

[build-badge]: https://img.shields.io/travis/jimf/deferred-as-promise/master.svg
[build-status]: https://travis-ci.org/jimf/deferred-as-promise
[npm-badge]: https://img.shields.io/npm/v/deferred-as-promise.svg
[npm]: https://www.npmjs.org/package/deferred-as-promise
[coverage-badge]: https://img.shields.io/coveralls/jimf/deferred-as-promise.svg
[coverage-result]: https://coveralls.io/r/jimf/deferred-as-promise
[dep-badge]: https://img.shields.io/david/jimf/deferred-as-promise.svg
[dep-status]: https://david-dm.org/jimf/deferred-as-promise
