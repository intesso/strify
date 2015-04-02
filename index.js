var fs = require('fs');
var path = require('path');

module.exports = function strify(relativePath) {
  var dir = path.dirname(module.parent.filename);
  var p = path.join(dir, relativePath);
  return fs.readFileSync(p, 'utf-8');
};