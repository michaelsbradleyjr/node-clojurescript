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

    path = ( __dirname + '/cljs/hello.cljs' )

    builder = ClojureScript.localBuilder

    options =
      async: false
      path:  path

    callback = (err, js) -> if err then null else js

    # callback will be called synchronously since options.async is false
    out = ClojureScript.build options, builder, callback

    ( expect out ).to.be.a 'string'

    done()

    # presently, attempting asynchronous calls to cljs.closure/build
    # is resulting in exceptions mentioning java.lang.NullPointerException,
    # so this test will remain disabled until a solution is found to make
    # it async friendly
    ###
    options =
      async: true
      path:  path

    callback = (err, js) ->

      console.log err

      process.nextTick ->

        if err
          asyncOut = null
        else
          asyncOut = js

        ( expect asyncOut ).to.be.a 'string'

        done()

    ClojureScript.build options, builder, callback
    ###