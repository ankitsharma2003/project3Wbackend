const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
     info : {
        type : String,
        required : true
     },
     owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
     }
})

module.exports = mongoose.model('data', dataSchema);