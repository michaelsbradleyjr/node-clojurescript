
/* DON'T MODIFY THIS FILE!!!
COPY THIS FILE TO YOUR APPLICATION DIRECTORY FIRST!!! */

exports.wsgi = {
    host  : null, // Leave 'null' to listen on all hosts.
    port  : 8080, // port :-/
    root  : 'index.htm', // used for static content as the default.
    retry : { max: 4, wait: 120 }, // number of retries to load a file.
    query_string : false, // include query string from file requests.
    url   : [ // interface between browser URL Request and Files.
        // [ /^\/app$/, '/app.js' ], // run an application.
        // [/^\/.*?/, '/static/'], // serve content from /static/ dir.
        [/^\/.*?/, '/'] // server static content from root app dir.
    ]
};

exports.sidekick = {
    host  : null, // Leave 'null' to listen on all hosts.
    port  : 8010, // access your server from this port.
    fetch : {     // point to your web server.
        host : 'localhost',
        port : 8080
    }
};

exports.seeker = {
    host    : null,  // Leave 'null' to listen on all hosts.
    port    : 8002,  // port :-/
    delay   : 180,   // time in ms before page starts to reload.
                     // setting too low will cause file read errors in Apache
    wait    : 3500,  // time in milliseconds before a new connection.
                     // setting too low will make crazziness.
    browser : {
        navigate : false, // keep all browsers on the same page.
        scroll   : {
            lkp   : 'no', // scroll to last know position for each page.
            sync  : 'no', // keep multiple browser scroll positions in sync.
            speed : 400    // delay sync updates and last update in ms.
        },
    },
    add     : true,  // allow new file to push updates.
    remove  : true,  // allow file delete to push updates.
    touch   : true,  // allow file touch to push updates.
    access  : false, // allow file reads to push updates.
    bits    : true,  // allow chmod/chown to push updates.
    save    : true,  // allow file save to push updates.
    dir     : true,  // allow directory changes to push updates.
    ignore  : [      // path or file name to ignore.
        /\/\./,
        /git$/,
        /svn$/,
        /cvs$/,
        /swp$/,
        /~$/
    ]
};

