/*//////////////////////// NODE-CLOJURESCRIPT //////////////////////////
 *
 * Version 0.1.0-pre
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
  
  var BANNER, CliOptionParser, ClojureScript, EventEmitter, LONG_FLAG, MULTI_FLAG, Module, OPTIONAL, SHORT_FLAG, SWITCHES, Script, buildFromDisk, buildPath, buildRuleCliOpt, buildRulesCliOpt, compileJoin, compileOptions, compileScript, compileStdio, compiledCoreJS, compiledNodejsJS, exec, exports, extend, forkNode, fs, hidden, inspect, joinTimeout, lint, loadRequires, makePad, normalizeArgumentsCliOpt, notSources, optionParser, opts, outputPath, parseOptions, path, pathCompiledCoreJS, pathCompiledNodejsJS, printFlags, printLine, printWarn, readline, removeSource, repl, sourceCode, sources, spawn, timeLog, unwatchDir, usage, version, vm, wait, watch, watchDeps, watchDepsDir, watchDepsFile, watchDir, watchers, writeJs, _ref;
  
  fs = require('fs');
  
  Module = require('module');
  
  path = require('path');
  
  readline = require('readline');
  
  vm = require('vm');
  
  EventEmitter = require('events').EventEmitter;
  
  inspect = require('util').inspect;
  
  Script = vm.Script;
  
  _ref = require('child_process'), spawn = _ref.spawn, exec = _ref.exec;
  
  ClojureScript = {};
  
  ClojureScript.VERSION = '0.1.0-pre';
  
  ClojureScript.CLJS_VERSION = 'r1011';
  
  ClojureScript.depExts = ['.cljs', '.js', '.coffee'];
  
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
        java.options.push(jo);
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
    var ClojureCompiler, StringReader, ncljsc, ncljscSR;
    if (javaOptions == null) {
      javaOptions = ClojureScript.javaOptions;
    }
    if (!this.java) {
      this.initJava(javaOptions);
    }
    this.StringReader = StringReader = this.java["import"]('java.io.StringReader');
    this.ClojureCompiler = ClojureCompiler = this.java["import"]('clojure.lang.Compiler');
    ncljsc = fs.readFileSync(__dirname + '/support/clj/ncljsc.clj', 'utf8');
    ncljscSR = new StringReader(ncljsc);
    ClojureCompiler.loadSync(ncljscSR);
    this.clojureAddClassPath = this.java.callStaticMethodSync('clojure.lang.RT', 'var', 'ncljsc', 'pom-add-classpath');
    this.addClassPath = function(cp) {
      return this.clojureAddClassPath.invokeSync(cp);
    };
    return this.clojureBuild = this.java.callStaticMethodSync('clojure.lang.RT', 'var', 'ncljsc', 'build');
  };
  
  ClojureScript.addClassPath = function(cp) {
    this.initClojureCompiler();
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
  
  ClojureScript.addBuildClasspath = function(options, cp) {
    return options.slice(0, options.length - 1) + (" :add-classpath \"" + cp + "\"}");
  };
  
  ClojureScript.build = function(options, cljscOptions, javaOptions) {
    var cp, header, js, o, outcljs, outcljscore, outcljsnodejs, outputdir, resolved, stats;
    if (options == null) {
      options = {};
    }
    if (cljscOptions == null) {
      cljscOptions = ClojureScript.options;
    }
    if (javaOptions == null) {
      javaOptions = ClojureScript.javaOptions;
    }
    o = options;
    if (!o.path) {
      throw new Error('no source path specified');
    }
    if (!this.java) {
      this.initJava(javaOptions);
    }
    if (!this.ClojureCompiler) {
      this.initClojureCompiler();
    }
    if (cljscOptions !== ClojureScript.options) {
      cljscOptions = cljscOptions.match(/^\s*(\{.*\})\s*$/);
      if (!cljscOptions) {
        throw new Error('malformed ClojureScript options hash-map');
      } else {
        cljscOptions = cljscOptions[1];
      }
      if ((cljscOptions.match(/\:output-dir\s*\'.*\'/)) || (cljscOptions.match(/\:output-dir\s*[^\'\"]*(\:|(\}$))/)) || (cljscOptions.match(/\:output-dir\s*\'[^\']*(\:|(\}$))/)) || (cljscOptions.match(/\:output-dir\s*\"[^\"]*(\:|(\}$))/)) || (cljscOptions.match(/\:output-dir\s*[^\']*\'\s*(\:|(\}$))/)) || (cljscOptions.match(/\:output-dir\s*[^\"]*\"\s*(\:|(\}$))/))) {
        throw new Error('path specified as :output-dir must be wrapped in double-quotes');
      }
      outputdir = cljscOptions.match(/\:output-dir\s*(\".*\")/);
      if (outputdir) {
        outputdir = outputdir[1];
        outputdir = outputdir.slice(1, outputdir.length - 1);
        outputdir = path.resolve(path.normalize(outputdir));
        if (!path.existsSync(outputdir)) {
          throw new Error('path specified as :output-dir must exist');
        }
        if (!(fs.statSync(outputdir)).isDirectory()) {
          throw new Error('path specified as :output-dir must be a directory');
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
    resolved = path.resolve(path.normalize(o.path));
    if (!(path.existsSync(resolved))) {
      throw new Error('source path must exist');
    }
    stats = fs.statSync(resolved);
    if (stats.isDirectory()) {
      cp = resolved;
    } else if (stats.isFile()) {
      cp = path.dirname(resolved);
    } else {
      throw new Error('source path must be a file or a directory');
    }
    cljscOptions = this.addBuildClasspath(cljscOptions, cp);
    try {
      js = this.clojureBuild.invokeSync(o.path, cljscOptions);
      if (!o.bare) {
        js = ";(function() {\n  " + js + "\n}).call(this);\n";
      }
      if (!o.header) {
        return js;
      }
    } catch (err) {
      err.message = "In " + o.path + ", " + err.message;
      throw err;
    }
    header = "Generated by ClojureScript " + this.CLJS_VERSION + " (ncljsc v" + this.VERSION + ")";
    return "// " + header + "\n" + js;
  };
  
  ClojureScript["eval"] = function(options, cljscOptions, javaOptions) {
    if (options == null) {
      options = {};
    }
    if (cljscOptions == null) {
      cljscOptions = ClojureScript.options;
    }
    if (javaOptions == null) {
      javaOptions = ClojureScript.javaOptions;
    }
    throw new Error('ClojureScript.eval method is not yet implemented');
  };
  
  ClojureScript.run = function(options, cljscOptions, javaOptions) {
    var mainModule;
    if (options == null) {
      options = {};
    }
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
        return mainModule._compile(ClojureScript.build(options, cljscOptions, javaOptions), mainModule.filename);
      } else {
        throw new Error('missing require.extensions, can\'t proceed');
      }
    } else {
      throw new Error('ClojureScript.run method does not yet support compiling directly from a source string');
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
      var content;
      content = ClojureScript.build({
        path: filename
      });
      return module._compile(content, filename);
    };
  }
  
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
  
  SWITCHES = [['-b', '--bare', '  compile without a top-level function wrapper'], ['-c', '--compile', '  compile to JavaScript and save as .js files'], ['-e', '--eval', '  pass a string from the command line as input'], ['-F', '--flags-print', '  print the options parsed by ncljsc and the contents of \n' + '                       process.argv'], ['-h', '--help', '  display this help message'], ['-i', '--interactive', '  run an interactive ClojureScript REPL'], ['-j', '--join [FILE]', '  concatenate the source ClojureScript before compiling'], ['-J', '--java [LIST]', '  pass a string of options to the JVM'], ['-l', '--lint', '  pipe the compiled JavaScript through JavaScript Lint'], ['-n', '--nodejs [ARGS]', '  pass options directly to the "node" binary'], ['-O', '--options-cljsc [HASHMAP]', '  pass a hash-map of options (as a string) to the \n' + '                       ClojureScript compiler'], ['-o', '--output [DIR]', '  set the output directory for compiled JavaScript'], ['-p', '--print', '  print out the compiled JavaScript'], ['-r', '--require [FILE*]', '  require a library before executing your script'], ['-s', '--stdio', '  listen for and compile scripts over stdio'], ['-v', '--version', '  display the version number'], ['-W', '--watch-deps [FILE*]', '  watch other dependencies not targeted by --watch, \n' + '                       rerun commands on changes (requires --watch)'], ['-w', '--watch', '  watch scripts for changes and rerun commands']];
  
  opts = {};
  
  sources = [];
  
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
        printLine('  ' + key + pad + '     ' + (val || ''));
      }
    }
    printLine("\n" + (forked !== -1 ? 'forked node\'s ' : '') + "process.argv contained the following:\n");
    _ref1 = process.argv;
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      arg = _ref1[_i];
      _results.push(printLine('  ' + arg + (arg === '--ncljsc-printprint-options-once' ? '    [ ignored by ncljsc ]' : '')));
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
        if (opts.watch) {
          watchDir(source, base);
        }
        if (opts.run) {
          return buildPath(path.normalize(source + '/index.cljs'), true, base);
        } else {
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
    var o, options, t, task;
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
        return ClojureScript.run(t.options, t.cljscOptions, t.javaOptions);
      } else if (o.join && t.path !== o.join) {
        return compileJoin();
      } else {
        t.output = ClojureScript.build(t.options, t.cljscOptions, t.javaOptions);
        ClojureScript.emit('success', task);
        if (o.print) {
          return printLine(t.output.trim());
        } else if (o.compile) {
          return writeJs(t.path, t.output, base);
        } else if (o.lint) {
          return lint(t.path, t.output);
        }
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
    var compile, compileTimeout, prevStats, rewatch, watchErr, watcher;
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
    compile = function() {
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
          return fs.readFile(source, function(err, code) {
            if (err) {
              return watchErr(err);
            }
            compileScript(source, code.toString(), base);
            return rewatch();
          });
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
      return watcher = fs.watch(source, compile);
    };
  };
  
  watchDir = function(source, base) {
    var readdirTimeout, watcher;
    readdirTimeout = null;
    try {
      return watcher = fs.watch(source, function() {
        clearTimeout(readdirTimeout);
        return readdirTimeout = wait(25, function() {
          return fs.readdir(source, function(err, files) {
            var file, _i, _len, _results;
            if (err) {
              if (err.code !== 'ENOENT') {
                throw err;
              }
              watcher.close();
              return unwatchDir(source, base);
            }
            _results = [];
            for (_i = 0, _len = files.length; _i < _len; _i++) {
              file = files[_i];
              if (!(!hidden(file) && !notSources[file])) {
                continue;
              }
              file = path.join(source, file);
              if (sources.some(function(s) {
                return s.indexOf(file) >= 0;
              })) {
                continue;
              }
              sources.push(file);
              sourceCode.push(null);
              _results.push(compilePath(file, false, base));
            }
            return _results;
          });
        });
      });
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
    throw new Error('watchDeps not implemented yet, should setup \'watches\' for the dependencies (dirs or files) ' + 'specified in opts[\'watch-deps\']');
  };
  
  watchDepsFile = function(file) {
    throw new Error('watchDepsFile not implemented yet, should setup a \'watch\' for the specified dependency file');
  };
  
  watchDepsDir = function(dir) {
    throw new Error('watchDepsDir not implemented yet, should call watchDepsFile for files in the specified dir ' + 'which have extensions matching those in ClojureScript.depExts');
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
    srcDir = path.dirname(source);
    baseDir = base === '.' ? srcDir : srcDir.substring(base.length);
    dir = opts.output ? path.join(opts.output, baseDir) : srcDir;
    return path.join(dir, filename);
  };
  
  writeJs = function(source, js, base) {
    var compile, jsDir, jsPath;
    jsPath = outputPath(source, base);
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
    conf = __dirname + '/../../extras/jsl.conf';
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
    if ((i = po.indexOf('--ncljsc-printprint-options-once')) !== -1) {
      po.splice(i, 1);
    }
    o = opts = optionParser.parse(po);
    o.compile || (o.compile = !!o.output);
    o.run = !(o.compile || o.print || o.lint);
    o.print = !!(o.print || (o["eval"] || o.stdio && o.compile));
    sources = o["arguments"];
    for (i = _i = 0, _len = sources.length; _i < _len; i = ++_i) {
      source = sources[i];
      sourceCode[i] = null;
    }
  };
  
  compileOptions = function(path) {
    return {
      path: path,
      bare: opts.bare,
      header: opts.compile
    };
  };
  
  forkNode = function() {
    var args, nodeArgs;
    nodeArgs = opts.nodejs.split(/\s+/);
    args = process.argv.slice(1);
    args.splice(args.indexOf('--nodejs'), 2);
    return spawn(process.execPath, nodeArgs.concat(args).concat('--ncljsc-printprint-options-once'), {
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
  
  repl = {
    prompt: function() {
      throw new Error('ncljsc REPL not yet implemented');
    }
  };
  
  exports = module.exports = ClojureScript;
  
  exports.ClojureScript = ClojureScript;
  
}).call(this);
