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
  if options then java.options.push jo for jo in ( options.split ' ' )
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

ClojureScript.build = (options = {}, cljsOptions = ClojureScript.options, javaOptions = ClojureScript.javaOptions) ->
  o = options
  if not o.path then throw new Error 'no source path specified'
  if ( not @java ) then @initJava javaOptions
  if ( not @ClojureCompiler ) then @initClojureCompiler()

  if ( cljsOptions isnt ClojureScript.options )
    cljsOptions = cljsOptions.match /^\s*(\{.*\})\s*$/
    if ( not cljsOptions )
      throw new Error 'malformed ClojureScript options hash-map'
    else
      cljsOptions = cljsOptions[1]

    if ( ( cljsOptions.match /\:output-dir\s*\'.*\'/ ) or \
         ( cljsOptions.match /\:output-dir\s*[^\'\"]*(\:|(\}$))/ ) or \
         ( cljsOptions.match /\:output-dir\s*\'[^\']*(\:|(\}$))/ ) or \
         ( cljsOptions.match /\:output-dir\s*\"[^\"]*(\:|(\}$))/ ) or \
         ( cljsOptions.match /\:output-dir\s*[^\']*\'\s*(\:|(\}$))/ ) or \
         ( cljsOptions.match /\:output-dir\s*[^\"]*\"\s*(\:|(\}$))/ ) )
      throw new Error 'path specified as :output-dir must be wrapped in double-quotes'

    outputdir = cljsOptions.match /\:output-dir\s*(\".*\")/
    if outputdir
      outputdir = outputdir[1]
      outputdir = outputdir[1...( outputdir.length - 1 )]
      outputdir = path.resolve ( path.normalize outputdir )
      if ( not path.existsSync outputdir )
        throw new Error 'path specified as :output-dir must exist'
      if ( not ( fs.statSync outputdir ).isDirectory() )
        throw new Error 'path specified as :output-dir must be a directory'
      @['output-dir'] = outputdir

  if ( not outputdir? )
    @['output-dir'] = outputdir = @tmp.path
    cljsOptions = @tmpOut cljsOptions

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

  resolved = path.resolve ( path.normalize o.path )
  if ( not ( path.existsSync resolved ) )
    throw new Error 'source path must exist'
  stats = fs.statSync resolved
  if ( stats.isDirectory() )
    cp = resolved
  else if ( stats.isFile() )
    cp = path.dirname resolved
  else
    throw new Error 'source path must be a file or a directory'

  cljsOptions = @addBuildClasspath cljsOptions, cp

  @clojureBuild.invokeSync o.path, cljsOptions

ClojureScript.eval = (options = {}, cljsOptions = ClojureScript.options, javaOptions = ClojureScript.javaOptions) ->
  return console.log 'eval method is not yet implemented'

ClojureScript.run = (options = {}, cljsOptions = ClojureScript.options, javaOptions = ClojureScript.javaOptions) ->
  'do some amazing things'
