const express=require('express');
const Car=require('../models/cars');
const auth=require('../middleware/auth');
const router=new express.Router();


router.get('/cars',(req,res)=>{
    
    Car.find({}).then(result=>{
        return res.status(201).json(result);
    }).catch(e=>{
        console.log(e)
    })
    
})

router.get('/mycars',auth,async (req,res)=>{
    
    let carids = req.user.bookedCars
    let i

    let cars=[]

    for(i=0;i<carids.length;i++)
    {
        let carr = await Car.findById(carids[i].carId)
        let obj={
            "car":carr,
            "bookData":carids[i]
        }
        cars.push(obj)
    }

    res.status(201).json(cars)
})

router.post('/bookcar',auth,async (req,res)=>{
    
    let car = await Car.findById(req.body.carId)

    if(car.booked)
    {
        return res.status(201).json({"Error":"Car Already Booked. Please Select Another Car"});
    }
    req.body.returned=false
    req.user.bookedCars.push(req.body)
    await req.user.save();
    car.booked=true;
    car.bookedTime=req.body.bookedTime
    car.returnTime=req.body.returnTime
    car.UserId=req.user._id
    await car.save();

    res.send()
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