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
