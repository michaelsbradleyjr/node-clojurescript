(ns ncljsc

  (:require [cljs.closure :as closure]))

(def options {:optimizations :simple :target :nodejs})

(defn build
  [source]
  (closure/build source options))
