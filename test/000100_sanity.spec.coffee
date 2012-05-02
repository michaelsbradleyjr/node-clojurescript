isNodeJS = Boolean process?.pid

chai      = require 'chai'
sinon     = require 'sinon'
sinonChai = require 'sinon-chai'

index = __dirname + '/..'
delete require.cache[ ( require.resolve index ) ]
ClojureScript = require index

{expect} = chai
chai.use sinonChai




describe 'sanity check', ->

  it '''
    ClojureScript should be defined
  ''', (done) ->

    ( expect ClojureScript ).to.exist

    done()


  it '''
    should have a "compile" method
  ''', (done) ->

    # will remain purposely broken (i.e. undefined) until I can get
    # the most basic exportable compile function working
    ( expect ClojureScript.compile ).to.be.a 'function'

    done()
