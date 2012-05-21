#!/usr/bin/env node

var path = require('path');
var fs   = require('fs');
var shell = require('shelljs');

var pkg  = path.join(path.dirname(fs.realpathSync(__filename)), '..');

var cljs = require(pkg);

var options = { path: ( pkg + '/support/cljs/postinstall_build.cljs' ) };
var outputDir = pkg + '/support/out';
shell.exec('mkdir -p ' + pkg + '/support/out', { silent: true });
var cljscOptions = '{:optimizations :simple :target :nodejs :pretty-print false :output-dir "' + outputDir + '"}';
var javaOptions = null;

try {
  var callback = function (err) { if (err) { throw err; } };
  cljs.build(options, cljs.builder, callback, cljscOptions, javaOptions);
} catch (error) {
  process.stdout.write('\nError: ' + error.message + '\n');
  process.exit(1);
}
