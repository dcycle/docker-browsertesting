// See https://github.com/graphcool/chromeless/blob/master/examples/mocha-chai-test-example.js
const { Chromeless } = require('chromeless')
const { expect } = require('chai')

// make sure you do npm i chai
// to run this example just run
// mocha path/to/this/file

describe('When searching on google', function () {
  it('shows results', async function () {
    this.timeout(10000); //we need to increase the timeout or else mocha will exit with an error
    const chromeless = new Chromeless()

    await chromeless.goto('https://google.com')
      .wait('input[name="q"]')
      .type('chromeless github', 'input[name="q"]')
      .press(13) // press enter
      .wait('#resultStats')
      .screenshot()

    const result = await chromeless.exists('a[href*="graphcool/chromeless"]')

    expect(result).to.be.true
    await chromeless.end()
  })
})

describe('When clicking on the image of the demo playground', function () {
  it('should redirect to the demo', async function () {
    this.timeout(10000); //we need to increase the timeout or else mocha will exit with an error
    const chromeless = new Chromeless()
    await chromeless.goto('https://github.com/graphcool/chromeless')
      .wait('a[href="https://chromeless.netlify.com/"]')
      .click('a[href="https://chromeless.netlify.com/"]')
      .wait('#root')


    const url = await chromeless.evaluate(url => window.location.href)


    expect(url).to.match(/^https\:\/\/chromeless\.netlify\.com/)
    await chromeless.end()
  })
})

// See https://github.com/graphcool/chromeless/tree/master/examples
//
// async function run() {
//   const chromeless = new Chromeless()
//
//   const screenshot = await chromeless
//     .goto('https://www.google.com')
//     .type('javascript', 'input[name="q"]')
//     .press(13)
//     .wait('#resultStats')
//     .screenshot()
//
//   testsManager.assert(document.title.length);
//
//   console.log(screenshot) // prints local file path or S3 url
//
//   await chromeless.end()
// }
//
// run().catch(console.error.bind(console))
//
//
//
// casper.test.begin('Test Google.com', 2, function(test) {
//   casper.start('http://google.com', function() {
//     this.fill('form[action="/search"]', {
//       'q': 'javascript'
//     }, true);
//   });
//
//   casper.then(function() {
//     test.assertTitleMatch(/^.*javascript.*$/, 'Google search results page doesnt have expected title');
//     test.assertTitleMatch(/^.*Google.*$/, 'Google search results page doesnt have expected title');
//   });
//
//   casper.run(function() {
//     test.done();
//   });
// });
