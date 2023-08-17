const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserUtilities = require("../utilities/UserUtilities");
const getDataUri = require("../utilities/dataUri");
const emailVerification = require("../utilities/mailutilities");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const SecretDetail = require('../models/SecretDetail')

//const multer = require('multer')

const payload = require("../utilities/Payload");
require("dotenv").config();

//const upload = multer({ dest: 'uploads/' });

//register function
const register = async (req, res,userData) => {
  const {
    username,
    email,
    password,
    phone_number,
    college_name,
    university_name,
    roll_number,
    biography,
    branch,
    session,
    registration_number,
  } = req.body;

  
  var profile_uri = "";
  const file = req.file;
  console.log({"file":file});
  const fileuri = getDataUri(file);
  console.log({ file: file });
  console.log("rahul");
  // const mycloud = await cloudinary.v2.uploader.upload(fileuri.content).catch(error => console.log(error));
  // console.log({ "public id": mycloud.public_id });
  ///console.log({ secure_url: mycloud.secure_url });
  if(file){
  try {
    const uploadResult = await cloudinary.uploader.upload(fileuri.content);
    console.log("Upload result:", uploadResult);
    // return uploadResult;
    profile_uri = uploadResult.url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    // throw error; // Rethrow the error to propagate it to the calling code
  }}
  //    console.log(res.json({ picture: req.file.path }));
  /* cloudinary.uploader.upload(profileImage.useTempFiles,
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); console.log(error) }); */
  //const data = req.body;
  //console.log(data);
const hashedPassword = await bcrypt.hash(password, 10);
  const normalizedEmail = email.toLowerCase();
  const user = new User({
    username: username,
    biography: biography,
    contact_details: {
      Email: normalizedEmail,
      mobile_number: phone_number,
    },
    password: hashedPassword,
    isVerified: false,
    profileImage: profile_uri,
    VerificationToken: emailVerification.generateVerificationToken(),
    academic_details: {
      branch: branch,
      college: college_name,
      roll_number: roll_number,
      session: session,
      registration_number: registration_number,
    },
  });
  //const email_response='';
  user
    .save()
     /* .then(() =>
      emailVerification.sendVerificationEmail(
        user.contact_details.Email,
        user.VerificationToken
      )
    )  */
    .then(() => {
      const token = jwt.sign(payload(user), process.env.jwt_secret_key);
      return res.json({
        user_data: UserUtilities.UserModel(user, token),
        email_response: { message: "verification email sent" },
      });
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });

  //const token = jwt.sign(payload(user),process.env.jwt_secret_key);
  //const user_data =UserUtilities.UserModel(user,token);
  //const error_in_email_sending ='';
  ////try {
  // Send verification email
  // const {email}=req.body;
  //  await emailVerification.sendVerificationEmail(user.contact_details.Email, user.VerificationToken);
  // email_response= res.status(200).json({ message: 'Verification email sent' });
  //} catch (error) {
  //return res.status(500).json({ error:error.message });
  //}
  // return res.json({user_data:UserUtilities.UserModel(user,token),email_response:email_response});

  // } catch (err) {
  //  return res.status(400).json({ error: err.message });
  // }
};

