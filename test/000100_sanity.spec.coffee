isNodeJS = Boolean process?.pid

chai      = require 'chai'
sinon     = require 'sinon'
sinonChai = require 'sinon-chai'

index = __dirname + '/..'
ClojureScript = require index

{expect} = chai
chai.use sinonChai




describe 'sanity check', ->

  it '''
    ClojureScript should be defined
  ''', (done) ->

    ( expect ClojureScript ).to.exist

    done()
