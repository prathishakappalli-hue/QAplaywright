import { test, expect } from '@playwright/test';

test("@web test", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.locator('input[name="email"]').fill('Tster30042026@gmail.com');
    await page.locator('input[name="name"]').first().fill('Tesweer');
    await page.locator('input[type="password"]').fill('Tester30042026@gmail');
    await page.locator("#exampleCheck1").click();
    await page.locator("#exampleFormControlSelect1").selectOption("Female");
    await page.getByLabel("Employed").click();
    //await page.getByLabel("bday").pressSequentially("21-09-1997");
    await page.locator('input[name="bday"]').pressSequentially("22-09-1997");
    await page.locator("input[value='Submit']").click();
    //await page.locator();
    const we = await page.getByLabel('The Form has been submitted successfully');
    console.log(we);
    we.highlight();
    we.isVisible();
    //await page.pause();

});