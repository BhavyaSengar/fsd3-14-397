import express from 'express';

const app=express();

app.get("/",(req,res)=>{
    res.send("<h1> Hello Express </h1>")
});

app.get('/about',(req,res)=>{
    res.send("We are FSD Developer")
})

app.use((req,res)=>{
    res.status(404).send("Not Found")
})

app.listen(3333,()=>console.log("Server is Running at 3333"));