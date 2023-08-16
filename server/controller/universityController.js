const University = require("../models/University");


const createUniversity = async(req,res) => {
   try{ const name = req.body.name;
    const university = await University.create({
        name:name
    })
  return  res.json(university);}
  catch(error){
   throw error;
  }
}

const fetchUniversity = async(req,res) => {
try{
    const data = await University.find();
   return   res.json(data);
}
catch(error){
    throw error;
}
}

module.exports = {
    createUniversity,
    fetchUniversity
}