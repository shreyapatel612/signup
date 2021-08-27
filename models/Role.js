const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('roles',roleSchema);