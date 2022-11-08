const express = require('express');
const router = express();
const productModel = require('./models/productSchema');
const userModel = require('./models/addUser');
const orderModel = require('./models/orderSchema');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// PRODUCT ROUTES
// add new product

// multer middleware
const storedProductImage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './productImages');
    },

    filename: (req, file, callBack) => {
        callBack(null, Date.now() + path.extname(file.originalname))
    }
});

const uploadProductImage = multer({storage: storedProductImage});

router.post('/api/newProduct', uploadProductImage.single('image'), (req, res) => {

    let data = JSON.parse(req.body.information);
    console.log(req.file.filename);

    const newProduct = new productModel({
        productName: data.productName,
        price: data.price,
        productDescription: data.productDescription,
        date: data.date,
        stock:data.stock,
        discount: data.discount,
        variations: {
            pot1: data.variations.pot1, 
            pot2:data.variations.pot2, 
            pot3:data.variations.pot3,
            pot4:data.variations.pot4
        },
        image: req.file.filename
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
            date: req.body.date,
            stock:req.body.stock,
            discount: req.body.discount,
            variations: {
                pot1: req.body.pot1, 
                pot2:req.body.pot2, 
                pot3:req.body.pot3,
                pot4:req.body.pot4
            },
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
        status: req.body.status
    })

    newUser.save()
    .then (item => {
        res.json(item)
    })
    .catch(err => {
        res.status(400).json({msg: "There is an error", err})
    })
});

router.post('/api/loginUser', async(req, res) => {
    const findUser = await userModel.findOne({
        email: req.body.email
    });

    if(findUser){
        res.json({user: true, status: findUser.status, email: findUser.email, name: findUser.name});
        // if(await bcrypt.compare(req.body.password, findUser.password)){
        //     // const userToken = jwt.sign({
        //     //     email: req.body.email
        //     // }, '!j$ioj220Bz%') // secret key
        //     // return res.json({status: "Ok", user: userToken});
        //     res.json({user: true, status: findUser.status, email: findUser.email, name: findUser.name});
        // }else{
        //     res.json({user: false});
        // }
    } 
    // else {
    //     res.json({msg: "user not found"})
    // }
});

// ORDER ROUTES
// get all products
router.get('/api/allOrders', async (req, res) => {
    const findOrders = await orderModel.find();
    res.json(findOrders);
});

// add orders
router.post('/api/addOrder', (req, res) => {
    const newOrder = orderModel({
        date: req.body.date,
        clientName: req.body.clientName,
        quantity: req.body.quantity,
        price: req.body.price
    })

    newOrder.save()
    .then (item => {
        res.json(item)
    })
    .catch(err => {
        res.status(400).json({msg: "There is an error", err})
    })
});

// dispatch/remove order
// delete a product
router.delete('/api/dispatchOrder/:id', async(req, res) => {
    const findOrder = await orderModel.remove({_id: req.params.id});
    res.json(findOrder);
});

module.exports = router;