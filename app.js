const express = require('express'); // 
const path = require('path');
const app = express();
const puerto = 3000;
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/index.html'))
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'))
});
app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'))
});
app.get('/productDetails', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/productDetails.html'))
});

app.get('/productCart', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/productCart.html'))
});

app.listen(puerto,() => {
    console.log("Servidor corriendo en el puerto " + puerto)
})
