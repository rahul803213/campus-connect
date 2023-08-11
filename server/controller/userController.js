const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserUtilities = require("../utilities/UserUtilities");
const getDataUri = require("../utilities/dataUri");
const emailVerification = require("../utilities/mailutilities");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

//const multer = require('multer')

const payload = require("../utilities/Payload");
require("dotenv").config();

//const upload = multer({ dest: 'uploads/' });

//register function
const register = async (req, res) => {
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
  try {
    const uploadResult = await cloudinary.uploader.upload(fileuri.content);
    console.log("Upload result:", uploadResult);
    // return uploadResult;
    profile_uri = uploadResult.url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    // throw error; // Rethrow the error to propagate it to the calling code
  }
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
    .then(() =>
      emailVerification.sendVerificationEmail(
        user.contact_details.Email,
        user.VerificationToken
      )
    )
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
module.exports = {
  register,
  login,
  email_verifier,
};
