const puppeteer = require('puppeteer');
const { expect } = require('chai');
const fs = require('fs');

it('It should be possible to add a "todo" item to our app', async function() {
  this.timeout(40000);
  const browser = await puppeteer.launch({
     headless: true,
     args: ['--no-sandbox', '--disable-setuid-sandbox'],
     // Adjust the protocolTimeout for script loading
     protocolTimeout: 40000
  })
  let result = false
  try {

  }
  catch (error) {
    console.log('Exception alert')
    await browser.close()
    console.log(error);
  }
  await browser.close()
});
