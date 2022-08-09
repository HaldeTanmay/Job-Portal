// const express = require("express");
// const path = require('path');
// const app = express();
// const hbs = require('hbs');
// require("./db/conn");
// const port = process.env.PORT || 3000;

// const static_path = path.join(__dirname, "../public");
// const template_path = path.join(__dirname, "../templates/views");
// const partials_path = path.join(__dirname, "../templates/partials");

// app.use(express.static(static_path));
// app.set("view engine", "hbs");
// app.set("views", template_path);
// hbs.registerPartials(partials_path);

// app.get("/", (req, res) => {
//     res.render("index")
// });

// app.listen(port, () => {
//     console.log(`server is running at port No ${port}`);
// });

// const express = require("express");
// const router=express.Router();

// router.get('./',(req,res)=>{
//     res.send("server connected");
// });

// router.post('./register',(req,res)=>{
//     console.log(req.body);
//     res.json({message:req.body});
// });
// module.exports=router;

const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
// const mongoose = require('mongoose');
const UserModel = require('./models/Users');
dotenv.config({ path: './config.env' });

const PORT = process.env.PORT;
require('./db/conn');

// const User = require('./models/Users');

app.use(cors());

app.use(express.json());
app.use(require('./router/auth'));
// app.use(require('./router/auth'))
const middleware = (req, res, next) => {
    console.log("middleware");
    next();
}


// app.use(cors({
//     origin: 'http://localhost:4000'
// }))

app.get("/login", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.get("/about", middleware, (req, res) => {
    console.log("about");
    res.send('HELLO ');
});

// app.post("/register", async (req, res) => {
//     const user = req.body;
//     const newUser = new UserModel(user);
//     await newUser.save();
//     res.json(user);
// });


app.listen(PORT, () => {
    console.log("hellooooooo");
})