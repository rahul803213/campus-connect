const SecretDetail = require('../models/SecretDetail');

const Create = async(req,res) => {
try{
 const {reg_number,reg_email} = req.body;
      const detail= new SecretDetail({
        reg_number:reg_number,
        reg_email:reg_email
      });
      detail.save().then(data=>{console.log(data);
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

}
const Delete = async(req,res) => {

}

module.exports = {
    Create,Update,Read,Delete
}