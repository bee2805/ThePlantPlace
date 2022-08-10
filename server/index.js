const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
// access .env file
require('dotenv/config');
// const products = require('./products');

const app = express();

// middleware to access routes
app.use(routes);
// using body parser middleware
// wont be able to request body without this
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect(process.env.DB_CONNECTION, (err) => {
    if (err) {
        console.log('no connection')
    } else {
        console.log('Connected to Mongo DB Atlas')
    };
});

const PORT = process.env.PORT || 5000;

// middleware
// const refine = (req, res, next) => {
//     //what we want to find
//     // [] specific item
//     let value = products.inventory[3].productName;
//     res.send(value);
//     next();
// }

// using the middleware
// app.use(refine);


// get all the products
app.get('/api/products', (req, res) => {
    res.json(products);
});


// reading products
// getting one product based on the id
/// :id (specify perameters with a semicolon)
app.get('/api/products/:id', (req, res) => {
    
    const found = products.inventory.some(item => item.id === +req.params.id);

    //if found, give us the value. Else give a 400 status
    if(found){
        //getting by id
        res.json(products.inventory.filter(item => item.id === +req.params.id));
    } else {
        res.status(400).json({msg: "This product was not found"});
    }
});

// adding products
app.post('/api/addProduct/:id', (req, res) => {
    const newProduct = {
        id: +req.params.id,
        productName: req.body.productName,
        inStock: req.body.inStock,
        availStock: req.body.availStock
    }

    if(!newProduct.id || !newProduct.productName || !newProduct.inStock || !newProduct.availStock){
        return res.status(400).json({msg: "You are missing some information"})
    }

    products.inventory.push(newProduct);
    res.json(products);

});

// update products
app.put('/api/updateProduct/:id', (req, res) => {

    // check if prod exists
    // + is the same as parseInt
    const found = products.inventory.some(item => item.id === +req.params.id);

    if(found){
        const updateProduct = req.body;
        products.inventory.forEach(item => {
            if(item.id === +req.params.id){
                //if product name is empty or doesnt exist, leave that name the same as it was before. (same with inStock val)
                item.productName = updateProduct.productName ? updateProduct.productName : item.productName;
                item.inStock = updateProduct.inStock ? updateProduct.inStock : item.inStock;
                req.json({msg: "Product Updated", item});
            } else {
                res.status(400).json({msg: "This product was not found."})
            }
        })
    }
});

// Delete Product
app.delete('/api/deleteProduct/:id', (req, res) => {
    const found = products.inventory.some(item => item.id === +req.params.id);

    if(found){
        res.json({
            msg: "Product Deleted",
            // map deleted product
            deleted: products.inventory.filter(item => item.id === +req.params.id),
            // return items that DON'T have the params of that id
            products: products.inventory.filter(item => item.id !== +req.params.id),
        });
    } else {
        res.status(400).json({msg: "This product was not found."})
    }

});

app.listen(PORT, () => {console.log(`Server started on Port: ${PORT}`)});