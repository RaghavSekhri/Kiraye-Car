const express=require('express');
const Car=require('../models/cars');

const router=new express.Router();


router.get('/cars',(req,res)=>{
    
    Car.find({}).then(result=>{
        return res.status(201).json(result);
    }).catch(e=>{
        console.log(e)
    })
    
})

router.get('/cartype',(req,res)=>{

    let type = req.query.type

    Car.find({}).then(result=>{
        var filteredCars = result.filter(car=>{
            return car.build.body_type===type
        })
        return res.status(201).json(filteredCars)
    }).catch(e=>{
        console.log(e)
    })
    
})

module.exports=router;