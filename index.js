/*//////////////////////// NODE-CLOJURESCRIPT //////////////////////////
 *
 * Version 0.0.0-5-pre
 * https://github.com/michaelsbradleyjr/node-clojurescript
 *
 * This software is Copyright (c) 2012 by Michael Bradley, Jr.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
/*//////////////////////////////////////////////////////////////////////


;(function (exports, undefined) {
  
  var ClojureScript, VERSION, compile, exports, fs, java, path, tmpDir, tmpOut;
  
  fs = require('fs');
  
  path = require('path');
  
  java = require('java');
  
  tmpDir = require('temporary/lib/dir');
  
  java.classpath.push(__dirname + '/support/clojure-clojurescript/lib/clojure.jar');
  
  java.classpath.push(__dirname + '/support/clojure-clojurescript/lib/compiler.jar');
  
  java.classpath.push(__dirname + '/support/clojure-clojurescript/lib/goog.jar');
  
  java.classpath.push(__dirname + '/support/clojure-clojurescript/lib/js.jar');
  
  java.classpath.push(__dirname + '/support/clojure-clojurescript/src/clj');
  
  java.classpath.push(__dirname + '/support/clojure-clojurescript/src/cljs');
  
  java.classpath.push(__dirname + '/support/clj');
  
  java.classpath.push(__dirname + '/support/cljs');
  
  ClojureScript = {};
  
  ClojureScript.VERSION = VERSION = '0.0.0-5-pre';
  
  ClojureScript.java = java;
  
  ClojureScript.defaultOptions = "{:optimizations :simple :target :nodejs :pretty-print false}";
  
  ClojureScript.options = ClojureScript.defaultOptions;
  
  ClojureScript.tmpDir = new tmpDir;
  
  tmpOut = function() {
    return " :tmp-out \"" + ClojureScript.tmpDir.path + "\" }";
  };
  
  ClojureScript.compile = compile = function(target, options) {
    var Compiler, StringReader, build, cp, ncljsc, ncljscSR, resolved, stats;
    if (options == null) {
      options = ClojureScript.options;
    }
    options = options.slice(0, options.length - 1) + tmpOut();
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
    java.classpath.push(cp);
    StringReader = java["import"]('java.io.StringReader');
    Compiler = java["import"]('clojure.lang.Compiler');
    ncljsc = fs.readFileSync(__dirname + '/support/clj/ncljsc.clj', 'utf8');
    ncljscSR = new StringReader(ncljsc);
    Compiler.loadSync(ncljscSR);
    build = java.callStaticMethodSync('clojure.lang.RT', 'var', 'ncljsc', 'build');
    return build.invokeSync(target, options);
  };
  
  if (require.extensions) {
    require.extensions['.cljs'] = function(module, filename) {
      var content;
      content = compile(filename);
      return module._compile(content, filename);
    };
  } else if (require.registerExtension) {
    require.registerExtension('.cljs', function(content) {
      return compile(content);
    });
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
