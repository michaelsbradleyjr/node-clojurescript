# Extend a source object with the properties of another object (shallow copy).
ClojureScript.extend = (object, properties) ->
  for key, val of properties
    object[key] = val
  object
