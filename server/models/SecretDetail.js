const mongoose = require('mongoose');
const { stringify } = require('postcss');



const SecretDetail = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    reg_number:{
        type:String,
        required:'true'
    },
    reg_email:{
        type:String,
        required:'true'
    },
    college_id:{
        type:mongoose.Types.ObjectId,
        ref:"College"
        
    },
  
})
module.exports = new mongoose.model('SecretDetail',SecretDetail);