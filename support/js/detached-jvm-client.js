#!/usr/bin/env node

var fs      = require('fs');
var util    = require('util');
var request = require('superagent');

var asCli = false;
if (process.argv.indexOf('--request-creds') !== -1) {
 asCli = { type: 'creds' };
}
if (process.argv.indexOf('--request-build') !== -1) {
 asCli = { type: 'build' };
}

exports.credsRequest = function (port, callback) {
  var err;
  if (isNaN(parseInt(port))) {
    err = new Error('bad port');
    return callback(err, { port: port, err: err.message, path: null });
  } else {
    port = parseInt(port);
  }
  var parse = function (res) {
    var parsed = {};
    var err;
    parsed.port = port;
    if (!res.ok) {
      err = new Error(res.text);
      parsed.err = err.message;
      parsed.path = null;
    } else {
      parsed.err = null;
      parsed.path = res.body.path;
    }
    callback(err, parsed);
  };
  request
    .get('http://localhost:' + port + '/creds')
    .on('error', function (err) {
      return callback(err, { port: port, err: err.message, path: null });
    })
    .end(parse);
};

exports.buildRequest = function (body, callback) {
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
    .auth(body.username, body.password)
    .send(body)
    .end(parse);
};

if (asCli) {
  var output = function (res) {
    var buf = new Buffer(JSON.stringify(res), 'utf8');
    process.stdout.write(buf);
  };
  if (asCli.type === 'creds') {
    process.on('uncaughtException', function (err) {
      output({ port: null, err: err.message, path: null });
    });
    var port = process.argv[3];
    var callback = function (err, res) {
      // response contains the message portion of err, and in a cli
      // context the final 'output' step is to print to stdout, not
      // call another function
      output(res);
    };
    exports.credsRequest(port, callback);
  }
  if (asCli.type === 'build') {
    process.on('uncaughtException', function (err) {
      output({ reqbody: null, err: err.message, js: null });
    });
    var tmpfile = process.argv[3];
    fs.readFile(tmpfile, 'utf8', function (err, data) {
      if (err) {
        return output({ reqbody: null, err: err.message, js: null });
      }
      var body = data;
      try {
        body = JSON.parse(data);
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
          exports.buildRequest(body, callback);
        }
      } catch (error) {
          output({ reqbody: body, err: error.message, js: null });
      }
    });
  }
}
