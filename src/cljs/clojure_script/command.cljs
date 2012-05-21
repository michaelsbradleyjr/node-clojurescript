(ns ^{:doc "Command-line interface provider for clojure-script."}
  clojure-script.command
  (:require [cljs.nodejs :as nodejs]
            [clojure-script.helpers :as helpers]))

;; (defn ^:export run
;;   []
;;   )

(defn ^:export run
  []
  (println "Hello from command.js"))
