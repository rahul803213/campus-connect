// emailVerification.js
require("dotenv").config();

const nodemailer = require("nodemailer");
const crypto = require("crypto");
let url = "";
if (process.env.NODE_ENV == "production") {
  url = "https://campus-connect-five.vercel.app";
} else {
  url = "http://localhost:3000";
}
// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "localhost",
  port: 587,
  secure: true,
  auth: {
    user: process.env.my_email,
    pass: process.env.my_email_password,
  },
});

// Generate a verification token
const generateVerificationToken = () => {
  return crypto.randomBytes(16).toString("hex");
};

// Send the verification email
const sendVerificationEmail = (email, verificationToken) => {
  const verificationLink = `${url}/reset-password/${verificationToken}`;
  const mailOptions = {
    from: process.env.my_email,
    to: email,
    subject: "Email Verification",
    html: `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Password Reset Verification</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 20px;
            }
            .logo {
                max-width: 150px;
            }
            .content {
                padding: 20px;
            }
            img {
                max-width: 100%;
                height: auto;
            }
            .button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #007bff;
                color: white;
                text-decoration: none;
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img src="http://res.cloudinary.com/dtbi1ztqc/image/upload/v1692286183/l1geeraaat6q5cixzma4.png" alt="Logo" class="logo">
                <h1>Password Reset Verification</h1>
            </div>
            <div class="content">
                <p>Hello,</p>
                <p>You have requested to reset your password. Click the button below to proceed:</p>
                <a href=${verificationLink} class="button">Reset Password</a>
                <p>If you didn't request this, you can safely ignore this email.</p>
                <p>Best regards,</p>
                <p>Your Team</p>
            </div>
        </div>
    </body>
    </html>
    
    `,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        reject("Failed to send verification email");
      } else {
        console.log("Verification email sent:", info.response);
        resolve("Verification email sent");
      }
    });
  });
};

module.exports = {
  generateVerificationToken,
  sendVerificationEmail,
};
