var ffi = require('ffi')
var ref = require('ref')
var assert = require('assert')
var wchar_t = require('./wchar_t')

// now we can create our FFI'd "wcslen()" function
var libc = ffi.Library('libc', {
  wcslen: [ 'size_t', [ wchar_t ] ],
  wcstod: [ 'double', [ wchar_t, ref.refType(wchar_t) ] ]
})

// you pass regular JavaScript Strings to the FFI'd function and the "wchar_t"
// type we defined handles converting it to a proper Buffer behind the scenes.
assert.equal(5, libc.wcslen('hello'))
assert.equal(11, libc.wcslen('hello world'))
assert.equal(-3.14, libc.wcstod('-3.14', null))