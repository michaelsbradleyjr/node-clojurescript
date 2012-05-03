isNodeJS = Boolean process?.pid

chai      = require 'chai'
sinon     = require 'sinon'
sinonChai = require 'sinon-chai'

index = __dirname + '/..'
delete require.cache[ ( require.resolve index ) ]
ClojureScript = require index

{expect} = chai
chai.use sinonChai




describe 'ClojureScript exports', ->

  it '''
    should have a "compile" method
  ''', (done) ->

    ( expect ClojureScript.compile ).to.be.a 'function'

    done()
