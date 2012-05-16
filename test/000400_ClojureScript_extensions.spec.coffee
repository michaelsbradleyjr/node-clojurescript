isNodeJS = Boolean process?.pid

chai      = require 'chai'
sinon     = require 'sinon'
sinonChai = require 'sinon-chai'

index = __dirname + '/..'
ClojureScript = require index

{expect} = chai
chai.use sinonChai

{spawn, exec}  = require 'child_process'




describe 'ClojureScript extensions', ->

  killTree = (pid, signal) ->
    exec ( 'sh ../support/tools/killtree.sh ' + pid ), { cwd: __dirname }, (err, stdout, stderr) ->
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

  detProcs = []

  afterEach (done) ->
    killProc detProcs
    done()


  it '''
    should auto-compile a ".cljs" file loaded with NodeJS-require
  ''', (done) ->

    file = ( __dirname + '/cljs/hello.cljs' )

    {hello} = require file

    ( expect hello.greet 'world' ).to.equal 'hello world'

    done()

  it '''
    should build using a "detached" JVM when the function returned by require\'ing clojure-script is called with a port number
  ''', (done) ->

    ( expect ClojureScript.usingPort ).not.to.exist
    ( expect ClojureScript.builder   ).to.equal ClojureScript.localBuilder

    ( detJVMserver = spawn ( '../bin/ncljsc' ), \
                           [ '-S', 23456 ], \
                           { cwd: __dirname }
    )
    detProcs.push detJVMserver
    detJVMserver.stdout.setEncoding 'utf8'

    lookFor = /Detached JVM server listening/
    looking = (data) ->
      lookFor.test data

    detJVMserver.stdout.on 'data', ( look = (data) ->
      if looking(data)
        detJVMserver.stdout.removeListener 'data', look
        detJVMserver.emit 'started' )

    detJVMserver.on 'started', ->
      ClojureScript 23456

      ( expect ClojureScript.usingPort ).to.equal 23456
      ( expect ClojureScript.builder   ).to.equal ClojureScript.remoteBuilder

      file = ( __dirname + '/cljs/foo.cljs' )

      {foo} = require file

      ( expect foo.bar 'world' ).to.equal 'fooBar world'

      done()
