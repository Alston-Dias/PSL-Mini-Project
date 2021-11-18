const router = require('express').Router()
var User = require('../User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
const passport=require("passport")
const passportLocal=require("passport-local").Strategy
const cookiesParser=require("cookies-parser")
const session=require("express-session")
dotEnv.config()
const auth = require("../middleware/auth");
require("../passport-conf")

router.get('/getusers',auth,(req,res)=>{
    User.find({},(err,Users)=>{
        if(err){
            res.send("error had occured")
        }
        else{
            res.json(Users)
        }
    })
})

router.get('/getuser/:id',auth,(req,res)=>{
    User.findOne({_id:req.params.id},(err,user)=>{
        if(err){
            res.send("error had occured")
        }
        else{
            res.json(user)
        }
    })
})
router.put('/updateuser/:id',(req,res)=>{
    User.findOneAndUpdate({_id:req.params.id},{$set:{fname: req.body.fname,lname: req.body.lname,email: req.body.email}},(err,user)=>{
        if(err){
            res.send("error in updating user")
        }
        else{
            res.json(user)
        }
    })
})
router.post('/adduser',async(req,res)=>{
    var newUser = new User({
        _id: req.body._id,
        fname: req.body.fname,
        lname: req.body.lname,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role
    })

    const salt = await bcrypt.genSalt(10)
    newUser.password = await bcrypt.hash(newUser.password,salt)

    const token = jwt.sign(
        { user_id: newUser._id},
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );   

      newUser.token = token
    
    newUser.save((err,user)=>{
        if(err){
            res.send("error in adding user" + err)
        }
        else{
            res.json(user)
        }
    })
})

// router.post('/login',async(req,res)=>{
//  try{
//     const id = req.body.username
//     const password =  req.body.password

//     const user = await User.findOne({_id:id})
//     const validPassword = await bcrypt.compare(password,user.password)

//     if(validPassword){

//         const token = jwt.sign(
//             { user_id: user._id},
//             process.env.TOKEN_KEY,
//             {
//               expiresIn: "2h",
//             }
//           );

//           user.token = token
//         res.json(user)
//     }
//     else{
//         res.json({message:"Invalid password"})
//     }
//  }
//  catch{
//     console.log('Invalid username or user does not exits')
//     return res.json({message:"Invalid username user does not exits"})
    
//  }
// })




router.post("/login", async(req, res, next) => { //to autenticate
   
    const id = req.body.username
    const password =  req.body.password
    console.log(id)
    console.log(password)
    
    passport.authenticate('local',function(err, user, info) {
        console.log(user)
        if(err) throw err
        if (!user) 

        { 
          console.log(info)
         
          return res.json(info) 
        }
        else {
          req.logIn(user, (err) => {
            if (err) {
                throw err
            };
         
        
            console.log("Successfully Authenticated");
            console.log(req.user);
            const token = jwt.sign(
             { user_id: user._id},
                    process.env.TOKEN_KEY,
                    {
                     expiresIn: "2h",
                    }
                );
                
                user.token = token
                //res.json(user)
            return res.status(200).json(user);
            
          });
        }
      })(req, res, next);
    });
   



module.exports = router