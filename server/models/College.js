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
       
    }
})

module.exports = mongoose.model("College",CollegeSchema);