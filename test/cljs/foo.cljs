(ns foo
  (:require [cljs.nodejs :as nodejs]))

(defn ^:export bar [n]
  (str "fooBar " n))
