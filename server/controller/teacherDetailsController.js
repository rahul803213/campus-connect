const TeacherEmail = require('../models/TeacherEmails');

const Create = async(req,res) => {
try{
 const {email,college_id} = req.body;
      const detail= new TeacherEmail({
        email,
        college_id
       
      });
      detail.save().then(data=>
        {console.log(data);
    return res.json(data)
})


}
catch(error) {
    return res.json({error:error})
}
};

const Update = async(req,res) =>{
     try{
           const {id,newAttributes} = req.body;
           const updatedDetail = await TeacherEmail.findOneAndUpdate(
            { _id: id },
            { $set: newAttributes }, // Use $set to update specific attributes
            { new: true } // Return the updated document
        );

        if (!updatedDetail) {
            return res.status(404).json({ message: "Detail not found" });
        }

        return res.status(200).json({updatedDetail,message:"Student Updated Successfully."});
     }
     catch(error){
            return res.status(500).json({message: error});
     }
}

const Read = async(req,res) =>{
  try{
       const data = await TeacherEmail.find();
       return res.json(data);
  }
  catch(error){
    res.json({error:error})
  }

}
const Delete = async(req,res) => {
  try {
    const {id} = req.body;
    const user = await TeacherEmail.findOneAndDelete({ _id: id });
    if (!user) {
       res.status(404).json({message:"User Not Found"})
    } else {
       res.status(200).json({message:"User Deleted Successfully."})
    }
} catch (error) {
   res.status(404).json({message:error})
}
}

module.exports = {
    Create,Update,Read,Delete
}