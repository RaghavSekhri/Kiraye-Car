const express=require('express');
const User=require('../models/user');
const auth=require('../middleware/auth');
const validator=require('validator')


const router=new express.Router();

router.post('/user/signup',async (req,res)=>{
    
    var a = req.body.name.split(' ');

    const user=new User(req.body);
    try{
        if(!validator.isAlpha(a[0]))
    {
        throw new Error('Invalid name');
    }
    if(!validator.isAlpha(a[1]))
    {
        throw new Error('Invalid name');
    }
        await user.save();
        const token= await user.generateAuthToken();
        res.status(201).send({name:user.name,token});
    }
    catch(e){
        return res.status(400).json({ Error : e.toString() });
    }
})
router.post('/user/login',async (req,res)=>{
    try{
        
        const user=await User.findByCredentials(req.body.email,req.body.password);
        const token=await user.generateAuthToken();
        res.send({ name:user.name , token});
    }
    catch(e){
        console.log("error")
        return res.status(400).json({ Error: e.toString() });
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
        name:req.user.name,
        email:req.user.email
    });
})
router.patch('/user/update',auth,async(req,res)=>{
    const allowedUpdates=['name','email','password'];
    const updates=Object.keys(req.body);
    const isValid=updates.every((update)=>allowedUpdates.includes(update))
    if(!isValid)
    {
       return res.status(400).send({error : 'Invalid Updates.'})
    }
    try{
    updates.forEach((update)=> req.user[update]=req.body[update]);
    await req.user.save();
    res.send();
    }
    catch(e)
    {
        res.status(400).send(e);
    }
})

module.exports=router;