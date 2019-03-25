const puppeteer = require('puppeteer');
const { expect } = require('chai')

it('Example of a test which always fails because an expected selector is not present', async function() {
  const browser = await puppeteer.launch({
     headless: true,
     args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.amazon.com')
    console.log('This is logged');
    await page.waitForSelector('#this-does-not-exist')
    console.log('This is never logged');
  }
  catch (error) {
    console.log(error);
  }
  await browser.close()
});
