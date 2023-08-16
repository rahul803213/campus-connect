
const College = require("../models/College")



const createCollege = async(req,res) => {
const {name,university_id} = req.body;
 const college = await College.create({
    name:name,
    university_id
 })
 res.json({data:college})
}

const fetchCollege = async(req,res) => {
  const colleges= await College.find();
  res.json(colleges);
}


module.exports = {
   createCollege,
   fetchCollege
}