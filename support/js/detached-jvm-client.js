#!/usr/bin/env node

var fs      = require('fs');
var util    = require('util');
var request = require('superagent');

var asCli = false;
if (process.argv.indexOf('--request') !== -1) {
 asCli = true;
}

exports.makeRequest = function (body, callback) {
  var port, err;
  if (!body) {
    err = new Error('bad request body');
    return callback(err, { reqbody: body, err: err.message, js: null });
  } else if (!body.port) {
    err = new Error('bad port');
    return callback(err, { reqbody: body, err: err.message, js: null });
  } else {
    port = body.port;
  }
  var parse = function (res) {
    var parsed = {};
    var err;    
    parsed.reqbody = body;
    if (!res.ok) {
      err = new Error(res.text);
      parsed.err = err.message;
      parsed.js  = null;
    } else {
      parsed.err = res.body.err;
      if (parsed.err) {
        err = new Error(parsed.err);
      } else {
        err = null;
      }
      parsed.js = res.body.js;
    }
    callback(err, parsed);
  };
  request
    .post('http://localhost:' + port + '/build')
    .on('error', function (err) {
      return callback(err, { reqbody: body, err: err.message, js: null });
    })
    .set('Content-Type', 'application/json')
    .send(body)
    .end(parse);
};

if (asCli) {
  var output = function (res) {
    var buf = new Buffer(JSON.stringify(res), 'utf8');
    process.stdout.write(buf);
  };
  process.on('uncaughtException', function (err) {
    output({ reqbody: body, err: err.message, js: null });
  });
  var tmpfile = process.argv[3];
  var body = fs.readFileSync(tmpfile, 'utf8');
  var err;
  try {
    body = JSON.parse(body);
    if (!body) {
      err = new Error('bad request body');
      output({ reqbody: body, err: err.message, js: null });
    } else {
      var callback = function (err, res) {
        // response contains the message portion of err, and in a cli
        // context the final 'output' step is to print to stdout, not
        // call another function
        output(res);
      };
      exports.makeRequest(body, callback);
    }
  } catch (error) {
      output({ reqbody: body, err: error.message, js: null });
  }
}
