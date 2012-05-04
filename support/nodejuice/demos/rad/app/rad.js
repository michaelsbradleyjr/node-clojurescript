// TO RUN: ./nodejuice demos/rad
// 
// OPEN: http://localhost:8080/

// rad() with template.
rad ( /^\/$/, {
    file : '/static/template.htm',
    url  : '/test-url',
    text : 'click this link!'
} )


rad ( /^\/function$/, function( request, response ) {
    rad.reply('something');
} )


// rad() with text.
rad ( /^\/?test.*/, 'you made it! Press Back Button.' )


/* Picard Style */
rad.get ( /^\/get$/,  'rad.get() is the same as rad()' )
rad.post( /^\/post/, 'posted' )
rad.head( /^\/head/, 'headed' )
rad.put ( /^\/put/,  'puted' )
rad['delete']( /^\/delete/, 'deleted' )


rad.get ( /^\/get-params.*/, function( request, response ) {
    rad.reply(JSON.stringify(request.uri.params))
} )

rad ( /.*/, 'Last Resort' )
