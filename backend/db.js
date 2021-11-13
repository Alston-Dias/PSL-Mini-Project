const mongoose=require("mongoose")
//db name is user_details
mongoose.connect("mongodb://localhost:27017/user_db",(err)=>{
    if(!err)
        console.log("db connected")
    else    
        console.log("error")
})
module.exports=mongoose