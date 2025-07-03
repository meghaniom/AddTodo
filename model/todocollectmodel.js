const mongoose = require('mongoose');

const {Schema} = mongoose;

 const todocollectSchem = new Schema({
    taskname : {
        type: String,
        required : true,
    },
    status : {
        type: Boolean,
        default : false
    }
 })

  const TodoCollect = mongoose.model('todocollect', todocollectSchem);

  module.exports = TodoCollect;