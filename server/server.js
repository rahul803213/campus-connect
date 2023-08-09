//jshint esversion:6

const express= require('express');
const cors = require('cors');
const db = require('./dbs/db'); 
const fileUpload = require('express-fileupload')
//routers
const users = require('./routes/users');
const posts = require('./routes/posts');
const colleges = require('./routes/colleges');
const details = require('./routes/SecretDetails')
//database 
const app=express();
port=4000;
require('dotenv').config();

//essential for cross origin single line is perfect but we have to extra when it comes to production
app.use(cors());
//app.use(cors({
 //   origin: ['https://localhost:3000/signup','https://localhost:4000']
  //}));
//database connection using mongoose
db();
//
require('dotenv').config();
app.use(fileUpload({
  useTempFiles:true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user",users);
app.use("/college",colleges)
app.use("/detail",details)

app.get('/',(req,res)=>{
    res.json({name:"rahul"});
})
app.post('/',(req,res)=>{
   const data= req.body;
 res.json({ message: 'Data received successfully', data: data });

})

app.listen(4000,()=>{
    console.log(` is running on http://localhost:${port}`)
});