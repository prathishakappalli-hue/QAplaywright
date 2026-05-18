 const {test, expect} = require('@playwright/test');
 const {POManager} = require('../pageobjects/POManager');
 //JSON->string->Json object
 const dataset=JSON.parse(JSON.stringify(require('../utils/file2.json')));

for(const data of dataset)
{
 test(`Client App login ${data.username}`, async ({page})=>
 {
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
     const username = data.username;
     const password = data.password;
     const productName = data.productName;
     const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(username,password);
 });
}
 

 



 

