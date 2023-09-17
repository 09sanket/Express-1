const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname , 'public');

// app.use(express.static(publicPath)); commenting because do nit use this during removing urls 

app.get('' , (req , resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
});


app.get('/about' , (req , resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});


app.get('*' , (req , resp)=>{
    resp.sendFile(`${publicPath}/errorpage.html`)
});

app.listen(5000);