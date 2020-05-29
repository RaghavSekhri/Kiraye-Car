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
        let filteredCars = result.filter(car=>{
            return car.build.body_type===type
        })
        let activeCars = filteredCars.filter(car=>{
            return car.booked===false
        })
        let bookedCars = filteredCars.filter(car=>{
            return car.booked===true
        })

        return res.status(201).json({activeCars,bookedCars})
    }).catch(e=>{
        console.log(e)
    })
    
})

module.exports=router;