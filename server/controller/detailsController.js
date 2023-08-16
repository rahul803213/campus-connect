const SecretDetail = require('../models/SecretDetail');

const Create = async(req,res) => {
try{
 const {name,reg_number,reg_email,college_id} = req.body;
      const detail= new SecretDetail({
        name,
        reg_number,
        reg_email,
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

}

const Read = async(req,res) =>{
  try{
       const data = await SecretDetail.find();
       return res.json(data);
  }
  catch(error){
    res.json({error:error})
  }

}
const Delete = async(req,res) => {

}

module.exports = {
    Create,Update,Read,Delete
}