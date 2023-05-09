const express = require("express");

const server = express();

server.get("/",(req,res)=>{
    res.send("Hello Word");
});

server.get("/o",(req,res)=>{
    res.send("Hello Word!!!!!");
});

server.get("*",(req,res)=>{
    res.send("NOT FOUND");
});


const port = 3000;
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})