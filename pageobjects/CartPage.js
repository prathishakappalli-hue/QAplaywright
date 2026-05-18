const {test, expect} = require('@playwright/test');
class CartPage
{
    
constructor(page)
{
    this.page = page;
    this.cartProducts = page.locator("h3").first();
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout");

}

async VerifyProductIsDisplayed(productName)
{
    await this.cartProducts.waitFor();
    // const bool =await this.getProductLocator(productName).isVisible();
    // expect(bool).toBeTruthy();
    // Wait for the checkout button which indicates cart page is fully loaded
     await this.checkout.waitFor({timeout: 10000}).catch(() => console.log("Checkout button not found"));
    
//     // Wait for page to stabilize
     await this.page.waitForLoadState('networkidle').catch(() => {});
    
//     // Get all text on the page
    const pageText = await this.page.textContent('body');
    console.log("Cart page content:", pageText?.substring(0, 500));
    console.log("Looking for product:", productName);
    
    const productFound = pageText.toLowerCase().includes(productName.toLowerCase());
    expect(productFound).toBeTruthy();
}

async Checkout()
{
    await this.checkout.click();
}

 getProductLocator(productName)
{
    //return this.page.getByText(new RegExp(productName, 'i'));
    // console.log(`Looking for product locator with name: ${productName}`);
    // return await this.page.locator(`.cartSection h3:has-text("${productName}")`);
    return  this.page.locator(".cartSection h3:has-text('"+productName+"')");
}

}
module.exports = {CartPage};