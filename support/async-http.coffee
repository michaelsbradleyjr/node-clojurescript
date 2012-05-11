http = require 'http'

opts =
  host: 'www.google.com'
  port: 80
  path: '/'

( http.get opts, (res) ->
  process.stdout.write ( 'status code: ' + JSON.stringify res.statusCode )
).on 'error', (error) ->
  process.stdout.write error.message
