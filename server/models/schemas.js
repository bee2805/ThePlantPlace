const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    inStock:{
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    availStock: [
        {
            size:{
                type: String,
                required: true
            },
            price:{
                type: Number,
                required: true
            },
            qty: {
                type: Number,
                required: true
            }, 
            variations: [
                {
                    pot1:{
                        type: Number,
                        required: true
                    }, 
                    pot2:{
                        type: Number,
                        required: true
                    }, 
                    pot3:{
                        type: Number,
                        required: true
                    }
                }
            ]
        }
        // !!! ask Leo about this
        // {
        //     size: "Medium", 
        //     price: 100,
        //     qty: 20, 
        //     variations: [
        //         {
        //             pot1: 10, 
        //             pot2: 5, 
        //             pot3: 5
        //         }
        //     ]
        // },
        // {
        //     size: "Large", 
        //     price: 150,
        //     qty: 15, 
        //     variations: [
        //         {
        //             pot1: 5, 
        //             pot2: 5, 
        //             pot3: 5
        //         }
        //     ]
        // }
    ]
}); //END OF PRODUCT SCHEMA

const orderSchema = mongoose.Schema ({
    orderNumber:{
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
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

const clientSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    }, 
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}); //END OF CLIENT SCHEMA

// EXPORT MODULES
// takes 2 arguments
// 1. What is the collection called (products || orders || clients?)
// 2. the schema name
module.exports = mongoose.model('Products', productSchema);
module.exports = mongoose.model('Orders', orderSchema);
module.exports = mongoose.model('Clients', clientSchema);