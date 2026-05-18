const {test,expect,request}= require('@playwright/test');
let webContext;



test.beforeAll(async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    const email = page.getByPlaceholder('you@email.com');
    await email.click();
    await email.fill('test123456@gmail.com');
    const password = page.getByLabel('Password');
    await password.click();
    await password.fill('Test123456@');
    const signin = page.locator('#login-btn');
    await signin.click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
    await context.storageState({ path: 'storage.json' });
    webContext=await browser.newContext({storageState:'storage.json'});

});


test('test', async () => {

const page = await webContext.newPage();
await page.goto('https://eventhub.rahulshettyacademy.com/');
const product = page.locator("#nav-bookings").highlight();
await page.pause();

});