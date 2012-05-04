if require.extensions
  require.extensions['.cljs'] = (module, filename) ->
    content = compile filename
    module._compile content, filename
else if require.registerExtension
  require.registerExtension '.cljs', (content) -> compile content
