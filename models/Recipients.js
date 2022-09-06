const mongoose = require('mongoose');
//database model for our recievers list, this is the information that we require.

    
const RecipientsScheme = mongoose.Schema({
   
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
   
    IDnumber: {
        type: String,
        required: [true, 'Please add your ID number'],
        
    },

    city: {
        type: String,
        required: [true, 'Please add the location'],
        
    }
},
{
    timestamps: true
})


module.exports = mongoose.model('Reciever', RecipientsScheme);