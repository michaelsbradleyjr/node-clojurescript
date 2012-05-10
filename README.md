[![Build Status](https://secure.travis-ci.org/michaelsbradleyjr/node-clojurescript.png?branch=master)](http://travis-ci.org/michaelsbradleyjr/node-clojurescript)

# node-clojurescript

[node-clojurescript](https://github.com/michaelsbradleyjr/node-clojurescript) aims to provide seamless integration between [NodeJS](http://nodejs.org/) and [ClojureScript](https://github.com/clojure/clojurescript). This is a young project, started in May 2012, it's under active development and welcomes participation by the NodeJS and Clojure communities.

Working packages are available on the [npm](http://npmjs.org/) registry: &nbsp;[clojure-script](http://search.npmjs.org/#/clojure-script).


## Description

The ClojureScript library ships with some basic mechanisms for creating compiled scripts suitable for use with NodeJS. But more is possible, and this library aims to make compiling, loading and running `.cljs` scripts a breeze, in the same manner that [CoffeeScript](http://coffeescript.org) `.coffee` files can be used transparently in the development of NodeJS-backed applications.


## Quick Start

Want to get started? There are some prerequisites, but if you'd prefer to trouble with those later:

```bash
$ npm install -g clojure-script
```

If you get an error message from npm, it means you need to review the *Prerequisites* section of this README.<br />Let's continue...

```bash
$ touch hello.cljs && vim hello.cljs
```

Now paste in something like:

```clojure
(ns hello
  (:require [cljs.nodejs :as nodejs]))

(defn greet [n]
  (println (str "Hello, " n)))
  
(nodejs/next-tick
  (fn []
    (greet "World!")))
```

Save it, and leave the editor open. In another terminal, navigate to the directory where you created `hello.cljs` and do:

```bash
$ ncljsc -w hello.cljs
```

When you first invoke `ncljsc`, it fires up the JVM, the ClojureScript compiler and the [Google Closure Compiler](https://developers.google.com/closure/compiler). This means the first-round compilation will be *slow*, even *really slow*. That's expected.

**N.B.** the compiled JavaScript will be evaluated by the NodeJS (V8) runtime, not by the JVM.

You should eventually see printed in your terminal:

```bash
$ ncljsc -w hello.cljs
Hello, World!
```

Notice that we passed the `-w` flag to `ncljsc`. That tells it to keep running, watch for changes in the source file and re-compile automatically. Since the JVM is already up and running, re-compiles should be much faster.

With `ncljsc` still running, replace the contents of `hello.cljs` with:

```clojure
(ns hello
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as string]))

(def http
  (nodejs/require "http"))

(def server (.createServer http
   (fn [req, res]
     (.writeHead res 200 (clj->js {:Content-Type "text/plain"}))
     (.end res "Hello, World\n"))))

(.listen server 4242 "127.0.0.1")

(println "Server running at http://127.0.0.1:4242")

;; Helper
(defn clj->js
  "Recursively transforms ClojureScript maps into Javascript objects,
   other ClojureScript colls into JavaScript arrays, and ClojureScript
   keywords into JavaScript strings. Credit:
   http://mmcgrana.github.com/2011/09/clojurescript-nodejs.html"
  [x]
  (cond
    (string? x) x
    (keyword? x) (name x)
    (map? x) (.-strobj (reduce (fn [m [k v]]
               (assoc m (clj->js k) (clj->js v))) {} x))
    (coll? x) (apply array (map clj->js x))
    :else x))
```

Did it work? Cool! &nbsp;(maybe submit an [issue](https://github.com/michaelsbradleyjr/node-clojurescript/issues) if it didn't)

So now what you should do is read up on Clojure and ClojureScript and *get to busy!* &nbsp;See the *Resources* section below.


### Note

For long-running scripts, e.g. ones that listen on network ports, naive use of the `-w` flag will result in an `Error: listen EADDRINUSE` exception being thrown upon recompile. This is not a bug with `ncljsc`, you will encounter the same error if you do the equivalent with `coffee -w`. In which case you can instead use a NodeJS tool like [forever](https://github.com/nodejitsu/forever):

```bash
$ forever -w -c ncljsc hello.cljs
```

When you make changes to `hello.cljs`, the script will be restarted automatically and you should not get an error like you would with `ncljsc -w`. However, this reintroduces the problem of the *slow* startup-compile time, as the JVM is killed upon restart. A better solution will be developed in the near future, stay tuned.


## Prerequities

### Java

This library wraps a NodeJS front-end around the ClojureScript compiler, which is written in the Clojure language, which is hosted on the [Java Virtual Machine](http://en.wikipedia.org/wiki/Java_virtual_machine) (JVM). That means you *must* have Java setup to successfully install `clojure-script` with npm.

More specifically, you'll need JDK 1.6 (Java SE 6): &nbsp;[Windows](http://www.oracle.com/technetwork/java/javase/downloads/index.html), &nbsp;[Mac](https://developer.apple.com/library/mac/#documentation/Java/Conceptual/Java14Development/02-JavaDevTools/JavaDevTools.html), &nbsp;[debian / ubuntu](https://github.com/flexiondotorg/oab-java6)

You'll also need to export the proper value for `JAVA_HOME` into your environment. The [installation instructions](https://github.com/nearinfinity/node-java) for the `node-java` package are quite helpful in this regard, though note that installing `clojure-script` with npm will automatically install `node-java` as well (i.e. you don't need to do that separately).


### NodeJS

If you're new to NodeJS and don't have it setup, that will be your next step. I highly recommend Tim Caswell's [Node Version Manager](https://github.com/creationix/nvm) (nvm). It's easy to install and, and makes working with multiple `node` versions dead simple. For example:

```bash
$ nvm install v0.6.17
...
$ nvm install v0.6.10
...
$ nvm use v0.6.17
```

When you install `node`, the `npm` tool will get installed along with it. So as long you have Java in place (see above), you should be ready to run:

```bash
$ npm install -g clojure-script
...
```

That's it! Installing `clojure-script` (the npm package name for this library) will automatically perform a package-localized installation of Clojure 1.3.0, ClojureScript r1011, Google Closure Compiler, etc.

If you get an error during installation, look closely at the error message. Maybe you made a typo while following the steps above? If you can't figure it out, feel free to submit an [issue](https://github.com/michaelsbradleyjr/node-clojurescript/issues).


## NodeJS `require` support

With a local (vs. global) `node_modules` installation of `clojure-script`, you can load `.cljs` modules from other scripts without having to compile them beforehand.

With respect to the *Quick Start* examples above: create a script `other.js` in the same directory as `hello.cljs`, then paste in the following and save it:

```javascript
require('clojure-script');

require('./hello');
// or require('./hello.cljs');
```

Then you can do:

```bash
$ node other.js
```

**<span style="color:red;">N.B.</span>** This is a handy feature for development purposes. But it would be a terrible idea to publish a package on the npm registry which makes use of this technique. Modules *developed* in ClojureScript should be *published* with *only* compiled JavaScript loaded at runtime (via NodeJS's `require`).


## Namespaces

Clojure and ClojureScript support the notion of [namespaces](http://clojure.org/namespaces). Unlike loading [modules](http://nodejs.org/api/modules.html) with NodeJS's `require`, using ClojureScript's namespace `:require` will result in the namespaced module being *inlined* as part of the compiled JavaScript (scope is carefully preserved).

Try creating two scripts, `foo.cljs` and `bar.cljs`:

**foo.cljs**
```clojure
(ns foo
  (:require [bar :as bar]))

(defn ^:export greet [name, title]
  (str "Hello, " (bar/title title) " " name))
```
**bar.cljs**
```clojure
(ns bar)

(defn ^:export title [t]
  (str t " Amazing" ))
```

Now create a third script, `greet.js`:

**greet.js**
```javascript
var foo = require('./compiled.js').foo;

console.log(foo.greet('ClojureScript developer!', 'Mr.'));
```

Time to compile:

```bash
$ ncljsc -c -p foo.cljs > compiled.js
```

When that's finished, it's time to run `greet.js`:

```bash
$ node greet.js
Hello, Mr. Amazing ClojureScript developer!
```

Examining the plentiful contents of `compiled.js`, you'll see (toward the bottom) that both `foo.cljs` and `bar.cljs` were compiled into the stand-alone JS file.

## Coming Soon

There are several goals that need to be accomplished in short order:

* The tooling developed in CoffeeScript needs to be re-implemented in ClojureScript so that this library will be pseudo self-hosting.
* A plugin for the [Leiningen](https://github.com/technomancy/leiningen) build tool needs to be adapted or written, for use in development of complex ClojureScript projects in conjunction with this library and other NodeJS modules.
* Missing features of `ncljsc` need to be implemented, the most important being a [REPL](https://github.com/clojure/clojurescript/wiki/The-REPL-and-Evaluation-Environments).
* More and better documentation and examples.

Help in accomplishing these and future goals is more than welcome.

## Resources

```bash
$ ncljsc --help
```

[ClojureScript: Translations from JavaScript](http://himera.herokuapp.com/synonym.html)

[ClojureDocs](http://clojuredocs.org)

Google Groups: [clojure](https://groups.google.com/forum/?fromgroups#!forum/clojure), &nbsp;[nodejs](https://groups.google.com/forum/?fromgroups#!forum/nodejs)

[NodeJS Documentation](http://nodejs.org/api)

`#clojure`, `#clojurescript` and `#node.js` channels on Freenode.

[prelude](https://github.com/bbatsov/prelude), &nbsp;[prelude-modules](https://github.com/bbatsov/prelude-modules), &nbsp;and [Emacs for OS X](http://emacsformacosx.com/) (latest pretest)

## Credit

This software is derived from and incorporates existing works:

[CoffeeScript](https://github.com/jashkenas/coffee-script),&nbsp; [ClojureScript](https://github.com/clojure/clojurescript),&nbsp; [Pomegranate](https://github.com/cemerick/pomegranate)

In particular, many thanks are owed to [Jeremy Ashkenas](https://github.com/jashkenas) and the other [CoffeeScript](https://github.com/jashkenas/coffee-script) maintainers. Using the CoffeeScript tooling as a template, it was possible to whip together a useable NodeJS front-end in one intense week. It would have otherwise been much more slow-going.

## Copyright and License

This software is Copyright (c) 2012 by Michael Bradley, Jr.

The use and distribution terms for this software are covered by the [Eclipse Public License 1.0](http://opensource.org/licenses/eclipse-1.0.php) which can be found in the file [epl-v10.html](http://michaelsbradleyjr.github.com/node-clojurescript/licenses/epl-v10.html) under the [licenses directory](https://github.com/michaelsbradleyjr/node-clojurescript/tree/master/licenses) at the root of this distribution. By using this software in any fashion, you are agreeing to be bound by the terms of this license. You must not remove this notice, or any other, from this software.

---------------------------------------

<a href="https://developer.mozilla.org/en/JavaScript/Reference/" title="JavaScript Reference">
  <img src="http://static.jsconf.us/promotejshs.png" alt="JavaScript Reference" />
</a>
