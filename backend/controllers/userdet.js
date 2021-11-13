
const express = require('express')

var router=express.Router()
var user_d =require("../models/user.js")


router.get("/",(req,res)=>{
   res.send()
})
router.post("/register",async(req,res)=>{
   try{
       const email=req.body.email;
       const password=req.body.password;
       console.log(`${email}`)
       console.log("hello")
       const useremail=await user_d.findOne({email:email})//check whether email is there in db
       
       console.log(useremail.password)//for that particular what password should be there 
       console.log(password)//what user has enter
       console.log("hii")
       const a="admin1"
       const c="admin2"
       if(password===a || password==c){
        console.log("admin")
        return res.status(200).json("admin")
        //console.log("outsidede")

       }
       else if(useremail.password===password){
        //    res.send("index.html")
        console.log("inside")
        return res.status(200).json("user")
        //console.log("outsidede")
        res.send("successful login")
       }
       else{
        console.log("invaild username and password")
         return res.status(200).json("Invalidup")
         
           
       }
   }catch(error){
    return res.status(200).json("Invalid_email")
      
   }





 })

router.post("/",(req,res)=>{
    var b=new user_d({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        password:req.body.password


    })
    console.log(b)
    b.save((err,doc)=>{
        if(!err){
        res.send(doc)
        console.log("hii")
       
        }
        else {console.log("not able to add user in db")
    console.log(err)}
    })
})


module.exports=router