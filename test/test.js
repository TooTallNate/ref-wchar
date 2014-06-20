
var assert = require('assert');
var ref = require('ref');
var wchar_t = require('../');
var wchar_string = wchar_t.string;
var bindings = require('bindings')({ module_root: __dirname, bindings: 'test' })

describe('wchar_t', function () {

  afterEach(gc);

  it('should get "w" from the "w" symbol', function () {
    var str = ref.get(bindings.w, 0, wchar_t);
    assert.equal(str, 'w');
  });

});

describe('wchar_t *', function () {

  afterEach(gc);

  it('should get "hello world" from the "str" symbol', function () {
    var str = ref.get(bindings.str, 0, wchar_string);
    assert.equal(str, 'hello world');
  });

});

describe('toString()', function () {

  afterEach(gc);

  it('should get "hello world" from the "s" symbol', function () {
    var str = wchar_t.toString(bindings.s);
    assert.equal(str, 'hello world\0');
  });

});
