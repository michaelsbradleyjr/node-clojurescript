# The `ncljsc` utility. Handles command-line compilation of ClojureScript
# into various forms: saved into `.js` files or printed to stdout, piped to
# [JavaScript Lint](http://javascriptlint.com/) or recompiled every time the source is
# saved, printed as a token stream or as the syntax tree, or launch an
# interactive REPL.

# Allow ClojureScript to emit Node.js events.
extend ClojureScript, new EventEmitter

printLine = (line) -> process.stdout.write line + '\n'
printWarn = (line) -> process.stderr.write line + '\n'

hidden = (file) -> /^\.|~$/.test file

# The help banner that is printed when `ncljsc` is called without arguments.
BANNER = '''
  Usage: ncljsc [options] path/to/script.cljs -- [args]

  If called without options, `ncljsc` will run your script.
'''

# The list of all the valid option flags that `ncljsc` knows how to handle.
SWITCHES = [
  ['-b', '--bare',                    '  compile without a top-level function wrapper']
  ['-c', '--compile',                 '  compile to JavaScript and save as .js files']
  ['-C', '--client [PORT]',           '  act as a build-client of a "detached" JVM listening on\n' + \
                                      '                       the specified port (default is 4242)']
  ['-e', '--eval',                    '  pass a string from the command line as input']
  ['-F', '--flags-print',             '  print the options parsed by "ncljsc" and the contents of\n' + \
                                      '                       process.argv']
  ['-h', '--help',                    '  display this help message']
  ['-i', '--interactive',             '  run an interactive ClojureScript REPL']
  ['-j', '--join [FILE]',             '  concatenate the source ClojureScript before compiling']
  ['-J', '--java [LIST]',             '  pass a string of options to the JVM, space separated,\n' + \
                                      '                       leave off the leading dashes']
  ['-l', '--lint',                    '  pipe the compiled JavaScript through JavaScript Lint']
  ['-n', '--nodejs [ARGS]',           '  pass options directly to the "node" binary']
  ['-O', '--options-cljsc [HASHMAP]', '  pass a hash-map of options (as a string) to the\n' + \
                                      '                       ClojureScript compiler']
  ['-o', '--output [DIR]',            '  set the "ncljsc" output directory for compiled JavaScript\n' + \
                                      '                       (distinct from :output-dir specified with -O)']
  ['-p', '--print',                   '  print out the compiled JavaScript']
  ['-r', '--require [FILE*]',         '  require a library before executing your script']
  ['-s', '--stdio',                   '  listen for and compile scripts over stdio']
  ['-S', '--server [PORT]',           '  act as a "detached" JVM build-server listening on the \n' + \
                                      '                       specified port (default is 4242)']
  ['-v', '--version',                 '  display the version numbers of "ncljsc" and ClojureScript']
  ['-W', '--watch-deps [FILE]',       '  watch other dependencies not targeted by --watch,\n' + \
                                      '                       rerun commands on changes, supply as colon separated\n' + \
                                      '                       path list (requires --watch)']
  ['-w', '--watch',                   '  watch scripts for changes and rerun commands']
]

# Top-level objects shared by all the functions.
opts         = {}
sources      = []
outFiles     = {}
sourceCode   = []
notSources   = {}
watchers     = {}
optionParser = null

makePad = (l) ->
  pad = ''
  while l
    pad = pad + ' '
    l--
  pad

printFlags = ->
  if ( ( forked = ( process.argv.indexOf '--ncljsc-print-options-once' ) ) is -1 )
    printLine "\nncljsc parsed and/or set the following options (some may not be applied):\n"
    longest = 0
    for key, val of opts
      if key.length > longest then longest = key.length
    for key, val of opts
      kL = key.length
      pad = ''
      if kL < longest then pad = makePad ( longest - kL )
      if val instanceof Array then val = util.inspect val
      printLine ( '  ' + key + pad + '     ' + ( val or '' ) )
  printLine "\n#{ if ( forked isnt -1 ) then 'forked node\'s ' else '' }process.argv contained the following:\n"
  for arg in process.argv
    printLine ( '  ' + arg + ( if ( arg is '--ncljsc-print-options-once' ) then '    [ ignored by ncljsc ]' else '' ) )

