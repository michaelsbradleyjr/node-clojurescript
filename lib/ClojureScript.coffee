` // TOP `

ClojureScript = {}

ClojureScript.VERSION = VERSION = '0.0.0-2-pre'

java = require 'java'

java.classpath.push ( __dirname + '/support/clojure-clojure-8306949/clojure-1.4.0.jar' )
java.classpath.push ( __dirname + '/support/closure-compiler-latest/compiler.jar' )
java.classpath.push ( __dirname + '/support/clojure-clojurescript-7472ab9/src/clj' )
java.classpath.push ( __dirname + '/support/clojure-clojurescript-7472ab9/src/cljs' )

#main = java.import 'clojure.main'

#Compiler     = java.import 'clojure.lang.Compiler'
#StringReader = java.import 'clojure.lang.LispReader$StringReader'
#RT       = java.import 'clojure.lang.RT'

util = require 'util'
#console.log util.inspect Compiler, true, null, true
#console.log util.inspect RT, true, null, true


str = '(ns user) (defn foo [a b]   (str a \" \" b))'

#java.newInstance 'clojure.lang.LispReader$StringReader', str, (err, data) ->
#  if err then console.error err.message
#  if data then console.log data

#Compiler.loadSync ( java.newInstanceSync 'clojure.lang.LispReader$StringReader', str )


#console.log main.mainSync() #(err, data) ->
  #console.log main.main ( __dirname + '/support/clojure-clojurescript-7472ab9/bin/cljsc.clj' ), \
  #                      ( __dirname + '/temp/hello.cljs' ), (err, data) ->
  #if err then console.error err.message
  #if data then console.log data




if ( exports? )
  if ( module?.exports )
    exports = module.exports = ClojureScript
  exports.ClojureScript = ClojureScript
else
  this['ClojureScript'] = ClojureScript

` // BOTTOM `
