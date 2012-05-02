/*//////////////////////// NODE-CLOJURESCRIPT //////////////////////////
 *
 * Version 0.0.0-2-pre
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
  
  var ClojureScript, VERSION, exports, java, str, util;
  
  ClojureScript = {};
  
  ClojureScript.VERSION = VERSION = '0.0.0-2-pre';
  
  java = require('java');
  
  java.classpath.push(__dirname + '/support/clojure-clojure-8306949/clojure-1.4.0.jar');
  
  java.classpath.push(__dirname + '/support/closure-compiler-latest/compiler.jar');
  
  java.classpath.push(__dirname + '/support/clojure-clojurescript-7472ab9/src/clj');
  
  java.classpath.push(__dirname + '/support/clojure-clojurescript-7472ab9/src/cljs');
  
  util = require('util');
  
  str = '(ns user) (defn foo [a b]   (str a \" \" b))';
  
  if ((typeof exports !== "undefined" && exports !== null)) {
    if ((typeof module !== "undefined" && module !== null ? module.exports : void 0)) {
      exports = module.exports = ClojureScript;
    }
    exports.ClojureScript = ClojureScript;
  } else {
    this['ClojureScript'] = ClojureScript;
  }
  
}).call(this, (exports ? exports : undefined));
