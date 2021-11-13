
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    fname: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    lname: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 1024
    }
})


var userdetailsdb= mongoose.model('new_user_table',userSchema);//table name is Users_det_table
module.exports=userdetailsdb;