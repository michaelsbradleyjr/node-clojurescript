(ns ^{:doc "Core clojure-script library."}
  clojurescript.core
  (:require [cljs.nodejs :as nodejs]
            [clojurescript.helpers :as helpers]))

(defn ^:export build
  []
  (println "Hello from core.js"))
