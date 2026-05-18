const { test, expect } = require('@playwright/test');

test("My second script", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.locator("[href*='documents-request']").click(),
        ]
    );
    //await newPage.waitForLoadState();
    const tt = await newPage.locator(".red").textContent();
    console.log(tt);
    console.log('\n');
    const arrayA = tt.split("@");
    const justName = arrayA[1].split(" ");
    console.log(justName[0]);
    await newPage.pause();
}
);