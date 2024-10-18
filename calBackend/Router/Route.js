const express=require("express")
const Data=require("../Model/data")
const route=express.Router();
require("../DB/cont")

route.get("/",(req,res)=>{
    res.send("Home Page");
})/ 
route.post("/saveData",async(req,res)=>{
    try{
        const {username,password}=req.body;
        let employee=new Data({username,password})
        await employee.save();
        res.send("employee Joind")
    }
    catch(e){
        console.log(e)
    }
})
route.get("/getInfo",async(req,res)=>{
    try{
        let data=await Data.find();
        res.send(data);
    }
    catch(e){
        console.log(e);
    }
})
route.put("/editData/:username",async(req,res)=>{
    try{
        let{username}=req.params;
        await Data.findOneAndUpdate({username:username},req.body,{new:true})
        res.send("updated...")        
    }
    catch(e){
        console.log(e)
    }
})
route.delete("/removeData/:username",async(req,res)=>{
    try{
        console.log(req.params);
        const {username}=req.params;
        const data=await Data.findOneAndDelete({username:username});
        res.send("removed");
    }
    catch(e){
        console.log(e);
    }
})
module.exports=route;