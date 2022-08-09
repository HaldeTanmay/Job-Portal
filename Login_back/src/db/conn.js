// const mongoose = require("mongoose");
// // mongoose.connect("mongodb://localhost:27017/userRegistration", {

// // }).then(() => {
// //     console.log("SUCCESS");
// // })
// mongoose.connect('mongodb://127.0.0.1:27017/userRegistration').then(() => {
//     console.log("connected to database");
// }).catch((e) => {
//     console.log(e);
// })
const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose.connect(DB).then(() => {
    console.log("yes");
}).catch((e) => {
    console.log(e);
});