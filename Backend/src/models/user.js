const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


const userSchema=new mongoose.Schema({
 Fname:{
     type:String,
     required:true,
     trim:true
 },
 Lname:{
    type:String,
    required:true,
    trim:true
 },
 email:{
     type:String,
     required:true,
     trim:true,
     unique:true,
     lowercase:true
 },
 password:{
     type:String,
     required:true,
     trim:true,
     minlength:6,
     validate(value){
         let a=value.toLowerCase();
         if(a.includes('password'))
         {
             throw new Error('Your Password contains the word "password" ');
         }
     }
 },
 tokens:[{
     token:{
        type:String,
        required:true
     }
    
     
 }]

});

userSchema.methods.generateAuthToken=async function(){
    const user=this;
    const token=jwt.sign({_id: user._id.toString()},process.env.JWT_SECRET,{  expiresIn:'1d' });
    user.tokens=user.tokens.concat({ token });
    await user.save();
    return token;
}
userSchema.statics.findByCredentials=async (email,password)=>{
    if(email.length===0 || !validator.isEmail(email) || password.length===0)
    {
        
        throw('Email or Password is Invalid');
    }
    

    const user= await User.findOne({ email });
    if(!user)
    {
        throw('Email Not Registered.');
    }
    const match=await bcrypt.compare(password,user.password);
    if(!match)
    {
        throw('Incorrect Password.');
    }
   return user;

}
userSchema.pre('save',async function(next){
    const user=this;
    if(user.isModified('password'))
    {
        user.password= await bcrypt.hash(user.password,8);
    }
    next();
})
const User=mongoose.model('User',userSchema);
module.exports=User;
