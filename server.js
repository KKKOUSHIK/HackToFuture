const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Products = require("./src/models/products");
const Invoices = require("./src/models/invoiceList");
// const CreateInvoice = require('./src/controller/createInvoice')
const asyncHandler = require("express-async-handler");
const Tesseract = require("tesseract.js");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/HackToFuture",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    console.log(`Connected to Database : ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit();
  }
};
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 400 : res.statusCode;
  console.log(err.message);
  // res.render('notFound', { title: 'ERROR PAGE', message: err.message ,heading:"ERROR FOUND"})
  res.status(statusCode).json({ message: err.message, heading: "ERROR FOUND" });
};

connectDB();
// CreateInvoice()

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

console.log(__dirname);
app.use(express.static("public"));

app.get(
  "/products",
  asyncHandler(async (req, res) => {
    const result = await Products.find({}, {});
    res.status(200).json({
      data: result,
    });
  })
);
app.get(
  "/invoices",
  asyncHandler(async (req, res) => {
    const result = await Invoices.find({}, {}).populate({
      model: Products,
      path: "productList.productID",
    });

    res.status(200).json({
      data: result,
    });
  })
);

app.get(
  "/validateInvoice/:id/:name",
  asyncHandler(async (req, res) => {
    console.log(req.params.id);
    const  Output = {};
    const url =
      "https://res.cloudinary.com/acahscollege/image/upload/" +
      req.params.id +
      "/" +
      req.params.name;
    console.log(url);
    Tesseract.recognize(url, "eng", { logger: (m) => console.log(m) })
      .then(async ({ data: { text } }) => {
        
        // const invoiceList = await Invoices.find({}, {invoiceID:1,customerName:1,customerAddress:1,Total:1,Date:1}).populate({
        //   model: Products,
        //   path: "productList.productID",
        // });
        const invoiceList = [
          {
            "invoiceID": "INV789632455",
            "customerName": "Gorge",
            "customerAddress": "Up Hills Town",
            "Phone": 96962223,
            "Date": "4/25/2023",
            "Total":2000
          },
          {
            "invoiceID": "12345",
            "customerName": "Gorge",
            "customerAddress": "Up Hills Town",
            "Phone": 96962223,
            "Date": "2023-04-25T07:35:21.000Z",
            "Total":500,
          }
        ]
        function matchInvoices(text, invoices) {
          const matchedInvoices = invoices.map((invoice) => {
            const numMatchingProps = Object.keys(invoice).filter((prop) => {
              const propValue = invoice[prop];
              if (typeof propValue === "string") {
                return text.includes(propValue);
              } else if (typeof propValue === "number") {
                return text.includes(propValue.toString());
              }
              return false;
            }).length;
        
            const percentMatchingProps = numMatchingProps / Object.keys(invoice).length * 100;
        
            return {
              ...invoice,
              percentMatchingProps,
            };
          });
        
          return matchedInvoices[0];
        }
      
       const Data =  matchInvoices(text,invoiceList)
        res.status(200).json({
          data: text,
          Output:Data.percentMatchingProps,
          status: "Approved",
        });
      })
      .catch((err) => {
        res.status(500).json({
          data: err,
          status: "Disapproved",
        });
      });
  })
);

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/billing", (req, res) => {
  res.sendFile(__dirname + "/views/billing.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/aboutus.html");
});

app.use(errorHandler);

const PORT = 5000;
console.log(`http://localhost:${PORT}/`);

app.listen(PORT, console.log(`Server port ${PORT}`));
