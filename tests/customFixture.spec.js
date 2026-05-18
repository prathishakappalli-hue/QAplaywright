 const {test, expect} = require('@playwright/test');
 const {POManager} = require('../pageobjects/POManager');
 const {customtest}=require('../utils/test-base');

 //JSON->string->Json object
 //const dataset=JSON.parse(JSON.stringify(require('../utils/file2.json')));


 customtest('Client App login with custom fixture', async ({page, testDataForOrder})=>
 {
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
     const username = testDataForOrder.username;
     const password = testDataForOrder.password;
     const productName = testDataForOrder.productName;
     const products = page.locator(".card-body").click();
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(username,password);
 });

 

 



 

