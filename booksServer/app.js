var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
//////changes
const bcrypt=require('bcrypt')
const passport=require("passport")
const passportLocal=require("passport-local").Strategy
const cookiesParser=require("cookies-parser")
const session=require("express-session")


//var cors = require('cors')
// Add headers


app.use(session({
    secret:"secretcode",
    resave:true,
    saveUninitialized:true
    
    }))
    
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const dotEnv = require('dotenv')
dotEnv.config()

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to database"))
.catch((err)=>console.log(err))


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});
app.use(passport.initialize());
app.use(passport.session());
app.use('/carts',require('./routes/cart'))
app.use('/wishlists',require('./routes/wishlist'))
app.use('/books',require('./routes/books'))
app.use('/users',require('./routes/user'))




app.listen(process.env.PORT,()=>{
    console.log("Server listening to " + process.env.PORT)
})