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

(defn ^:export greet [n]
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

Did it work? Cool! <small>&nbsp;(maybe submit an [issue](https://github.com/michaelsbradleyjr/node-clojurescript/issues) if it didn't)</small>

So now what you should do is read up on Clojure and ClojureScript and *get to busy!* &nbsp;See the *Resources* section below.

### Note

For long-running scripts, e.g. ones that listen on network ports, naive use of the `-w` flag will result in an `Error: listen EADDRINUSE` exception being thrown upon recompile. This is not a bug with `ncljsc`, you will encounter the same if you do the equivalent with `coffee -w`. In which case you can instead use a NodeJS tool like [forever](https://github.com/nodejitsu/forever):

```bash
$ forever -w -c ncljsc ./hello.cljs
```

When you make changes to `hello.cljs`, the script will be restarted automatically and you should not get an error like you would with `ncljsc -w`. However, this reintroduces the problem of the *slow* startup-compile time, as the JVM is killed upon restart. A better solution will be developed in the near future, stay tuned.

## Prerequities

### JVM

### NodeJS

If you're new to NodeJS and don't have it setup, that will be your next first step. I highly recommend Tim Caswell's [Node Version Manager](https://github.com/creationix/nvm) (nvm). It's easy to install and, and makes working-experimenting with multiple `node` versions dead simple. For example:

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

That's it! Installing `clojure-script` (the npm package name for this library) will automatically perform a package-localized installation of Clojure 1.3.0, Google Closure Compiler, etc.

If you get an error during installation, look closely at the error message. Maybe you made a typo while following the steps above? If you can't figure it out, feel free to submit an [issue](https://github.com/michaelsbradleyjr/node-clojurescript/issues).


## NodeJS `require` support

## Namespaces

## Coming Soon

## Resources

```bash
$ ncljsc --help
```

[ClojureScript: Translations from JavaScript](http://himera.herokuapp.com/synonym.html)

[ClojureDocs](http://clojuredocs.org)

Google Groups: [clojure](https://groups.google.com/forum/?fromgroups#!forum/clojure), &nbsp;[nodejs](https://groups.google.com/forum/?fromgroups#!forum/nodejs)

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
