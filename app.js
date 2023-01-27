const express = require('express');
const app = express();
const studentroutes = require('./api/routes/student');
const facultyroutes = require('./api/routes/faculty');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

mongoose.connect('mongodb+srv://annanay:annanay2003@sbs.0egtqus.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error',err=>{
    console.log("connection failed")
})

mongoose.connection.on('connected',connected=>{
    console.log("connected with database")
})

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/student',studentroutes)

// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:"app is running"    
//     });
   
// })

app.use((req,res,next)=>{
    res.status(404).json({
        error:"bad url request"   
    });
   
})

module.exports = app;