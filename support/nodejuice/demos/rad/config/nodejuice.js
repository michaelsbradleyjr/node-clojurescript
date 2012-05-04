
exports.wsgi = {
    host  : null, // Leave 'null' to listen on all hosts.
    port  : 8080, // port :-/
    root  : 'index.htm', // used for static content as the default.
    retry : { max: 4, wait: 120 }, // number of retries to load a file.
    url   : [ // interface between browser URL Request and Files.

        [/^\/static.*?/, '/static/'],  // server static content
        [/.*/, '/app/rad.js']          // rad() application.

    ]
};

exports.seeker = {
    host   : null, // Leave 'null' to listen on all hosts.
    port   : 8002, // port :-/
    wait   : 1200, // delay in milliseconds before a new connection.
                   // setting this too low will make crazziness.
    ignore : [ /git$/, /svn$/, /cvs$/, /swp$/, /~$/ ] // path/file to ignore.
};
