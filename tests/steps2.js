const {When, Given, Then} = require('@cucumber/cucumber');
const {expect}=require('@playwright/test');
const {playwright} = require('@playwright/test');
const {chromium} = require('playwright');
const {POManager} = require('../pageobjects/POManager');

Given('login to Ecommerce application with {string} and {string}',{timeout:100*1000}, async function (username, password) {
   // const browser=await chromium.launch({headless:false});
   // const context=await browser.newContext();
   // const page=await context.newPage();
   // this.poManager = new POManager(page);
    //js file- Login js, DashboardPage
     const products = this.page.locator(".card-body");
     const loginPage = this.poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(username,password); 
            
         });

When('add {string} to cart', {timeout: 60*1000}, async function (productName) {
   this.dashboardPage = this.poManager.getDashboardPage();
     await this.dashboardPage.searchProductAddCart(productName);
     await this.dashboardPage.navigateToCart();
         });
Then('verify {string} is displayed in cart', {timeout: 20*1000}, async function (productName) {
    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
         });
When('enter valid details and place the order', {timeout: 60*1000}, async function () {
   const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(this.orderId);
         });
Then('verify order present in orderhistory', {timeout: 60*1000}, async function () {
       await this.dashboardPage.navigateToOrders();
   const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(this.orderId);
   expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
         });        