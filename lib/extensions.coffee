if require.extensions
  require.extensions['.cljs'] = (module, filename) ->
    content = build filename
    module._compile content, filename
