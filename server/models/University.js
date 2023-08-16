const mongoose = require("mongoose");


const UniversitySchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
   
    chancellor_name:{
        type:String,
        unique:true,
        default:"Rahul Sharma"
    }
})
module.exports = mongoose.model("University",UniversitySchema);