import express from "express";

const app = express();


app.get('/', (req, res)=> res.send("Its Working"));


app.get('/users', ()=>{});

app.listen(3000);