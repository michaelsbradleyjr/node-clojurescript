` // TOP `

fs             = require 'fs'
Module         = require 'module'
path           = require 'path'
readline       = require 'readline'
vm             = require 'vm'

{EventEmitter} = require 'events'
{inspect}      = require 'util'
{Script}       = vm
{spawn, exec}  = require 'child_process'

ClojureScript = {}

ClojureScript.VERSION = '0.0.0-8-pre'

ClojureScript.Tempdir = require 'temporary/lib/dir'

ClojureScript.defaultJavaOptions = ''
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

ClojureScript.defaultOptions = '{:optimizations :simple :target :nodejs :pretty-print false}'
ClojureScript.options = ClojureScript.defaultOptions

ClojureScript.tmp = new ClojureScript.Tempdir

pathCompiledCoreJS = __dirname + '/support/out/cljs/core.js'
compiledCoreJS = ''
ClojureScript.compiledCoreJS = -> compiledCoreJS
if ( path.existsSync pathCompiledCoreJS )
  compiledCoreJS = fs.readFileSync pathCompiledCoreJS, 'utf8'
  ClojureScript.compiledCoreJS = -> compiledCoreJS
  ClojureScript.compiledCoreJS.exists = true

pathCompiledNodejsJS = __dirname + '/support/out/cljs/nodejs.js'
compiledNodejsJS = ''
ClojureScript.compiledNodejsJS = -> compiledNodejsJS
if ( path.existsSync pathCompiledNodejsJS )
  compiledNodejsJS = fs.readFileSync pathCompiledNodejsJS, 'utf8'
  ClojureScript.compiledNodejsJS = -> compiledNodejsJS
  ClojureScript.compiledNodejsJS.exists = true

ClojureScript.tmpOut = (options) -> options[0...( options.length - 1 )] + " :tmp-out \"#{ @tmp.path }\"}"
ClojureScript.addBuildClasspath = (options, cp) -> options[0...( options.length - 1 )] + " :add-classpath \"#{ cp }\"}"

ClojureScript.build = (target, options = ClojureScript.options, javaOptions = ClojureScript.javaOptions) ->
  if ( not @java ) then @initJava javaOptions
  if ( not @ClojureCompiler ) then @initClojureCompiler()

  if ( options isnt ClojureScript.options )
    options = options.match /^\s*(\{.*\})\s*$/
    if ( not options )
      throw new Error 'malformed options string'
    else
      options = options[1]

    if ( ( options.match /\:output-dir\s*\'.*\'/ ) or \
         ( options.match /\:output-dir\s*[^\'\"]*(\:|(\}$))/ ) or \
         ( options.match /\:output-dir\s*\'[^\']*(\:|(\}$))/ ) or \
         ( options.match /\:output-dir\s*\"[^\"]*(\:|(\}$))/ ) or \
         ( options.match /\:output-dir\s*[^\']*\'\s*(\:|(\}$))/ ) or \
         ( options.match /\:output-dir\s*[^\"]*\"\s*(\:|(\}$))/ ) )
      throw new Error 'path specified as :output-dir must be wrapped in double-quotes'

    outputdir = options.match /\:output-dir\s*(\".*\")/
    if outputdir
      outputdir = outputdir[1]
      outputdir = outputdir[1...( outputdir.length - 1 )]
      outputdir = path.resolve ( path.normalize outputdir )
      if ( not path.existsSync outputdir )
        throw new Error 'path specified as :output-dir must exist'
      if ( not ( fs.statSync outputdir ).isDirectory() )
        throw new Error 'path specified as :output-dir must be a directory'

  if ( not outputdir? )
    outputdir = @tmp.path
    options = @tmpOut options

  outcljs = outputdir + '/cljs'
  if ( not ( path.existsSync outcljs ) )
    fs.mkdirSync outcljs

  if @compiledCoreJS.exists
    outcljscore = outcljs + '/core.js'
    if ( not ( path.existsSync outcljscore ) )
      fs.writeFileSync outcljscore, ClojureScript.compiledCoreJS(), 'utf8'

  if @compiledNodejsJS.exists
    outcljsnodejs = outcljs + '/nodejs.js'
    if ( not ( path.existsSync outcljsnodejs ) )
      fs.writeFileSync outcljsnodejs, ClojureScript.compiledNodejsJS(), 'utf8'

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
