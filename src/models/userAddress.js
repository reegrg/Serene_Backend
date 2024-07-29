const mongoose = require('mongoose');
const { Schema } = mongoose;

const userAddressSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});

const UserAddress = mongoose.model('UserAddress', userAddressSchema);
module.exports = UserAddress;
