const mongoose=require('mongoose');


const carSchema=new mongoose.Schema({
    vin:{
        type:String,
        required:true,
    },
    heading:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    miles:{
        type:Number,
        required:true,
    },
    exterior_color:{
        type:String,
        required:true,
    },
    interior_color:{
        type:String,
        required:true,
    },
    booked:{
        type:Boolean,
        default: false
    },
    bookedTime:{
        type:String,
        default: ""
    },
    returnTime:{
        type:String,
        default: ""
    },
    scraped_at:{
        type:Number,
        required:true,
    },
    scraped_at_date:{
        type:String,
        required:true,
    },
    build:{
        type:Object,
        required:true,
        trim:true
    },
    media:{
        type:Object
    }
});

const Car=mongoose.model('Car',carSchema);
module.exports=Car;