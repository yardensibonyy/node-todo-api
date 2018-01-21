const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

//overwrite the body response that sent back to the user. 
//This way the user won't get the password or the token back.
UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () { //.methods -> instance method
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens = user.tokens.concat([{access, token}]); //add the object to tokens array.

    return user.save().then(() => {
        return token;
    });
};

UserSchema.statics.findByToken = function (token) {  //.statics -> model method
    var User = this; 
    var decoded;

    try {
        decoded = jwt.verify(token, 'abc123');
    } catch (e) {
        return Promise.reject('this meassage will be the err argument of catch handler at server.js');
        // return new Promise((resolve, reject) => {
        //     reject();
        // });
        //catch block will stop the execution of the function
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token, //need to wrap in quotes when using .
        'tokens.access': 'auth'
    });
};

UserSchema.statics.findByCardentials = function(email, password) {
    var User = this;

    return User.findOne({email}).then((user) => {
        if (!user) {
            return Promise.reject(); //will trigger the catch block at server.js
        }

        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    resolve(user);
                } else {
                    reject();
                }
            });
        });
    });
};

//mongoose middleware
UserSchema.pre('save', function (next) {
    var user = this;

    if(user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = {User};