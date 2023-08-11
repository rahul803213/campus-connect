//jshint esversion:6
const path=require('path');
const express = require("express");
const cors = require("cors");
const db = require("./dbs/db");
//const fileUpload = require('express-fileupload')
//routers
const PORT = process.env.PORT || 4000;

const users = require("./routes/users");
const posts = require("./routes/posts");
const colleges = require("./routes/colleges");
const details = require("./routes/SecretDetails");
const cloudinary = require("cloudinary");
//database
const app = express();
//port = 4000;
require('dotenv').config({path:'.env'});

cloudinary.v2.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_api_key,
  api_secret: process.env.cloud_api_secret,
});
//essential for cross origin single line is perfect but we have to extra when it comes to production
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:4000",
    "https://velvety-babka-4ae196.netlify.app",
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};
app.use(cors(corsOptions));
//app.use(cors({
//   origin: ['https://localhost:3000/signup','https://localhost:4000']
//}));
//database connection using mongoose
db();
//
require("dotenv").config();
//app.use(fileUpload({
// useTempFiles:true
//}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", users);
app.use("/college", colleges);
app.use("/detail", details);
app.use("/post",posts)
app.get("/", (req, res) => {
  res.json({ name: "rahul" });
});
app.post("/", (req, res) => {
  const data = req.body;
  res.json({ message: "Data received successfully", data: data });
});

app.listen(PORT, () => {
  console.log(` is running on http://localhost:${PORT}`);
});
if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

