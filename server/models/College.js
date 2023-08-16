const mongoose = require("mongoose");


const CollegeSchema = new mongoose.Schema({
    name :{
        type:String,
        unique:true,
        required:true
    },
    students:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
       
    },
    university_id:{
        type:mongoose.Types.ObjectId,
        ref:'University'
    }
   
})

module.exports = mongoose.model("College",CollegeSchema);