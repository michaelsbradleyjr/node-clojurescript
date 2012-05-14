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

    options =
      async: false
      path:  path

    builder = ClojureScript.builder

    callback = (err, js) -> if err then null else js

    # callback will be called synchronously since options.async is false
    #out = ClojureScript.build options, builder, callback

    #console.log out

    #( expect out ).to.be.a 'string'

    options =
      async: true
      path:  path

    callback = (err, js) ->
      if err
        asyncOut = null
      else
        asyncOut = js

      #console.log asyncOut

      ( expect asyncOut ).to.be.a 'string'

      done()

    ClojureScript.build options, builder, callback
