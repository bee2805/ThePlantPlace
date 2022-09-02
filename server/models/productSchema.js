const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true},
    productDescription: { type: String, required: true },
    // date: { type: Date, default: Date.now },
    stock:{ type: Number, required: true },
    variations: {
        pot1:{ type: Number, required: true }, 
        pot2:{ type: Number, required: true }, 
        pot3:{ type: Number, required: true },
        pot4:{ type: Number, required: true }
    }
}); //END OF PRODUCT SCHEMA

// EXPORT MODULES
// takes 2 arguments
// 1. What is the collection called (products || orders || clients?)
// 2. the schema name
module.exports = mongoose.model('Products', productSchema);