// See https://github.com/GoogleChrome/puppeteer/blob/master/examples/search.js
'use strict';

const puppeteer = require('puppeteer');

const { expect } = require('chai')

const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox', '--disable-setuid-sandbox']
})

try {
  describe('When searching on google', function () {
    it('shows results', async function () {
      var result = true;
      const page = await browser.newPage()
      await page.goto('https://google.com')
      await page.type('input[name="q"]', 'Headless Chrome')
      await page.click('input[value="Google Search"]')
      await page.waitForSelector('a[href*="headless-chrome"]')
      expect(result).to.be.true
    })
  })
} catch (err) {
  console.error('Exception alert' + err)
  await browser.close()
}
