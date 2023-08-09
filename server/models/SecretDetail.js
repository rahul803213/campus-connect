const mongoose = require('mongoose');



const SecretDetail = new mongoose.Schema({
    reg_number:{
        type:String,
        required:'true'
    },
    reg_email:{
        type:String,
        required:'true'
    }
})
module.exports = new mongoose.model('SecretDetail',SecretDetail);