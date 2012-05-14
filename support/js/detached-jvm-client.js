#!/usr/bin/env node

var util    = require('util');
var request = require('superagent');

var asCli = false;
if (process.argv.indexOf('--request') != -1) {
 asCli = true;
}

exports.makeRequest = function (body, callback) {
  var port, err;
  if (!body) {
    err = new Error('bad request body');
    return callback(err, { reqbody: body, err: err, js: null });
  } else if (!body.port) {
    err = new Error('bad port');
    return callback(err, { reqbody: body, err: err, js: null });
  } else {
    port = body.port;
  }
  var parse = function (res) {
    var parsed = {};    
    parsed.reqbody = body;
    if (!res.ok) {
      parsed.err = new Error(res.text);
      parsed.js  = null;
    } else {
      parsed.err = res.body.err;
      parsed.js  = res.body.js;
    }
    callback(parsed.err, parsed);
  };
  request
    .post('http://localhost:' + port + '/build')
    .on('error', function (err) {
      return callback(err, { reqbody: body, err: err, js: null });
    })
    .set('Content-Type', 'application/json')
    .send(body)
    .end(parse);
};


if (asCli) {
  var output = function (res) {
    process.stdout.write(util.inspect(res, false, null));
  };
  var body = process.argv[3];
  try {
    body = JSON.parse(body);
    if (!body) {
      output({ reqbody: body, err: ( new Error('bad request body') ), js: null });
    } else {
      var callback = function (err, res) {
        // response contains err, and in a cli context the final
        // 'output' step is to print to stdout, not call another
        // function
        output(res);
      };
      exports.makeRequest(body, callback);
    }
  } catch (err) {
      output({ reqbody: body, err: err, js: null });
  }
}
