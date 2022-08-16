const express = require('express'); // 
const app = express();
const puerto = process.env.PORT || 3000;
const methodOverRide = require('method-override')


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const mainRoutes = require ('./routes/mainRoutes')
const usersRoutes = require ('./routes/usersRoutes')
const productRoutes = require ('./routes/productRoutes')
app.use(methodOverRide('_method'))

app.use('/', mainRoutes)
app.use('/users', usersRoutes)
app.use('/product', productRoutes)


app.listen(puerto,() => {
    console.log("Servidor corriendo en el puerto " + puerto)
})
