module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: ['/test/test.js'],
    reporters: ['progress'],
    port: 9876,  // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    customLaunchers: {
      'ChromeHeadlessNoSandbox': {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
        ]
      }
    },
    browsers: ['ChromeHeadlessNoSandbox'],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity
  })
}
