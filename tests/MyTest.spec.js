import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    //   await page.getByRole('textbox', { name: 'email@example.com' }).click({
    //     modifiers: ['ControlOrMeta']
    //   });
    await page.getByRole('textbox', { name: 'email@example.com' }).fill('B910111@gmail.com');
    await page.getByRole('textbox', { name: 'enter your passsword' }).click();
    await page.getByRole('textbox', { name: 'enter your passsword' }).fill('aB9101112@');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: ' Add To Cart' }).first().click();
    await page.getByRole('button', { name: '   Cart' }).click();
    await page.getByRole('button', { name: 'Buy Now❯' }).click();
    await page.getByRole('textbox').first().click();
    await page.getByRole('textbox').first().fill('4542 9931 92942 2293');
    await page.getByRole('combobox').first().selectOption('04');
    await page.getByRole('combobox').nth(1).selectOption('17');
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('123');
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('test');
    await page.getByRole('button', { name: 'Apply Coupon' }).click();
    //await page.getByText('Place Order').click();
    await page.getByRole('textbox', { name: 'Select Country' }).click();
    await page.getByRole('textbox', { name: 'Select Country' }).pressSequentially('India');
    await page.getByRole('button', { name: ' India' }).click();
    await page.getByText('Place Order').click();
    await page.getByRole('heading', { name: 'Thankyou for the order.' }).click();
    const orderid = await page.locator("label.ng-star-inserted").textContent();
    //await page.locator('[routerlink*="myorders"]').waitFor();
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
