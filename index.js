var eth = require('eth');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  return eth.write(eth.read(this.resourcePath, source));
};