# Run `ncljsc` by parsing passed options and determining what action to take.
# Many flags cause us to divert before compiling anything. Flags passed after
# `--` will be passed verbatim to your script as arguments in `process.argv`
ClojureScript.commandRun = ->
  parseOptions()
  printFlags()                            if opts['flags-print']
  return forkNode()                       if opts.nodejs
  return usage()                          if opts.help
  return version()                        if opts.version
  loadRequires()                          if opts.require
  return ( ClojureScript.usingPort = opts.server ; startServer() ) if opts.server
  return repl.prompt()                    if opts.interactive
  if ( opts.watch or opts['watch-deps'] ) and !fs.watch
    return printWarn "The --watch feature depends on Node v0.6.0+. You are running #{process.version}."
  return compileStdio()                   if opts.stdio
  return compileScript null, sources[0]   if opts.eval
  return repl.prompt()                    unless sources.length
  ( ClojureScript.usingPort = opts.client ; ClojureScript.builder = ClojureScript.remoteBuilder ) if opts.client
  ( ClojureScript.client = ( require __dirname + '/support/js/detached-jvm-client' ) ) if opts.client and opts.async
  watchDeps()                             if opts['watch-deps'] and opts.watch
  literals = if opts.run then sources.splice 1 else []
  process.argv = process.argv[0..1].concat literals
  process.argv[0] = 'ncljsc'
  process.execPath = require.main.filename
  for source in sources
    buildPath source, yes, path.normalize source

# Compile a path, which could be a script or a directory.
buildPath = (source, topLevel, base) ->
  fs.stat source, (err, stats) ->
    throw err if err and err.code isnt 'ENOENT'
    if err?.code is 'ENOENT'
      if topLevel and source[-5..] isnt '.cljs'
        source = sources[sources.indexOf(source)] = "#{source}.cljs"
        return buildPath source, topLevel, base
      if topLevel
        console.error "File not found: #{source}"
        process.exit 1
      return
    if stats.isDirectory()
      if opts.run
        watch source, base if opts.watch
        buildPath ( path.normalize ( source + '/index.cljs' ) ), yes, base
      else
        if not watchers[source]
          watchDir source, base if opts.watch
        buildFromDisk source, base
    else if topLevel or path.extname(source) is '.cljs'
      watch source, base if opts.watch
      buildFromDisk source, base
    else
      notSources[source] = yes
      removeSource source, base

# Compile a single path, according to the requested options. If
# evaluating the script directly sets `__filename`, `__dirname` and
# `module.filename` to be correct relative to the script's path.
buildFromDisk = (path, base) ->
  o = opts
  options = compileOptions path
  try
    t = task = {path, options, cljscOptions: o['options-cljsc'], javaOptions: o.java}
    ClojureScript.emit 'compile', task
    if o.run
      # callback will be called synchronously since o.async is false when o.run is true
      callback = (err, js) ->
        if err then throw err else js
      ClojureScript.run t.options, ClojureScript.builder, callback, t.cljscOptions, t.javaOptions
    else if o.join and t.path isnt o.join
      # lacking implementation
      #sourceCode[sources.indexOf(t.path)] = t.input
      compileJoin()
    else
      # callback may be called sync or async depending on cli options
      # or arguments passed to the required module
      callback = (err, js) ->
        if err then throw err
        t.output = js
        ClojureScript.emit 'success', task
        if o.print          then printLine t.output.trim()
        else if o.compile   then writeJs t.path, t.output, base
        else if o.lint      then lint t.path, t.output
      ClojureScript.build t.options, ClojureScript.builder, callback, t.cljscOptions, t.javaOptions

  catch err
    ClojureScript.emit 'failure', err, task
    return if ClojureScript.listeners('failure').length
    return printLine err.message + '\x07' if o.watch
    printWarn err instanceof Error and err.stack or "ERROR: #{err}"
    process.exit 1

compileScript = (input) ->
  throw new Error 'ncljsc --eval not yet implemented'

# Attach the appropriate listeners to compile scripts incoming over **stdin**,
# and write them back to **stdout**.
compileStdio = ->
  throw new Error 'ncljsc --stdio not yet implemented'
  #code = ''
  #stdin = process.openStdin()
  #stdin.on 'data', (buffer) ->
  #  code += buffer.toString() if buffer
  #stdin.on 'end', ->
  #  compileScript null, code

# If all of the source files are done being read, concatenate and compile
# them together.
joinTimeout = null
compileJoin = ->
  throw new Error 'ncljsc --join not yet implemented'
  #return unless opts.join
  #unless sourceCode.some((code) -> code is null)
  #  clearTimeout joinTimeout
  #  joinTimeout = wait 100, ->
  #    compileScript opts.join, sourceCode.join('\n'), opts.join

# Load files that are to-be-required before compilation occurs.
loadRequires = ->
  realFilename = module.filename
  module.filename = '.'
  require req for req in opts.require
  module.filename = realFilename

