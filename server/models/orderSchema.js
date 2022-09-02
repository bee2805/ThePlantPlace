const mongoose = require('mongoose');

const orderSchema = mongoose.Schema ({
    orderNumber:{ type: Number, required: true },
    date: { type: Date, default: Date.now },
    orderedProduct: [
        {
            product:{
                type: String,
                required: true
            }, 
            quantity:{
                type: Number,
                required: true
            }, 
            price:{
                type: Number,
                required: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    }
}); //END OF ORDERS SCHEMA

module.exports = mongoose.model('Orders', orderSchema);