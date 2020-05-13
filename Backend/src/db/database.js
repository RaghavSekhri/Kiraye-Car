const mongoose=require('mongoose');
mongoose.connect('mongodb://jaspreet379:qwertyuiop@kiraye-car-shard-00-00-c7zki.mongodb.net:27017,kiraye-car-shard-00-01-c7zki.mongodb.net:27017,kiraye-car-shard-00-02-c7zki.mongodb.net:27017/test?ssl=true&replicaSet=Kiraye-Car-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(res=>{
    console.log("MongoDB Connected")
})