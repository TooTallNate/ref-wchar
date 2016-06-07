
1.0.2 / 2016-06-07
==================

  * Update travis.yml to use node version 6 (#6, @cookiengineer)
  * Update appveyor.xml to use node 6 as build target (#5, @cookiengineer)
  * package: update `iconv` dependency to use only major version 2 (#4, @cookiengineer)

1.0.1 / 2015-12-27
==================

  * package: update "ref" to v1.3.1
  * update for nan v2 / node.js v4
  * test: moar tests
  * test: test node v5
  * README: use SVG for appveyor badge

1.0.0 / 2015-03-24
==================

  * add .travis.yml and appveyor.yml files
  * index: use `toString()` in `wchar_t.get()`
  * README: add travis and appveyor badges
  * README: use C-style cast since we say C library
  * README: better example
  * package: update "ref" to v1.0.1

0.0.1 / 2014-06-19
==================

  * add initial tests
  * add .gitignore file
  * index: add lower-level `toString()` function
  * remove test.js file
  * index: throw a TypeError when a bad value is passed in to wchar_t set()
  * index: make `wchar_t` type based off of int16 or int32
  * index: add base `wchar_t` type
  * add README.md
  * beginnings of turning into a proper npm module
