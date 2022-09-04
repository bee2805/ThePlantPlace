const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const addUser = mongoose.Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    password:{ type: String, required: true },
    cart: { type: Array, default:[]}
}); //END OF CLIENT SCHEMA

addUser.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.password, salt);
        this.password = hashPassword;
        next()
    } catch (error) {
        next(error)
    }
})

module.exports = mongoose.model('users', addUser);