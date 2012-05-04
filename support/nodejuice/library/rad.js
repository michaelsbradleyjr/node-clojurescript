var methods = 'get,post,delete,put,head'.split(',');

var rad = exports.rad = function( req, res ) {
    var therad = function( rxurl, text ) {
        if (therad.ran) return;

        if (rxurl.test(req.url)) {
            if (typeof text === 'string') {
                therad.ran = true;
                return res.attack( text, 200 ) || true;
            }
            else if (typeof text === 'object') {
                therad.ran = true;
                return res.impress( text.file, text ) || true;
            }
            else if (typeof text === 'function') {
                therad.ran = true;
                return text( req, res ) || true;
            }
        }

        return false;
    };

    therad.request  = req;
    therad.response = res;

    therad.reply = function(str) {
        return res.attack( str || '', 200 ) || true;
    };

    methods.forEach(function(method) {
        therad[method] = function( rxurl, text ) {
            req.method.toLowerCase() === method && therad( rxurl, text )
        };
    });

    return therad;
};
