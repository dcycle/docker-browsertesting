#!/bin/sh
#
# Build the image locally and test. Useful for development.
#
set -e

docker build -t local-browsertesting .

echo '=> Build the sample app'
(cd ./example02 && ./build-sample-app.sh)

echo '=> Test example01'
echo '=> This tests that is possible to make a request in Google. If this'
echo '=> fails, it might mean that you are using a european connection and'
echo '=> that the test is stuck on the Accept Cookies page'
echo '=> If this is the case, make sure you are using a US-based vpn or VM'
docker run --rm \
  -v "$(pwd)"/example01/test:/app/test \
  -v "$(pwd)"/artifacts:/artifacts \
  local-browsertesting test/*.mjs

echo '=> Test example02'
docker run --rm -v "$(pwd)"/example02/test:/app/test \
  -v "$(pwd)"/artifacts:/artifacts \
  --network myapp-network \
  local-browsertesting test/*.mjs

echo '=> Destroy the sample app'
(cd ./example02 && ./destroy-sample-app.sh)
