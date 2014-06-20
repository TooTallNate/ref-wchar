
/**
 * Module dependencies.
 */

var ref = require('ref');
var Iconv = require('iconv').Iconv;

// On Windows they're UTF-16 (2-bytes),
// but on Unix platform they're UTF-32 (4-bytes).
var size;
if ('win32' == process.platform) {
  size = 2;
} else {
  size = 4;
}

var getter = new Iconv('UTF-' + (8 * size) + ref.endianness, 'UTF-8');
var setter = new Iconv('UTF-8', 'UTF-' + (8 * size) + ref.endianness);

// Create a "wchar_t *" type. We use the "CString" type as a base since it's pretty
// close to what we actually want. We just have to define custom "get" and "set"
// functions and then we can use this type in FFI functions.
exports = module.exports = Object.create(ref.types.CString);
exports.get = get;
exports.set = set;

/**
 * `wchar *` string getter.
 *
 * @public
 */

function get (buf, offset) {
  var _buf = buf.readPointer(offset);
  if (_buf.isNull()) {
    return null;
  }
  var stringBuf = _buf.reinterpretUntilZeros(size);
  return getter.convert(stringBuf).toString('utf8');
}

/**
 * `wchar *` string setter.
 *
 * @public
 */

function set (buf, offset, val) {
  var _buf = val; // val is a Buffer? it better be \0 terminated...
  if ('string' == typeof val) {
    _buf = setter.convert(val + '\0');
  }
  return buf.writePointer(_buf, offset);
}
