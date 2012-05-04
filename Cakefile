clog  = require 'clog'
util  = require 'util'
path  = require 'path'
watch = require 'watch'
touch = require 'touch'
fs    = require 'fs'
_     = require 'underscore'
_s    = require 'underscore.string'
{spawn, exec}  = require 'child_process'
{EventEmitter} = require 'events'


EventEmitter.prototype._maxListeners = 0


option '-R', '--reporter [NAME]', 'mocha reporter to use'


PACKAGE_JSON  = require ( __dirname + '/package.json' )
PACKAGE_NAME  = PACKAGE_JSON.name
manifest      = ( require ( __dirname + '/manifest.coffee' ) ).manifest


docsExclude = []
doccoList = manifest.slice 0


allEm = {}
allProc = {}


exitCode = 0


errOut = (err) ->
  if err.message then err.message else err


killTree = (pid, signal) ->
  exec ( 'sh ./support/tools/killtree.sh ' + pid ), { cwd: __dirname }, (err, stdout, stderr) ->
    try
      process.kill pid, signal
    catch error
      'silently ignore error, already killed'

killProc = (proc, signal = 'SIGTERM') ->
  for p in ( if proc? then proc else [] )
    do (p) ->
      p.removeAllListeners()
      killTree p.pid, signal
  while proc?.length
    proc.shift()


process.on 'uncaughtException', (err) ->
  clog.error 'UNCAUGHT EXCEPTION'
  clog.error ( errOut err )
  for own name, em of allEm
    em.removeAllListeners()
  exitCode = 1
  process.kill process.pid, 'SIGINT'

process.on 'SIGINT', ->
  console.log ''
  if not exitCode
    clog.info 'shutting down...'
  else
    clog.warn 'shutting down...'
  process.stdout.writable = false
  for own name, em of allEm
    em.removeAllListeners()
  for own name, proc of allProc
    killProc proc
  setTimeout ( -> process.exit exitCode ), 250


testContStdout = true
docsStdout = true


packaging = {}
packagingList = [

  [ 'licensing', ( PACKAGE_JSON.directories.lib + '/packaging/licensing.js' ) ]
  [ 'top', ( PACKAGE_JSON.directories.lib + '/packaging/top.js' ) ]
  [ 'bottom', ( PACKAGE_JSON.directories.lib + '/packaging/bottom.js' ) ]

]


loadPackaging = ->
  for pair in packagingList
    packaging[pair[0]] = fs.readFileSync pair[1], 'utf8'


packageAndWrite = (code) ->
  source   = ( source = code ; source = source.split '\n' ; source.shift() ; source.pop() ; source.pop() ; source.join '\n' )
  indented = ('  ' + line for line in (source.split '\n')).join '\n'
  packaged = packaging.licensing + packaging.top + indented + packaging.bottom
  fs.writeFileSync PACKAGE_JSON.main, packaged, 'utf8'




task 'bake', 'combines "build-cont", "docs", "markdown-server", ' + \
             '"static-server" and "test-cont" tasks', ->

  buildContEm      = allEm.buildContEm      ?= new EventEmitter
  staticServerEm   = allEm.staticServerEm   ?= new EventEmitter
  markdownServerEm = allEm.markdownServerEm ?= new EventEmitter

  docsStdout = false

  buildContEm.once 'built', ->
    invoke 'docs'
    invoke 'static-server'

  staticServerEm.once 'started', ->
    invoke 'markdown-server'

  markdownServerEm.once 'started', ->
    invoke 'test-cont'

  invoke 'build-cont'




task 'build', 'builds the library', ->

  buildEm = allEm.buildEm ?= new EventEmitter
  buildProc = allProc.buildProc = []

  ( coff = exec ( './node_modules/coffee-script/bin/coffee -bjcp ' + \
                  ( manifest.join ' ') ), { cwd: __dirname }, (err, stdout) ->
    if err
      clog.error ( errOut err )
    else
      loadPackaging()
      packageAndWrite stdout
      invoke 'docs'
  )

  buildProc.push coff




