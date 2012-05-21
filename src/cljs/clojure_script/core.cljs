(ns ^{:doc "Core clojure-script library."}
  clojure-script.core
  (:require [cljs.nodejs :as nodejs]
            [clojure-script.helpers :as helpers]))

(defn ^:export build
  []
  (println "Hello from core.js"))
