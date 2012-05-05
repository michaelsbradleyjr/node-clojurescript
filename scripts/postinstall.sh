#!/bin/sh

if [ \( ! -e ./support/clojure-clojurescript \) -o \( -e ./npm-debug.log \) ]
then

cd ./support
rm -rf clojure-clojurescript-7472ab9
rm -rf clojure-clojurescript
tar xzf ./archive/clojure-clojurescript-r1011-0-g7472ab9.tar.gz
mv clojure-clojurescript-7472ab9 clojure-clojurescript
cp ./script/compile.sh ./clojure-clojurescript/script/compile
cp ./cljs/nodejs.cljs ./clojure-clojurescript/src/cljs/cljs/nodejs.cljs
cp ./cljs/nodejs_externs.js ./clojure-clojurescript/src/cljs/cljs/nodejs_externs.js
cp ./cljs/nodejscli.cljs ./clojure-clojurescript/src/cljs/cljs/nodejscli.cljs
cd ./clojure-clojurescript/
./script/bootstrap
echo "Compiling..."
./script/compile > /dev/null 2>&1

fi