# Watch a source ClojureScript file using `fs.watch`, recompiling it every
# time the file is updated. May be used in combination with other options,
# such as `--lint` or `--print`.
watch = (source, base) ->
  prevStats = null
  compileTimeout = null

  watchErr = (e) ->
    if e.code is 'ENOENT'
      return if sources.indexOf(source) is -1
      try
        rewatch()
        compile()
      catch e
        removeSource source, base, yes
        compileJoin()
    else throw e

  blockCompile = false

  compile = ->
    if blockCompile then return
    blockCompile = true
    timeLog "file watcher : filename - #{source}" unless ( opts.print or opts.run )
    clearTimeout compileTimeout
    compileTimeout = wait 25, ->
      fs.stat source, (err, stats) ->
        return watchErr err if err
        return rewatch() if prevStats and stats.size is prevStats.size and
          stats.mtime.getTime() is prevStats.mtime.getTime()
        prevStats = stats
        try
          buildFromDisk source, base
          rewatch()
        catch err
          watchErr err
        #fs.readFile source, (err, code) ->
        #  return watchErr err if err
        #  compileScript(source, code.toString(), base)
        #  rewatch()

  try
    watcher = fs.watch source, compile
  catch e
    watchErr e

  rewatch = ->
    watcher?.close()
    blockCompile = false
    watcher = fs.watch source, compile


# Watch a directory of files for new additions.
watchDir = (source, base) ->
  block = false
  try
    watcher = fs.watch source, (event, filename) ->
      possibleWatchDeps = []
      for w in opts['watch-deps']
        if ( ( path.extname w ) isnt '' )
          possibleWatchDeps.push path.basename w
      if ( ( not filename or ( not hidden(filename) and not notSources[filename] and not outFiles[filename] and ( ( possibleWatchDeps.indexOf filename ) is -1 ) ) ) and not block )
        block = true
        timeLog "dir watcher : event - #{event} : #{ filename or 'filename not provided' }" unless ( opts.print or opts.run )
        wait 25, -> block = false
        buildPath source, yes, base

      # clearTimeout readdirTimeout
      # readdirTimeout = wait 25, ->
      #   fs.readdir source, (err, files) ->
      #     if err
      #       throw err unless err.code is 'ENOENT'
      #       watcher.close()
      #       return unwatchDir source, base
      #     for file in files when not hidden(file) and not notSources[file]
      #       file = path.join source, file
      #       continue if sources.some (s) -> s.indexOf(file) >= 0
      #       sources.push file
      #       sourceCode.push null
      #       compilePath file, no, base

    watchers[source] = watcher
  catch e
    throw e unless e.code is 'ENOENT'

unwatchDir = (source, base) ->
  prevSources = sources[..]
  toRemove = (file for file in sources when file.indexOf(source) >= 0)
  removeSource file, base, yes for file in toRemove
  return unless sources.some (s, i) -> prevSources[i] isnt s
  compileJoin()

# Watch dependencies (may be directories or files)
watchDeps = ->
  for wD in opts['watch-deps']
    do (wD) ->
      fs.stat wD, (err, stats) ->
        if err then throw err unless err.code is 'ENOENT'
        if stats.isDirectory() then watchDepsDir wD
        if stats.isFile() then watchDepsFile wD

watchDepsFile = (file) ->
  prevStats = null
  triggerTimeout = null

  watchErr = (e) ->
    if e.code is 'ENOENT'
      try
        rewatch()
        trigger()
      catch e
        'fail silently?'
    else throw e

  blockTrigger = false

  trigger = ->
    if blockTrigger then return
    blockTrigger = true
    timeLog "deps file watcher : filename - #{file}" unless ( opts.print or opts.run )
    clearTimeout triggerTimeout
    triggerTimeout = wait 25, ->
      fs.stat file, (err, stats) ->
        return watchErr err if err
        return rewatch() if prevStats and stats.size is prevStats.size and
          stats.mtime.getTime() is prevStats.mtime.getTime()
        prevStats = stats
        try
          touchfiles = sources[0]
          ( touchfiles = touchfiles + " #{s}") for s in sources[1..]
          exec "touch #{touchfiles}", (err) ->
            throw err if err
            blockTrigger = false
          rewatch()
        catch err
          watchErr err

  try
    watcher = fs.watch file, trigger
  catch e
    watchErr e

  rewatch = ->
    watcher?.close()
    watcher = fs.watch file, trigger

watchDepsDir = (dir) ->
  block = false
  try
    watcher = fs.watch dir, (event, filename) ->
      possibleSources = []
      for s in sources
        if ( ( path.extname s ) isnt '' )
          possibleSources.push path.basename s
      if ( ( not filename or ( not hidden(filename) and not outFiles[filename] and ( ( possibleSources.indexOf filename ) is -1 ) ) ) and not block )
        block = true
        timeLog "deps dir watcher : event - #{event} : #{ filename or 'filename not provided' }" unless ( opts.print or opts.run )
        try
          touchfiles = sources[0]
          ( touchfiles = touchfiles + " #{s}") for s in sources[1..]
          exec "touch #{touchfiles}", (err) ->
            throw err if err
            block = false
        catch err
          throw err if err

  catch e
    throw e unless e.code is 'ENOENT'

