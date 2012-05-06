isNodeJS = Boolean process?.pid

chai      = require 'chai'
sinon     = require 'sinon'
sinonChai = require 'sinon-chai'

index = __dirname + '/..'
ClojureScript = require index

{expect} = chai
chai.use sinonChai




describe 'ClojureScript exports', ->

  it '''
    should have a "build" method
  ''', (done) ->

    ( expect ClojureScript.build ).to.be.a 'function'

    done()
