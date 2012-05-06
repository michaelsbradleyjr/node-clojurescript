` // TOP `

fs     = require 'fs'
path   = require 'path'
java   = require 'java'
tmpDir = require 'temporary/lib/dir'

java.classpath.push ( __dirname + '/support/clojure-clojurescript/lib/clojure.jar' )
java.classpath.push ( __dirname + '/support/clojure-clojurescript/lib/compiler.jar' )
java.classpath.push ( __dirname + '/support/clojure-clojurescript/lib/goog.jar' )
java.classpath.push ( __dirname + '/support/clojure-clojurescript/lib/js.jar' )
java.classpath.push ( __dirname + '/support/clojure-clojurescript/src/clj' )
java.classpath.push ( __dirname + '/support/clojure-clojurescript/src/cljs' )
java.classpath.push ( __dirname + '/support/clj' )
java.classpath.push ( __dirname + '/support/cljs' )

ClojureScript = {}

ClojureScript.VERSION = VERSION = '0.0.0-4'

ClojureScript.java = java

ClojureScript.defaultOptions = "{:optimizations :simple :target :nodejs :pretty-print false}"
ClojureScript.options = ClojureScript.defaultOptions

ClojureScript.tmpDir = new tmpDir

tmpOut = -> " :tmp-out \"#{ ClojureScript.tmpDir.path }\" }"

ClojureScript.compile = compile = (target, options = ClojureScript.options) ->
  options = ( options[0...( options.length - 1 )] + tmpOut() )

  resolved = path.resolve ( path.normalize target )
  if ( not ( path.existsSync resolved ) )
    throw new Error 'target path must exist'
  stats = fs.statSync resolved
  if ( stats.isDirectory() )
    cp = resolved
  else if ( stats.isFile() )
    cp = path.dirname resolved
  else
    throw new Error 'target path must be a file or a directory'
  java.classpath.push cp

  StringReader = java.import 'java.io.StringReader'
  Compiler     = java.import 'clojure.lang.Compiler'

  ncljsc = fs.readFileSync ( __dirname + '/support/clj/ncljsc.clj' ), 'utf8'
  ncljscSR = new StringReader ncljsc
  Compiler.loadSync ncljscSR

  build = java.callStaticMethodSync 'clojure.lang.RT', 'var', 'ncljsc', 'build'
  build.invokeSync target, options
