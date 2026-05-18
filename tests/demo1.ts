// let message1:string="hello";
// message1="welocme to typescript";
// //console.log(message1,"\n");
// let Num:number=1;
// //console.log(Num,"\n");
// let isokay:boolean=true;
// let arr1:number[]=[1,2,3,4];
// let data:any="any value";
// data=1;
// // console.log(data,"\n");
// // console.log(isokay,"\n");
// // console.log(arr1,"\n");
// function add(a:number,b:number):number{
//     return a+b;
// }
// console.log(add(10,20));
// let obj1:{name:string,age:number}={name:"John",age:20};
// console.log(obj1.name);
// console.log(obj1.age);
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