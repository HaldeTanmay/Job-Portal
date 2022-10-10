const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

require('../db/conn');
const UserModel = require('../models/Users');
var database
router.get("/", (req, res) => {
});
router.get("/pr", async (req, res) => {
    // res.send('register');
    // database.collection('users').find({}).toArray((err, result) => {
    //     if (err) throw err
    //     resp.send(result)
    // })
    try {
        const data = await UserModel.find();
        res.send(data);

    } catch (e) {
        res.send(e);
    }
});

//promises
// router.post("/register", (req, res) => {
//     const { name, email, phone,  password, cpassword } = req.body;
//     if (!name || !email || !phone || !address || !profession || !password || !cpassword) {
//         return res.status(422).json({ error: "Plz filled the field properly" });
//     }
//     UserModel.findOne({ email: email }).then((userExist) => {
//         if (userExist) {
//             return res.status(422).json({ error: "Email already exist" });
//         }
//         const user = new UserModel({ name, email, phone,  password, cpassword });

//         user.save().then(() => {
//             res.status(201).json({ message: "user registerd successfully" })
//         }).catch((e) => {
//             res.status(500).json({ error: "Failed to registered" });
//         });
//     }).catch((err) => {
//         console.log("error");
//     })
// });

router.post("/register", async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Plz filled the field properly" });
    }

    try {
        const userExist = await UserModel.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "password not matching" });
        }
        else {
            const user = new UserModel({ name, email, phone, password, cpassword });

            const userRegister = await user.save();
            if (userRegister) {
                res.status(201).json({ message: "user registerd successfully" })
            }
        }
        //hed
    } catch (error) {
        console.log("error");
    }


});


//login
router.post('/login', async (req, res) => {
    // console.log(req.body);
    // res.json({ message: "awesome" })
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Plz filled the data" });
        }

        const userLogin = await UserModel.findOne({ email: email });


        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if (!isMatch) {
                res.status(400).json({ message: "Invalid Credentials" });
            } else {
                res.status(999).json({ message: "login successful" });
            }

        } else {
            res.status(400).json({ message: "Invalid Credentials" });
        }


    } catch (e) {
        console.log(e);
    }
});
// var database
// router.get('/contact', (req, resp) => {
//     database.collection('users').find({}).toArray((err, result) => {
//         if (err) throw err
//         resp.send(result)
//     })
// })


module.exports = router;
// {
//     "name":"vinod",
//     "email":"tan7@gmail.com",
//     "phone":4444432,
//     "address":"bhy",
//     "profession":"it",
//     "password":"hhhhhha",
//     "cpassword":"hhhhhha"
//   }