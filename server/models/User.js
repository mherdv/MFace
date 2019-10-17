const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailValidator = async (email) => {


    let isUserExist = false
    await user.findOne({ email }).then(res => {

        if (res) isUserExist = false
    })

    return isUserExist

}





const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'user name is required']
    },
    surname: {
        type: String,
        required: [true, 'user surname is required']
    },
    dateOfBirthday: {
        type: Date,
        required: [true, 'user date of birth is required'],

    },
    gender: {
        type: Number,
        required: [true, 'user gender is required']
    },
    email: {
        type: String,
        required: [true, 'user email is required'],
        validate: {
            validator: async function (email) {
                var existUser = await user.findOne({ email });
                return !existUser
            },
            message: ({ value }) => `user width ${value}  email is already exist.`
        }
    },
    password: {
        type: String,
        required: [true, 'user email is required']
    },
    fullName: {
        type: String
    }
});

module.exports = user = mongoose.model('User', UserSchema);