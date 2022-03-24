const { Schema, model } = require('mongoose')
const { isEmail } = require('validator')

// this is users schema ;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        minLength: 4,
        maxLength: 8,
        trim: true,
        unique: [true, 'username is already taken'],
        required: [true, `username is required and must be at least 4 characters long and max 8`]
    },

    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            // this is matching email to see if they match ;
            validate: function (value) {
                return isEmail(value)
            },

            messages: function (userObject) {
                return `${userObject.email} in not a valid email address`
            },

        },
    },

    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thought'
    },
    ],

    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    ],

    // virtual 



})

const User = model('User', userSchema)