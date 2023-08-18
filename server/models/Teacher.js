const mongoose = require('mongoose');


const Teacher = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type:String
    },
    followers:{
        type:[mongoose.Types.ObjectId],
        ref:'User'
    },
    profile_picture:{
        type:String
    },
    isTeacher:{
       type:Boolean,
       default:'yes'
    },
    college_id:{
        type:mongoose.Types.ObjectId,
        ref:'College'
    },

})

module.exports = new mongoose.model('Teacher',Teacher);