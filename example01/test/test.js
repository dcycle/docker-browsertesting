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

    const result = await chromeless.exists('a[href*="graphcool/chromeless"]')

    expect(result).to.be.true
    await chromeless.end()
  })
})
