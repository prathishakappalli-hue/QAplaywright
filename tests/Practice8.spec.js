const {test,expect}=require('@playwright/test');

test('taking the screenshit and do virtual tesing',async ({page})=>
{
    await page.goto('https://rahulshettyacademy.com/client/');
    expect(await page.screenshot()).toMatchSnapshot('screenshot.png');//will print the entire page screenshot}
});