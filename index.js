var eth = require('eth');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  return eth.indent(eth.compile(source));
};
