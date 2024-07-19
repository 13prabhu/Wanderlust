const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
    }
    // yaha  hume sirf email define karni h kuki localmongoose hmare liye username and password automatically define kar deta h 
});

userSchema.plugin(passportLocalMongoose);


// upper passportlocalMOngoose ko as a plugin isliye use kiya h kuki ye hamre liye username,hashpassword ,salting,hashing automatically generate krdega
// Additionally ,passportlocalmongoose adds some methods to your Schema
// passportlocalmongoose hum jo model bnayenge schema ko use krke uske andar methods add krdega 
// such methods are setpassword,changepassword,authenticate,resetAttempt etc

module.exports=mongoose.model("User",userSchema);