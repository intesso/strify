var test = require('tape');
var strify = require('./index');
var fs = require('fs');
var license = fs.readFileSync(__dirname + '/readme.md', 'utf-8');


test('strify local readme', function(t) {
  t.plan(2);

  var str = strify('./readme.md');

  t.true(str);
  t.true(~str.indexOf('strify'));

  var license = fs.readFileSync(__dirname + '/readme.md', 'utf-8');

});

test('strify nested license', function(t) {
  t.plan(2);

  var str = strify('node_modules/tape/LICENSE');

  t.true(str);
  t.true(~str.indexOf('MIT'));

});