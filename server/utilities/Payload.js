
const payload= (user) =>{
    return {
       user_id:user.contact_details.Email,
       user_email:user.username,
       is_Verified:user.isVerified
    }
}
module.exports = payload