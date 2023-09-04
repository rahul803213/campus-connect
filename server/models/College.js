const mongoose = require("mongoose");


const CollegeSchema = new mongoose.Schema({
    name :{
        type:String,
        unique:true,
        required:true
    },
   
    university_id:{
        type:mongoose.Types.ObjectId,
        ref:'University'
    }
   
})

module.exports = mongoose.model("College",CollegeSchema);