` // TOP `

fs   = require 'fs'
java = require 'java'

java.classpath.push ( __dirname + '/support/clojure-clojurescript/lib/clojure.jar' )
java.classpath.push ( __dirname + '/support/clojure-clojurescript/lib/compiler.jar' )
java.classpath.push ( __dirname + '/support/clojure-clojurescript/lib/goog.jar' )
java.classpath.push ( __dirname + '/support/clojure-clojurescript/lib/js.jar' )
java.classpath.push ( __dirname + '/support/clojure-clojurescript/src/clj' )
java.classpath.push ( __dirname + '/support/clojure-clojurescript/src/cljs' )
java.classpath.push ( __dirname + '/support/clj' )
java.classpath.push ( __dirname + '/support/cljs' )

StringReader = java.import 'java.io.StringReader'
Compiler     = java.import 'clojure.lang.Compiler'

ClojureScript = {}

ClojureScript.VERSION = VERSION = '0.0.0-4-pre'

ncljsc = fs.readFileSync ( __dirname + '/support/clj/ncljsc.clj' ), 'utf8'
ncljscSR = new StringReader ncljsc
Compiler.loadSync ncljscSR

build = java.callStaticMethodSync 'clojure.lang.RT', 'var', 'ncljsc', 'build'

ClojureScript.defaultOptions = "{:optimizations :simple :target :nodejs :pretty-print false}"
ClojureScript.options = ClojureScript.defaultOptions

npmPkgOut = -> " :npm-pkg-out \"#{( __dirname + '/support/out' )}\" }"

ClojureScript.compile = compile = (filename, options = ClojureScript.options) ->
  options = ( options[0...( options.length - 1 )] + npmPkgOut() )
  build.invokeSync filename, options
