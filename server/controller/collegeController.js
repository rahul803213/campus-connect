
const College = require("../models/College")



const createCollege = async(req,res) => {
const {name} = req.body;
 const college = await College.create({
    name:name
 })
 res.json({data:college})
}

module.exports = {
   createCollege
}