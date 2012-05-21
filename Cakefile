clog  = require 'clog'
util  = require 'util'
path  = require 'path'
fs    = require 'fs'
{spawn, exec}  = require 'child_process'
{EventEmitter} = require 'events'


EventEmitter.prototype._maxListeners = 0


option '-R', '--reporter [NAME]', 'mocha reporter to use'

PACKAGE_JSON = require ( __dirname + '/package.json' )

allProc = {}

exitCode = 0

errOut = (err) ->
  if err.message then err.message else err


killTree = (pid, signal) ->
  exec ( 'sh ./support/tools/killtree.sh ' + pid ), { cwd: __dirname }, (err, stdout, stderr) ->
    try
      process.kill pid, signal
    catch error
      'silently ignore error, already killed'

killProc = (proc, signal = 'SIGTERM') ->
  for p in ( if proc? then ( [].concat proc ) else [] )
    do (p) ->
      p.removeAllListeners()
      killTree p.pid, signal
  while proc?.length
    proc.shift()


process.on 'uncaughtException', (err) ->
  clog.error 'UNCAUGHT EXCEPTION'
  clog.error ( errOut err )
  exitCode = 1
  process.kill process.pid, 'SIGINT'

process.on 'SIGINT', ->
  console.log ''
  if not exitCode
    clog.info 'shutting down...'
  else
    clog.warn 'shutting down...'
  process.stdout.writable = false
  for own name, proc of allProc
    killProc proc
  setTimeout ( -> process.exit exitCode ), 250


sources = [
  './clojure_script/core.cljs'
  './clojure_script/command.cljs'
]

deps = [
  './clojure_script/helpers.cljs'
]


task 'build-cont', 'build sources, rebuild when sources or their dependencies change', ->

  buildContProc = allProc.buildContProc = []

  makeClientChild = ->
    ( client = spawn ( '../../node_modules/clojure-script/bin/ncljsc' ), \
               [ '-w'
                 '-W'
                 deps.join(':')
                 '-o'
                 ( __dirname + '/lib/clojure_script' )
                 '-c'
                 '-C'
                 4242 ].concat(sources), \
               { cwd: ( __dirname + '/src/cljs' ) }
    )
    client.stdout.setEncoding('utf8')
    client.stderr.setEncoding('utf8')

    client.stdout.pipe process.stdout
    client.stderr.pipe process.stderr

    buildContProc.push client

  makeServerChild = ->
    ( server = spawn ( './node_modules/clojure-script/bin/ncljsc' ), \
               [ '-S', 4242 ], \
               { cwd: __dirname }
    )
    server.stdout.setEncoding('utf8')
    server.stderr.setEncoding('utf8')

    server.stdout.pipe process.stdout
    server.stderr.pipe process.stderr

    buildContProc.push server

    lookFor = /Detached JVM server listening/
    looking = (data) ->
      lookFor.test data

    server.stdout.on 'data', ( look = (data) ->
      if looking(data)
        server.stdout.removeListener 'data', look
        server.emit 'started' )

    server.on 'started', ->
      makeClientChild()

  makeServerChild()
