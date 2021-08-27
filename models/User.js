const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        index : {
            unique : true
        }
    }, 
    roleid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Role',
        required : true
    }

})

module.exports = mongoose.model('users',userSchema);