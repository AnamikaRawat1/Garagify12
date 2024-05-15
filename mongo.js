const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/mydatabase")
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
console.error('database connection failed')
})

const bookingschema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:String,
    location:String

})
const bookingcollection=new mongoose.model('bcollection',bookingschema);
 
module.exports=bookingcollection;