const express=require('express');
const app=express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const staticFilesDirectory = path.join(__dirname, 'templates');
app.use(express.static(staticFilesDirectory));
const Collection=require('./mongo.js')

app.get('/garagify.com',(req,res)=>{
    res.sendFile(path.join(__dirname,'tempindex.html'))
})
app.get('/testimonial.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'testimonial.html'))
})
app.get('/booking',(req,res)=>{
    res.sendFile(path.join(__dirname,'booking.html'))
})
 app.get('/time',(req,res)=>{
    res.sendFile(path.join(__dirname,'time.html'))
 })
 

app.post('/booking', async (req, res) => {
    console.log("entered in post")
    const data = {
        username: req.body.username,
        password: req.body.password,
        location: req.body.location
    };
    console.log("entered in post2")
    try {
        
        await Collection.insertMany([data]);
        res.sendFile(path.join(__dirname,'time.html'))
        
        
    } catch (error) {
        
        console.error('Error inserting data:', error);
        res.status(500).send('An error occurred while inserting data.');

    }
    
});
app.listen(7070,(err)=>{
    if(err){
        console.log('error found');
    }else{
        console.log('succesfully');
    }
})