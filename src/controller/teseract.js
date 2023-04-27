const res = [
      {
        "_id": "644782b96f1644db05e2ab82",
        "invoiceID": "INV789632455",
        "customerName": "Gorge",
        "customerAddress": "Up Hills Town",
        "Phone": 96962223,
        "Date": "2023-04-25T07:35:21.000Z",
        "__v": 0,
        "createdAt": "2023-04-25T07:35:21.468Z",
        "updatedAt": "2023-04-25T07:35:21.468Z",
        "productList": [
          {
            "_id": "64481cbc6915aa59fc473f92",
            "productID": {
              "_id": "64477352c700bb82014dc543",
              "productId": "S4",
              "productName": "Pencil",
              "productCategory": "Stationary",
              "__v": 0,
              "createdAt": "2023-04-25T06:29:38.885Z",
              "updatedAt": "2023-04-25T06:29:38.885Z"
            },
            "quantity": 3
          },
          {
            "_id": "64481cbc6915aa59fc473f93",
            "productID": {
              "_id": "64477352c700bb82014dc544",
              "productId": "H1",
              "productName": "Sanitizer",
              "productCategory": "Hygiene",
              "__v": 0,
              "createdAt": "2023-04-25T06:29:38.885Z",
              "updatedAt": "2023-04-25T06:29:38.885Z"
            },
            "quantity": 2
          },
          {
            "_id": "64481cbc6915aa59fc473f94",
            "productID": {
              "_id": "64477352c700bb82014dc540",
              "productId": "S1",
              "productName": "Book",
              "productCategory": "Stationary",
              "__v": 0,
              "createdAt": "2023-04-25T06:29:38.884Z",
              "updatedAt": "2023-04-25T06:29:38.884Z"
            },
            "quantity": 3
          }
        ]
      },
      {
        "_id": "64481ca1aa4ede2d0cb0d2ae",
        "invoiceID": "12345",
        "customerName": "Gorge",
        "customerAddress": "Up Hills Town",
        "Phone": 96962223,
        "Date": "2023-04-25T07:35:21.000Z",
        "__v": 0,
        "createdAt": "2023-04-25T07:35:21.468Z",
        "updatedAt": "2023-04-25T07:35:21.468Z",
        "productList": [
          {
            "_id": "64481cbc6915aa59fc473f95",
            "productID": {
              "_id": "64477352c700bb82014dc543",
              "productId": "S4",
              "productName": "Pencil",
              "productCategory": "Stationary",
              "__v": 0,
              "createdAt": "2023-04-25T06:29:38.885Z",
              "updatedAt": "2023-04-25T06:29:38.885Z"
            },
            "quantity": 3
          },
          {
            "_id": "64481cbc6915aa59fc473f96",
            "productID": {
              "_id": "64477352c700bb82014dc544",
              "productId": "H1",
              "productName": "Sanitizer",
              "productCategory": "Hygiene",
              "__v": 0,
              "createdAt": "2023-04-25T06:29:38.885Z",
              "updatedAt": "2023-04-25T06:29:38.885Z"
            },
            "quantity": 2
          },
          {
            "_id": "64481cbc6915aa59fc473f97",
            "productID": {
              "_id": "64477352c700bb82014dc540",
              "productId": "S1",
              "productName": "Book",
              "productCategory": "Stationary",
              "__v": 0,
              "createdAt": "2023-04-25T06:29:38.884Z",
              "updatedAt": "2023-04-25T06:29:38.884Z"
            },
            "quantity": 3
          }
        ]
      }
    ]
    
    
const text = "INVOICE\nInvoice No. 12345\r\n16 June 2025\r\nBILLED TO:\r\nImani Olowe\r\n+123-456-7890\r\n63 Ivy Road, Hawkville, GA, USA 31036\r\nItem\r\nEggshell Camisole Top\r\nCuban Collar Shirt\r\nFloral Cotton Dress\r\nThank you!\r\nPAYMENT INFORMATION\r\nBriard Bank\r\nAccount Name: Samira Hadid\r\nAccount No.: 123-456-7890\r\nPay by: 5 July 2025\r\nQuantity\r\n2\r\nUnit Price\r\n$123\r\n$127\r\n$123\r\nSubtotal\r\nTax (0%)\r\nTotal\r\nTotal\r\n$123\r\n$254\r\n$123\r\n$500\r\n$0\r\n$500\r\nSamira Hadid\r\n123 Anywhere St., Any City, ST 12345\r\n"


let start_word = "Invoice No. ";
  let start_index = text.indexOf(start_word);

  let end_word = "\r";
 let end_index = text.indexOf(end_word);


  let substring = text.substring(start_index + start_word.length, end_index);
console.log(substring);
   let words = substring.split(" ");

  console.log(words);
 //words="Invoice"+words;
 console.log(words);
 
// Sample JSON database
//let database = '{"invoices": [{"number": "123456", "amount": 100.00}, {"number": "789012", "amount": 50.00}]}';

// Invoice number string to compare
let invoiceNumber = "12345";

// Parse the database into a JavaScript object
//let databaseObject = JSON.parse(results);

// Loop through the invoices in the database and check if the invoice number matches
let matchFound = false;
for (let invoice of res) {
if (invoice.invoiceID === words[0]) {
matchFound = true;
console.log("Match found !!");
console.log(invoice);
break;
}
}

if (!matchFound) {
console.log("No match found.");
}

//let jsonFile = '{"employees": [{"name": "John", "age": 30}, {"name": "Jane", "age": 25}, {"name": "Bob", "age": 40}]}';

// String to match
text

// Parse the JSON file into a JavaScript object
let jsonObject = JSON.parse(res);

// Loop through the employees in the object and find the element
let matchFound1 = false;
for (let data of jsonObject.r) {
  if (employee.name === searchString) {
    matchFound = true;
    console.log("Match found. Employee age is " + employee.age + ".");
    break;
  }
}

if (!matchFound) {
  console.log("No match found.");
}

