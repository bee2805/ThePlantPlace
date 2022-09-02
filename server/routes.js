const express = require('express');
// const { find } = require('./models/productSchema');
const router = express();
const productModel = require('./models/productSchema');
const userModel = require('./models/addUser');
const bcrypt = require('bcrypt');

// PRODUCT ROUTES
// add new product
router.post('/api/newProduct', (req, res) => {
    const newProduct = new productModel({
        productName: req.body.productName,
        price: req.body.price,
        productDescription: req.body.productDescription,
        // date: { type: Date, default: Date.now },
        stock:req.body.stock,
        variations: {
            pot1: req.body.variations.pot1, 
            pot2:req.body.variations.pot2, 
            pot3:req.body.variations.pot3,
            pot4:req.body.variations.pot4
        }
    })

    newProduct.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {n
        res.status(400).json({msg: "There is an Error:", err})
    })
});

// get all products
router.get('/api/allProducts', async (req, res) => {
    const findProducts = await productModel.find();
    res.json(findProducts);
});

// get one product
router.get('/api/oneProduct/:id', async (req, res) => {
    const findProduct = await productModel.findById(req.params.id);
    res.json(findProduct);
});

// update a product
router.patch('/api/updateProduct/:id', async (req, res) => {

    const findProduct = await productModel.updateOne(
        {_id: req.params.id},
        {$set: {
            productName: req.body.productName,
            price: req.body.price,
            productDescription: req.body.productDescription,
            // date: { type: Date, default: Date.now },
            stock:req.body.stock,
            variations: {
                pot1: req.body.pot1, 
                pot2:req.body.pot2, 
                pot3:req.body.pot3,
                pot4:req.body.pot4
            }
        }}
    );

    res.json(findProduct);
});

// delete a product
router.delete('/api/deleteProduct/:id', async(req, res) => {
    const findProduct = await productModel.remove({_id: req.params.id});
    res.json(findProduct);
});

// USER ROUTES
router.post('/api/addUser', (req, res) => {
    const newUser = userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cart: req.body.cart
    })

    newUser.save()
    .then (item => {
        res.json(item)
    })
    .catch(err => {
        res.status(400).json({msg: "There is an error", err})
    })
});

module.exports = router;