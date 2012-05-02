exports.wsgi = {
    host : null,
    port : 8080,
    root : 'index.htm',
    url  : [
        [/^\/myapp.*/, '/myapp.js'],
        [/^\/.*?\/?/ , '/static/']
    ]
};

exports.seeker = {
    host   : null,
    port   : 8002,
    wait   : 1200,
    ignore : [
        /git$/,
        /svn$/,
        /cvs$/,
        /swp$/
    ]
};