task 'build-cont', 'watches manifest and lib/*, rebuilds on changes', ->

  buildContEm = allEm.buildContEm ?= new EventEmitter
  buildContProc = allProc.buildContProc = []

  manifestWatch = fs.watchFile ( __dirname  + '/manifest.coffee' ), \
                               { persistent: true, interval: 200 }, \
                               (curr, prev) ->
    if ( curr.mtime.getTime() > prev.mtime.getTime() )
      delete require.cache[ ( require.resolve ( __dirname  + '/manifest.coffee' ) ) ]
      manifest = ( require ( __dirname  + '/manifest.coffee' ) ).manifest
      doccoList = manifest.slice 0
      manifestWatch.emit 'reload'

  loadPackaging()

  for pair in packagingList
    do (pair) ->
      fs.watchFile pair[1], { persistent: true, interval: 200 }, (curr, prev) ->
        if ( curr.mtime.getTime() > prev.mtime.getTime() )
          fs.readFile pair[1], 'utf8', (err, data) ->
            if err
              clog.error ( errOut err )
            else
              packaging[pair[0]] = data
              touch.sync manifest[0]

  whole = /// ^
    //\sTOP\s; \n
    (.|\n)+
    \s//\sBOTTOM\s; \n
  ///

  parseError = /Parse error on line/

  makeChild = ->
    ( coff = spawn ( './node_modules/coffee-script/bin/coffee' ), \
                   [ '-bjcpw', manifest... ], \
                   { cwd: __dirname }
    )
    coff.stdout.setEncoding('utf8')
    coff.stderr.pipe process.stderr

    coff.SOURCE_STREAM = ''

    coff.stdout.on 'data', (data) ->
      if ( not ( parseError.test data ) )
        coff.SOURCE_STREAM += data
      else
        coff.SOURCE_STREAM = ''
        clog.error 'CoffeeScript Parse error'
        console.log data
      if ( matched = coff.SOURCE_STREAM.match whole )
        coff.SOURCE_STREAM = _s.splice coff.SOURCE_STREAM, 0, matched[0].length
        packageAndWrite matched[0]
        killProc allProc.docsProc
        buildContEm.emit 'built'

    buildContProc.push coff

  makeChild()

  manifestWatch.on 'reload', ->
    killProc buildContProc
    killProc allProc.docsProc
    if allProc.testContProc?.length
      console.log ''
      clog.info 'mocha process killed, will restart after rebuild'
    killProc allProc.testContProc
    console.log ''
    clog.info 'build process killed, restarting'
    makeChild()




task 'docs', 'rebuilds the annotated source docs', ->

  docsEm = allEm.docsEm ?= new EventEmitter
  docsProc = allProc.docsProc = []

  allEm.buildContEm?.once 'built', ->
    invoke 'docs'

  licensing = fs.readFileSync ( PACKAGE_JSON.directories.lib + '/packaging/licensing-docco.coffee' ), 'utf8'

  ( cp = exec ( 'rm -rf ./docs_lib && mkdir -p ./docs_lib && cp -R ' + PACKAGE_JSON.directories.lib + '/* ./docs_lib' ), { cwd: __dirname }, (err) ->
    if err
      clog.error ( errOut err )
    else
      files = ( for file in ( _.without doccoList, docsExclude... )
                  _s.splice file, 0, 5, ( __dirname + '/docs_lib' ) )
      for file in files
        contents =  fs.readFileSync file, 'utf8'
        contents += licensing
        fs.writeFileSync file, contents, 'utf8'

      ( rm1 = exec ( 'rm -f ./docs/*.html' ), { cwd: __dirname }, (err) ->
        if err
          clog.error ( errOut err )
        else
          ( docco = exec [ './node_modules/docco/bin/docco', \
                         files.join(' ') ].join(' '), { cwd: __dirname }, (err) ->
            if err
              clog.error ( errOut err )
            else
              ( rm2 = exec ( 'rm -rf ./docs_lib' ), { cwd: __dirname }, (err) ->
                if err
                  clog.error ( errOut err )
              )
              rm2.stdout.pipe process.stdout
              rm2.stderr.pipe process.stderr

              docsProc.push rm2

          )
          if docsStdout
            docco.stdout.pipe process.stdout
            docco.stderr.pipe process.stderr

          docsProc.push docco

      )
      rm1.stdout.pipe process.stdout
      rm1.stderr.pipe process.stderr

      docsProc.push rm1

  )
  cp.stdout.pipe process.stdout
  cp.stderr.pipe process.stderr

  docsProc.push cp




task 'markdown-server', 'starts the markdown preview web server', ->

  markdownServerEm = allEm.markdownServerEm ?= new EventEmitter
  markdownServerProc = allProc.markdownServerProc ?= []

  ( srv = spawn ( './node_modules/gfms/bin/gfms' ), \
                [ '-p', '4400', '-h', '0.0.0.0' ], \
                { cwd: __dirname }
  )
  srv.stdout.setEncoding('utf8')
  srv.stdout.pipe process.stdout
  srv.stderr.pipe process.stderr

  lookFor = /GFMS serving/
  looking = (data) ->
    lookFor.test data

  srv.stdout.on 'data', ( look = (data) ->
    if looking(data)
      srv.stdout.removeListener 'data', look
      markdownServerEm.emit 'started' )

  markdownServerProc.push srv

  console.log ''
  clog.info 'starting markdown-server'




