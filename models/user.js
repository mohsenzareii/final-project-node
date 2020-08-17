const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName : {
        type : String,
        required : true,
        trim : true,
        maxlength : 30,
        minlength : 3
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        maxlength : 30,
        minlength:3
    },
    userName : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        maxlength : 30,
        minlength : 6
    },
    password : {
        type : String,
        required : true,
    },
    mobile : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    sex : {
        type : String,
        required : true,
        enum :["male", "female"]
    },
    role : {
        type : String,
       enum : ["admin", "bloger"]
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);