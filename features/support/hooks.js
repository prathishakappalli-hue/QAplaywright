const { After, Before ,BeforeStep,AfterStep,Status} = require('@cucumber/cucumber');
const {POManager} = require('../../pageobjects/POManager');
const {chromium} = require('playwright');
//we can add tag in hooks like below
//Before({tags: "@foo"}, function () { means it will run only for the tag @foo
// we can either write like Before({tags: "@foo and @bar"}, function () {
Before(async function () {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  this.page = await context.newPage();
  this.poManager = new POManager(this.page);

});

After(function () {
  // Assuming this.driver is a selenium webdriver
  console.log("reached at the end of the script");
  //return this.driver.quit();
});
AfterStep(async function ({result}) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  if (result.status === Status.FAILED) {
    //this.driver.takeScreenshot();
    await this.page.screenshot({path :'screenhsot2.png'});
  }
});