task 'release', 'see the outline in support/VERSIONING.txt', ->




task 'static-server', 'starts the auto-refreshing static file web server', ->

  staticServerEm = allEm.staticServerEm ?= new EventEmitter
  staticServerProc = allProc.staticServerProc ?= []

  ###
  ( srv = spawn './nodejuice', \
                [ __dirname ], \
                { cwd: ( __dirname + '/support/nodejuice' ) }
  )
  staticServerProc.push srv

  console.log ''
  clog.info 'starting static-server, listening on port 4300'
  ###

  staticServerEm.emit 'started'




task 'test', 'executes the test suite with mocha', (options) ->

  testEm = allEm.testEm ?= new EventEmitter
  testProc = allProc.testProc = []

  reporter = options.reporter or 'dot'

  console.log ''
  clog.info 'invoking mocha'
  ( mo = exec ( './node_modules/mocha/bin/mocha --colors --reporter ' + reporter + ' --timeout 60000 --slow 300 --compilers coffee:coffee-script' ), \
              { cwd: __dirname }, \
              (err) ->
                if err then process.exit 1
  )
  mo.stdout.pipe process.stdout
  mo.stderr.pipe process.stderr

  testProc.push mo




task 'test-cont', 'watches spec/*, retests on changes', (options) ->

  testContEm = allEm.testContEm ?= new EventEmitter
  testContProc = allProc.testContProc ?= []

  reporter = options.reporter or 'dot'

  mainWatch = fs.watchFile PACKAGE_JSON.main, { persistent: true, interval: 200 }, (curr, prev) ->
    if ( curr.mtime.getTime() > prev.mtime.getTime() )
      mainWatch.emit 'rebuild'

  isSpec = (file) ->
    if ((path.basename(file)[0..1] isnt '.#') and (file[-12..-1] is '.spec.coffee' or file[-8..-1] is '.spec.js'))
      true
    else
      false

  specFilter = (specList) ->
    _.sortBy ( _.select ( _.keys specList ), \
                        ( (spec) -> isSpec spec ), \
             ), \
             _.identity

  specFilterAgain = (specList) ->
    _.sortBy specList, _.identity


  {specdirWatch} = {}

  watch.createMonitor PACKAGE_JSON.directories.test, { persistent: true, interval: 200 }, (monitor) ->
    specdirWatch = monitor
    lastFile = f: null, action: null

    monitor.on 'changed', (f, curr, prev) ->
      if ( isSpec f ) and curr? and prev? and curr.mtime.getTime() > prev.mtime.getTime()
        lastFile = f: f, action: 'changed'
        console.log ''
        if testContStdout
          clog.info ( path.basename ( path.dirname f ) ) + '/' + ( path.basename f ) + ' *CHANGED*'
        specdirWatch.emit 'spec-changed'

    monitor.on 'created', (f, stat) ->
      if ( isSpec f ) and ( ( f isnt lastFile.f ) or ( lastFile.action isnt 'created' ) )
        lastFile = f: f, action: 'created'
        console.log ''
        if testContStdout
          clog.info ( path.basename ( path.dirname f ) ) + '/' + ( path.basename f ) + ' *CREATED*'
        specdirWatch.emit 'spec-created'

    monitor.on 'removed', (f, stat) ->
      if ( isSpec f ) and ( ( f isnt lastFile.f ) or ( lastFile.action isnt 'removed' ) )
        lastFile = f: f, action: 'removed'
        console.log ''
        if testContStdout
          clog.info ( path.basename ( path.dirname f ) ) + '/' + ( path.basename f ) + ' *DELETED*'
        specdirWatch.emit 'spec-removed'

    specCb = ->
      killProc testContProc
      console.log ''
      clog.info 'mocha process killed, restarting'
      makeChild()

    specdirWatch.on 'spec-changed', ->
      specCb()
    specdirWatch.on 'spec-created', ->
      specCb()
    specdirWatch.on 'spec-removed', ->
      specCb()

  makeChild = ->
    ( mo = exec ( './node_modules/mocha/bin/mocha --colors --reporter ' + reporter + ' --timeout 60000 --slow 300 --compilers coffee:coffee-script' ), \
                { cwd: __dirname },
                (err) -> null

    )
    mo.stdout.pipe process.stdout
    mo.stderr.pipe process.stderr

    testContProc.push mo

  console.log ''
  clog.info 'invoking mocha'
  makeChild()

  makeChildCb = ->
    killProc testContProc

    console.log ''
    clog.info 'mocha process killed, restarting'
    makeChild()

  mainWatch.on 'rebuild', makeChildCb
