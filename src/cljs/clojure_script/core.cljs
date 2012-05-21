(ns ^{:doc "Core clojure-script library."}
  clojure-script.core
  (:require [cljs.nodejs :as nodejs]
            [clojure-script.helpers :as helpers]))

(def ^:export VERSION "0.2.0-pre")
(def ^:export CLJS-VERSION "r1236")

(def fs   (nodejs/require "fs"))
(def path (nodejs/require "path"))

(def ^:export Tempdir  (nodejs/require "temporary/lib/dir"))
(def ^:export Tempfile (nodejs/require "temporary/lib/file"))
(def ^:export tmp (Tempdir.))

(def ^:export default-java-options "")
(def ^:export java-options default-java-options)
(def ^:export default-cljsc-options {:optimizations :simple :target :nodejs :pretty-print true})
(def ^:export cljsc-options default-cljsc-options)
(def ^:export default-port 4242)

(if (.-extensions nodejs/require)
  (aset (.-extensions nodejs/require)
        ".cljs"
        (fn [module, filename]
          (let [options (js-obj "async" false "path" filename)
                callback (fn [err, js]
                           (if err
                             (throw err)
                             js))
                content (build options builder callback)]
            (._compile module content filename)))))

(defn ^:export build
  []
  (println "Hello from core.js"))
