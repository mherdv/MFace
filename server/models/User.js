const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const emailValidator = require('../utils/validators').emailValidator;


const emailFullValidation = async (email) => {

    const validationCheck = emailValidator(email);
    if (!validationCheck.status) return validationCheck;

    var existUser = await user.findOne({ email });
    if (existUser) return { status: 0, errorMessage: `user  width  email  ${email} is already exist` };
    return { status: 1 };
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

            validator: async (email) => {

                const fullValidationResult = await emailFullValidation(email);

                !fullValidationResult.status && (this.errorMessage = fullValidationResult.errorMessage);
                return fullValidationResult.status
            },

            message: () => this.errorMessage,
        }
    },
    password: {

        type: String,
        required: [true, 'user email is required']
    },
    fullName: {

        type: String
    },
    profileImage: {

        type: String
    }
});

module.exports = user = mongoose.model('User', UserSchema);