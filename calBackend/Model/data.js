const mongoose=require("mongoose");
const data=new mongoose.Schema({

    username:{type:String},
    password:{type:String}
});

const Data= new mongoose.model("Data",data);
module.exports=Data;