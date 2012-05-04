(ns ncljsc
  (:require [cljs.closure :as closure]))

(def comp-options {})
(def deps-options {})
(def optm-options {:optimizations :advanced :pretty-print true})

(defn build
  [source]
  ;;(closure/optimize optm-options (closure/add-dependencies
  ;;deps-options (closure/-compile source comp-options)))
  ;;(closure/add-dependencies deps-options (closure/-compile source
  ;comp-options))
  (closure/add-dependencies {} "goog.provide('test.app');\ngoog.require('cljs.core');")
  )
  ;;(closure/-compile source comp-options)
