
const payload= (user) =>{
    return {
       user_id:user.contact_details.Email,
       user_reg_no:user.academic_details.registration_number,
       is_Verified:user.isVerified
    }
}
module.exports = payload