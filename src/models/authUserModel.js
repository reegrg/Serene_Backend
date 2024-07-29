const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); //to encrypt/hash the password

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (next) { //pre function implemented to run before the data is saved in database
  if (!this.isModified('password')) { // field of userschema is represented by this
    next(); //isModified to check the encrpytion password
  } 
  const salt = await bcrypt.genSalt(10);  //
  this.password = await bcrypt.hash(this.password, salt); //hash algorithm takes pw in string, then takes salt and return promise(encrypts the value)
  next(); 
});

const User = mongoose.model('User', userSchema);

module.exports = User;