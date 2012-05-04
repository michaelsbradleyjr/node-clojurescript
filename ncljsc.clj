(ns ncljsc
  (:require [cljs.closure :as closure]))

(defn build
  [source]
  (closure/-compile source (closure/make-options {:optimizations :advanced})))
