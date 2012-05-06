if require.extensions
  require.extensions['.cljs'] = (module, filename) ->
    content = ClojureScript.build filename
    module._compile content, filename
