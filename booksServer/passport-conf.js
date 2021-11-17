const bcrypt=require('bcrypt')
const user = require('./User.model');
// console.log("hello")
var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
usernameField:"username",
passwordField:"password"



},



function(username, password, done) {
  console.log(username)
  console.log(password)
 
  user.findOne({ _id: username}, function (err, user) {
    if(err) throw err
    if (!user) {
      
      return done(null, false, { message: 'Incorrect username and password' });
    }
  
  bcrypt.compare(password, user.password, (err, result) => {
  if (err) throw err;

  else if(result==true) {
    console.log("yes")
    return done(null, user);
  } 
  else{
    return done(null,false,{message:"incorrect usename and password"})
  }
  
});
  
});
})
);



passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  user.findById(id, function(err, user) {
    done(err, user);
  });
});
