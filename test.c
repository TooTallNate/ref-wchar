var ffi = require('ffi')
var assert = require('assert')
var wchar_t = require('./wchar_t')

// now we can create our FFI'd "wcslen()" function
var wcslenPtr = ffi.DynamicLibrary('libc.dylib').get('wcslen')
var wcslen = ffi.ForeignFunction(wcslenPtr, 'size_t', [ wchar_t ])

// "wcstod()" function
var wcstodPtr = ffi.DynamicLibrary('libc.dylib').get('wcstod')
var wcstod = ffi.ForeignFunction(wcstodPtr, 'double', [ wchar_t, ref.refType(wchar_t) ])

// you pass regular JavaScript Strings to the FFI'd function and the "wchar_t"
// type we defined handles converting it to a proper Buffer behind the scenes.
assert.equal(5, wcslen('hello'))
assert.equal(11, wcslen('hello world'))

assert.equal(-3.14, wcstod('-3.14', null));