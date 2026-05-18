const {test,expect,request} = require('@playwright/test');
//const { ok } = require('node:assert');
const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const API_URL = 'https://api.eventhub.rahulshettyacademy.com/api';
Yahoo={
  "email": "anshika@gmail.com",
  "password": "Iamking@000"
}
const Gmail={
  "email": "test123456@gmail.com",
  "password": "Test123456@"
}


async function login(page,user){
    await page.goto("https://eventhub.rahulshettyacademy.com");
    await page.locator("#email").fill(user.email);
    await page.locator("#password").fill(user.password);
    await page.locator("#login-btn").click();
    await page.waitForLoadState('networkidle');
};
test('YahooTest',async ({page})=>{
   const Response=await page.request.post(`${API_URL}/auth/login`,
    {data : Yahoo});
    
console.log('Status:', Response.status());
console.log('Body:', await Response.json());

   await expect(Response.ok()).toBeTruthy();  
   const completeResponse =await Response.json();
   const token=await completeResponse.token;
     const eventsRes = await page.request.get(`${API_URL}/events`, {
    headers: { Authorization: `Bearer ${token}` },
  });
    await expect(eventsRes.ok()).toBeTruthy();
    const eventsData = await eventsRes.json();
    const eventId = eventsData.data[0].id;
      const bookingRes = await page.request.post(`${API_URL}/bookings`, {
    headers: { Authorization: `Bearer ${token}` },
    data: {
      eventId,
      customerName:  'anshika',
      customerEmail: 'anshika@gmail.com',
      customerPhone: '9999999999',
      quantity:      1,
    },
  });
  await expect(bookingRes.ok()).toBeTruthy();
   yahooBookingId = (await bookingRes.json()).data.id;

    console.log(`Yahoo booking created via API. ID: ${yahooBookingId}`);

});

test('GmailTest',async ({page})=>{
   //await page.context().clearCookies();
    await login(page,Gmail);
    await page.goto(`${BASE_URL}/bookings/${yahooBookingId}`);
    await expect(page.getByText('Access Denied')).toBeVisible();
    await expect(page.getByText('You are not authorized to view this booking')).toBeVisible();



});