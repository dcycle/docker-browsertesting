# See
# https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai
#
#
FROM node

RUN mkdir -p /app/code

RUN cd /app && npm i --save-dev karma karma-chrome-launcher karma-mocha karma-chai
RUN cd /app && npm i --save-dev mocha chai

WORKDIR /app

RUN node --version
RUN ./node_modules/karma/bin/karma --version

# Install Google Chrome
# https://hackernoon.com/running-karma-tests-with-headless-chrome-inside-docker-ae4aceb06ed3
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -y google-chrome-stable

RUN npm karma-ng-scenario

# Cannot run ./node_modules/karma/bin/karma init because of
# https://github.com/karma-runner/karma/issues/1724.
ADD docker-resources/karma.conf.js /app/karma.conf.js
ADD docker-resources/test.js /test/test.js
RUN ln -s /app/node_modules/karma/bin/karma /bin/karma

ENTRYPOINT [ "karma", "start" ]
