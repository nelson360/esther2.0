#!/usr/bin/env sh

set - e

npm run build

cd dist

echo 'maishahomecare.com' > CNAME

cd -
