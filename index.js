/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Konstantin Sergienko @rsboarder
 */

var loaderUtils = require("loader-utils");
module.exports = function(source) {
  this.cacheable && this.cacheable(true);
  var query = loaderUtils.parseQuery(this.query);
  var prependedString = query.string.join('\n');

  return prependedString.concat(source);
};
