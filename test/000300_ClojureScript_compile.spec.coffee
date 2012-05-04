isNodeJS = Boolean process?.pid

chai      = require 'chai'
sinon     = require 'sinon'
sinonChai = require 'sinon-chai'

index = __dirname + '/..'
ClojureScript = require index

{expect} = chai
chai.use sinonChai




describe 'ClojureScript.compile', ->

  it '''
    should compile a ClojureScript file into a JavaScript string
  ''', (done) ->

    file = ( __dirname + '/cljs/hello.cljs' )

    out = ClojureScript.compile file

    console.log out

    ( expect out ).to.be.a 'string'

    done()
