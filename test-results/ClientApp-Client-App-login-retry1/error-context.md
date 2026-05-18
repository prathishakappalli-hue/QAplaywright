# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientApp.spec.js >> Client App login
- Location: tests\ClientApp.spec.js:6:2

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div li').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
```

# Test source

```ts
  1   |  const {test, expect} = require('@playwright/test');
  2   | 
  3   | 
  4   | 
  5   | 
  6   |  test('Client App login', async ({page})=>
  7   |  {
  8   |     //js file- Login js, DashboardPage
  9   |      const email = "anshika@gmail.com";
  10  |      const productName = 'Zara Coat 4';
  11  |      const products = page.locator(".card-body");
  12  |      await page.goto("https://rahulshettyacademy.com/client");
  13  |      await page.locator("#userEmail").fill(email);
  14  |      await page.locator("#userPassword").type("Iamking@000");
  15  |      await page.locator("[value='Login']").click();
  16  |      await page.waitForLoadState('networkidle');
  17  |     const titles= await page.locator(".card-body b").allTextContents();
  18  |     console.log(titles);
  19  |     const count = await products.count();
  20  |     for(let i =0; i < count; ++i)
  21  |     {
  22  |     if(await products.nth(i).locator("b").textContent() === productName)
  23  |     {
  24  |         //add to cart
  25  |         await products.nth(i).locator("text= Add To Cart").click();
  26  |         break;
  27  |      }
  28  |     }
  29  |    
  30  |     await page.locator("[routerlink*='cart']").click();
  31  |     //await page.pause();
  32  |     
> 33  |     await page.locator("div li").first().waitFor();
      |                                          ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  34  |     const bool =await page.locator("h3:has-text('Zara Coat 4')").isVisible();
  35  |     expect(bool).toBeTruthy();
  36  |     await page.locator("text=Checkout").click();
  37  |     await page.locator("[placeholder*='Country']").type("ind",{delay:100});
  38  |     const dropdown = page.locator(".ta-results");
  39  |     await dropdown.waitFor();
  40  |     optionsCount = await dropdown.locator("button").count();
  41  |     for(let i =0;i< optionsCount; ++i)
  42  |     {
  43  |         text =  await dropdown.locator("button").nth(i).textContent();
  44  |         if(text === " India")
  45  |         {
  46  |            await dropdown.locator("button").nth(i).click();
  47  |            break;
  48  |         }
  49  |     }
  50  |    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  51  |    await page.locator(".action__submit").click();
  52  |    
  53  |    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  54  |   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  55  |   console.log(orderId);
  56  |   await page.locator("button[routerlink*='myorders']").click();
  57  |   await page.locator("tbody").waitFor();
  58  |  const rows = await page.locator("tbody tr");
  59  | 
  60  | 
  61  |  for(let i =0; i<await rows.count(); ++i)
  62  |  {
  63  |     const rowOrderId =await rows.nth(i).locator("th").textContent();
  64  |     if (orderId.includes(rowOrderId))
  65  |     {
  66  |         await rows.nth(i).locator("button").first().click();
  67  |         break;
  68  |     }
  69  |  }
  70  |  const orderIdDetails =await page.locator(".col-text").textContent();
  71  |  expect(orderId.includes(orderIdDetails)).toBeTruthy();
  72  | 
  73  | 
  74  | 
  75  | 
  76  | 
  77  | 
  78  | 
  79  | 
  80  | 
  81  | 
  82  | 
  83  | 
  84  | 
  85  | 
  86  |   
  87  | 
  88  | 
  89  |     
  90  | 
  91  | 
  92  |     //Zara Coat 4
  93  | 
  94  | 
  95  | 
  96  | 
  97  | 
  98  |     
  99  | 
  100 | 
  101 | 
  102 | 
  103 | 
  104 | 
  105 | 
  106 | 
  107 | 
  108 |  });
  109 |  
  110 | 
  111 |  
  112 | 
  113 | 
  114 | 
  115 |  
  116 | 
  117 | 
```