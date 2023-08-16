// emailVerification.js
require('dotenv').config();

const nodemailer = require('nodemailer');
const crypto = require('crypto');
let url = ''
if(process.env.NODE_ENV=='production'){
   url="https://sunny-smakager-4b4895.netlify.app/"
}
else{
   url="http://localhost:3000"
}
// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host:'localhost',
    port: 587,
    secure: true,
  auth: {
    user: process.env.my_email,
    pass: process.env.my_email_password,
  },
});

// Generate a verification token
const generateVerificationToken = () => {
  return crypto.randomBytes(16).toString('hex');
};

// Send the verification email
const sendVerificationEmail = (email, verificationToken) => {
  const verificationLink = `${url}/reset-password/${verificationToken}`;
  const mailOptions = {
    from: process.env.my_email,
    to: email,
    subject: 'Email Verification',
    text: `Click the following link to verify your email: ${verificationLink}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        reject('Failed to send verification email');
      } else {
        console.log('Verification email sent:', info.response);
        resolve('Verification email sent');
      }
    });
  });
};

module.exports = {
  generateVerificationToken,
  sendVerificationEmail,
};
