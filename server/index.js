const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const cors = require('cors');
// access .env file
require('dotenv/config');

app.use(cors({
    origin: 'http://localhost:3000'
}));

// using body parser middleware
// wont be able to request body without this
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// middleware to access routes
app.use(routes);

mongoose.connect(process.env.DB_CONNECTION, (err) => {
    if (err) {
        console.log('no connection')
    } else {
        console.log('Connected to Mongo DB Atlas')
    };
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server started on Port: ${PORT}`)});