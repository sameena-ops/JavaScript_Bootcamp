
var xlsx= require("xlsx");
var wb = xlsx.readFile("./sample.xlsx");
var ws = wb.Sheets["Sheet1"]
var data = xlsx.utils.sheet_to_json(ws);
console.log(data);
console.log(wb.SheetNames);

console.log("Hi from javascript")



