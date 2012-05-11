util  = require 'util'
shell = require 'shelljs'

try
  res = shell.exec 'coffee ./async-http.coffee', silent: true
  console.log res.output
catch error
  process.stdout.write error.message

console.log 'this should appear *after* the status code is reported'
