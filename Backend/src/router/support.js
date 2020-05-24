const express=require('express');
const { sendSupportEmail,sendAcknowledgementEmail }=require('../emails/account.js')

const router=new express.Router();

router.post('/query',(req,res)=>{

    try{
        sendSupportEmail(req.body);
        sendAcknowledgementEmail(req.body.email,req.body.name);
        res.send();
    }
    catch(e)
    {
        res.status(500).send(e);
    }
})
module.exports = router;
