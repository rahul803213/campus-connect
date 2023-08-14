const mongoose = require("mongoose");
const { isEmail, contains } = require("validator");
const bcrypt= require('bcrypt');
const saltRound =10;
//const filter = require("../util/filter");



const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
     // required: true,
     // unique: true,
     // minlength: [6, "Must be at least 6 characters long"],
     // maxlength: [30, "Must be no more than 30 characters long"],

    },
    followers:{
   type:[mongoose.Types.ObjectId],
   ref:"User"
    },
    follower_count:{
      type:Number
    },
    profileImage:{
      type:String
    },
    contact_details: { 
        mobile_number: {
            type:String,
            //required:true,
           // unique:true

              
        },
      Email:{type: String,
     // required: true,
     // unique: true,
     // validate: [isEmail, "Must be valid email address"]
      }
    },
    password: {
      type: String,
     // required: true,
     // minLength: [8, "Must be at least 8 characters long"],
    },
    biography: {
      type: String,
      default: "",
//maxLength: [250, "Must be at most 250 characters long"],
    },
    academic_details:{
     branch:{
        type:String,
       // required:true
     },
     college:{
        type:String,
       // required:true
     },
     registration_number:{
        type:Number,
      //  required:true,
       // unique:true
     },
     session:{
        type:String,
       // required:true
        
     },
     roll_number:{
        type:Number,
        required:true
     },
     profile_picture:{
        type:String,

     },
     branch:{
        type:String,
        required:true
     }
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    VerificationToken:{
      type:String
    }
  },
  { timestamps: true }
);



module.exports = mongoose.model("User", UserSchema);
