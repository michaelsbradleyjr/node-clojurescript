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
  
  var ClojureScript, compiledCoreJS, compiledNodejsJS, exports, fs, path, pathCompiledCoreJS, pathCompiledNodejsJS;
  
  fs = require('fs');
  
  path = require('path');
  
  ClojureScript = {};
  
  ClojureScript.VERSION = '0.0.0-7-pre';
  
  ClojureScript.Tempdir = require('temporary/lib/dir');
  
  ClojureScript.defaultJavaOptions = '';
  
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
  
  ClojureScript.defaultOptions = '{:optimizations :simple :target :nodejs :pretty-print false}';
  
  ClojureScript.options = ClojureScript.defaultOptions;
  
  ClojureScript.tmp = new ClojureScript.Tempdir;
  
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
  
  ClojureScript.build = function(target, options, javaOptions) {
    var cp, outcljs, outcljscore, outcljsnodejs, outputdir, resolved, stats;
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
    if (options !== ClojureScript.options) {
      options = options.match(/^\s*(\{.*\})\s*$/);
      if (!options) {
        throw new Error('malformed options string');
      } else {
        options = options[1];
      }
      if ((options.match(/\:output-dir\s*\'.*\'/)) || (options.match(/\:output-dir\s*[^\'\"]*(\:|(\}$))/)) || (options.match(/\:output-dir\s*\'[^\']*(\:|(\}$))/)) || (options.match(/\:output-dir\s*\"[^\"]*(\:|(\}$))/)) || (options.match(/\:output-dir\s*[^\']*\'\s*(\:|(\}$))/)) || (options.match(/\:output-dir\s*[^\"]*\"\s*(\:|(\}$))/))) {
        throw new Error('path specified as :output-dir must be wrapped in double-quotes');
      }
      outputdir = options.match(/\:output-dir\s*(\".*\")/);
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
      }
    }
    if (!(outputdir != null)) {
      outputdir = this.tmp.path;
      options = this.tmpOut(options);
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
    return this.clojureBuild.invokeSync(target, options);
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
