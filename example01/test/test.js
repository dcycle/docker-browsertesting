const puppeteer = require('puppeteer')
const screenshot = 'amazon_nyan_cat_pullover.png'
(async () => {
  const browser = await puppeteer.launch({
     headless: true,
     args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.amazon.com')
    await page.type('#twotabsearchtextbox', 'nyan cat pullover')
    await page.click('input.nav-input')
    await page.waitForSelector('#resultsCol')
    await page.screenshot({path: 'amazon_nyan_cat_pullovers_list.png'})
    await page.click('#pagnNextString')
    await page.waitForSelector('#resultsCol')
    const pullovers = await page.$$('a.a-link-normal.a-text-normal')
    await pullovers[2].click()
    await page.waitForSelector('#ppd')
    await page.screenshot({path: screenshot})
  }
  catch (error) {
    console.log(error);
  }
  await browser.close()
  console.log('See screenshot: ' + screenshot)
})()