//2. login function starts here

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      throw new Error("All input required");
    }

    const normalizedEmail = email.toLowerCase();

    const user = await User.findOne({
      "contact_details.Email": normalizedEmail,
    });

    if (!user) {
      throw new Error("User not found ");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Email or password incorrect");
    }

    //   const token = jwt.sign(buildToken(user), process.env.TOKEN_KEY);

    const token = jwt.sign(payload(user), process.env.jwt_secret_key, {
      expiresIn: "365d", // expires in 365 days
    });

    return res.json(UserUtilities.UserModel(user, token));
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const email_verifier = async (req, res) => {
  const { token } = req.query;
  const user = await User.findOne({ VerificationToken: token });

  if (!user) {
    return res.status(404).json({ error: "Invalid verification token" });
  }

  // Mark email as verified in the database
  // user.isVerified = true;
  try {
    const user_update = await User.findOneAndUpdate(
      { VerificationToken: token },
      { isVerified: true, VerificationToken: null },
      { new: true }
    );
    //user.verificationToken = null; // Remove the token to prevent reuse
    const result = await user_update.json();
    return res
      .status(200)
      .json({ message: "Email verified successfully", result: result });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

const follow = async (req,res) => {
 try{ 
  const {follower_id} = req.body;
  const {celeb_id}=req.params;
  const celeb = await User.findById(celeb_id);
  if(celeb){
    if(!celeb.followers.includes(follower_id)){
      celeb.followers.push(follower_id);
      celeb.follower_count=celeb.followers.length;
    }
    else{
       celeb.followers.filter((id) => id !== follower_id);
       celeb.follower_count = celeb.followers.length;
    }
    await celeb.save();
    res.status(200).json({ message: 'You are following Now.' });
  }
  else {
    res.status(404).json({ error: 'User not found' });
  }

}
  catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

/* const signUpReg = async (req,res) => {
  const {registration_number} =req.body ;

   const user = await SecretDetail.find({reg_number:registration_number});
  // res.json(user[0].reg_number);
   //const createdUser = await fetch()
   const email = user[0].reg_email;
   const college = user[0].college_id;
   const normalizedEmail = email.toLowerCase();

   //const registration_number = user.reg_number;
   const student = new User({
   
   
    contact_details: {
      Email: normalizedEmail,
     
    },
  //  password: hashedPassword,
    isVerified: false,
   
    VerificationToken: emailVerification.generateVerificationToken(),
    academic_details: {
     
      college: college,
      
      
      registration_number: registration_number,
    },
  });
  student
    .save()
      .then(() =>
      emailVerification.sendVerificationEmail(
        user.contact_details.Email,
        user.VerificationToken
      )
    )  
    .then(() =>  {return res.json(student)})
    .catch(error =>{ return res.json(error)});



}
 */
const signUpReg = async (req, res) => {
  const { registration_number } = req.body;
       console.log(registration_number);
  try {
    const user = await SecretDetail.findOne({ reg_number: registration_number.registrationNumber });
   if(user==null) {
  return  res.status(404).json({error:"You are not authorized till now.Contact Support!"})
   }
 /*  if(User.findOne({contact_details:{Email:user.reg_email}})){
    return  res.status(404).json({error:"An Email is Already Sent"})
  } */
     console.log(user);
    const email = user.reg_email;
    const college = user.college_id;
    const normalizedEmail = email.toLowerCase();
    const AlreadyAUser = await User.findOne({contact_details:{Email:normalizedEmail}});
    console.log(AlreadyAUser);
    if(AlreadyAUser){
      //const updatedUser = await User.updateOne({'contact_details.Ema'})
      await emailVerification.sendVerificationEmail(
        AlreadyAUser.contact_details.Email,
        AlreadyAUser.VerificationToken
      );
      return res.json(AlreadyAUser);
    }
    const student = new User({
      username:user.name,
      password:'',
      profileImage:`https://robohash.org/${user.name}`,
      contact_details: {
        Email: normalizedEmail,
      },
      isVerified: false,
      VerificationToken: emailVerification.generateVerificationToken(),
      academic_details: {
        college_id: college,
        registration_number: registration_number.registrationNumber,
      },
    });

    student
      .save()
      .then(() => {
        console.log('Sending verification email...');
        return emailVerification.sendVerificationEmail(
          student.contact_details.Email,
          student.VerificationToken
        );
      })
      .then(() => {
        console.log('Registration successful:', student);
        return res.json(student);
      })
      .catch(error => {
        console.error('Error during registration:', error);
        return res.status(500).json({ error: 'Error during registration' });
      });
  } catch (error) {
    console.error('Error querying database:', error);
    return res.status(500).json({ error: 'Error querying database' });
  }
};

const  loginReg = async(req,res) => {
  try {
    const { reg_no, password } = req.body;

    if (!(reg_no && password)) {
      throw new Error("All input required");
    }

    //const normalizedEmail = email.toLowerCase();

    const user = await User.findOne({
      "academic_details.registration_number": reg_no,
    });

    if (!user) {
   return   res.status(404).json({error:'User Not Exist'})
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
    return  res.status(404).json({error:'Password Is Invalid'})
    }

    //   const token = jwt.sign(buildToken(user), process.env.TOKEN_KEY);

    const token = jwt.sign(payload(user), process.env.jwt_secret_key, {
      expiresIn: "365d", // expires in 365 days
    });

    return res.json(UserUtilities.UserModel(user, token));
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}


const updatePassword = async(req,res) => {
   try{
            const {password,token} = req.body;
            const data = await User.findOne({VerificationToken:token});
            if(!data){
              return  res.status(404).json({error:"Invalid Token!"})
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            /* if(data.isVerified){
              return res.status(404).json({error:'You are already verified'})
            } */
            console.log(data);
            const updateData = await User.updateOne({'contact_details.Email':data.contact_details.Email},{password:hashedPassword}, { new: true });
            return res.json(updateData)


   }
   catch(error){
    return res.json({error:error});
   }
       

}



module.exports = {
  register,
  login,
  email_verifier,
  follow,
  signUpReg,
  loginReg,
  updatePassword
};
