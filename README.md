# eth loader

_webpack loader for eth lang_

## usage

```js
var exportsOfFile = require("eth!./file.eth");
// => returns exports of executed and compiled file.eth
```

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

## recommended configuration

```js
module.exports = {
    ...
    module: {
        loaders: [
            {test: /\.eth$/, loader: 'eth-loader'}
        ]
    }
};
```

## license

See `LICENSE` file.
