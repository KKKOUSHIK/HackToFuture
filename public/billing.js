window.addEventListener("load", () => {
    // sessionStorage.setItem("products",Array([]))
    // BillForm.addEventListener("click",()=>{
        //     const productID = document.getElementById('prod').value;
        //     const quantity = document.getElementById('quantity').value;
        //     console.log(productID,quantity);
        //     var products = sessionStorage.getItem("products");
        //     products.append({productID,quantity})
        //     sessionStorage.setItem("products",products);
        //   })
        
        const submitter = document.querySelector('#makepdf');
        submitter.addEventListener("click",()=>{
            const data ={
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
                    "_id": "644863a959cb9efd29182948",
                    "productID": {
                      "_id": "64477352c700bb82014dc543",
                      "productId": "S4",
                      "productName": "Pencil",
                      "productCategory": "Stationary",
                      "__v": 0,
                      "createdAt": "2023-04-25T06:29:38.885Z",
                      "updatedAt": "2023-04-25T06:29:38.885Z",
                      "price": 20
                    },
                    "quantity": 3
                  },
                  {
                    "_id": "644863a959cb9efd29182949",
                    "productID": {
                      "_id": "64477352c700bb82014dc544",
                      "productId": "H1",
                      "productName": "Sanitizer",
                      "productCategory": "Hygiene",
                      "__v": 0,
                      "createdAt": "2023-04-25T06:29:38.885Z",
                      "updatedAt": "2023-04-25T06:29:38.885Z",
                      "price": 100
                    },
                    "quantity": 4
                  },
                  {
                    "_id": "644863a959cb9efd2918294a",
                    "productID": {
                      "_id": "64477352c700bb82014dc540",
                      "productId": "S1",
                      "productName": "Book",
                      "productCategory": "Stationary",
                      "__v": 0,
                      "createdAt": "2023-04-25T06:29:38.884Z",
                      "updatedAt": "2023-04-25T06:29:38.884Z",
                      "price": 50
                    },
                    "quantity": 3
                  }
                ]
              }
              const doc = new jsPDF();

              // set font style
              doc.setFontSize(25);
              doc.setFontType("bold");
              
              // add header
              doc.text("INVOICE", 80, 20);
              
              // set font style
              doc.setFontSize(12);
              doc.setFontType("normal");
              
              // add customer details
              doc.text("Customer Name: " + data.customerName, 20, 40);
              doc.text("Address: " + data.customerAddress, 20, 50);
              doc.text("Phone: " + data.Phone, 20, 60);
              doc.text("Invoice ID: " + data.invoiceID, 150, 40);
              doc.text("Date: " + new Date(data.Date).toLocaleDateString(), 150, 50);
              
              // set font style
              doc.setFontSize(12);
              doc.setFontType("bold");
              
              // add product list header
              doc.text("Product List", 20, 80);
              
              // set font style
              doc.setFontSize(10);
              doc.setFontType("normal");
              
              // add product list items
              let y = 90;
              data.productList.forEach((product, index) => {
                doc.text((index + 1) + ". " + product.productID.productName, 20, y);
                doc.text(product.quantity + " x $" + product.productID.price, 100, y);
                doc.text("$" + (product.quantity * product.productID.price), 150, y);
                if (index !== data.productList.length - 1) { 
                  doc.line(20, y + 5, 190, y + 5);
                }
                y += 10;
              });
              
              // set font style
              doc.setFontSize(12);
              doc.setFontType("bold");
              
              // add total
              doc.text("Total: $" + getTotal(data.productList), 150, y + 10);
              
              // save the document
              doc.save("invoice.pdf");
              
              // helper function to calculate the total amount
              function getTotal(productList) {
                let total = 0;
                productList.forEach((product) => {
                  total += (product.quantity * product.productID.price);
                });
                return total;
              }
            })                      
})