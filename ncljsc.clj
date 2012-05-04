(ns ncljsc

  (:require [cljs.closure :as closure]))

(def options {:pretty-print true :target :nodejs})

(defn build
  [source]
  (closure/build source options))
