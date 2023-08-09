
const payload= (user) =>{
    return {
       user_id:user._id,
       user_email:user.email,
       is_Verified:user.isVerified
    }
}
module.exports = payload