# Remove a file from our source list, and source code cache. Optionally remove
# the compiled JS version as well.
removeSource = (source, base, removeJs) ->
  index = sources.indexOf source
  sources.splice index, 1
  sourceCode.splice index, 1
  if removeJs and not opts.join
    jsPath = outputPath source, base
    path.exists jsPath, (exists) ->
      if exists
        fs.unlink jsPath, (err) ->
          throw err if err and err.code isnt 'ENOENT'
          # should this timeLog the jsPath instead of the source path?
          timeLog "removed #{source}"

# Get the corresponding output JavaScript path for a source file.
outputPath = (source, base) ->
  filename  = path.basename(source, path.extname(source)) + '.js'
  if filename[0] is '.' then filename = 'out.js'
  srcDir    = path.dirname source
  baseDir   = if base is '.' then srcDir else srcDir.substring base.length
  dir       = if opts.output then path.join opts.output, baseDir else srcDir
  path.join dir, filename

# Write out a JavaScript source file with the compiled code. By default, files
# are written out in `cwd` as `.js` files with the same name, but the output
# directory can be customized with `--output`.
writeJs = (source, js, base) ->
  jsPath = outputPath source, base
  outFiles[jsPath] = true
  jsDir  = path.dirname jsPath
  compile = ->
    js = ' ' if js.length <= 0
    fs.writeFile jsPath, js, (err) ->
      if err
        printLine err.message
      else if opts.compile and opts.watch
        timeLog "compiled #{source}"
  path.exists jsDir, (exists) ->
    if exists then compile() else exec "mkdir -p #{jsDir}", compile

# Convenience for cleaner setTimeouts.
wait = (milliseconds, func) -> setTimeout func, milliseconds

# When watching scripts, it's useful to log changes with the timestamp.
timeLog = (message) ->
  console.log "#{(new Date).toLocaleTimeString()} - #{message}"

# Pipe compiled JS through JSLint (requires a working `jsl` command), printing
# any errors or warnings that arise.
lint = (file, js) ->
  printIt = (buffer) -> printLine file + ':\t' + buffer.toString().trim()
  conf = __dirname + '/extras/jsl.conf'
  jsl = spawn 'jsl', ['-nologo', '-stdin', '-conf', conf]
  jsl.stdout.on 'data', printIt
  jsl.stderr.on 'data', printIt
  jsl.stdin.write js
  jsl.stdin.end()

# Use [CliOptionParser](optparse.html) to extract all options from
# `process.argv` that are specified in `SWITCHES`.
parseOptions = ->
  optionParser  = new CliOptionParser SWITCHES, BANNER
  po = process.argv[2..]
  if ( ( i = ( po.indexOf '--ncljsc-print-options-once' ) ) isnt -1 ) then po.splice i, 1
  o = opts      = optionParser.parse po
  o.compile     or=  !!o.output
  o.run         = not (o.compile or o.print or o.lint)
  o.server      = if ( o.hasOwnProperty 'server' ) then ( if ( isNaN ( parseInt o.server )) then ClojureScript.defaultPort else ( parseInt o.server ) ) else false
  o.client      = if ( o.hasOwnProperty 'client' ) then ( if ( isNaN ( parseInt o.client )) then ClojureScript.defaultPort else ( parseInt o.client ) ) else false
  o.async       = not (o.run or o.server or (not o.client))
  o.print       = !!  (o.print or (o.eval or o.stdio and o.compile))
  o['watch-deps'] and= o['watch-deps'].split ':'
  sources       = o.arguments
  sourceCode[i] = null for source, i in sources
  return

# The compile-time options to pass to the ClojureScript compiler.
compileOptions = (path) ->
  {path, async: opts.async, bare: opts.bare, header: opts.compile}

# Start up a new Node.js instance with the arguments in `--nodejs` passed to
# the `node` binary, preserving the other options.
forkNode = ->
  nodeArgs = opts.nodejs.split /\s+/
  args     = process.argv[1..]
  args.splice args.indexOf('--nodejs'), 2
  spawn process.execPath, nodeArgs.concat(args).concat('--ncljsc-print-options-once'),
    cwd:        process.cwd()
    env:        process.env
    customFds:  [0, 1, 2]

# Print the `--help` usage message and exit. Deprecated switches are not
# shown.
usage = ->
  printLine (new CliOptionParser SWITCHES, BANNER).help()

# Print the `--version` message and exit.
version = ->
  printLine "ncljsc v#{ClojureScript.VERSION} (ClojureScript #{ClojureScript.CLJS_VERSION})"

startServer = ->
  port = ClojureScript.usingPort
  hostname = '127.0.0.1'
  callback = ->
    console.log '%s listening at %s\n', 'Detached JVM server', server.url
  server = ClojureScript.createServer().listen port, hostname, callback
  server.url = 'http://' + hostname + ':' + port + '/'
