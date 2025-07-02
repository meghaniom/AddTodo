const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
     email : {
        type : String,
        required : true,
        unique : true,
     },
     county : {
        type: String,
        required : true
     },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type : Date,
        default : Date.now
    }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
