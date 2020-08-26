const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    abstract : {
        type : String,
        required : true,
        trim : true,
        maxlength :150 ,
        minlength : 100
    },
    article : {
        type : String
    },
    author : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
});

module.exports = mongoose.model('Article', articleSchema);