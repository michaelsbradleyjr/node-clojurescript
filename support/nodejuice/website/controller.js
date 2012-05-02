var website   = exports
,   templates = '/templates/'
,   redirit   = 0
// ,   sitemuaha = 'www.yahoo.com';
//,   sitemuaha = 'www.reddit.com';
,   sitemuaha = 'www.trustedopinion.com';

website.journey = function( request, response ) {

    if (redirit) return redir_fun(response);

    var where = response.appdir +
                templates +
                (request.url.substr(1) || 'index') + '.htm';

    response.utility.noble( where,
    function( type, html, encoding ) {
        response.impress( templates + 'body.htm', { content : html } )
    }, function() { response['404']( request, response, where ) } );
};

function redir_fun(response) {
    function muahah(timeout) { setTimeout( function() {
            if (GLOBAL['-data'+sitemuaha]) return response.attack(
                GLOBAL['-data'+sitemuaha],
                200,
                'text/html',
                {},
                GLOBAL['-encoding']
            );
            else muahah(100);
        }, +timeout || 100 );
    }

    if (GLOBAL['-loading...'])
        muahah(100);

    GLOBAL['-loading...'] = true;

    return response.utility.fetch({
        port     : 80,
        host     : sitemuaha,
        type     : 'GET',
        path     : 'http://' + sitemuaha,
        finished : function( data, res, encoding ) {
            GLOBAL['-data'+sitemuaha] = data;
            GLOBAL['-encoding'] = encoding;
            response.attack( data, 200, 'text/html', {}, encoding );
        }
    });
}
