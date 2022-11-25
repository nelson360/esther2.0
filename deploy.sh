#!/usr/bin/env sh

set - e

npm run build

cd dist

git init

git add -A

git commit -m'New deployment'

git push -f git@github.com:nelson360/esther2.0.git master:gh-pages

cd -
