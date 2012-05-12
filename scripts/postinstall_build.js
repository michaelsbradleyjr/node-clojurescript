var path = require('path');
var cljs = require('../');

var options = { path: path.resolve(__dirname + '/../support/cljs/postinstall_build.cljs') };
var outputDir = path.resolve(__dirname + '/../support/out');
var cljscOptions = '{:optimizations :simple :target :nodejs :pretty-print false :output-dir "' + outputDir + '"}';
var javaOptions = null;

try {
  cljs.build(options, cljscOptions, javaOptions);
} catch (error) {
  process.stdout.write('\nError: ' + error.message + '\n');
  process.exit(1);
}
