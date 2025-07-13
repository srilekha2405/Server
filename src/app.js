const express=require('express');
const { adminAuth } = require('./middlewares/auth');
const app=express();

app.use('/admin',adminAuth)
app.get('/admin/getAllData',(req,res)=>{
    res.send('All data sent')
});
app.get('admin/deleteUser',(req,res)=>{
    res.send("delete a user")
})

app.listen(3000, ()=>{
    console.log('server is successfully listening on port 3000...')
})