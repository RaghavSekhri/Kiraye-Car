const express=require('express');
const Car=require('../models/cars');
const User=require('../models/user');
const auth=require('../middleware/auth');
const router=new express.Router();


router.get('/cars',(req,res)=>{
    
    Car.find({}).then(result=>{
        return res.status(201).json(result);
    }).catch(e=>{
        console.log(e)
    })
    
})

router.patch('/returncar',auth,async(req,res)=>{

    if(req.user.role==="client")
    {
        return res.status(201).json({"Error":"You Are Not Authorized To Do That!"});
    }
    
    Car.findById(req.body.carId).then(async car=>{
        car.booked=false
        car.bookedTime=""
        car.returnTime=""
        
        let user = await User.findById(car.UserId)

        car.UserId=""
        await car.save()
        
        let i;
        for(i=0;i<user.bookedCars.length;i++)
        {
            if(user.bookedCars[i].carId===req.body.carId&&user.bookedCars[i].returned===false)
                break;
        }

        let obj = user.bookedCars[i]
        obj.returned=true

        user.bookedCars.set(i,obj)
        await user.save()

        return res.status(201).json({"Success":true});
    }).catch(e=>{
        console.log(e)
    })
    
})

router.get('/allbookedcars',auth,(req,res)=>{
    
    if(req.user.role==="client")
    {
        return res.status(201).json({"Error":"You Are Not Authorized To Visit this Page."});
    }

    Car.find({}).then(result=>{
        let suv = result.filter(car=>car.build.body_type==="SUV"&&car.booked===true)
        let sedan = result.filter(car=>car.build.body_type==="Sedan"&&car.booked===true)
        let coupe = result.filter(car=>car.build.body_type==="Coupe"&&car.booked===true)
        let wagon = result.filter(car=>car.build.body_type==="Wagon"&&car.booked===true)
        let hatchback = result.filter(car=>car.build.body_type==="Hatchback"&&car.booked===true)
        let pickup = result.filter(car=>car.build.body_type==="Pickup"&&car.booked===true)

        let obj = {suv,sedan,coupe,wagon,hatchback,pickup}

        return res.status(201).json(obj);

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