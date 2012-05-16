isNodeJS = Boolean process?.pid

chai      = require 'chai'
sinon     = require 'sinon'
sinonChai = require 'sinon-chai'

index = __dirname + '/..'
ClojureScript = require index

{expect} = chai
chai.use sinonChai




describe 'ClojureScript extensions', ->

  it '''
    should auto-compile a ".cljs" file loaded with NodeJS-require
  ''', (done) ->

    file = ( __dirname + '/cljs/hello.cljs' )

    #{hello} = require file

    #( expect hello.greet 'world' ).to.equal 'hello world'

    done()

  it '''
    should auto-compile by sending a build request to a "detached" JVM when a port number is passed to the function returned by require\'ing the clojure-script module
  ''', (done) ->

    ( expect ClojureScript.usingPort ).not.to.exist
    ( expect ClojureScript.builder   ).to.equal ClojureScript.localBuilder

    ClojureScript = (require index)(9999)

    ( expect ClojureScript.usingPort ).to.equal 9999
    ( expect ClojureScript.builder   ).to.equal ClojureScript.remoteBuilder

    file = ( __dirname + '/cljs/hello.cljs' )

    {hello} = require file

    console.log 'global.key: ', typeof global.key

    ( expect hello.greet 'world' ).to.equal 'hello worlddd'

    done()
