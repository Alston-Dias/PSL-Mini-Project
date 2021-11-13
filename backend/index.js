const express = require('express')
var bodyParser=require("body-parser")
//var cors = require('cors')
// Add headers
const app = express();
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.use(express.static("dist"))

const {mongoose}=require("./db.js");
const bookrent = require('./models/user.js');
var usercontroller=require("./controllers/userdet.js")

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors()) 
//app.use(bodyParser.urlencoded({extended:false}));
const port = 3000
app.listen(port, () => console.log(`Example app listening on port port!`))
app.use("/login",usercontroller)
