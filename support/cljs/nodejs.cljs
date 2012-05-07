; Projects compiled with :target :nodejs can 'require' this namespace
; to get the nodejs globals loaded into cljs.nodejs and get
; ClojureScript's 'print' set up correctly.
(ns cljs.nodejs)

; http://nodejs.org/api/globals.html
; Define namespaced references to Node's externed globals:
(def global (js* "global"))
(def process (js* "process"))
(def console (js* "console"))
(def buffer (js* "Buffer"))
(def require (js* "require"))
(def __filename (js* "__filename"))
(def __dirname (js* "__dirname"))
(def module (js* "module"))
(def exports (js* "exports"))
(def timeout (js* "setTimeout"))
(def clear-timeout (js* "clearTimeout"))
(def interval (js* "setInterval"))
(def clear-interval (js* "clearInterval"))
(def next-tick (.-nextTick process))

; Have ClojureScript print using Node's process.stdout.write function
(set! cljs.core/string-print (.bind (.-write (.-stdout process)) (.-stdout process)))

; cljs.core/string-print does not append a newline. To print strings
; with a newline automatically appended use cljs.core/println
