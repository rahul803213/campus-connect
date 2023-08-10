
const UserModel = (user,token) =>{
    return {
        user_name:user.username,
        user_id:user._id,
        user_toke:token,
        user_email:user.contact_details.Email,
        user_college:user.academic_details.college,
        user_profile:user.profileImage,
        user_branch:user.academic_details.branch,
        user_roll_number:user.academic_details.roll_number,
        user_session:user.academic_details.session,
        user_reg_num:user.academic_details.registration_number
    }
}

module.exports = {
    UserModel
}