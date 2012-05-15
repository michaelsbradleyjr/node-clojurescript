/*//////////////////////// NODE-CLOJURESCRIPT //////////////////////////
 *
 * Version 0.1.4-pre
 * https://github.com/michaelsbradleyjr/node-clojurescript
 *
 * This software is Copyright (c) 2012 by Michael Bradley, Jr.
 *
 * The use and distribution terms for this software are covered by the
 * Eclipse Public License 1.0
 * (http://opensource.org/licenses/eclipse-1.0.php) which can be found
 * in the file epl-v10.html under the licenses directory at the root of
 * this distribution. By using this software in any fashion, you are
 * agreeing to be bound by the terms of this license. You must not
 * remove this notice, or any other, from this software.
 *
//////////////////////////////// CREDIT ////////////////////////////////
 *
 * This software is derived from and incorporates existing works:
 *
 *  https://github.com/jashkenas/coffee-script
 *  https://github.com/clojure/clojurescript
 *  https://github.com/cemerick/pomegranate
 *
/*//////////////////////////////////////////////////////////////////////


;(function (undefined) {
  
  var BANNER, CliOptionParser, ClojureScript, EventEmitter, LONG_FLAG, MULTI_FLAG, Module, OPTIONAL, SHORT_FLAG, SWITCHES, Script, buildFromDisk, buildPath, buildRuleCliOpt, buildRulesCliOpt, clc, compileJoin, compileOptions, compileScript, compileStdio, compiledCoreJS, compiledNodejsJS, exec, exports, extend, forkNode, fs, hidden, inspect, joinTimeout, lint, loadRequires, makePad, normalizeArgumentsCliOpt, notSources, optionParser, opts, outFiles, outputPath, parseOptions, path, pathCompiledCoreJS, pathCompiledNodejsJS, printFlags, printLine, printWarn, readline, removeSource, repl, restify, shell, sourceCode, sources, spawn, startServer, timeLog, unwatchDir, usage, util, version, vm, wait, watch, watchDeps, watchDepsDir, watchDepsFile, watchDir, watchers, writeJs, _ref;
  
  clc = require('cli-color');
  
  fs = require('fs');
  
  Module = require('module');
  
  path = require('path');
  
  readline = require('readline');
  
  restify = require('restify');
  
  shell = require('shelljs');
  
  util = require('util');
  
  vm = require('vm');
  
  EventEmitter = require('events').EventEmitter;
  
  inspect = require('util').inspect;
  
  Script = vm.Script;
  
  _ref = require('child_process'), spawn = _ref.spawn, exec = _ref.exec;
  
  ClojureScript = {};
  
  ClojureScript.VERSION = '0.1.4-pre';
  
  ClojureScript.CLJS_VERSION = 'r1211++';
  
  ClojureScript.Tempdir = require('temporary/lib/dir');
  
  ClojureScript.tmp = new ClojureScript.Tempdir;
  
  ClojureScript.defaultJavaOptions = '';
  
  ClojureScript.javaOptions = ClojureScript.defaultJavaOptions;
  
  ClojureScript.defaultOptions = '{:optimizations :simple :target :nodejs :pretty-print false}';
  
  ClojureScript.options = ClojureScript.defaultOptions;
  
  ClojureScript.initJava = function(options) {
    var java, jo, _i, _len, _ref1;
    this.java = java = require('java');
    if (options) {
      _ref1 = options.split(' ');
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        jo = _ref1[_i];
        java.options.push('-' + jo);
      }
    }
    java.classpath.push(__dirname + '/support/clojure-clojurescript/lib/clojure.jar');
    java.classpath.push(__dirname + '/support/clojure-clojurescript/lib/compiler.jar');
    java.classpath.push(__dirname + '/support/clojure-clojurescript/lib/goog.jar');
    java.classpath.push(__dirname + '/support/clojure-clojurescript/lib/js.jar');
    java.classpath.push(__dirname + '/support/clojure-clojurescript/src/clj');
    java.classpath.push(__dirname + '/support/clojure-clojurescript/src/cljs');
    return java.classpath.push(__dirname + '/support/clj');
  };
  
  ClojureScript.initClojureCompiler = function(javaOptions) {
    var ClojureCompiler, StringReader, closureClj, closureCljSR, pomgClj, pomgCljSR;
    if (javaOptions == null) {
      javaOptions = ClojureScript.javaOptions;
    }
    if (!this.java) {
      this.initJava(javaOptions);
    }
    this.StringReader = StringReader = this.java["import"]('java.io.StringReader');
    this.ClojureCompiler = ClojureCompiler = this.java["import"]('clojure.lang.Compiler');
    closureClj = fs.readFileSync(__dirname + '/support/clojure-clojurescript/src/clj/cljs/closure.clj', 'utf8');
    closureCljSR = new StringReader(closureClj);
    ClojureCompiler.loadSync(closureCljSR);
    this.clojureBuild = this.java.callStaticMethodSync('clojure.lang.RT', 'var', 'cljs.closure', 'build');
    pomgClj = fs.readFileSync(__dirname + '/support/clj/pomegranate.clj', 'utf8');
    pomgCljSR = new StringReader(pomgClj);
    ClojureCompiler.loadSync(pomgCljSR);
    this.clojureAddClassPath = this.java.callStaticMethodSync('clojure.lang.RT', 'var', 'pomegranate', 'add-classpath');
    return this.addClassPath = function(cp) {
      return this.clojureAddClassPath.invokeSync(cp);
    };
  };
  
  ClojureScript.addClassPath = function(cp) {
    if (!this.ClojureCompiler) {
      this.initClojureCompiler();
    }
    return this.addClassPath(cp);
  };
  
  pathCompiledCoreJS = __dirname + '/support/out/cljs/core.js';
  
  compiledCoreJS = '';
  
  ClojureScript.compiledCoreJS = function() {
    return compiledCoreJS;
  };
  
  if (path.existsSync(pathCompiledCoreJS)) {
    compiledCoreJS = fs.readFileSync(pathCompiledCoreJS, 'utf8');
    ClojureScript.compiledCoreJS = function() {
      return compiledCoreJS;
    };
    ClojureScript.compiledCoreJS.exists = true;
  }
  
  pathCompiledNodejsJS = __dirname + '/support/out/cljs/nodejs.js';
  
  compiledNodejsJS = '';
  
  ClojureScript.compiledNodejsJS = function() {
    return compiledNodejsJS;
  };
  
  if (path.existsSync(pathCompiledNodejsJS)) {
    compiledNodejsJS = fs.readFileSync(pathCompiledNodejsJS, 'utf8');
    ClojureScript.compiledNodejsJS = function() {
      return compiledNodejsJS;
    };
    ClojureScript.compiledNodejsJS.exists = true;
  }
  
  ClojureScript.tmpOut = function(options) {
    return options.slice(0, options.length - 1) + (" :tmp-out \"" + this.tmp.path + "\"}");
  };
  
  ClojureScript.defaultPort = 4242;
  
  ClojureScript.localBuilder = function(options, cljscOptions, callback, javaOptions) {
    var header, js;
    if (javaOptions == null) {
      javaOptions = ClojureScript.javaOptions;
    }
    if (!ClojureScript.java) {
      ClojureScript.initJava(javaOptions);
    }
    if (!ClojureScript.ClojureCompiler) {
      ClojureScript.initClojureCompiler();
    }
    if (options.classpath) {
      ClojureScript.addClassPath(options.classpath);
    }
    header = "Generated by ClojureScript " + ClojureScript.CLJS_VERSION + " (ncljsc v" + ClojureScript.VERSION + ")";
    if (options.async) {
      return ClojureScript.clojureBuild.invoke(options.path, cljscOptions, function(err, js) {
        if (err) {
          return callback(err, null);
        }
        if (!options.bare) {
          js = ";(function() {\n  " + js + "\n}).call(this);\n";
          if (!options.header) {
            return callback(null, js);
          }
          return callback(null, "// " + header + "\n" + js);
        }
      });
    } else {
      try {
        js = ClojureScript.clojureBuild.invokeSync(options.path, cljscOptions);
        if (!options.bare) {
          js = ";(function() {\n  " + js + "\n}).call(this);\n";
        }
        if (!options.header) {
          return callback(null, js);
        }
      } catch (err) {
        callback(err, null);
      }
      return callback(null, "// " + header + "\n" + js);
    }
  };
  
  ClojureScript.remoteBuilder = function(options, cljscOptions, callback) {
    var async, err, js, response;
    async = options.async;
    delete options.async;
    options.cljscOptions = cljscOptions;
    options.port = ClojureScript.usingPort;
    if (async) {
      return ClojureScript.client.makeRequest(options, function(err, response) {
        var js;
        err = err || response.err;
        js = response.js;
        return callback(err, js);
      });
    } else {
      options = JSON.stringify(options).replace(/\"/g, function() {
        return 'supercalifragilisticexpialidocious';
      });
      response = shell.exec('node ' + __dirname + '/support/js/detached-jvm-client.js --request \'' + options + '\'', {
        silent: false
      });
      if (response.code === 0) {
        try {
          response = JSON.parse(response.output);
          if (response.err) {
            err = new Error(response.err);
          } else {
            err = null;
          }
          js = response.js;
          return callback(err, js);
        } catch (err) {
          return callback(err, null);
        }
      } else {
        return callback(new Error("http request script exited with code " + response.code), null);
      }
    }
  };
  
  ClojureScript.builder = ClojureScript.localBuilder;
  
  ClojureScript.build = function(options, builder, callback, cljscOptions, javaOptions) {
    var cp, outcljs, outcljscore, outcljsnodejs, outputdir, resolved, stats;
    if (cljscOptions == null) {
      cljscOptions = ClojureScript.options;
    }
    if (javaOptions == null) {
      javaOptions = ClojureScript.javaOptions;
    }
    if (!options.path) {
      callback(new Error('no source path specified'), null);
    }
    if (cljscOptions !== ClojureScript.options) {
      cljscOptions = cljscOptions.match(/^\s*(\{.*\})\s*$/);
      if (!cljscOptions) {
        callback(new Error('malformed ClojureScript options hash-map'), null);
      } else {
        cljscOptions = cljscOptions[1];
      }
      if ((cljscOptions.match(/\:output-dir\s*\'.*\'/)) || (cljscOptions.match(/\:output-dir\s*[^\'\"]*(\:|(\}$))/)) || (cljscOptions.match(/\:output-dir\s*\'[^\']*(\:|(\}$))/)) || (cljscOptions.match(/\:output-dir\s*\"[^\"]*(\:|(\}$))/)) || (cljscOptions.match(/\:output-dir\s*[^\']*\'\s*(\:|(\}$))/)) || (cljscOptions.match(/\:output-dir\s*[^\"]*\"\s*(\:|(\}$))/))) {
        callback(new Error('path specified as :output-dir must be wrapped in double-quotes'), null);
      }
      outputdir = cljscOptions.match(/\:output-dir\s*(\".*\")/);
      if (outputdir) {
        outputdir = outputdir[1];
        outputdir = outputdir.slice(1, outputdir.length - 1);
        outputdir = path.resolve(path.normalize(outputdir));
        if (!path.existsSync(outputdir)) {
          callback(new Error('path specified as :output-dir must exist'), null);
        }
        if (!(fs.statSync(outputdir)).isDirectory()) {
          callback(new Error('path specified as :output-dir must be a directory'), null);
        }
        this['output-dir'] = outputdir;
      }
    }
    if (!(outputdir != null)) {
      this['output-dir'] = outputdir = this.tmp.path;
      cljscOptions = this.tmpOut(cljscOptions);
    }
    outcljs = outputdir + '/cljs';
    if (!(path.existsSync(outcljs))) {
      fs.mkdirSync(outcljs);
    }
    if (this.compiledCoreJS.exists) {
      outcljscore = outcljs + '/core.js';
      if (!(path.existsSync(outcljscore))) {
        fs.writeFileSync(outcljscore, ClojureScript.compiledCoreJS(), 'utf8');
      }
    }
    if (this.compiledNodejsJS.exists) {
      outcljsnodejs = outcljs + '/nodejs.js';
      if (!(path.existsSync(outcljsnodejs))) {
        fs.writeFileSync(outcljsnodejs, ClojureScript.compiledNodejsJS(), 'utf8');
      }
    }
    resolved = path.resolve(path.normalize(options.path));
    if (!(path.existsSync(resolved))) {
      callback(new Error('source path must exist'), null);
    }
    stats = fs.statSync(resolved);
    if (stats.isDirectory()) {
      cp = resolved;
    } else if (stats.isFile()) {
      cp = path.dirname(resolved);
    } else {
      callback(new Error('source path must be a file or a directory'), null);
    }
    options.path = resolved;
    options.classpath = cp;
    return builder(options, cljscOptions, callback);
  };
  
  ClojureScript["eval"] = function(options, builder, callback, cljscOptions, javaOptions) {
    if (cljscOptions == null) {
      cljscOptions = ClojureScript.options;
    }
    if (javaOptions == null) {
      javaOptions = ClojureScript.javaOptions;
    }
    throw new Error('ClojureScript.eval method is not yet implemented');
  };
  
  ClojureScript.run = function(options, builder, callback, cljscOptions, javaOptions) {
    var mainModule;
    if (cljscOptions == null) {
      cljscOptions = ClojureScript.options;
    }
    if (javaOptions == null) {
      javaOptions = ClojureScript.javaOptions;
    }
    mainModule = require.main;
    mainModule.filename = process.argv[1] = options.path ? fs.realpathSync(options.path) : '.';
    mainModule.moduleCache && (mainModule.moduleCache = {});
    mainModule.paths = require('module')._nodeModulePaths(path.dirname(fs.realpathSync(options.path)));
    if ((path.extname(mainModule.filename)) === '.cljs') {
      if (require.extensions) {
        return mainModule._compile(ClojureScript.build(options, builder, callback, cljscOptions, javaOptions), mainModule.filename);
      } else {
        return callback(new Error('missing require.extensions, can\'t proceed'));
      }
    } else {
      return callback(new Error('ClojureScript.run method does not yet support compiling directly from a source string'));
    }
  };
  
  ClojureScript.extend = extend = function(object, properties) {
    var key, val;
    for (key in properties) {
      val = properties[key];
      object[key] = val;
    }
    return object;
  };
  
  if (require.extensions) {
    require.extensions['.cljs'] = function(module, filename) {
      var builder, callback, content, options;
      options = {
        async: false,
        path: filename
      };
      builder = ClojureScript.builder;
      callback = function(err, js) {
        if (err) {
          throw err;
        } else {
          return js;
        }
      };
      content = ClojureScript.build(options, builder, callback);
      return module._compile(content, filename);
    };
  }
  
  ClojureScript.createServer = function() {
    var iBuilder, iCallback, iOptions, server;
    console.log('Starting up, please wait...');
    iOptions = {
      async: false,
      path: __dirname + '/support/cljs/postinstall_build.cljs'
    };
    iBuilder = ClojureScript.localBuilder;
    iCallback = function(err) {
      if (err) {
        throw err;
      }
    };
    ClojureScript.build(iOptions, iBuilder, iCallback);
    console.log(clc.bold(clc.cyan('\nInitial build completed, JVM and compiler are primed and ready!')));
    server = restify.createServer();
    server.use(restify.bodyParser({
      mapParams: false
    }));
    server.post('/build/', function(req, res, next) {
      var callback, cljscOptions, options;
      if (req.is('application/json')) {
        options = req.body;
        cljscOptions = options.cljscOptions;
        delete options.cljscOptions;
        callback = function(err, js) {
          if (err) {
            res.send({
              err: err.message,
              js: null
            });
            return console.log((new Date).toString(), ":", clc.bold(clc.red('build failed')));
          } else {
            res.send({
              err: null,
              js: js
            });
            return console.log((new Date).toString(), ":", clc.bold(clc.green('build successful')));
          }
        };
        return ClojureScript.builder(options, cljscOptions, callback);
      } else {
        res.send(415, new Error('request Content-Type must be application/json'));
        return console.log((new Date).toString(), ":", clc.bold(clc.magenta('bad request')));
      }
    });
    return server;
  };
  
  ClojureScript.CliOptionParser = CliOptionParser = (function() {
  
    CliOptionParser.name = 'CliOptionParser';
  
    function CliOptionParser(rules, banner) {
      this.banner = banner;
      this.rules = buildRulesCliOpt(rules);
    }
  
    CliOptionParser.prototype.parse = function(args) {
      var arg, i, isOption, matchedRule, options, originalArgs, pos, rule, seenNonOptionArg, skippingArgument, value, _i, _j, _len, _len1, _ref1;
      options = {
        "arguments": []
      };
      skippingArgument = false;
      originalArgs = args;
      args = normalizeArgumentsCliOpt(args);
      for (i = _i = 0, _len = args.length; _i < _len; i = ++_i) {
        arg = args[i];
        if (skippingArgument) {
          skippingArgument = false;
          continue;
        }
        if (arg === '--') {
          pos = originalArgs.indexOf('--');
          options["arguments"] = options["arguments"].concat(originalArgs.slice(pos + 1));
          break;
        }
        isOption = !!(arg.match(LONG_FLAG) || arg.match(SHORT_FLAG));
        seenNonOptionArg = options["arguments"].length > 0;
        if (!seenNonOptionArg) {
          matchedRule = false;
          _ref1 = this.rules;
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            rule = _ref1[_j];
            if (rule.shortFlag === arg || rule.longFlag === arg) {
              value = true;
              if (rule.hasArgument) {
                skippingArgument = true;
                value = args[i + 1];
              }
              options[rule.name] = rule.isList ? (options[rule.name] || []).concat(value) : value;
              matchedRule = true;
              break;
            }
          }
          if (isOption && !matchedRule) {
            throw new Error("unrecognized option: " + arg);
          }
        }
        if (seenNonOptionArg || !isOption) {
          options["arguments"].push(arg);
        }
      }
      return options;
    };
  
    CliOptionParser.prototype.help = function() {
      var letPart, lines, rule, spaces, _i, _len, _ref1;
      lines = [];
      if (this.banner) {
        lines.unshift("" + this.banner + "\n");
      }
      _ref1 = this.rules;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        rule = _ref1[_i];
        spaces = 15 - rule.longFlag.length;
        spaces = spaces > 0 ? Array(spaces + 1).join(' ') : '';
        letPart = rule.shortFlag ? rule.shortFlag + ', ' : '    ';
        lines.push('  ' + letPart + rule.longFlag + spaces + rule.description);
      }
      return "\n" + (lines.join('\n')) + "\n";
    };
  
    return CliOptionParser;
  
  })();
  
  LONG_FLAG = /^(--\w[\w\-]*)/;
  
  SHORT_FLAG = /^(-\w)$/;
  
  MULTI_FLAG = /^-(\w{2,})/;
  
  OPTIONAL = /\[(\w+(\*?))\]/;
  
  buildRulesCliOpt = function(rules) {
    var tuple, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = rules.length; _i < _len; _i++) {
      tuple = rules[_i];
      if (tuple.length < 3) {
        tuple.unshift(null);
      }
      _results.push(buildRuleCliOpt.apply(null, tuple));
    }
    return _results;
  };
  
  buildRuleCliOpt = function(shortFlag, longFlag, description, options) {
    var match;
    if (options == null) {
      options = {};
    }
    match = longFlag.match(OPTIONAL);
    longFlag = longFlag.match(LONG_FLAG)[1];
    return {
      name: longFlag.substr(2),
      shortFlag: shortFlag,
      longFlag: longFlag,
      description: description,
      hasArgument: !!(match && match[1]),
      isList: !!(match && match[2])
    };
  };
  
  normalizeArgumentsCliOpt = function(args) {
    var arg, l, match, result, _i, _j, _len, _len1, _ref1;
    args = args.slice(0);
    result = [];
    for (_i = 0, _len = args.length; _i < _len; _i++) {
      arg = args[_i];
      if (match = arg.match(MULTI_FLAG)) {
        _ref1 = match[1].split('');
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          l = _ref1[_j];
          result.push('-' + l);
        }
      } else {
        result.push(arg);
      }
    }
    return result;
  };
  
  extend(ClojureScript, new EventEmitter);
  
  printLine = function(line) {
    return process.stdout.write(line + '\n');
  };
  
  printWarn = function(line) {
    return process.stderr.write(line + '\n');
  };
  
  hidden = function(file) {
    return /^\.|~$/.test(file);
  };
  
  BANNER = 'Usage: ncljsc [options] path/to/script.cljs -- [args]\n\nIf called without options, `ncljsc` will run your script.';
  
  SWITCHES = [['-b', '--bare', '  compile without a top-level function wrapper'], ['-c', '--compile', '  compile to JavaScript and save as .js files'], ['-C', '--client [PORT]', '  act as a build-client of a "detached" JVM listening on\n' + '                       the specified port (defaults to 4242)'], ['-e', '--eval', '  pass a string from the command line as input'], ['-F', '--flags-print', '  print the options parsed by "ncljsc" and the contents of\n' + '                       process.argv'], ['-h', '--help', '  display this help message'], ['-i', '--interactive', '  run an interactive ClojureScript REPL'], ['-j', '--join [FILE]', '  concatenate the source ClojureScript before compiling'], ['-J', '--java [LIST]', '  pass a string of options to the JVM, space separated,\n' + '                       leave off the leading dashes'], ['-l', '--lint', '  pipe the compiled JavaScript through JavaScript Lint'], ['-n', '--nodejs [ARGS]', '  pass options directly to the "node" binary'], ['-O', '--options-cljsc [HASHMAP]', '  pass a hash-map of options (as a string) to the\n' + '                       ClojureScript compiler'], ['-o', '--output [DIR]', '  set the "ncljsc" output directory for compiled JavaScript\n' + '                       (distinct from :output-dir specified with -O)'], ['-p', '--print', '  print out the compiled JavaScript'], ['-r', '--require [FILE*]', '  require a library before executing your script'], ['-s', '--stdio', '  listen for and compile scripts over stdio'], ['-S', '--server [PORT]', '  act as a "detached" JVM build-server listening on the \n' + '                       specified port (defaults to 4242)'], ['-v', '--version', '  display the version numbers of "ncljsc" and ClojureScript'], ['-W', '--watch-deps [FILE]', '  watch other dependencies not targeted by --watch,\n' + '                       rerun commands on changes, supply as colon separated\n' + '                       path list (requires --watch)'], ['-w', '--watch', '  watch scripts for changes and rerun commands']];
  
  opts = {};
  
  sources = [];
  
  outFiles = {};
  
  sourceCode = [];
  
  notSources = {};
  
  watchers = {};
  
  optionParser = null;
  
  makePad = function(l) {
    var pad;
    pad = '';
    while (l) {
      pad = pad + ' ';
      l--;
    }
    return pad;
  };
  
  printFlags = function() {
    var arg, forked, kL, key, longest, pad, val, _i, _len, _ref1, _results;
    if ((forked = process.argv.indexOf('--ncljsc-print-options-once')) === -1) {
      printLine("\nncljsc parsed and/or set the following options (some may not be applied):\n");
      longest = 0;
      for (key in opts) {
        val = opts[key];
        if (key.length > longest) {
          longest = key.length;
        }
      }
      for (key in opts) {
        val = opts[key];
        kL = key.length;
        pad = '';
        if (kL < longest) {
          pad = makePad(longest - kL);
        }
        if (val instanceof Array) {
          val = util.inspect(val);
        }
        printLine('  ' + key + pad + '     ' + (val || ''));
      }
    }
    printLine("\n" + (forked !== -1 ? 'forked node\'s ' : '') + "process.argv contained the following:\n");
    _ref1 = process.argv;
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      arg = _ref1[_i];
      _results.push(printLine('  ' + arg + (arg === '--ncljsc-print-options-once' ? '    [ ignored by ncljsc ]' : '')));
    }
    return _results;
  };
  
  ClojureScript.commandRun = function() {
    var literals, source, _i, _len, _results;
    parseOptions();
    if (opts['flags-print']) {
      printFlags();
    }
    if (opts.nodejs) {
      return forkNode();
    }
    if (opts.help) {
      return usage();
    }
    if (opts.version) {
      return version();
    }
    if (opts.require) {
      loadRequires();
    }
    if (opts.server) {
      return (ClojureScript.usingPort = opts.server, startServer());
    }
    if (opts.interactive) {
      return repl.prompt();
    }
    if ((opts.watch || opts['watch-deps']) && !fs.watch) {
      return printWarn("The --watch feature depends on Node v0.6.0+. You are running " + process.version + ".");
    }
    if (opts.stdio) {
      return compileStdio();
    }
    if (opts["eval"]) {
      return compileScript(null, sources[0]);
    }
    if (!sources.length) {
      return repl.prompt();
    }
    if (opts.client) {
      ClojureScript.usingPort = opts.client;
      ClojureScript.builder = ClojureScript.remoteBuilder;
    }
    if (opts.client && opts.async) {
      ClojureScript.client = require(__dirname + '/support/js/detached-jvm-client');
    }
    if (opts['watch-deps'] && opts.watch) {
      watchDeps();
    }
    literals = opts.run ? sources.splice(1) : [];
    process.argv = process.argv.slice(0, 2).concat(literals);
    process.argv[0] = 'ncljsc';
    process.execPath = require.main.filename;
    _results = [];
    for (_i = 0, _len = sources.length; _i < _len; _i++) {
      source = sources[_i];
      _results.push(buildPath(source, true, path.normalize(source)));
    }
    return _results;
  };
  
  buildPath = function(source, topLevel, base) {
    return fs.stat(source, function(err, stats) {
      if (err && err.code !== 'ENOENT') {
        throw err;
      }
      if ((err != null ? err.code : void 0) === 'ENOENT') {
        if (topLevel && source.slice(-5) !== '.cljs') {
          source = sources[sources.indexOf(source)] = "" + source + ".cljs";
          return buildPath(source, topLevel, base);
        }
        if (topLevel) {
          console.error("File not found: " + source);
          process.exit(1);
        }
        return;
      }
      if (stats.isDirectory()) {
        if (opts.run) {
          if (opts.watch) {
            watch(source, base);
          }
          return buildPath(path.normalize(source + '/index.cljs'), true, base);
        } else {
          if (!watchers[source]) {
            if (opts.watch) {
              watchDir(source, base);
            }
          }
          return buildFromDisk(source, base);
        }
      } else if (topLevel || path.extname(source) === '.cljs') {
        if (opts.watch) {
          watch(source, base);
        }
        return buildFromDisk(source, base);
      } else {
        notSources[source] = true;
        return removeSource(source, base);
      }
    });
  };
  
  buildFromDisk = function(path, base) {
    var callback, o, options, t, task;
    o = opts;
    options = compileOptions(path);
    try {
      t = task = {
        path: path,
        options: options,
        cljscOptions: o['options-cljsc'],
        javaOptions: o.java
      };
      ClojureScript.emit('compile', task);
      if (o.run) {
        callback = function(err, js) {
          if (err) {
            throw err;
          } else {
            return js;
          }
        };
        return ClojureScript.run(t.options, ClojureScript.builder, callback, t.cljscOptions, t.javaOptions);
      } else if (o.join && t.path !== o.join) {
        return compileJoin();
      } else {
        callback = function(err, js) {
          if (err) {
            throw err;
          }
          t.output = js;
          ClojureScript.emit('success', task);
          if (o.print) {
            return printLine(t.output.trim());
          } else if (o.compile) {
            return writeJs(t.path, t.output, base);
          } else if (o.lint) {
            return lint(t.path, t.output);
          }
        };
        return ClojureScript.build(t.options, ClojureScript.builder, callback, t.cljscOptions, t.javaOptions);
      }
    } catch (err) {
      ClojureScript.emit('failure', err, task);
      if (ClojureScript.listeners('failure').length) {
        return;
      }
      if (o.watch) {
        return printLine(err.message + '\x07');
      }
      printWarn(err instanceof Error && err.stack || ("ERROR: " + err));
      return process.exit(1);
    }
  };
  
  compileScript = function(input) {
    throw new Error('ncljsc --eval not yet implemented');
  };
  
  compileStdio = function() {
    throw new Error('ncljsc --stdio not yet implemented');
  };
  
  joinTimeout = null;
  
  compileJoin = function() {
    throw new Error('ncljsc --join not yet implemented');
  };
  
  loadRequires = function() {
    var realFilename, req, _i, _len, _ref1;
    realFilename = module.filename;
    module.filename = '.';
    _ref1 = opts.require;
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      req = _ref1[_i];
      require(req);
    }
    return module.filename = realFilename;
  };
  
  watch = function(source, base) {
    var blockCompile, compile, compileTimeout, prevStats, rewatch, watchErr, watcher;
    prevStats = null;
    compileTimeout = null;
    watchErr = function(e) {
      if (e.code === 'ENOENT') {
        if (sources.indexOf(source) === -1) {
          return;
        }
        try {
          rewatch();
          return compile();
        } catch (e) {
          removeSource(source, base, true);
          return compileJoin();
        }
      } else {
        throw e;
      }
    };
    blockCompile = false;
    compile = function() {
      if (blockCompile) {
        return;
      }
      blockCompile = true;
      if (!(opts.print || opts.run)) {
        timeLog("file watcher : filename - " + source);
      }
      clearTimeout(compileTimeout);
      return compileTimeout = wait(25, function() {
        return fs.stat(source, function(err, stats) {
          if (err) {
            return watchErr(err);
          }
          if (prevStats && stats.size === prevStats.size && stats.mtime.getTime() === prevStats.mtime.getTime()) {
            return rewatch();
          }
          prevStats = stats;
          try {
            buildFromDisk(source, base);
            return rewatch();
          } catch (err) {
            return watchErr(err);
          }
        });
      });
    };
    try {
      watcher = fs.watch(source, compile);
    } catch (e) {
      watchErr(e);
    }
    return rewatch = function() {
      if (watcher != null) {
        watcher.close();
      }
      blockCompile = false;
      return watcher = fs.watch(source, compile);
    };
  };
  
  watchDir = function(source, base) {
    var block, watcher;
    block = false;
    try {
      watcher = fs.watch(source, function(event, filename) {
        var possibleWatchDeps, w, _i, _len, _ref1;
        possibleWatchDeps = [];
        _ref1 = opts['watch-deps'];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          w = _ref1[_i];
          if ((path.extname(w)) !== '') {
            possibleWatchDeps.push(path.basename(w));
          }
        }
        if ((!filename || (!hidden(filename) && !notSources[filename] && !outFiles[filename] && ((possibleWatchDeps.indexOf(filename)) === -1))) && !block) {
          block = true;
          if (!(opts.print || opts.run)) {
            timeLog("dir watcher : event - " + event + " : " + (filename || 'filename not provided'));
          }
          wait(25, function() {
            return block = false;
          });
          return buildPath(source, true, base);
        }
      });
      return watchers[source] = watcher;
    } catch (e) {
      if (e.code !== 'ENOENT') {
        throw e;
      }
    }
  };
  
  unwatchDir = function(source, base) {
    var file, prevSources, toRemove, _i, _len;
    prevSources = sources.slice(0);
    toRemove = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = sources.length; _i < _len; _i++) {
        file = sources[_i];
        if (file.indexOf(source) >= 0) {
          _results.push(file);
        }
      }
      return _results;
    })();
    for (_i = 0, _len = toRemove.length; _i < _len; _i++) {
      file = toRemove[_i];
      removeSource(file, base, true);
    }
    if (!sources.some(function(s, i) {
      return prevSources[i] !== s;
    })) {
      return;
    }
    return compileJoin();
  };
  
  watchDeps = function() {
    var wD, _i, _len, _ref1, _results;
    _ref1 = opts['watch-deps'];
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      wD = _ref1[_i];
      _results.push((function(wD) {
        return fs.stat(wD, function(err, stats) {
          if (err) {
            if (err.code !== 'ENOENT') {
              throw err;
            }
          }
          if (stats.isDirectory()) {
            watchDepsDir(wD);
          }
          if (stats.isFile()) {
            return watchDepsFile(wD);
          }
        });
      })(wD));
    }
    return _results;
  };
  
  watchDepsFile = function(file) {
    var blockTrigger, prevStats, rewatch, trigger, triggerTimeout, watchErr, watcher;
    prevStats = null;
    triggerTimeout = null;
    watchErr = function(e) {
      if (e.code === 'ENOENT') {
        try {
          rewatch();
          return trigger();
        } catch (e) {
          return 'fail silently?';
        }
      } else {
        throw e;
      }
    };
    blockTrigger = false;
    trigger = function() {
      if (blockTrigger) {
        return;
      }
      blockTrigger = true;
      if (!(opts.print || opts.run)) {
        timeLog("deps file watcher : filename - " + file);
      }
      clearTimeout(triggerTimeout);
      return triggerTimeout = wait(25, function() {
        return fs.stat(file, function(err, stats) {
          var s, touchfiles, _i, _len, _ref1;
          if (err) {
            return watchErr(err);
          }
          if (prevStats && stats.size === prevStats.size && stats.mtime.getTime() === prevStats.mtime.getTime()) {
            return rewatch();
          }
          prevStats = stats;
          try {
            touchfiles = sources[0];
            _ref1 = sources.slice(1);
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              s = _ref1[_i];
              touchfiles = touchfiles + (" " + s);
            }
            exec("touch " + touchfiles, function(err) {
              if (err) {
                throw err;
              }
              return blockTrigger = false;
            });
            return rewatch();
          } catch (err) {
            return watchErr(err);
          }
        });
      });
    };
    try {
      watcher = fs.watch(file, trigger);
    } catch (e) {
      watchErr(e);
    }
    return rewatch = function() {
      if (watcher != null) {
        watcher.close();
      }
      return watcher = fs.watch(file, trigger);
    };
  };
  
  watchDepsDir = function(dir) {
    var block, watcher;
    block = false;
    try {
      return watcher = fs.watch(dir, function(event, filename) {
        var possibleSources, s, touchfiles, _i, _j, _len, _len1, _ref1;
        possibleSources = [];
        for (_i = 0, _len = sources.length; _i < _len; _i++) {
          s = sources[_i];
          if ((path.extname(s)) !== '') {
            possibleSources.push(path.basename(s));
          }
        }
        if ((!filename || (!hidden(filename) && !outFiles[filename] && ((possibleSources.indexOf(filename)) === -1))) && !block) {
          block = true;
          if (!(opts.print || opts.run)) {
            timeLog("deps dir watcher : event - " + event + " : " + (filename || 'filename not provided'));
          }
          try {
            touchfiles = sources[0];
            _ref1 = sources.slice(1);
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              s = _ref1[_j];
              touchfiles = touchfiles + (" " + s);
            }
            return exec("touch " + touchfiles, function(err) {
              if (err) {
                throw err;
              }
              return block = false;
            });
          } catch (err) {
            if (err) {
              throw err;
            }
          }
        }
      });
    } catch (e) {
      if (e.code !== 'ENOENT') {
        throw e;
      }
    }
  };
  
  removeSource = function(source, base, removeJs) {
    var index, jsPath;
    index = sources.indexOf(source);
    sources.splice(index, 1);
    sourceCode.splice(index, 1);
    if (removeJs && !opts.join) {
      jsPath = outputPath(source, base);
      return path.exists(jsPath, function(exists) {
        if (exists) {
          return fs.unlink(jsPath, function(err) {
            if (err && err.code !== 'ENOENT') {
              throw err;
            }
            return timeLog("removed " + source);
          });
        }
      });
    }
  };
  
  outputPath = function(source, base) {
    var baseDir, dir, filename, srcDir;
    filename = path.basename(source, path.extname(source)) + '.js';
    if (filename[0] === '.') {
      filename = 'out.js';
    }
    srcDir = path.dirname(source);
    baseDir = base === '.' ? srcDir : srcDir.substring(base.length);
    dir = opts.output ? path.join(opts.output, baseDir) : srcDir;
    return path.join(dir, filename);
  };
  
  writeJs = function(source, js, base) {
    var compile, jsDir, jsPath;
    jsPath = outputPath(source, base);
    outFiles[jsPath] = true;
    jsDir = path.dirname(jsPath);
    compile = function() {
      if (js.length <= 0) {
        js = ' ';
      }
      return fs.writeFile(jsPath, js, function(err) {
        if (err) {
          return printLine(err.message);
        } else if (opts.compile && opts.watch) {
          return timeLog("compiled " + source);
        }
      });
    };
    return path.exists(jsDir, function(exists) {
      if (exists) {
        return compile();
      } else {
        return exec("mkdir -p " + jsDir, compile);
      }
    });
  };
  
  wait = function(milliseconds, func) {
    return setTimeout(func, milliseconds);
  };
  
  timeLog = function(message) {
    return console.log("" + ((new Date).toLocaleTimeString()) + " - " + message);
  };
  
  lint = function(file, js) {
    var conf, jsl, printIt;
    printIt = function(buffer) {
      return printLine(file + ':\t' + buffer.toString().trim());
    };
    conf = __dirname + '/extras/jsl.conf';
    jsl = spawn('jsl', ['-nologo', '-stdin', '-conf', conf]);
    jsl.stdout.on('data', printIt);
    jsl.stderr.on('data', printIt);
    jsl.stdin.write(js);
    return jsl.stdin.end();
  };
  
  parseOptions = function() {
    var i, o, po, source, _i, _len;
    optionParser = new CliOptionParser(SWITCHES, BANNER);
    po = process.argv.slice(2);
    if ((i = po.indexOf('--ncljsc-print-options-once')) !== -1) {
      po.splice(i, 1);
    }
    o = opts = optionParser.parse(po);
    o.compile || (o.compile = !!o.output);
    o.run = !(o.compile || o.print || o.lint);
    o.server = o.hasOwnProperty('server') ? (isNaN(parseInt(o.server)) ? ClojureScript.defaultPort : parseInt(o.server)) : false;
    o.client = o.hasOwnProperty('client') ? (isNaN(parseInt(o.client)) ? ClojureScript.defaultPort : parseInt(o.client)) : false;
    o.async = !(o.run || o.server || (!o.client));
    o.print = !!(o.print || (o["eval"] || o.stdio && o.compile));
    o['watch-deps'] && (o['watch-deps'] = o['watch-deps'].split(':'));
    sources = o["arguments"];
    for (i = _i = 0, _len = sources.length; _i < _len; i = ++_i) {
      source = sources[i];
      sourceCode[i] = null;
    }
  };
  
  compileOptions = function(path) {
    return {
      path: path,
      async: opts.async,
      bare: opts.bare,
      header: opts.compile
    };
  };
  
  forkNode = function() {
    var args, nodeArgs;
    nodeArgs = opts.nodejs.split(/\s+/);
    args = process.argv.slice(1);
    args.splice(args.indexOf('--nodejs'), 2);
    return spawn(process.execPath, nodeArgs.concat(args).concat('--ncljsc-print-options-once'), {
      cwd: process.cwd(),
      env: process.env,
      customFds: [0, 1, 2]
    });
  };
  
  usage = function() {
    return printLine((new CliOptionParser(SWITCHES, BANNER)).help());
  };
  
  version = function() {
    return printLine("ncljsc v" + ClojureScript.VERSION + " (ClojureScript " + ClojureScript.CLJS_VERSION + ")");
  };
  
  startServer = function() {
    var callback, hostname, port, server;
    port = ClojureScript.usingPort;
    hostname = '127.0.0.1';
    callback = function() {
      return console.log('%s listening at %s\n', 'Detached JVM server', server.url);
    };
    server = ClojureScript.createServer().listen(port, hostname, callback);
    return server.url = 'http://' + hostname + ':' + port + '/';
  };
  
  repl = {
    prompt: function() {
      throw new Error('ncljsc REPL not yet implemented');
    }
  };
  
  exports = module.exports = ClojureScript;
  
  exports.ClojureScript = ClojureScript;
  
}).call(this);
