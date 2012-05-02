
exports.sidekick = {
    port  : 8010, // access your server from this port.
    fetch : {     // point to your web server.
        host : 'localhost',
        port : 8080
    }
};

exports.seeker = {
    host   : null,  // Leave 'null' to listen on all hosts.
    port   : 8002,  // port :-/
    delay  : 180,   // time in ms before page starts to reload.
                    // setting too low will cause file read errors in Apache
    wait   : 1200,  // time in milliseconds before a new connection.
                    // setting too low will make crazziness.
    touch  : false, // allow file touch to push updates.
    ignore : [      // path or file name to ignore.
        /\/\./,
        /git$/,
        /svn$/,
        /cvs$/,
        /swp$/,
        /~$/
    ]
};

