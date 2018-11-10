'use strict'
const glob = require('fast-glob')

glob([
  '**/packages/**/package.json',
  '!**/foo/**/package.json',
])
.then((entries) => console.log(entries))
