const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true,
    },
    un_name: {
        type: String,
        required: true,
    },
    dp_name: {
        type: String,
        required: true,
    },
    sem: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    roll: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    exam_name: {
        type: String,
        required: true,
    },
    sub1_name: {
        type: String,
        required: true,
    },
    sub2_name: {
        type: String,
        required: true,
    },
    sub3_name: {
        type: String,
        required: true,
    },
    sub4_name: {
        type: String,
        required: true,
    },
    sub5_name: {
        type: String,
        required: true,
    },
    sub6_name: {
        type: String,
        required: true,
    },
    sub1_marks: {
        type: String,
        required: true,
    },
    sub2_marks: {
        type: String,
        required: true,
    },
    sub3_marks: {
        type: String,
        required: true,
    },
    sub4_marks: {
        type: String,
        required: true,
    },
    sub5_marks: {
        type: String,
        required: true,
    },
    sub6_marks: {
        type: String,
        required: true,
    },
    Total: {
        type: String,
        required: true,
    },
    result: {
        type: String,
        required: true,
    }
});

// state: {
//     type: String,
//     required: true,
// },
// un_name: {
//     type: String,
//     required: true,
// },
// dp_name: {
//     type: String,
//     required: true,
// },
// sem: {
//     type: String,
//     required: true,
// }
// });

// const UserModel = mongoose.model("university", UserSchema);
// module.exports = UserModel;

/**
* Paste one or more documents here
*/
// [
//     {"state" : "Goa", "un_name" : "a university","dp_name" : "CS", "sem": "I" },
//     {"state" : "Goa", "un_name" : "a university", "dp_name" : "IT","sem": "II" },
//     {"state" : "Goa", "un_name" : "b university", "dp_name" : "EXTC","sem": "III" },
//     {"state" : "Goa", "un_name" : "b university","dp_name" : "IT", "sem": "IV" },
//     {"state" : "Goa", "un_name" : "c university", "dp_name" : "ELEC", "sem": "V" },
//     {"state" : "Bihar", "un_name" : "a university","dp_name" : "CS", "sem": "II" }
//   ]


const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;