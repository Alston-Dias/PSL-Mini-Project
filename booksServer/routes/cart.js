const router = require('express').Router()
var Cart = require('../cart.model')

router.get('/getcart/:username',(req,res)=>{
    Cart.find({username:req.params.username},(err,cart)=>{
        if(err){
            res.send("error had occured"+err)
        }
        else{
            res.json(cart)
        }
    })
})

router.post('/addcart',(req,res)=>{
    console.log('here')
    var newCart = new Cart({
        username : req.body.username,
        bookid : req.body.bookid
    })
    
    newCart.save((err,cart)=>{
        if(err){
            res.send("error in adding to cart" + err)
        }
        else{
            res.json(cart)
        }
    })
})


module.exports = router