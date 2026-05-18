const { test, expect } = require('@playwright/test');

test("My second script", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("p.login-wrapper-footer-text").click();
    // await page.locator("#firstName").fill("B910111");
    // await page.locator("#lastName").fill("Tester");
    // await page.locator("#userEmail").fill("B910111@gmail.com");
    // await page.locator("#userMobile").fill("1234567890");
    // const EN = await page.locator("select[formcontrolname='occupation']");
    // await expect(EN).toBeEnabled();
    // await EN.selectText('Student');
    // await page.getByLabel("Female").check();
    // await page.locator("#userPassword").fill("");
    // await page.locator("#userPassword").fill("aB9101112@");
    // await page.locator("#confirmPassword").fill("");
    // await page.locator("#confirmPassword").fill("aB9101112@");
    // await page.locator("[type='checkbox']").check();
    // const login = await page.locator("#login");
    // await login.click();
    // await page.getByText("Account Created Successfully").highlight();
    // await page.waitForTimeout(30000);
    await page.getByText("Login").click();
    await page.locator("#userEmail").fill("B910111@gmail.com");
    await page.locator("#userPassword").fill("aB9101112@");
    await page.locator("#login").click();
    // await page.getByText("ADIDAS ORIGINAL").highlight();
    await page.waitForLoadState('networkidle');
    const title = await page.locator("div.card-body b").allTextContents();
    console.log(title);
    //await page.waitForTimeout(30000);
    await page.locator('select.form-control').selectText("Student")

}
);