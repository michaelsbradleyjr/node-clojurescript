(function() {


/* =-=====================================================================-= */
/* =-=====================================================================-= */
/* =-=======================        LIBRAR       =========================-= */
/* =-=====================================================================-= */
/* =-=====================================================================-= */

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length,c.length);
    }

    return 0;
}

function eraseCookie(name) {
    createCookie( name, "", -1 );
}



/**
 * NOW
 * ===
 * var timestamp = now();
 */
var now = function() {
    return+new Date

/**
 * WINFO
 * =====
 * var window_info = winfot();
 * log(window_info.height);
 */
},  winfo = function() {
    return { height    : window.innerHeight ||
                         document.documentElement.clientHeight ||
                         document.body.clientHeight,
             scrollTop : document.documentElement.scrollTop ||
                         document.body.scrollTop
           }

/**
 * OFFSET
 * =======
 * offset( search('div')[0], 'Width' );
 * offset( search('div')[0], 'Height' );
 * offset( search('div')[0], 'Top' );
 * offset( search('div')[0], 'Left' );
 */
},  offset = function( node, what ) {
    var pos  = 0
    ,   what = what || 'Top';

    while (node) {
        pos += node['offset'+what];
        node = node.offsetParent;
    }

    return pos

/**
 * $
 * =
 * var div = $('divid');
 */
},  $ = function(id) {
    return document.getElementById(id);

/**
 * addClass
 * ========
 * addClass( node, 'fluffy-clicked' );
 */
},  addClass = function( node, className ) {
    node.className = node.className + ' ' + className;

/**
 * removeClass
 * ===========
 * removeClass( node, 'fluffy-clicked' );
 */
},  removeClass = function( node, className ) {
    node.className = grep( node.className.split(/\s+/g), function(c) {
        return c != className;
    } ).join(' ');


/**
 * SEARCH
 * ======
 * var elements = search('a div span');
 */
},  search = function(elements) {
    var list = [];
    each( elements.split(/\s+/), function(el) {
        each( document.getElementsByTagName(el), function(node) {
            list.push(node);
        } );
    } );
    return list

/**
 * EACH
 * ====
 * each( [1,2,3], function(item) { console.log(item) } )
 */
},  each = function( o, f ) {
    if ( !o || !f ) return;

    if ( o[0] )
        for ( var i = 0, l = o.length; i < l; )
            f.call( o[i], o[i], i++ );
    else 
        for ( var i in o )
            o.hasOwnProperty          &&
            o.hasOwnProperty(i)       &&
            typeof o[i] != 'function' &&
            f.call( o[i], i, o[i] );

/**
 * WALK
 * ====
 * walk( search('body')[0], function(node) { node.doSomething; } )
 */
},  walk = function( n, f ) {
    f.call( n, n );
    n = n.firstChild;
    while (n) {
        walk( n, f );
        n = n.nextSibling;
    }

/**
 * MAP
 * ===
 * var list = map( [1,2,3], function(item) { return item + 1 } )
 */
},  map = function( list, fun ) {
    var fin = [];
    each( list || [], function(l) { fin.push(fun(l)) } );
    return fin

/**
 * GREP
 * ====
 * var list = grep( [1,2,3], function(item) { return item % 2 } )
 */
},  grep = function( list, fun ) {
    var fin = [];
    each( list || [], function(l) { fun(l) && fin.push(l) } );
    return fin

/**
 * BIND
 * ====
 * bind( 'keydown', search('a')[0], function(element) {
 *     console.log( element, '1st anchor' )
 * } );
 */
},  bind = function( type, el, fun ) {
    var rapfun = function(e) {
        if (!fun(e)) {
            e.cancelBubble = true;
            e.returnValue  = false;
            if (e.stopPropagation) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    };

    if ( el.addEventListener ) el.addEventListener( type, rapfun, false );
    else if ( el.attachEvent ) el.attachEvent( 'on' + type, rapfun );
    else  el[ 'on' + type ] = rapfun;

/**
 * UNBIND
 * ======
 * unbind( 'keydown', search('a')[0] );
 */
},  unbind = function( type, el ) {
    if ( el.removeEventListener ) el.removeEventListener( type, 0 );
    else if ( el.detachEvent ) el.detachEvent( 'on' + type, 0 );
    else  el[ 'on' + type ] = null;


/**
 * HEAD
 * ====
 * head.appendChild(elm);
 */
},  head = document.getElementsByTagName('head')[0]

/**
 * URLIZE
 * ======
 * var query_string = urlize({key:'dat'});
 */
,   urlize = function( data, url ) {
    if (!data) return '';
    var params = [], key = '';
    for ( key in data ) params.push( escape(key) + '=' + escape(data[key]) );
    return (url.indexOf('?') === -1 ? '?' : '&') + params.join('&')

/**
 * ATTR
 * ====
 * var attribute = attr( node, 'attribute' );
 */
},  attr = function( node, attribute, value ) {
    if (value) node.setAttribute( attribute, value );
    else return node.getAttribute && node.getAttribute(attribute);


/**
 * CSS
 * ===
 * var obj = create('div');
 */
},  css = function( element, styles ) {
    for (var style in styles) if (styles.hasOwnProperty(style))
        element.style[style] = styles[style] + (
            '|width|height|top|left|'.indexOf(style) > 0 ? 'px' : ''
        );

/**
 * CREATE
 * ======
 * var obj = create('div');
 */
},  create = function(element) {
    return document.createElement(element);


/**
 * BEGET
 * =====
 * var obj = beget(oldObject);
 */
},  beget = function(o) {
    function F() {}
    F.prototype = o;
    return new F();

/**
 * PARSE
 * =====
 * var obj = parse("{obj:'dat'}");
 */
},  parse = function(string) {
    return typeof JSON !== 'undefined' &&
        JSON.parse(string) || eval('('+string+')')

/**
 * XDR Cross Domain Request
 * ========================
 *  xdr({
 *     url  : 'url',  // required
 *     type : 'text', // [script, json, text]
 *     data : [
 *         'key' : 'value',
 *         'key' : 'value'
 *     ],
 *     success : function(response) {
 *         // your code here
 *     },
 *     fail : function() {
 *         // your code here
 *     }
 * });
 */
},  xdr = function( setup ) {
    var script  = document.createElement('script')
    ,   unique  = 'xdr3-' + now()
    ,   json_r  = /([\\"])/g
    ,   timeout = setTimeout( function() { done(1) }, setup.timeout || 30000 )
    ,   data    = setup.data    || {}
    ,   fail    = setup.fail    || function(){}
    ,   success = setup.success || function(){}
    ,   append  = function() { setTimeout( function() { 
            try { head.appendChild(script); }
            catch(err) { append(); }
         }, 1 ) }
    ,   done    = function(failed) {
            clearTimeout(timeout);
            if (!script) return;
            failed && fail.call( script, unescape(script.src) );
            script.onload = script.onreadystatechange = script.onerror = null;
            try {head.removeChild(script);} catch(error) {}
        };

    script.onload = script.onreadystatechange = function(e) {
        // nothing untill it's loaded.
        var state = this.readyState;
        if ( !(!state ||
                state == "loaded" ||
                state == "complete")) return;

        var response = unescape( window[unique] || '' );

        if ( !response ) return done(1);

        // setup type supplied
        switch(setup.type) {
            case 'json' :
                response = parse(response);
                break;
            case 'script' :
                response = eval(response);
        }

        // invoke user defined function
        success.call( script, response );

        // destroy
        window[unique] = '';
        done(0);
    };

    bind( 'error', script, function() { done(1) } );

    data['unique'] = unique;
    script.src  = setup.url + urlize( data, setup.url );

    // try to call xdr as soon as possible.
    append();

/**
 * AJAX
 * ====
 *  ajax({
 *     url  : 'url',  // required
 *     type : 'text', // [script, json, text]
 *     data : [
 *         'key' : 'value',
 *         'key' : 'value'
 *     ],
 *     success : function(response) {
 *         // your code here
 *     },
 *     fail : function() {
 *         // your code here
 *     }
 * });
 */
},  ajax = function( setup ) {
    var xhr = window.ActiveXObject ?
              new ActiveXObject("Microsoft.XMLHTTP") :
              new XMLHttpRequest()
    ,   rsc = function() {
            if (  // complete?
                xhr &&
                xhr.readyState == 4 &&
                !done
            ) {
                done = 1;

                if (ival) {
                    clearInterval(ival);
                    ival = null;
                }

                // Invoke Success Or Failure
                if (
                    (xhr.status >= 200 && xhr.status < 300) ||
                    xhr.status == 304 || xhr.status == 1223
                ) setup.success && setup.success(xhr.responseText);
                else setup.error && setup.error(xhr.responseText);

                // Done with XHR
                xhr = null;
            }
        }
    ,   done = 0
    ,   data = setup.data
    ,   url  = setup.url
    ,   ival = setInterval( rsc, 14 ); // polling method

    xhr.open( setup.type || 'get', data ? urlize( data, url ) : url );
    /*
    xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );
    */

    // Send
    xhr.send(null /*urlize( data, setup.url )*/);

/**
 *
 * SPRITE
 *
 */
}, Sprite = {
    /**
     * Adds to screen and creates DOM Object
     */
    create : function(sprite) {
        sprite.intervals = {
            animate : 0,
            move    : {}
        };

        sprite.cell.size = Math.floor(sprite.image.width / sprite.cell.count);
        sprite.node = create('div');

        sprite.opacity = sprite.opacity || 1.0;

        css( sprite.node, {
            opacity : sprite.opacity,
            position : 'absolute',
            top : sprite.top,
            left : sprite.left ,
            width : sprite.cell.size,
            height : sprite.image.height,
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(' + sprite.image.url + ')'
        } );

        Sprite.setframe( sprite, 0 );
        Sprite.append(sprite.node);

        return sprite;
    },

    ground : function(){return search('body')[0]},
    append : function(node) {
        Sprite.ground().appendChild(node);
    },

    setframe : function( sprite, cell ) {
        css( sprite.node, {
            backgroundPosition : '-' +
                (sprite.cell.size * cell + sprite.image.offset.left) +
                'px -' + sprite.image.offset.top + 'px'
        } );
    },

    /**
     * sprite.animate( [[frame, duration], []...] )
     * sprite.animate( [[], [], []] )
     * sprite.animate( [[0, .2], [1, .4], [2, .5]] )
     */
    animate : function( sprite, pattern, loop, callback, position ) {
        // Clear Any Other Animation
        if (!position) {
            position = 0;
            Sprite.stop_animate(sprite);
        }

        // if last frame, and no loop, then leave, else restart
        if (position === pattern.length) {
            if (loop === 0) return callback && callback();
            else {
                loop--;
                position = 0;
            }
        }

        // Multi format compatibility ([frame, delay]) or (frame)
        var fchck = typeof pattern[position][0] !== 'undefined'
        ,   frame = fchck ? pattern[position][0] : pattern[position]
        ,   delay = pattern[position][1] || .1;

        sprite.intervals.animate = setTimeout( function() {
            // Update Current Frame
            Sprite.setframe( sprite, frame );

            // Next Frame
            Sprite.animate( sprite, pattern, loop, callback, position + 1 );
        }, delay * 1000 );
    },


    /**
     * Move and Animate Combined!!!
     *
     * sprite.animate( [ [left, top, duration, [animate] ], []...] )
     * sprite.animate( [[], [], []] )
     * sprite.animate( [[10, 10, .2, [ANIMATEPARAMS], loopanimate ], ... )
     */
    movie : function( sprite, pattern, loop, callback, position ) {
        // Clear Any Other Animation
        if (!position) {
            position = 0;
            Sprite.stop_all(sprite);
        }

        // if last frame, and no loop, then leave, else restart
        if (position === pattern.length) {
            if (loop === 0) return callback && callback();
            else {
                loop--;
                position = 0;
            }
        }

        // Update Animator
        if (pattern[position][2]) Sprite.animate(
            sprite,
            pattern[position][2],
            pattern[position][3] || 0
        );

    // [{top:0,opacity:.5}, 500, 0, 0],
        // Update Mover
        Sprite.move(
            sprite,
            pattern[position][0],
            pattern[position][1],
            function() {
                Sprite.movie( sprite, pattern, loop, callback, position + 1 );
            }
        );
    },

    /**
     * move sprite from one place to another.
     */
    move : function( sprite, properties, duration, callback ) {
        var start_time   = now();

        each( properties, function( property, value ) {
            var current_time = start_time
            ,   end_time     = start_time + duration
            ,   start_prop   = sprite[property] || 0
            ,   distance     = value - start_prop
            ,   update       = {}
            ,   ikey         = property + value;

            Sprite.stop_move( sprite, ikey );
            sprite.intervals.move[ikey] = setInterval( function() {
                current_time = now();

                sprite[property] = (
                    end_time <= current_time
                    ? value
                    : ( distance * (current_time - start_time)
                        / duration + start_prop )
                );

                update[property] = sprite[property];
                css( sprite.node, update );

                if ( end_time <= current_time && sprite.intervals.move ) {
                    Sprite.stop_move( sprite, ikey );
                    callback && callback();
                }

            }, Math.ceil(1000 / sprite.framerate) );
        } );
    },

    /**
     * Stop movie
     */
    stop_all : function(sprite) {
        clearTimeout(sprite.intervals.animate);
        each( sprite.intervals.move, function( ikey ) {
            clearInterval(sprite.intervals.move[ikey]);
        } );
    },

    /**
     * Stop move.
     */
    stop_move : function( sprite, ikey ) {
        clearInterval(sprite.intervals.move[ikey]);
    },

    /**
     * Stop animate.
     */
    stop_animate : function(sprite) {
        clearTimeout(sprite.intervals.animate);
    },

    /**
     * 
     */
    somefunction : function(  ) {
    }
},

DomReady = {},

// Everything that has to do with properly supporting our document ready event. Brought over from the most awesome jQuery. 
userAgent = navigator.userAgent.toLowerCase(),

// Figure out what browser is being used
browser = {
    version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1],
    safari: /webkit/.test(userAgent),
    opera: /opera/.test(userAgent),
    msie: (/msie/.test(userAgent)) && (!/opera/.test( userAgent )),
    mozilla: (/mozilla/.test(userAgent)) && (!/(compatible|webkit)/.test(userAgent))
},
readyBound = false,
isReady = false,
readyList = [];

// Handle when the DOM is ready
function domReady() {
    // Make sure that the DOM is not already loaded
    if(!isReady) {
        // Remember that the DOM is ready
        isReady = true;
    
        if(readyList) {
            for(var fn = 0; fn < readyList.length; fn++) {
                readyList[fn].call(window, []);
            }
        
            readyList = [];
        }
    }
};

// From Simon Willison. A safe way to fire onload w/o screwing up everyone else.
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
};

// does the heavy work of working through the browsers idiosyncracies (let's call them that) to hook onload.
function bindReady() {
    if(readyBound) {
        return;
    }

    readyBound = true;

    // Mozilla, Opera (see further below for it) and webkit nightlies currently support this event
    if (document.addEventListener && !browser.opera) {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", domReady, false);
    }

    // If IE is used and is not in a frame
    // Continually check to see if the document is ready
    if (browser.msie && window == top) (function(){
        if (isReady) return;
        try {
            // If IE is used, use the trick by Diego Perini
            // http://javascript.nwbox.com/IEContentLoaded/
            document.documentElement.doScroll("left");
        } catch(error) {
            setTimeout(arguments.callee, 0);
            return;
        }
        // and execute any waiting functions
        domReady();
    })();

    if(browser.opera) {
        document.addEventListener( "DOMContentLoaded", function () {
            if (isReady) return;
            for (var i = 0; i < document.styleSheets.length; i++)
                if (document.styleSheets[i].disabled) {
                    setTimeout( arguments.callee, 0 );
                    return;
                }
            // and execute any waiting functions
            domReady();
        }, false);
    }

    if(browser.safari) {
        var numStyles;
        (function(){
            if (isReady) return;
            if (
                document.readyState != "loaded" &&
                document.readyState != "complete"
            ) {
                setTimeout( arguments.callee, 0 );
                return;
            }
            if (numStyles === undefined) {
                var links = document.getElementsByTagName("link");
                for (var i=0; i < links.length; i++) {
                    if(links[i].getAttribute('rel') == 'stylesheet') {
                        numStyles++;
                    }
                }
                var styles = document.getElementsByTagName("style");
                numStyles += styles.length;
            }
            if (document.styleSheets.length != numStyles) {
                setTimeout( arguments.callee, 0 );
                return;
            }
        
            // and execute any waiting functions
            domReady();
        })();
    }

    // A fallback to window.onload, that will always work
    addLoadEvent(domReady);
};

// This is the public function that people can use to hook up ready.
DomReady.ready = function(fn, args) {
    // Attach the listeners
    bindReady();

    // If the DOM is already ready
    if (isReady) {
        // Execute the function immediately
        fn.call(window, []);
    } else {
        // Add the function to the wait list
        readyList.push( function() { return fn.call(window, []); } );
    }
};
bindReady();

/* =-=====================================================================-= */
/* =-=====================================================================-= */
/* =-=======================      END LIBRAR     =========================-= */
/* =-=====================================================================-= */
/* =-=====================================================================-= */

var body       = search('body')[0]
,   starsprite
,   click_starsprite = function(){};

// Star Sprite
function init_starsprite() {
    starsprite = Sprite.create({
        image : {
            url : 'http://cdn.nodejuice.com/nodejuice-ninja.png',
            width : 194,
            height : 95,
            offset : {
                top : 0,
                left : 0
            }
        },
        cell : { count : 1 },
        left : 600,
        top : -70,
        framerate : 24
    });
    css( starsprite.node, { cursor : 'pointer', display : 'none' } );
    bind( 'mousedown', starsprite.node, function () {
        hide_starsprite();
        click_starsprite();
    } );
}

function hide_starsprite() {
    css( starsprite.node, { display : 'none' } );
}

function focus_starsprite( node, repeat, click ) {
    repeat = repeat || 3;
    click_starsprite = click || function(){};

    var cdnjoy_panel = Sprite.ground()
    ,   star_top  = offset( node, 'Top' ) -
                    offset( cdnjoy_panel, 'Top' ) - 40
    ,   star_left = offset( node, 'Left' ) -
                    offset( cdnjoy_panel, 'Left' ) - 60;

    css( starsprite.node, { display : 'block' } );
    Sprite.movie( starsprite, [
        [{opacity:.5, top: star_top -40, left: star_left -10}, 600, [
            [0, .1], [0, .1], [0, .1], [0, .2]
        ], 0],
        [{opacity:1, top: star_top, left: star_left}, 180, [
            [0, .1], [0, .05], [0, .02]
        ], 0],
        [{opacity:1}, 300, [
            [0, .3]
        ], 0]
    ], repeat, function() {
        Sprite.movie( starsprite, [
            [{opacity:0, top: star_top-50, left: star_left-50}, 600, [
                [0,.1], [0,.1], [0,.1], [0,.05]
            ], 0]
        ], 0 );
    } );
}

DomReady.ready(function(){
    init_starsprite();
    focus_starsprite( $('ninja-img'), 1, function(){} );
});


})();


