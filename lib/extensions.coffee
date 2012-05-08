if require.extensions
  require.extensions['.cljs'] = (module, filename) ->
    content = ClojureScript.build path: filename
    module._compile content, filename
