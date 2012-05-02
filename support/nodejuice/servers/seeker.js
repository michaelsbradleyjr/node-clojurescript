var sys        = require('sys')
,   http       = require('http')
,   fs         = require('fs')
,   argv       = process.ARGV || process.argv
,   appdir     = argv[2]
,   njdir      = argv[3]
,   njconfig   = argv[4]
,   devmode    = argv[5]
,   utility    = require(njdir + '/library/utility')
,   config     = utility.ignite()
,   clients    = []
,   seeking    = {}
,   seeker     = false
,   quotescape = /"/g
,   antecedent = utility.earliest()
,   seekerinit = utility.earliest()
,   lastscroll = {}
,   cmdspliter = /cmd=|\&/;

process.addListener( "unhandledException", function(msg) { utility.inform(msg) } );

if (!devmode) process.exit();

setTimeout( function() { seek() }, 1 );

http.createServer(function ( req, res ) {
    var unique  = req.url.split('unique=')[1]
    ,   command = req.url.split(cmdspliter)[1];

    if (typeof command !== 'undefined') {
        var cmds = command.split('_');

        switch (cmds[0]) {
            case 'scroll' :
                lastscroll[cmds[2]||''] = cmds[1];
                break;
            /*
            case 'autonav' :
                lastscroll[cmds[2]||''] = cmds[1];
                break;
            */
        }

        res.writeHead( 200, {"Content-Type" : "application/javascript"} );
        res.write(utility.vigilant(
            command, unique
        ));
        res.end();
        while (clients.length > 0) clients.shift().vow(command);
        return;
    }

    // Deliver Client JS
    if (typeof unique === 'undefined') {

        if (seeker) return seeker( req, res );

        utility.noble( njdir + '/library/seeker.js',
        function( type, js, encoding ) {
            if (type == "text/html") type = type + "; charset=\"UTF-8\"";
            seeker = function( request, response ) {
                var headers  = { "Content-Type" : type }
                ,   headhost = ((request.headers||{}).host||'').split(':')[0]
                               || 'localhost'
                ,   host     = headhost + ':' + config.seeker.port
                ,   jsseek   = '';

                jsseek = utility.supplant( js, {
                    host    : host,
                    wait    : config.seeker.wait,
                    speed   : config.seeker.browser.scroll.speed,
                    scroll  : config.seeker.browser.scroll.sync,
                    autonav : config.seeker.browser.navigate,
                    lkpp    : JSON.stringify(lastscroll).replace( quotescape, '\\"'),
                    lkp     : config.seeker.browser.scroll.lkp
                } );

                if (type.indexOf('text') != -1)
                    headers["Content-Length"] = Buffer.byteLength(jsseek);
                else
                    headers["Content-Length"] = jsseek.length;

                headers["Cache-Control"]  = 'no-cache, no-store, must-revalidate';
                headers["Expires"]        = 'Thu, 01 Dec 1994 16:00:00 GMT';

                response.writeHead( 200, headers );
                response.write( jsseek, "utf8" );
                response.end();

                antup();
            };
            seeker( req, res );
        }, function() {
            utility.inform({
                fail: 'unabled to load seeker.min.js',
                file: njdir + '/library/seeker.min.js'
            });
        } );
    }

    // Deliver Update Notice
    else clients.push({ already : utility.earliest(), vow : function(command) {
        res.writeHead( 200, {"Content-Type" : "application/javascript"} );
        res.write(utility.vigilant(
            command, unique
        ));
        res.end();
    } });

}).listen( config.seeker.port, config.seeker.host );

sys.puts("\nSeeker Server("+process.pid+")");
utility.inform(config.seeker);

function update( file, curr, prev, stat ) {
    var atime = curr &&
        JSON.stringify(curr.atime) != JSON.stringify(prev.atime);
    var mtime = curr &&
        JSON.stringify(curr.mtime) != JSON.stringify(prev.mtime);
    var ctime = curr &&
        JSON.stringify(curr.ctime) != JSON.stringify(prev.ctime);
    var lnkchg = curr &&
        JSON.stringify(curr.nlink) != JSON.stringify(prev.nlink);

    var added    = !seeking[file];
    var removed  = lnkchg;
    var touched  = atime && mtime && ctime && !added && !lnkchg;
    var accessed = atime && !mtime && !ctime;
    var bits     = !atime && !mtime && ctime;
    var saved    = !atime && mtime || ctime;

    if (utility.earliest() - seekerinit > config.seeker.wait) {
        if (added)    utility.inform({ detected_add    : file });
        if (removed)  utility.inform({ detected_remove : file });
        if (touched)  utility.inform({ detected_touch  : file });
        // if (accessed) utility.inform({ detected_read   : file });
        if (bits)     utility.inform({ detected_meta   : file });
        if (saved)    utility.inform({ detected_write  : file });
    }

    if (utility.earliest() - antecedent < config.seeker.wait) return;

    // Detect new files if enabled.
    config.seeker.add && setTimeout( function(){seek()}, config.seeker.delay );

    if (!config.seeker.touch  && touched  ||
        !config.seeker.access && accessed ||
        !config.seeker.bits   && bits     ||
        !config.seeker.add    && added    ||
        !config.seeker.remove && removed  ||
        !config.seeker.save   && saved    ||
        !config.seeker.dir    && stat.isDirectory()
    ) return;

    antup();
    utility.inform({ 'pushing update to browser' : file });

    setTimeout( function() {
        while (clients.length > 0) clients.shift().vow('update');
    }, config.seeker.delay );
}

function antup() {
    antecedent = utility.earliest();
}

function seek() {
    utility.recurse( appdir, config.seeker.ignore, function( file, stat ) {
        if (seeking[file]) return;
        update( file );
        fs.watchFile( file, function( curr, prev ) {
            update( file, curr, prev, stat )
        } );
        seeking[file] = 1;
    } );
}

setInterval( function() {
    var instant = utility.earliest();
    while (clients.length > 0 && (instant - clients[0].already > 25000))
        clients.shift().vow(0)
}, 1000 );
