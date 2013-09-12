[![Build Status](https://secure.travis-ci.org/michaelsbradleyjr/node-clojurescript.png?branch=master)](http://travis-ci.org/michaelsbradleyjr/node-clojurescript)

# `Inactive`

*This repository is no longer actively maintained. Please use or create a fork.*

# node-clojurescript

[node-clojurescript](https://github.com/michaelsbradleyjr/node-clojurescript) aims to provide seamless integration between [NodeJS](http://nodejs.org/) and [ClojureScript](https://github.com/clojure/clojurescript). This is a young project, started in May 2012, it's under active development and welcomes participation by the NodeJS and [Clojure](http://clojure.org) communities.

Packages are available on the [npm](http://npmjs.org/) registry: &nbsp;[clojure-script](http://search.npmjs.org/#/clojure-script).


## Description

The ClojureScript library ships with some basic mechanisms for creating compiled scripts suitable for use with NodeJS. But more is possible, and this library aims to make compiling, loading and running `.cljs` scripts a breeze, in the same manner that [CoffeeScript](http://coffeescript.org) `.coffee` files can be used transparently in the development of NodeJS-backed applications.


## Quick Start

Want to get started? There are some [prerequisites](#prerequisites), but if you'd prefer to trouble with those later:

```bash
$ npm install -g clojure-script
```

If you get an error message from npm, it means you need to review the *[Prerequisites](#prerequisites)* section of this README.<br />Let's continue...

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
$ ncljsc hello.cljs
```

When you invoke `ncljsc`, it fires up the JVM, the ClojureScript compiler and the [Google Closure Compiler](https://developers.google.com/closure/compiler). This means the compilation will seem *slow*, even *really slow* (10+ seconds), especially if you're used to the sub-second compile times of CoffeeScript. That's expected, and the issue will be revisited in the *[Faster, faster!](#faster-faster)* section below.

**N.B.** the compiled JavaScript will be evaluated by the NodeJS (V8) runtime, not by the JVM.

You should eventually see printed in your terminal:

```bash
$ ncljsc hello.cljs
Hello, World!
```

Now replace the contents of `hello.cljs` with:

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

(.listen server 4200 "127.0.0.1")

(println "Server running at http://127.0.0.1:4200")

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

Save it, then rerun `ncljsc hello.cljs` and point your browser to [localhost:4200](http://127.0.0.1:4200).

Did it work? Cool! &nbsp;(maybe submit an [issue](https://github.com/michaelsbradleyjr/node-clojurescript/issues) if it didn't)

### *Faster, faster!*

The slow compile times mentioned above are owing to startup time of the JVM, plus the time to initially load the two underlying compilers (ClojureScript and Google Closure). This is an annoying problem...

*Problem solved!* &nbsp;Starting with `v0.1.4`, node-clojurescript offers a way to compile against a long-running, "detached" JVM server:

```bash
$ nohup ncljsc --server 4242 &
```

Invoke the command above, which will start the process and keep it persistently running in the background (even if the terminal is closed). You don't need to navigate to a particular path before starting it, bu you need to leave it running. After 10+ seconds, you should be able to see the following output in nohup.out:

```bash
$ cat nohup.out
Starting up, please wait...

Initial build completed, JVM and compiler are primed and ready!
Detached JVM server listening at http://127.0.0.1:4242/
```

If you see something about a `DTraceProviderBindings` error, just ignore it as it's [harmless](https://github.com/mcavage/node-restify/issues/100). Depending on your platform, no error may be reported.

Now open another terminal and go back to the directory where you created `hello.cljs`. Then do:

```bash
$ ncljsc --client 4242 hello.cljs
```

You should notice a marked difference in the time required for the script to run. Once the `--server` JVM is "hot", compile times should take only a few seconds, instead of 10+ seconds. That's because the `--client` process does not start its own JVM.

#### How does it work?

The `--server` process accepts "build requests" over HTTP, listening on `localhost` at the specified port. The `--client` then makes synchronous or asynchronous requests (depending on how it's invoked). And that's it: from the perspective of the end-user, the only difference is that these "remote" builds happen more quickly than "local" builds. Overall usage of `ncljsc` is the same whether you run remote or local builds.

#### A few notes:

* This feature is under active development and won't always work correctly, e.g. errors may not always make it back to the client and the return value of a build may be an empty string. It's best to keep an eye on the terminal output of the server process for signs of trouble.
* You may use whatever port number you prefer, as long as the client and server use the same port.
* Requests are restricted to the `localhost` interface. *(security)*
* There is a transparent exchange of credentials hard-wired into the client-server logic, so that arbitrary processes can't make build requests. *(security)*
* Aforesaid "credentials exchange" requires server and client processes to be run as the same user. *(security)*
* Credentials aren't persistent, so if the server process is bounced (you restart it, maybe it crashed), client processes must be restarted if they're long-running and will attempt further build requests. *(security?)*
* Don't use the client-server mode in a production environment. *(goes without saying?)*


### Automatic re-compiles

It's 2012 and you shouldn't *have* to manually re-run your scripts while you're developing them. And you don't!

After some experimentation, [supervisor](https://github.com/isaacs/node-supervisor) seems (to the author) to be the simplest and most flexible NodeJS-based tool for automatically re-starting scripts in a development workflow. Make sure to install it globally: `npm install -g supervisor`.

With `supervisor` installed and a `ncljsc --server` process running, revisit the directory where you created `hello.cljs` and do:

```bash
$ supervisor -w hello.cljs -n exit -x ncljsc -- --client 4242 hello.cljs 
```

That's a lot of flags for a single command, but see `supervisor --help` and you'll soon have the hang of it. Note that we're making use of `--client 4242`, which is proper to `ncljsc`, not `supervisor`.

Now edit `hello.cljs` and watch what happens when you save it. *Fantastic!* &nbsp; It compiles quickly, and will do so repeatedly whenever you save changes, so long as you keep `supervisor` running.

### Compiling to disk

In addition to running `.cljs` scripts, `ncljsc` can also be used to write compiled JavaScript to disk. For example:

**saves to `hello.js` in the same directory** (local build)
```bash
$ ncljsc --compile hello.cljs
```

**saves to `myscript/hello.js` in the same directory** (remote build)
```bash
$ ncljsc --compile --output myscript --client 4242 hello.cljs
```

**re-compiles and re-saves when changes are made** (remote build)
```bash
$ supervisor -w hello.cljs -n exit -x ncljsc -- --client 4242 --compile hello.cljs 
```

### More options

The `ncljsc` command provides additional capabilities. Try:

```bash
$ ncljsc --help
```

Not all of the features have been implemented yet. Also, you'll notice that `ncljsc` provides built-in `--watch` and `--watch-deps` options. Those do work, but there are some outstanding [bugs](https://github.com/joyent/node/issues/3172) related to NodeJS's `fs.watch` facility. As such, it seemed better to propose `supervisor` as a file watching tool than explain a bunch of caveats regarding the built-in watch support. But by all means experiment and [report back](https://github.com/michaelsbradleyjr/node-clojurescript/issues).

### What's Next?

So now what you should do is read up on Clojure and ClojureScript and *get to busy!* &nbsp;See the *[Resources](#resources)* section below.

## Prerequisites

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
```

That's it! Installing `clojure-script` (the npm package name for this library) will automatically perform a package-localized installation of Clojure, ClojureScript, Google Closure Compiler, etc.

If you get an error during installation, look closely at the error message. Maybe you made a typo while following the steps above? If you can't figure it out, feel free to submit an [issue](https://github.com/michaelsbradleyjr/node-clojurescript/issues).


## NodeJS `require` support

With a local (vs. global) `node_modules` installation of `clojure-script`, you can load `.cljs` modules from other scripts without having to compile them beforehand.

With respect to the *[Quick Start](#quick-start)* examples above: create a script `other.js` in the same directory as `hello.cljs`, then paste in the following and save it:

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

### Remote builds and `require`

It's entirely possible to leverage the `require` support in combination with node-clojurescript's client-server mode described in the *[Faster, faster!](#faster-faster)* section above.

Suppose you have a "detached" JVM server process running on port `8888`:

```bash
$ ncljsc --server 8888
```

In your `.js` script you can then indicate:

```javascript
require('clojure-script')(8888);

require('./hello.cljs');
```

In this context, the client-logic makes a *synchronous* (not async) build request against the server process. `hello.cljs` will be transparently compiled and loaded as before, but more quickly.

You can call the function returned by `require` without arguments, like so:

```javascript
require('clojure-script')();
...
```

In that case, the port number will default to `4242` (make sure the server process is using the same port). Note that calling the function without arguments and *not* calling it are two distinct things. If you don't call it, the `clojure-script` module will start a new JVM and perform a local build. If you do call it, with or without arguments, a JVM will *not* be started and the module will make a remote build request.

## Namespaces

Clojure and ClojureScript support the notion of [namespaces](http://clojure.org/namespaces). Unlike loading [modules](http://nodejs.org/api/modules.html) with NodeJS's `require`, using ClojureScript's namespace `:require` will result in the namespaced module being *inlined* as part of the compiled JavaScript (scope is carefully preserved).

Try creating two scripts, `foo.cljs` and `bar.cljs`:

**foo.cljs**
```clojure
(ns foo
  (:require [cljs.nodejs :as nodejs]
            [bar :as bar]))

(defn ^:export greet [name, title]
  (str "Hello, " (bar/title title) " " name))
```
**bar.cljs**
```clojure
(ns bar
  (:require [cljs.nodejs :as nodejs]))

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

## Bundled Leiningen

[Leiningen](https://github.com/technomancy/leiningen) is a popular and flexible build tool in wide use among Clojure developers. node-clojurescript bundles the shell script front-end to Leiningen (the `lein` command) and proxies to it with an executable script named `nlein`.

If you've installed the `clojure-script` module globally with `npm install -g clojure-script`, then you should be able to run:

```bash
$ nlein
```

`nlein` is a simple proxy script and does not feature any customizations of Leiningen. If you already have a `lein` executable on your path, `nlein` will ask whether it should delegate to it, with the option to remember your decision.

Note that `nlein`, when it's not delegating to another `lein`, will store JAR files and other things it downloads in the `support/.lein` directory, relative to the root of the `clojure-script` package. This is to keep `nlein` from even potentially conflicting with an existing installation. Normally, `lein` stores such things in `$HOME/.lein`.

All in all, the purpose of `nlein` is to provide an easy way for NodeJS developers to get up and running with Leiningen. If you're already using Leiningen, you may choose to ignore `nlein` and go about your business as usual.

## Coming Soon

There are several goals that need to be accomplished in short order:

* The tooling developed in CoffeeScript needs to be re-implemented in ClojureScript so that this library will be pseudo self-hosting.
* A plugin for the Leiningen build tool needs to be adapted or written, for use in development of complex ClojureScript projects in conjunction with this library and other NodeJS modules.
* Missing features of `ncljsc` need to be implemented, the most important being a [REPL](https://github.com/clojure/clojurescript/wiki/The-REPL-and-Evaluation-Environments).
* More and better documentation and examples.

Help in accomplishing these and future goals is more than welcome.

## Resources

```bash
$ ncljsc --help
```

[ClojureScript: Translations from JavaScript](http://himera.herokuapp.com/synonym.html)

[ClojureDocs](http://clojuredocs.org), &nbsp;[Clojure.org](http://clojure.org)

[NodeJS Documentation](http://nodejs.org/api)

[Leiningen](https://github.com/technomancy/leiningen), [wiki](https://github.com/technomancy/leiningen/wiki)

Google Groups: [clojure](https://groups.google.com/forum/?fromgroups#!forum/clojure), &nbsp;[nodejs](https://groups.google.com/forum/?fromgroups#!forum/nodejs)

`#clojure`, `#clojurescript` and `#node.js` channels on Freenode IRC.

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
