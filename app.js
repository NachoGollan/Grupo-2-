// todos los requieres, constantes y variables.
const path = require('path');
const express = require('express');
const app = express();
const puerto = 3000;

// configuraciones
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//rutas
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/index.html'));
});

//levantar nuestro server
app.listen(puerto,() => {
    console.log("Servidor corriendo en el puerto" + puerto);
})
