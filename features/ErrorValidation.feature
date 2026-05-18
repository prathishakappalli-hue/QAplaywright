Feature:Ecommerce validation
@validation
Scenario:Placing the order
Given login to Ecommerce2 application with "<username>" and "<password>"
When add "ZARA COAT 3" to cart
Then Error validation
Examples:
| username          | password            |
| anshika@gmail.com | anshika@gmail.com   |
|  hello@gmail.com  | 12128759            |

