const express = require('express');
const path = require('path')
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

app.listen(8000,() => console.log("Levantando un servidor con Express"));

app.get('/', (req,res) => {
    res.send('¡Hola mundo!');
})

app.get('/contacto', function(req, res){
   res.send('Registrate') 
})

let saludo = "Bienvenido/a, ahora estamos en tu perfil"
app.get('/perfil', function(req,res){
    res.send(saludo)
});

let producto = {
    tipoProducto: null, 
    precio: null, 
    cantidad: null
};
app.get('/producto/agregar', (req,res) => {
    res.send(producto)
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/about-us.html'))
});
