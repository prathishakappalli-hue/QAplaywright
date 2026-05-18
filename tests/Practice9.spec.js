const {test,expect}=require('@playwright/test');
const exeljs = require('exceljs');


async function Excel(){
    let output={row:-1,column:-1};
const workbook = new exeljs.Workbook();
await workbook.xlsx.readFile('C:/Users/PrathishaKappalli/Downloads/download.xlsx'); 
const worksheet = workbook.getWorksheet('Sheet1');
worksheet.eachRow((row,rowNumber)=>
{
    row.eachCell((cell,colNumber)=>
{
    if(cell.value === 'Apple'){
        output.row=rowNumber;
        output.column=colNumber;
        console.log('the corresponding row is: '+ rowNumber);
        console.log('the corresponding column is: '+ colNumber);   
    };



});


});
const replace=worksheet.getCell(output.row,output.column+2);
console.log('the value of the cell is: '+ replace.value);
replace.value='100';
console.log('the value of the cell is: '+ replace.value);
await workbook.xlsx.writeFile('C:/Users/PrathishaKappalli/Downloads/download.xlsx');

};
//Exel();
test('downloading the file' ,async({page})=>{
  await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
  const downloadPromise = page.waitForEvent('download');
  await page.locator('#downloadButton').click();
  const download = await downloadPromise;
  await download.saveAs('C:/Users/PrathishaKappalli/Downloads/download.xlsx');
  await Excel();
  await page.locator('#fileinput').click();
  await page.locator('#fileinput').setInputFiles('C:/Users/PrathishaKappalli/Downloads/download.xlsx'); 
  
  





});
