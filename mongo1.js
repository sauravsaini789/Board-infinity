const { time } = require('console');
const mongoose=require('mongoose');

const main=async()=>{
    await mongoose.connect("mongodb://localhost:27017/saurav");
    const gogo=new mongoose.Schema({
      
Task_Name:String,
Task_description:String,
creator:String,
duration:String,
createdAt:Date
    });

    const yashh=mongoose.model('coll1',gogo);
    let data=new yashh({
        Task_Name:
        "Board Infity",
        Task_description:"this is a online platform source",
        creator:
        "saurav",
        duration:"1800",
        createdAt:{type: Date, default: Date.now, expires: "1800"}});

        

    let result= await data.save();
    console.log(result);
}
main();