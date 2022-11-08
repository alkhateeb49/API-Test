const express = require('express');
const app=express();
const port = 5000;
require('dotenv').config()
console.log(process.env);



app.get('/', home)
app.get('/show', show)

function home(req, res) {
    res.sendFile('index.html', {root: __dirname});
  }

function show(req, res) {
    res.send()
  }



    app.listen(port,()=>{
        console.log("App runing on : "+port);
    });

