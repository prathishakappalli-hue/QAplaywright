Feature:Ecommerce validation
@Regression
Scenario:Placing the order
Given login to Ecommerce application with "anshika@gmail.com" and "Iamking@000"
When add "ZARA COAT 3" to cart
Then verify "ZARA COAT 3" is displayed in cart
When enter valid details and place the order
Then verify order present in orderhistory