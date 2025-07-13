const express=require('express');
const app=express();

app.use('/user', 
    (req,res,next)=>{
        console.log('this is my first route handler');
        //res.send('this is first argument in the use method');
        next();
    },
        
    (req,res,next)=>{
        console.log('this is my second route handler');
        next();
    },
    (req,res,next)=>{
        console.log('this is my third route handler');
        next();
    },
    (req,res,next)=>{
        console.log('this is my fourth route handler');
        next();
    },
    (req,res)=>{
        res.send('this is my fifth route handler')
    }

)

app.listen(3000, ()=>{
    console.log('server is successfully listening on port 3000...')
})