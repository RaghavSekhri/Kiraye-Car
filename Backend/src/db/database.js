const mongoose=require('mongoose');
const db_url = require('../config/keys').mongoURI;

console.log(db_url)

mongoose.connect(db_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(res=>{
    console.log("MongoDB Connected")
})