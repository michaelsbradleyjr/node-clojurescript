var sys      = require('sys')
,   http     = require('http')
,   argv     = process.ARGV || process.argv
,   appdir   = argv[2]
,   njdir    = argv[3]
,   njconfig = argv[4]
,   devmode  = argv[5]
,   utility  = require(njdir + '/library/utility')
,   config   = utility.ignite()
,   rxml     = /<[^>]*>/g
,   report   = function(msg) { utility.inform(msg) };

process
.addListener( "unhandledException", report )
.addListener( "uncaughtException", report );

if (!devmode) process.exit();

http.createServer(function (req, res) {
    var error    = false
    ,   body     = ''
    ,   host     = ((req.headers||{}).host||'').split(':')[0] || 'localhost'
    ,   method   = req.method || 'GET'
    ,   encoding = (req.headers['content-type'] || 'text')
                   .slice( 0, 4 ) === "text" ? "utf8" : "binary";

    req.addListener( "data", function(chunk) { body += chunk } );
    req.addListener( "end", function() {
        req.headers['content-length'] = body.length;

        utility.fetch({
            port     : config.sidekick.fetch.port,
            host     : config.sidekick.fetch.host,
            type     : body ? 'POST' : method,
            path     : req.url,
            headers  : req.headers,
            body     : body,
            encoding : encoding,
            fail     : function( chunk, response, encoding ) { error = true },
            finished : function( data, response, encoding ) {
                if (error) return utility.impress(
                    njdir + '/provision/sidekick.htm', {
                        url      : req.url,
                        code     : response.statusCode,
                        response : data.replace( rxml, '' ),
                        headers  : sys.inspect(response.headers)
                    }, function( type, data ) {
                        data = utility.amuse( data, host );
                        response.headers['content-length'] = data.length;
                        res.writeHead( response.statusCode, response.headers);
                        if (+response.statusCode != 304)
                            res.write( data, encoding );
                        res.end();
                    } )

                if (
                    encoding != 'binary' &&
                    !req.headers['x-requested-with'] && (
                        response.headers['content-type'] || ''
                    ).indexOf('html') !== -1
                ) data = utility.amuse( data, host );

                response.headers['content-length'] = data.length;
                res.writeHead( response.statusCode, response.headers );
                if (+response.statusCode != 304)
                    res.write( data, encoding );
                res.end();
        } });
    } );

}).listen( config.sidekick.port, config.sidekick.host );

sys.puts("\nSidekick Server("+process.pid+")");
utility.inform(config.sidekick);
