if ( exports? )
  if ( module?.exports )
    exports = module.exports = ClojureScript
  exports.ClojureScript = ClojureScript
else
  this['ClojureScript'] = ClojureScript

` // BOTTOM `
