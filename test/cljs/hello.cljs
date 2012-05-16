(ns hello
  (:require [cljs.nodejs :as nodejs]))

(defn ^:export greet [n]
  (str "hello " n))
