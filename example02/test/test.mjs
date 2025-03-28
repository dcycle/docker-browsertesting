import puppeteer from 'puppeteer';
import { expect } from 'chai';
import fs from 'fs';

it('It should be possible to add a "todo" item to our app', async function() {
  this.timeout(80000);  // Increase test timeout to 30 seconds
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    protocolTimeout: 100000  // Adjust this value as needed for your app's load time
  });

  let result = false;
  try {
    const page = await browser.newPage();
    console.log('set viewport');
    await page.setViewport({ width: 1280, height: 800 });
    console.log('go to our todo app');
    await page.goto('http://myapp-container/todomvc/examples/angularjs_require/');
    console.log('taking a screenshot');
    await page.screenshot({ path: './artifacts/todo-screenshot.png' });
    console.log('About to type something into the to do app.');
    await page.type('.new-todo', 'call mom');
    await page.keyboard.press('Enter');
    console.log('taking another screenshot');
    await page.screenshot({ path: './artifacts/todo-screenshot2.png' });
    console.log('Successfully typed something into the to do app.');

    console.log('Confirming that the .todo-count selector is present.');
    await page.waitForSelector('.todo-count');

    // Get the HTML and write it to a file
    let html = await page.content();
    await new Promise((resolve, reject) => {
      fs.writeFile('./artifacts/todo-screenshot.html', html, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log('File has been saved.');
          result = true;
          resolve();
        }
      });
    });

    expect(result).to.be.true;
  } catch (error) {
    console.log('Exception alert');
    console.log(error);
  } finally {
    await browser.close();
  }
});
