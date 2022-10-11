const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    cname: {
        type: String,
        required: true,
    },
    jp: {
        type: String,
        required: true,
    },
    rq: {
        type: String,
        required: true,
    },
    skill: {
        type: String,
        required: true,
    },
    rl: {
        type: String,
        required: true,
    }
});

const JobModel = mongoose.model("jobs", UserSchema);
module.exports = JobModel;