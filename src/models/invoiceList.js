const mongoose = require("mongoose");
const invoices = mongoose.Schema(
  {
    invoiceID: {
      unique: true,
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerAddress: {
      type: String,
      require: true,
    },
    Phone: {
      type: Number,
      require: true,
    },
    Date: {
      type: Date,
      require: true,
    },
    productList: [
      {
        productID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
        },
        quantity: {
            type:Number,
            require:true,
        },
      },
    ],
  },
  {
    timestamps: true,
    strictPopulate: false,
  }
);

const Invoices = mongoose.model("invoices", invoices);

module.exports = Invoices;
