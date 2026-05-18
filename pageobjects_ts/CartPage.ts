import {test,expect, Locator,Page} from '@playwright/test';
export class CartPage
{
    cartProducts:Locator;
    productsText:Locator;
    cart:Locator;
    orders:Locator;
    checkout:Locator;
    page:Page;


constructor(page:Page)
{
    this.page = page;
    this.cartProducts = page.locator("h3").first();
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout");

}

async VerifyProductIsDisplayed(productName:string)
{
    // Wait for page to load
    await this.page.waitForLoadState('networkidle').catch(() => {});
    
    // Get all text on the page and check if product name exists
    const pageText = await this.page.textContent('body');
    const productFound = pageText.toLowerCase().includes(productName.toLowerCase());
    expect(productFound).toBeTruthy();
}

async Checkout()
{
    await this.checkout.click();
}

 getProductLocator(productName:string)
{
    return this.page.getByText(new RegExp(productName, 'i'));
}

}
module.exports = {CartPage};