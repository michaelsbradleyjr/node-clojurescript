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

    {hello} = require file

    ( expect hello.greet 'world' ).to.equal 'hello world'

    done()

  it '''
    should build using a "detached" JVM when the function returned by require\'ing clojure-script is called with a port number
  ''', (done) ->

    ( expect ClojureScript.usingPort ).not.to.exist
    ( expect ClojureScript.builder   ).to.equal ClojureScript.localBuilder

    ClojureScript 9999

    ( expect ClojureScript.usingPort ).to.equal 9999
    ( expect ClojureScript.builder   ).to.equal ClojureScript.remoteBuilder

    file = ( __dirname + '/cljs/foo.cljs' )

    {foo} = require file

    ( expect foo.bar 'world' ).to.equal 'fooBar world'

    done()
