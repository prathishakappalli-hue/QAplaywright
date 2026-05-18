const { test, expect } = require('@playwright/test');

test("My second script", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //await page.getByText("Login").click();
    await page.locator("#userEmail").fill("B910111@gmail.com");
    await page.locator("#userPassword").fill("aB9101112@");
    await page.locator("#login").click();
    // await page.getByText("ADIDAS ORIGINAL").highlight();
    await page.waitForLoadState('networkidle');
    const title = await page.locator("div.card-body b").allTextContents();
    //console.log(title);
    const productName = 'ZARA COAT 3';
    await page.waitForLoadState('networkidle');
    await page.locator("div.card-body").first().waitFor();
    const product = page.locator("div.card-body");
    const count = await product.count();
    console.log(await product.count());
    for (let i = 0; i < count; ++i) {
        if (await product.nth(i).locator('b').textContent() === productName) {
            await product.nth(i).locator("text=Add to Cart").click();
            break;
        }
    }
    const cart = await page.locator("[routerlink='/dashboard/cart']").click();
    await page.locator("h3:has-text('ZARA COAT 3')").toBeVisible();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    await page.getByText("Buy Now").click();
    await page.getByPlaceholder("Select Country").fill('India');
    //await page.getByPlaceholder("Select Country").
    //const buynowButton = page.getByText("Buy Now").textContent();
    // //console.log(buynowButton);
    await page.pause();



}
);