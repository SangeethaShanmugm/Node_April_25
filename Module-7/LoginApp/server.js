const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs")
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

//ejs setup
app.use(express.static(__dirname + "/public"))//css
app.set("views", "./views")//pages
app.set("view engine", "ejs")//choosing ejs template

app.get("/", (req, res) => {
    res.render("index", {
        error: req.query.valid ? req.query.valid : '',
        msg: req.query.msg ? req.query.msg : ''
    })
})

app.get("/signup", (req, res) => {
    res.render("signup")
})


//generate password
// async function genPassword(password) {
//     const salt = await bcrypt.genSalt(10)//bcrypt.genSalt(no. of rounds)
//     console.log(salt)
//     return salt;
// }

// genPassword("password@123")


mongoose.connect("mongodb://127.0.0.1:27017/node_may25", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log("Failed to connect to mongoDB", err)
    } else {
        console.log("Mongodb is connected successfully")
    }
});

const AuthController = require("./auth/AuthController");
app.use('/api/auth', AuthController)

const UserController = require("./user/UserController");
app.use('/users', UserController)

app.listen(port, () => console.log("Express started on port", port))