#!/bin/bash
echo -e '[info] Starting chrome in the background.'
# https://unix.stackexchange.com/questions/103731
/scripts/start-chrome.sh > output.log 2>&1 &
echo -e '[info] Running all tests with mocha in /app/test/*.js'
/app/node_modules/mocha/bin/mocha test/*.js
