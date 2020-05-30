const express=require('express');
const User=require('../models/user');
const auth=require('../middleware/auth');
const validator=require('validator')
const { sendWelcomeEmail }=require('../emails/account.js')
const validate = require('../validation/validd');
const bcrypt=require('bcryptjs');

const router=new express.Router();

router.post('/user/signup',async (req,res)=>{
    //console.log(req.body)
    const { errors, isValid } = validate(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(201).json({"Error":errors});
    }

    User.findOne({ email: req.body.email }).then(async user => {
        if (user) {
          errors.email = 'Email already exists';
          return res.status(201).json({"Error":errors});
        }

        try{
            const user=new User(req.body);
            await user.save();
            sendWelcomeEmail(user.email,user.Fname+" "+user.Lname);
            const token= await user.generateAuthToken();
            res.status(201).send({Fname:user.Fname,Lname:user.Lname,email:user.email,bookedCars:user.bookedCars,token});
        }catch(e){
            return res.status(400).json({ Error : e.toString() });
        }
        
    })

    
})
router.post('/user/login',async (req,res)=>{
    try{
        
        const user=await User.findByCredentials(req.body.email,req.body.password);
        const token=await user.generateAuthToken();
        res.send({Fname:user.Fname,Lname:user.Lname,email:user.email,bookedCars:user.bookedCars,token});
    }
    catch(e){
        console.log(e)
        return res.status(201).json({ Error: e });
    }
})
router.post('/user/logout',auth,async (req,res)=>{
    try{
        req.user.tokens=req.user.tokens.filter((token)=>{
            return token.token!==req.token;
        })
        await req.user.save();
        res.send();
    }
    catch(e){
        res.status(500).send();
    }

})
router.get('/user/me',auth,async (req,res)=>{
    res.send({ 
        Fname:req.user.Fname,
        Lname:req.user.Lname,
        email:req.user.email,
        bookedCars:req.user.bookedCars
    });
})
router.patch('/user/update',auth,async(req,res)=>{
    const allowedUpdates=['Fname','Lname','email','password'];
    const match=await bcrypt.compare(req.body.password0,req.user.password);
    delete req.body.password0
    if(!match)
    {
        res.status(201).send({Error:"Incorrect Previous Password"})
    }
    const updates=Object.keys(req.body);
    const valid=updates.every((update)=>allowedUpdates.includes(update))
    if(!valid)
    {
       return res.status(400).send({error : 'Invalid Updates.'})
    }


    try{
        updates.forEach((update)=> req.user[update]=req.body[update]);
        await req.user.save();
        res.send({Fname:req.user.Fname,Lname:req.user.Lname,email:req.user.email,bookedCars:req.user.bookedCars});
    }
    catch(e)
    {
        res.status(400).send(e);
    }
})

module.exports=router;