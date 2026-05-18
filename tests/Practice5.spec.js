const { test, expect, request } = require('@playwright/test');
const API_Payload = { "userEmail": "test123456@gmail.com", "userPassword": "Test123456@" }
const orderpayload = { "orders": [{ "country": "India", "productOrderedId": "6960eac0c941646b7a8b3e68" }] }
let token;
let orderid;
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {
            data: API_Payload,

        }

    );
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log('token detected: ' + token);
    const responseorder = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order', {

        data: orderpayload,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });
    const result1 = await responseorder.json();
    //expect(responseorder.ok()).toBeTruthy();
    console.log('order Resposne : ' + result1 + '\n');
    orderid = result1.orders[0];
    console.log('order is created as precondition: ' + orderid);


});
test('API Login Test', async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);
    await page.goto('https://rahulshettyacademy.com/client/');
    //const orderid = await page.locator("label.ng-star-inserted").textContent();
    //await page.locator('[routerlink*="myorders"]').waitFor();
    await page.screenshot({ path: 'screenshot.png' });//will print the entire page screenshot
    await page.locator().screenshort({path:'locator.png'});//will partial screenshot of the locator
    await page.locator('[routerlink*="myorders"]').first().click();
    await page.locator("tbody").waitFor();
    const row = await page.locator("tbody tr");

    for (let i = 0; i < await row.count(); ++i) {
        const roworderId = await row.nth(i).locator("th").textContent();
        if (orderid.includes(roworderId)) {
            await row.nth(i).locator("button").first().click();
            break;
        }

    }

    const OrderidInsummary = await page.locator(".col-text.-main").textContent();
    expect(orderid.includes(OrderidInsummary)).toBeTruthy();
    await page.pause();


});

