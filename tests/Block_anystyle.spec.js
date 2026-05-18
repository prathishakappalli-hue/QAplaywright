const { test,expect } = require('@playwright/test');
 
 
test.only('@QW Security test request intercept', async ({ page }) => {
 
    //login and reach orders page
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    //main code focused
    page.on('request',request=>console.log(request.url()));
    page.on('response',response=>console.log(response.url(),response.status()));
    ///////////////////////////////////////////////
    //await page.route('**/*.css',route=>route.abort());
    await page.route('**/*.{jpg,png,gif,css}',route=>route.abort());
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
 
    await page.locator("button[routerlink*='myorders']").click();


    // main indent is to intercept the request and modify the response and check the error message for unauthorized access
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' }))
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
 
 
 
 
 
 
 
 
})