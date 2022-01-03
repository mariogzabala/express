const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

app.listen(8000,() =>
    console.log("Levantando un servidor con Express"));

app.get('/', (req,res) => {
    res.send('¡Hola mundo!');
});    
