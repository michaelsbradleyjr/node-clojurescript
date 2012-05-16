if require.extensions
  require.extensions['.cljs'] = (module, filename) ->
    options  =
      async: false
      path:  filename
    callback = (err, js) -> if err then throw err else js

    # since async is false, the callback will be invoked synchronously
    content = ClojureScript.build options, ClojureScript.builder, callback

    module._compile content, filename
