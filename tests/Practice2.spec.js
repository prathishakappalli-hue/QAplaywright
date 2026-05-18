const { test, expect } = require('@playwright/test');
const { TIMEOUT } = require('node:dns');

async function login(page) {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    const email = page.getByPlaceholder('you@email.com');
    await email.click();
    await email.fill('test123456@gmail.com');
    const password = page.getByLabel('Password');
    //await page.getByRole('textbox', { name: 'Email' }).click();
    //await page.getByRole('textbox', { name: 'Email' }).fill('test123456@gmail.com');
    await password.click();
    await password.fill('Test123456@');
    //await page.getByRole('textbox', { name: 'Password' }).click();
    //await page.getByRole('textbox', { name: 'Password' }).fill('Test123456@');
    const signin = page.locator('#login-btn');
    await signin.click();
    //await page.getByRole('button', { name: 'Sign In' }).click();
    //await expect(page.getByTestId('user-email-display')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
}

function futureDateValue() {
    const d = new Date();
    d.setDate(d.getDate() + 5);
    return d.toISOString().slice(0, 10) + 'T10:00';
}


test('test', async ({ page }) => {
    await login(page);
    await page.getByTestId('nav-events').click();
    await page.getByRole('button', { name: 'Add New Event' }).click();
    await page.getByTestId('event-title-input').click();
    const eventname = 'Test' + Date.now();
    console.log('event created ', eventname, '\n');
    await page.locator('#event-title-input').fill(eventname);
    await page.locator('#admin-event-form textarea').click();
    await page.locator('#admin-event-form textarea').fill(eventname);
    await page.getByLabel('City').click();
    await page.getByLabel('City').fill('Kochi');
    await page.getByLabel('Venue').click();
    await page.getByLabel('Venue').fill('KochiCentre');
    await page.getByLabel('Event Date & Time').click();
    await page.getByLabel('Event Date & Time').fill(await futureDateValue());
    await page.getByLabel('Price ($)').click();
    await page.getByLabel('Price ($)').fill('10');
    await page.getByLabel('Total Seats').click();
    await page.getByLabel('Total Seats').fill('500');
    await page.locator('#add-event-btn').click();
    await page.getByText('Event created!').waitFor();
    //await expect(page.getByText('Event created!')).toBeVisible();
    await page.getByTestId('nav-events').click();
    await page.locator('#nav-events').click();
    const eventcard = page.getByTestId('event-card');
    await expect(eventcard.first()).toBeVisible();
    const eventcount = await eventcard.count();
    console.log('list of event names \n');
    let var2;
    let v2;

    for (let i = 0; i < eventcount; i++) {
        const var1 = await eventcard.nth(i).locator('.leading-snug').textContent();
        console.log(var1, '\n');
        if (var1.includes(eventname)) {
            await expect(eventcard.nth(i).locator('.leading-snug')).toBeVisible({ timeout: 5000 });
            const vv2 = eventcard.nth(i);
            v2 = vv2;

            const var22 = await eventcard.nth(i).locator('.text-emerald-600').textContent();
            console.log('seat count before booking ', var22);
            var2 = var22;
            break;
        }

    }
    await v2.getByTestId('book-now-btn').click();
    await expect(page.locator('#ticket-count')).toHaveText('1');
    await page.getByLabel('Full Name').click();
    await page.getByLabel('Full Name').fill('Test');
    await page.locator('#customer-email').click();
    await page.locator('#customer-email').fill('Test123456@gmail.com');
    await page.getByPlaceholder('+91 98765 43210').click();
    await page.getByPlaceholder('+91 98765 43210').fill('1234567890');
    await page.locator('.confirm-booking-btn').click();
    //await expect(page.getByRole('heading', { name: 'Booking Confirmed! 🎉' })).toBeVisible(); 
    await expect(page.getByRole('heading', { name: 'Booking Confirmed! 🎉' })).toBeVisible({ timeout: 5000 });
    await expect(page.locator('.booking-ref').first()).toBeVisible();
    const bookingref = await page.locator('.booking-ref').textContent();
    console.log('booking reference number : ', bookingref);
    await page.locator('button[type="button"]').first().click();
    const url = await page.url();
    await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings');

    await page.getByTestId('nav-events').click();
    await expect(page.locator('#event-card').first()).toBeVisible();
    for (let i = 0; i < eventcount; i++) {
        const var1 = await eventcard.nth(i).locator('.leading-snug').textContent();
        console.log(var1, '\n');
        if (var1.includes(eventname)) {
            await expect(eventcard.nth(i).locator('.leading-snug')).toBeVisible({ timeout: 5000 });
            const var3 = await eventcard.nth(i).locator('.text-emerald-600').textContent();
            console.log('seat count after booking ', var3);
            break;
        }

    }

});