` // TOP `

fs     = require 'fs'
path   = require 'path'

ClojureScript = {}

ClojureScript.VERSION = '0.0.0-7-pre'

ClojureScript.Tempdir = require 'temporary/lib/dir'

ClojureScript.defaultJavaOptions = ""
ClojureScript.javaOptions = ClojureScript.defaultJavaOptions

ClojureScript.initJava = (options) ->
  @java = java = require 'java'
  java.classpath.push ( __dirname + '/support/clojure-clojurescript/lib/clojure.jar' )
  java.classpath.push ( __dirname + '/support/clojure-clojurescript/lib/compiler.jar' )
  java.classpath.push ( __dirname + '/support/clojure-clojurescript/lib/goog.jar' )
  java.classpath.push ( __dirname + '/support/clojure-clojurescript/lib/js.jar' )
  java.classpath.push ( __dirname + '/support/clojure-clojurescript/src/clj' )
  java.classpath.push ( __dirname + '/support/clojure-clojurescript/src/cljs' )
  java.classpath.push ( __dirname + '/support/clj' )

ClojureScript.initClojureCompiler = (javaOptions = ClojureScript.javaOptions) ->
  if ( not @java ) then @initJava javaOptions
  @StringReader = StringReader = @java.import 'java.io.StringReader'
  @ClojureCompiler = ClojureCompiler = @java.import 'clojure.lang.Compiler'

  ncljsc = fs.readFileSync ( __dirname + '/support/clj/ncljsc.clj' ), 'utf8'
  ncljscSR = new StringReader ncljsc
  ClojureCompiler.loadSync ncljscSR

  @clojureAddClassPath = @java.callStaticMethodSync 'clojure.lang.RT', 'var', 'ncljsc', 'pom-add-classpath'

  @addClassPath = (cp) ->
    @clojureAddClassPath.invokeSync cp

  @clojureBuild = @java.callStaticMethodSync 'clojure.lang.RT', 'var', 'ncljsc', 'build'

ClojureScript.addClassPath = (cp) ->
  @initClojureCompiler()
  @addClassPath cp

ClojureScript.defaultOptions = "{:optimizations :simple :target :nodejs :pretty-print false}"
ClojureScript.options = ClojureScript.defaultOptions

ClojureScript.tmp = new ClojureScript.Tempdir
fs.mkdirSync ( ClojureScript.tmp.path + '/cljs' )

pathCompiledCoreJS = __dirname + '/support/out/cljs/core.js'
compiledCoreJS = ''
ClojureScript.compiledCoreJS = -> compiledCoreJS
if ( path.existsSync pathCompiledCoreJS )
  compiledCoreJS = fs.readFileSync pathCompiledCoreJS, 'utf8'
  ClojureScript.compiledCoreJS = -> compiledCoreJS
  fs.writeFileSync ( ClojureScript.tmp.path + '/cljs/core.js' ), ClojureScript.compiledCoreJS(), 'utf8'

pathCompiledNodejsJS = __dirname + '/support/out/cljs/nodejs.js'
compiledNodejsJS = ''
ClojureScript.compiledNodejsJS = -> compiledNodejsJS
if ( path.existsSync pathCompiledNodejsJS )
  compiledNodejsJS = fs.readFileSync pathCompiledNodejsJS, 'utf8'
  ClojureScript.compiledNodejsJS = -> compiledNodejsJS
  fs.writeFileSync ( ClojureScript.tmp.path + '/cljs/nodejs.js' ), ClojureScript.compiledNodejsJS(), 'utf8'

ClojureScript.tmpOut = (options) -> options[0...( options.length - 1 )] + " :tmp-out \"#{ @tmp.path }\"}"
ClojureScript.addBuildClasspath = (options, cp) -> options[0...( options.length - 1 )] + " :add-classpath \"#{ cp }\"}"

ClojureScript.build = (target, options = ClojureScript.options, javaOptions = ClojureScript.javaOptions) ->
  if ( not @java ) then @initJava javaOptions
  if ( not @ClojureCompiler ) then @initClojureCompiler()

  options = @tmpOut options

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

  options = @addBuildClasspath options, cp

  @clojureBuild.invokeSync target, options
