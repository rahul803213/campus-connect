
const UserModel = (user,token) =>{
    return {
        user_name:user.username,
        user_id:user._id,
        user_token:token,
        user_email:user.contact_details.Email,
        user_college:user.academic_details.college
    }
}

module.exports = {
    UserModel
}