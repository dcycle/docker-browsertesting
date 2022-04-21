#!/bin/sh
#
# Build the Docker image
#
set -e

# We need to install a bunch of dependencies to avoid errors when
# Chromium is run. On ARM we need to install Chromium first, _then_
# puppeteer etc.
# https://github.com/puppeteer/puppeteer/issues/7740#issuecomment-970490323
mkdir -p /app/code
cd /app
apk add --no-cache chromium

npm install puppeteer
npm install mocha chai
mkdir /artifacts
apk add --no-cache \
  libstdc++6 \
  ca-certificates \
  xdg-utils \
  wget \
  && echo "Done adding packages"
