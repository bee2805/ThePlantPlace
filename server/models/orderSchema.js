const mongoose = require('mongoose');

const orderSchema = mongoose.Schema ({
    date: { type: Date, default: Date.now },
    clientName: { type: String, required: true },
    quantity: {type: Number, required: true },
    price: {type: Number, required: true}
}); //END OF ORDERS SCHEMA

module.exports = mongoose.model('Orders', orderSchema);