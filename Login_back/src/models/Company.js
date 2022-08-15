const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const RecruiterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    }
});


//hashing
RecruiterSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        console.log("hashing");
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});
const RecruiterModel = mongoose.model("recruiter", RecruiterSchema);
module.exports = RecruiterModel;