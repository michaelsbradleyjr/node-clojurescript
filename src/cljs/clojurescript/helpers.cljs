(ns ^{:doc "Helpers for clojure-script"}
  clojurescript.helpers
  (:refer-clojure :exclude
    [js->clj]))

(defn ^:export clj->js
  "Recursively transforms ClojureScript maps into Javascript objects,
   other ClojureScript colls into JavaScript arrays, and ClojureScript
   keywords into JavaScript strings.

   Credit:
   http://mmcgrana.github.com/2011/09/clojurescript-nodejs.html"
  [x]
  (cond
    (string? x) x
    (keyword? x) (name x)
    (map? x) (.-strobj (reduce (fn [m [k v]]
               (assoc m (clj->js k) (clj->js v))) {} x))
    (coll? x) (apply array (map clj->js x))
    :else x))

(defn ^:export js->clj
  "cljs.core/js->clj recursively transforms JavaScript arrays into
   ClojureScript vectors, and JavaScript objects into ClojureScript
   maps. With option ':keywordize-keys true' will convert object fields
   from strings to keywords.

   See:
   https://github.com/clojure/clojurescript/blob/master/src/cljs/cljs/core.cljs"
  [x]
  (cljs.core/js->clj x :keywordize-keys true))
