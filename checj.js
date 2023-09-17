const express = require('express');
const app = express();

app.get('' , (req , resp) =>{
resp.send(`<h1>hello , this is home page</h1> <a href ="/about"> go to about page </a>` )
});

app.get('/about' , (req , resp) =>{
    resp.send(`hello , this is About page  <a href ="/"> go to home page </a>` )
    });

    app.get('/contact' , (req , resp) =>{
        resp.send('hello , this is contact page ')
        });

    app.listen(5000);