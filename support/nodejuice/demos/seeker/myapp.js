var app = exports || {};

app.journey = function( request, response ) {
    response.impress( '/static/index.htm', {
        dynamic : sys.inspect(request.headers.host.split(':')[0])
    } );
};
