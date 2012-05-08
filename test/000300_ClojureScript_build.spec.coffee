isNodeJS = Boolean process?.pid

chai      = require 'chai'
sinon     = require 'sinon'
sinonChai = require 'sinon-chai'

index = __dirname + '/..'
ClojureScript = require index

{expect} = chai
chai.use sinonChai




describe 'ClojureScript.build', ->

  it '''
    should build a ClojureScript file into a JavaScript string
  ''', (done) ->

    filename = ( __dirname + '/cljs/hello.cljs' )

    out = ClojureScript.build {filename}

    #console.log out

    ( expect out ).to.be.a 'string'

    done()
