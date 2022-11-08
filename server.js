const express = require('express');
const app=express();
require('dotenv').config()
console.log(process.env.STATUS);

const PORT=process.env.PORT;



app.get('/', home)
app.get('/show', show)

function home(req, res) {
    res.sendFile('index.html', {root: __dirname});
  }

function show(req, res) {
    res.send()
  }



    app.listen(PORT,()=>{
        console.log("App runing on : "+PORT);
    });

