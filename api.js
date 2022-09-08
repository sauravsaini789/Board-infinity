const express=require('express');
const { MongoDBNamespace } = require('mongodb');
const dbConnect=require('./mongo1');
const app=express();

app.use(express.json()); 

app.get('/', async (req,resp)=>{
    let data=await dbConnect();
    data =await data.find().toArray();
    console.log(data)
    resp.send(data)

});


app.post('/', async (req,resp)=>{
    let data=await dbConnect();
    let result=await data.insert(req.body);
    resp.send(result)
   
});
app.listen(4000);