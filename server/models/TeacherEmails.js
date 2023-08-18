const mongoose = require('mongoose');


const TeacherEmail = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    college_id:{
        type:mongoose.Types.ObjectId,
        ref:'College'
    },
    
})

module.exports = new mongoose.model('TeacherEmail',TeacherEmail);