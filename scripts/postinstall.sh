#!/bin/sh

if [ \( ! -e ./support/clojure-clojurescript \) -o \( -e ./npm-debug.log \) ]
then

cd ./support
rm -rf clojure-clojurescript
rm -rf out
rm -rf temp
mkdir -p temp
cd temp
echo "Fetching ClojureScript..."
curl -s -L https://github.com/clojure/clojurescript/tarball/ab4e25d8847ec44146bc4ea11e328da9110a8e80 -o clojure-clojurescript.tar.gz

if [ ! $? = 0 ]
then

echo ""
echo "Error: unable to download ClojureScript!"
echo ""
exit 1

else
mkdir -p unpack
tar xzf ./clojure-clojurescript.tar.gz -C ./unpack
cd unpack
mv `ls` ../../clojure-clojurescript
cd ..
cd ..
echo "Bootstrapping Clojure..."
cp ./cljs/nodejs.cljs ./clojure-clojurescript/src/cljs/cljs/nodejs.cljs
cp ./cljs/nodejs_externs.js ./clojure-clojurescript/src/cljs/cljs/nodejs_externs.js
cp ./cljs/nodejscli.cljs ./clojure-clojurescript/src/cljs/cljs/nodejscli.cljs
cd ./clojure-clojurescript/
./script/bootstrap

if [ ! $? = 0 ]
then

echo ""
echo "Error: bootstrap script failed!"
echo ""
exit 1

else
#echo "Compiling ClojureScript core..."
#./script/compile > /dev/null 2>&1
cd ..
echo "Cleaning up ClojureScript archive..."
rm -rf temp
cd ..

fi
fi
fi

if [ \( ! -e ./support/out/cljs/core.js \) -o \( ! -e ./support/out/cljs/nodejs.js \) -o \( -e ./npm-debug.log \) ]
then

mkdir -p ./support/out
echo "Compiling core.cljs and nodejs.cljs..."
node ./scripts/postinstall_build.js

if [ ! $? = 0 ]
then

echo ""
echo "Error: compiler failed!"
echo ""
exit 1

else
echo "Finished compiling"

fi
fi

echo ""
echo "clojure-script postinstall completed successfully!"
echo ""
