[![Build Status](https://secure.travis-ci.org/michaelsbradleyjr/node-clojurescript.png?branch=master)](http://travis-ci.org/michaelsbradleyjr/node-clojurescript)

# node-clojurescript

[node-clojurescript](https://github.com/michaelsbradleyjr/node-clojurescript) aims to provide seamless integration between [NodeJS](http://nodejs.org/) and [ClojureScript](https://github.com/clojure/clojurescript). This project is under active development and welcomes participation by the Node and Clojure communities.

Working packages are available on the [npm](http://npmjs.org/) registry: [clojure-script](http://search.npmjs.org/#/clojure-script).


## Description

The ClojureScript library ships with some basic mechanisms for creating compiled scripts suitable for use with NodeJS. But more is possible, and this library aims to make compiling, loading and running `.cljsc` scripts a breeze, in the same manner that [CoffeeScript](http://coffeescript.org) `.coffee` files can be used transparently in the development of NodeJS-backed applications.


## Quick Start

Want to get started? There are some prerequisites, but if you'd prefer to trouble with those later:

```bash
$ npm install -g clojure-script
```

If you get an error message from npm, it means you need to review the prerequisites covered in the next section of this README. Let's continue...

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

You should eventually see printed in your terminal:

```bash
$ ncljsc -w hello.cljs
Hello, World!
```

Notice that we passed the `-w` flag to `ncljsc`. That tells it to watch for changes in the source file and re-compile automatically. Since the JVM is already up and running in that case, you'll find subsequent compiles are much faster.



So now what you should do is read up on Clojure/Script and get to busy!

[ClojureScript: Translations from JavaScript](http://himera.herokuapp.com/synonym.html)
[ClojureDocs](http://clojuredocs.org)

## Prerequities

## Coming Soon


## Credit

This software is derived from and incorporates existing works:

[CoffeeScript](https://github.com/jashkenas/coffee-script),&nbsp; [ClojureScript](https://github.com/clojure/clojurescript),&nbsp; [Pomegranate](https://github.com/cemerick/pomegranate)

In particular, many thanks are owed to [Jeremy Ashkenas](https://github.com/jashkenas) and the other [CoffeeScript](https://github.com/jashkenas/coffee-script) maintainers. Using the CoffeeScript tooling as a template, it was possible to whip together a useable NodeJS front-end to the underlying ClojureScript compiler in about a week. It would have otherwise been much more slow-going.

## Copyright and License

This software is Copyright (c) 2012 by Michael Bradley, Jr.

The use and distribution terms for this software are covered by the [Eclipse Public License 1.0](http://opensource.org/licenses/eclipse-1.0.php) which can be found in the file [epl-v10.html](http://michaelsbradleyjr.github.com/node-clojurescript/licenses/epl-v10.html) under the [licenses directory](https://github.com/michaelsbradleyjr/node-clojurescript/tree/master/licenses) at the root of this distribution. By using this software in any fashion, you are agreeing to be bound by the terms of this license. You must not remove this notice, or any other, from this software.

---------------------------------------

<a href="https://developer.mozilla.org/en/JavaScript/Reference/" title="JavaScript Reference">
  <img src="http://static.jsconf.us/promotejshs.png" alt="JavaScript Reference" />
</a>
