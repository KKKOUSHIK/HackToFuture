const mongoose = require('mongoose');

const products = mongoose.Schema({
    productId:{
        unique:true,
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    productCategory:{
        type:String,
        require:true,
        default:"general"
    },
},
{
    timestamps: true,
    strictPopulate:false
});


const Products = mongoose.model('products', products)
module.exports = Products;