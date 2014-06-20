ref-wchar
==========
### A ref "type" implementation of `wchar_t *` (a.k.a. wide string) backed by "node-iconv"

This module offers a ["wide
strings"](http://en.wikipedia.org/wiki/Wide_character#C.2FC.2B.2B) (`whar_t *`)
implementation on top of Node.js Buffers using the ref "type" interface.


Installation
------------

Install with `npm`:

``` bash
$ npm install ref-wchar
```


Examples
--------

Say you have a C library that exports a `wchar_t` char and a `wchar_t *` wide
string:

``` c
#if defined(WIN32) || defined(_WIN32)
#define EXPORT __declspec(dllexport)
#else
#define EXPORT
#endif

EXPORT whcar_t w = L'W';

EXPORT wchar_t str[] = L"hello world";
```

``` js
var ref = require('ref');
var dlfcn = require('dlfcn');
var wchar_t = require('ref-struct');
var wchar_string = wchar_t.string;

var lib = dlfcn('./libexample');

// get the "w" symbol as a wchar
var w = lib.get('w', wchar_t.size);
ref.get(w, wchar_t);
// "W"

// get the "str" symbol as a wide string
var str = lib.get('str');
ref.get(w, wchar_string);
// "hello world"
```


License
-------

(The MIT License)

Copyright (c) 2014 Nathan Rajlich &lt;nathan@tootallnate.net&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
