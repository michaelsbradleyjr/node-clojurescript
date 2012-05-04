/* 
    This is config for apache and other web servers.
    It assumse you are running your server on port 80 !!!
    So change the port if it's not on port 80.

    Put this file in your application directory:

        cp ./library/nodejuice.js /my/app-dir/.

    Run from command line:

        ./nodejuice /path/to/application sidekick

    Next you need to point your browser to the sidekick server:

        http://localhost:8010/

    Once loaded from that url your browser will update instatnly on file change.
*/
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
    wait    : 1200,  // time in milliseconds before a new connection.
                     // setting too low will make crazziness.
    browser : {},
    add     : true,  // allow new file to push updates.
    remove  : true,  // allow file delete to push updates.
    touch   : false, // allow file touch to push updates.
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

