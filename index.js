/*//////////////////////// NODE-CLOJURESCRIPT //////////////////////////
 *
 * Version 0.0.0-7-pre
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


;(function (exports, undefined) {
  
  var ClojureScript, exports, fs, path, pathCompiledCoreJS, pathCompiledNodejsJS;
  
  fs = require('fs');
  
  path = require('path');
  
  ClojureScript = {};
  
  ClojureScript.VERSION = '0.0.0-7-pre';
  
  ClojureScript.Tempdir = require('temporary/lib/dir');
  
  ClojureScript.defaultJavaOptions = "";
  
  ClojureScript.javaOptions = ClojureScript.defaultJavaOptions;
  
  ClojureScript.initJava = function(options) {
    var java;
    this.java = java = require('java');
    java.classpath.push(__dirname + '/support/clojure-clojurescript/lib/clojure.jar');
    java.classpath.push(__dirname + '/support/clojure-clojurescript/lib/compiler.jar');
    java.classpath.push(__dirname + '/support/clojure-clojurescript/lib/goog.jar');
    java.classpath.push(__dirname + '/support/clojure-clojurescript/lib/js.jar');
    java.classpath.push(__dirname + '/support/clojure-clojurescript/src/clj');
    java.classpath.push(__dirname + '/support/clojure-clojurescript/src/cljs');
    return java.classpath.push(__dirname + '/support/clj');
  };
  
  ClojureScript.initClojureCompiler = function() {
    var ClojureCompiler, StringReader, ncljsc, ncljscSR;
    this.StringReader = StringReader = this.java["import"]('java.io.StringReader');
    this.ClojureCompiler = ClojureCompiler = this.java["import"]('clojure.lang.Compiler');
    ncljsc = fs.readFileSync(__dirname + '/support/clj/ncljsc.clj', 'utf8');
    ncljscSR = new StringReader(ncljsc);
    ClojureCompiler.loadSync(ncljscSR);
    return this.build.clojureBuild = this.java.callStaticMethodSync('clojure.lang.RT', 'var', 'ncljsc', 'build');
  };
  
  ClojureScript.defaultOptions = "{:optimizations :simple :target :nodejs :pretty-print false}";
  
  ClojureScript.options = ClojureScript.defaultOptions;
  
  ClojureScript.tmp = new ClojureScript.Tempdir;
  
  fs.mkdirSync(ClojureScript.tmp.path + '/cljs');
  
  pathCompiledCoreJS = __dirname + '/support/out/cljs/core.js';
  
  if (path.existsSync(pathCompiledCoreJS)) {
    ClojureScript.compiledCoreJS = fs.readFileSync(pathCompiledCoreJS, 'utf8');
    fs.writeFileSync(ClojureScript.tmp.path + '/cljs/core.js', ClojureScript.compiledCoreJS, 'utf8');
  }
  
  pathCompiledNodejsJS = __dirname + '/support/out/cljs/nodejs.js';
  
  if (path.existsSync(pathCompiledNodejsJS)) {
    ClojureScript.compiledNodejsJS = fs.readFileSync(pathCompiledNodejsJS, 'utf8');
    fs.writeFileSync(ClojureScript.tmp.path + '/cljs/nodejs.js', ClojureScript.compiledNodejsJS, 'utf8');
  }
  
  ClojureScript.tmpOut = function(options) {
    return options.slice(0, options.length - 1) + (" :tmp-out \"" + this.tmp.path + "\"}");
  };
  
  ClojureScript.addBuildClasspath = function(options, cp) {
    return options.slice(0, options.length - 1) + (" :add-classpath \"" + cp + "\"}");
  };
  
  ClojureScript.build = function(target, options, javaOptions) {
    var cp, resolved, stats;
    if (options == null) {
      options = ClojureScript.options;
    }
    if (javaOptions == null) {
      javaOptions = ClojureScript.javaOptions;
    }
    if (!this.java) {
      this.initJava(javaOptions);
    }
    if (!this.ClojureCompiler) {
      this.initClojureCompiler();
    }
    options = this.tmpOut(options);
    resolved = path.resolve(path.normalize(target));
    if (!(path.existsSync(resolved))) {
      throw new Error('target path must exist');
    }
    stats = fs.statSync(resolved);
    if (stats.isDirectory()) {
      cp = resolved;
    } else if (stats.isFile()) {
      cp = path.dirname(resolved);
    } else {
      throw new Error('target path must be a file or a directory');
    }
    options = this.addBuildClasspath(options, cp);
    return this.build.clojureBuild.invokeSync(target, options);
  };
  
  if (require.extensions) {
    require.extensions['.cljs'] = function(module, filename) {
      var content;
      content = ClojureScript.build(filename);
      return module._compile(content, filename);
    };
  }
  
  if ((typeof exports !== "undefined" && exports !== null)) {
    if ((typeof module !== "undefined" && module !== null ? module.exports : void 0)) {
      exports = module.exports = ClojureScript;
    }
    exports.ClojureScript = ClojureScript;
  } else {
    this['ClojureScript'] = ClojureScript;
  }
  
}).call(this, (exports ? exports : undefined));
