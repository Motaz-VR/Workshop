const express = require("express");
const app = express();

const arr = ["cs", "swf", "anim", "vr"]
app.get("/", (req,res)=>{
    res.send("hello");
})

app.get("/majors",(req,res)=> {
    res.send(arr)
})

function expressFunction(name,functiontoPrintName){
functiontoPrintName()
}

expressFunction("Motaz", function(){console.log("Nova");});
app.listen(3000,()=>{})