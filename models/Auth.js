const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const validator = require('validator');


    
const AuthentificationScheme = mongoose.Schema({
   
    fullname: {
        type: String,
        required: [true, 'Please add your fullname']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
   
   
    phonenumber:{
        type: String,
        required: [true, 'Please add your phone number']
    },
   
    password: {
        type: String,
        required: [true, 'Please add a password'],
        
    }
},
{
    timestamps: true
})


module.exports = mongoose.model('Auth', AuthentificationScheme);