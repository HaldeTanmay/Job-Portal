const express = require('express');
const router = express.Router();

require('../db/conn');
const UserModel = require('../models/Users');
const RecruiterModel = require('../models/Company');

router.get("/", (req, res) => {
    res.send('welcome');
});
router.get("/register", (req, res) => {
    res.send('register');
});

//promises
// router.post("/register", (req, res) => {
//     const { name, email, phone, address, profession, password, cpassword } = req.body;
//     if (!name || !email || !phone || !address || !profession || !password || !cpassword) {
//         return res.status(422).json({ error: "Plz filled the field properly" });
//     }
//     UserModel.findOne({ email: email }).then((userExist) => {
//         if (userExist) {
//             return res.status(422).json({ error: "Email already exist" });
//         }
//         const user = new UserModel({ name, email, phone, address, profession, password, cpassword });

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
    const { name, email, phone, address, profession, password, cpassword } = req.body;
    if (!name || !email || !phone || !address || !profession || !password || !cpassword) {
        return res.status(422).json({ error: "Plz filled the field properly" });
    }

    try {
        const userExist = await UserModel.findOne({ email: email });
        const em = email;
        // const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // if (regex.test(email === false)) {
        //     console.log("error");
        //     return res.status(425).json({ error: "Please Enter valid email address" });

        // }
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // const emailValidation = () => {
        //     const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        //     if (!em || regex.test(em) === false) {
        //         return false;
        //     }
        //     return true;
        // }
        if (!regex.test(email)) {
            return res.status(424).json({ error: "Please write correct email address" });
        }
        else if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        else if (password != cpassword) {
            return res.status(423).json({ error: "password not matching" });
        }
        else {
            const user = new UserModel({ name, email, phone, address, profession, password, cpassword });

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
router.post("/recruiter", async (req, res) => {
    const { name, email, phone, address, profession, password, cpassword } = req.body;
    if (!name || !email || !phone || !address || !profession || !password || !cpassword) {
        return res.status(422).json({ error: "Plz filled the field properly" });
    }

    try {
        const userExist = await RecruiterModel.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "password not matching" });
        }
        else {
            const Recruiter = new RecruiterModel({ name, email, phone, address, profession, password, cpassword });

            const userRecruiter = await Recruiter.save();
            if (userRecruiter) {
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
        if (!userLogin) {
            res.status(400).json({ message: "user does not exist" });
        } else {
            res.json({ message: "login successful" });
        }


    } catch (e) {
        console.log(e);
    }
})






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