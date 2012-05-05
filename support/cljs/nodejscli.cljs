; Projects compiled with :target :nodejs have this file appended.  Its
; job is to make sure cljs.nodejs is loaded.
(ns cljs.nodejscli
  (:require [cljs.nodejs :as nodejs]))
