const mongoose = require('mongoose');
const {Schema}  = mongoose;
const bcrypt = require('bcrypt');

 const SignupSchema = new Schema({
    username: {
        type: String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type: String,
        required: true,
        minlength: 6
    },
    mobile : {
        type: String,
        required : true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number']
    }

 }, {timestamps : true})

 SignupSchema.pre('save', async function(next){
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt =  await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
        next();
    }
    catch (err){
        next(err);
    }
 })

 SignupSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
 };

  const User =  mongoose.model('User',SignupSchema);

  module.exports  = User;