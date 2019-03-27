const { expect } = require('chai')

it('A failing test should make the script exit with an error code', async function() {
  const puppeteer = require('puppeteer')
  const browser = await puppeteer.launch({
     headless: true,
     args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  var result = false
  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://google.com')
    await page.type('input[name="q"]', 'puppeteer')
    // await page.type(String.fromCharCode(13));
    // await page.waitForSelector('#resultStats')
    // await page.screenshot()
    // await page.waitForSelector('a[href*="graphcool/chromeless"]')
    result = true
  }
  catch (error) {
    console.log(error);
  }
  await browser.close()
  expect(result).to.be.false;
});
