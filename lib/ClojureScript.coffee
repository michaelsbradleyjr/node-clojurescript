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

ClojureScript = {}

ClojureScript.VERSION = VERSION = '0.0.0-6'

ClojureScript.java = java

ClojureScript.defaultOptions = "{:optimizations :simple :target :nodejs :pretty-print false}"
ClojureScript.options = ClojureScript.defaultOptions

ClojureScript.tmpDir = new tmpDir

tmpOut = (options) -> options[0...( options.length - 1 )] + " :tmp-out \"#{ ClojureScript.tmpDir.path }\"}"
addCp  = (options, cp) -> options[0...( options.length - 1 )] + " :add-classpath \"#{ cp }\"}"

ClojureScript.build = build = (target, options = ClojureScript.options) ->
  options = tmpOut options

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

  options = addCp options, cp

  if ( not build.calledPreviously )
    StringReader        = java.import 'java.io.StringReader'
    ClojureCompiler     = java.import 'clojure.lang.Compiler'

    ncljsc = fs.readFileSync ( __dirname + '/support/clj/ncljsc.clj' ), 'utf8'
    ncljscSR = new StringReader ncljsc
    ClojureCompiler.loadSync ncljscSR

    build.clojureBuild = java.callStaticMethodSync 'clojure.lang.RT', 'var', 'ncljsc', 'build'

    build.calledPreviously = true

  build.clojureBuild.invokeSync target, options
