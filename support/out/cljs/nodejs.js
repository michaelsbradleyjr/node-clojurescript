goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.global = global;
cljs.nodejs.process = process;
cljs.nodejs.console = console;
cljs.nodejs.buffer = Buffer;
cljs.nodejs.require = require;
cljs.nodejs.__filename = __filename;
cljs.nodejs.__dirname = __dirname;
cljs.nodejs.module = module;
cljs.nodejs.exports = exports;
cljs.nodejs.timeout = setTimeout;
cljs.nodejs.clear_timeout = clearTimeout;
cljs.nodejs.interval = setInterval;
cljs.nodejs.clear_interval = clearInterval;
cljs.nodejs.next_tick = cljs.nodejs.process.nextTick;
cljs.core.string_print = (function (s){
return cljs.nodejs.process.stdout.write.call(cljs.nodejs.process.stdout,s);
});
