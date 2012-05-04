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

    ( expect ( out = ClojureScript.compile file ) ).to.be.a 'string'

    #console.log out

    done()
