#!/bin/sh
#
# Build the image locally and test. Useful for development.
#
set -e

docker build -t local-browsertesting .

echo '=> Build the sample app'
(cd ./example02 && ./build-sample-app.sh)

echo '=> Test example02'
docker run --rm -v "$(pwd)"/example02/test:/app/test \
  -v "$(pwd)"/artifacts:/artifacts \
  --network myapp-network \
  local-browsertesting test/*.js

echo '=> Destroy the sample app'
(cd ./example02 && ./destroy-sample-app.sh)
