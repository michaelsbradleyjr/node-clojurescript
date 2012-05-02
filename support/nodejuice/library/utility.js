var posix    = require("fs")
,   http     = require('http')
,   sys      = require("sys")
,   argv     = process.ARGV || process.argv
,   appdir   = argv[2]
,   njdir    = argv[3]
,   njconfig = argv[4]
,   devmode  = argv[5]
,   mime     = require(njdir  + "/library/mime").mime
,   rxclever = /"([^"]+)"(:)?/g
,   rxdigi   = /\d+/g
,   rxdelma  = /\s*([},])\s*/g
,   rxmagic  = /{{([\w\-]+)}}/g
,   rxsneaky = /^\s*((?:<!?doc[^>]*>\s*)?(?:<htm[^>]*>\s*)?(?:<hea[^>]*>)?)?/i;

posix.cat = posix.readFile;

process.addListener( "unhandledException", function(msg) { inform(msg) } );

var ignite = exports.ignite = function() {
    return extend( true,
        require(njdir  + "/config/nodejuice"),
        require(njconfig)
    );
};

var extend = exports.extend = function() {
    // copy reference to target object
    var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options, name, src, copy;

    // Handle a deep copy situation
    if ( typeof target === "boolean" ) {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if ( typeof target !== "object" && !typeof target === 'function') {
        target = {};
    }

    var isArray = function(obj) {
        return toString.call(copy) === "[object Array]" ? true : false;
    };

    var isPlainObject = function( obj ) {
        // Must be an Object.
        // Because of IE, we also have to check the presence of the constructor property.
        // Make sure that DOM nodes and window objects don't pass through, as well
        if ( !obj || toString.call(obj) !== "[object Object]" || obj.nodeType || obj.setInterval ) {
            return false;
        }
        
        var has_own_constructor = hasOwnProperty.call(obj, "constructor");
        var has_is_property_of_method = hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf");
        // Not own constructor property must be Object
        if ( obj.constructor && !has_own_constructor && !has_is_property_of_method) {
            return false;
        }
        
        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.
    
        var last_key;
        for ( key in obj ) {
            last_key = key;
        }
        
        return typeof last_key === "undefined" || hasOwnProperty.call( obj, last_key );
    };


    for ( ; i < length; i++ ) {
        // Only deal with non-null/undefined values
        if ( (options = arguments[ i ]) !== null ) {
            // Extend the base object
            for ( name in options ) {
                src = target[ name ];
                copy = options[ name ];

                // Prevent never-ending loop
                if ( target === copy ) {
                    continue;
                }

                // Recurse if we're merging object literal values or arrays
                if ( deep && copy && ( isPlainObject(copy) || isArray(copy) ) ) {
                    var clone = src && ( isPlainObject(src) || isArray(src) ) ? src : isArray(copy) ? [] : {};

                    // Never move original objects, clone them
                    target[ name ] = extend( deep, clone, copy );

                // Don't bring in undefined values
                } else if ( typeof copy !== "undefined" ) {
                    target[ name ] = copy;
                }
            }
        }
    }

    // Return the modified object
    return target;
};


var config  = ignite()
,   seekin  = '$1<script src="http://'
,   seekout = ':' + config.seeker.port + '"></script>';

var amuse = exports.amuse = function( text, host ) {
    return text.replace( rxsneaky, seekin + host + seekout );
};

var bolt = exports.bolt = function( file, success, fail, rad ) {
    noble( file, function( type, data, encoding ) {
        try {
            var lightning = eval('(function(){var exports={};' + data +
                ';return exports})()');
            return lightning ? success( lightning, rad ) : fail && fail();
        }
        catch(e) { fail && fail(e) }
    }, function() { fail && fail() } );
};

var supplant = exports.supplant = function( text, args ) {
    return text.replace( rxmagic, function( _, key ) {
        return args[key] || ''
    } );
};

var impress = exports.impress = function( file, args, success, fail ) {
    noble( file, function( type, data, encoding ) {
        success( type, supplant( data, args ), encoding )
    }, fail || function(){} )
};

// Non Blocking Recursive Directory
var recurse = exports.recurse = function( start, ignore, callback ) {
    posix.readdir( start, function( err, files ) {
        files.forEach(function(file) {
            var path = start + '/' + file;

            // Ignored Files/Directories
            if (ignore.filter(function(item) {
                return item.test(path)
            }).length) return;

            posix.stat( path, function( err, stat ){
                callback( path, stat );
                if (stat.isDirectory()) recurse( path, ignore, callback );
            } );
        });
    } );
};

var inform = exports.inform = function(obj) {
    if (!devmode) return sys.puts(JSON.stringify(obj));

    sys.puts(JSON.stringify(obj).replace( rxdigi, function( num ) {
        return "\033[0;36;1m" + num + "\033[0m";
    } ).replace( rxclever, function( _, key, del ) {
        return (del ? ' \033[0;35;1m' : '\033[0;32;1m"') + key +
            (del ? '\033[0m: ' : '"\033[0m ');
    } ).replace( rxdelma, function( _, del ) {
        return " " + del + " ";
    } ));
};

if (devmode) {
    var wait   = config.seeker.wait
    ,   interv = wait / 4;
    setInterval( function() {
        var now = earliest();
        for ( var file in noblecache ) {
            if (typeof noblecache[file].data === 'string' &&
                now - noblecache[file].earliest > wait
            ) {
                noblecache[file].data    = '';
                noblecache[file].reading = 0;
            }
        }
    }, interv );
}

var noblecache = {};
var noble = exports.noble = function( file, success, fail, retries ) {

    if (noblecache[file] && earliest() - noblecache[file].failed < 5000)
        return fail && fail();
    else if (noblecache[file])
        noblecache[file].failed = 0

    if (noblecache[file] && noblecache[file].reading) {
        if (typeof noblecache[file].data === 'string') {
            success && success(
                noblecache[file].type,
                noblecache[file].data,
                noblecache[file].encoding
            );
            noblecache[file].earliest = earliest();
            return;
        }

        return setTimeout( function() {
            noblecache[file].earliest = earliest();
            noble( file, success, fail )
        }, 100 );
    }

    noblecache[file] = { reading : 1 };

    var type      = mime.get(file)
    ,   encoding  = (type.slice( 0, 4 ) === "text" ? "utf8" : "binary");
    //,   noblefile = posix.cat( file, encoding );

    posix.readFile( file, encoding, function( err, data ) {
        if (typeof data !== 'string') return retry();

        noblecache[file].type     = type;
        noblecache[file].data     = data;
        noblecache[file].encoding = encoding;
        noblecache[file].earliest = earliest();

        success && success( type, data, encoding );
    } );

    //noblefile.addErrback(function() {
    
    //retry() });

    function retry() {
        retries = retries || 0;

        if ( retries < config.wsgi.retry.max ) setTimeout( function() {
            if (devmode) noblecache[file].reading = 0;
            noble( file, success, fail, retries + 1 );
        }, config.wsgi.retry.wait );
        else {
            noblecache[file].failed  = earliest();
            noblecache[file].reading = 0;
            noblecache[file].data    = '';
            fail && fail();
            inform({ fail: 'true', file: file });
        };
    }
};

var fetching = 0
,   fetchmax = 8
,   fetchque = []
,   fetch    = exports.fetch = function(setup/*
    port,     // 80
    host,     // "www.google.com"
    type,     // "GET"
    path,     // "/"
    headers,  // { asdf : asdf }
    body,     // 'binary, text or POST data'
    encoding, // "binary" or "utf8"
    ready,    // function (response) {}
    good,     // function ( chunk, response, encoding ) {}
    fail,     // function ( chunk, response, encoding ) {}
    finished  // function ( final, response, encoding ) {}
*/) {
    if ( fetching >= fetchmax )
        return fetchque.push(setup);
    else fetching++;
    
    var port     = setup.port     || 80
    ,   host     = setup.host     || 'localhost'
    ,   type     = setup.type     || 'GET'
    ,   path     = setup.path     || '/'
    ,   headers  = setup.headers  || {}
    ,   body     = setup.body     || ''
    ,   encoding = setup.encoding || "utf8"
    ,   ready    = setup.ready
    ,   finished = setup.finished
    ,   good     = setup.good
    ,   fail     = setup.fail;

    headers['host']           = host;
    headers['content-length'] = (body || '').length;

    var data    = ''
    ,   request = http.createClient( port, host )
        .request( type, path, headers );

    if (body) request.write( body, encoding );

    // request.addListener( "data", function(chunk) { /*body += chunk;*/ inform(chunk); } );
    request.addListener( 'response', function(response) {
        var ctype    = response.headers['content-type'] || 'text'
        ,   encoding = ctype.slice( 0, 4 ) === "text" ? "utf8" : "binary"
        ,   fetch    = config.sidekick.fetch;

        inform({
            sidekicked : fetch.host + ':' + fetch.port,
            code       : response.statusCode,
            ctype      : ctype,
            type       : type,
            x          : headers['x-requested-with'],
            uri        : path
        });

        ready && ready(response);

        if (response.statusCode != 200)
            fail && fail( '', response, encoding );

        response.setEncoding(encoding);
        response.addListener( "data", function(chunk) {

            data += chunk;

            if (response.statusCode == 200)
                good && good( chunk, response, encoding );
            else fail && fail( chunk, response, encoding );
        } );

        response.addListener( "end", function() {
            finished && finished( data, response, encoding );
            fetching--;
            if (fetchque.length > 0) exports.fetch(fetchque.shift());
        } );
    } );

    request.end();
};

var earliest = exports.earliest = function() { return+new Date };

exports.vigilant = function( text, unique ) {
    return 'window["' + unique + '"] = "' + text + '";'
};

