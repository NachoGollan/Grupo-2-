const express = require('express'); // 
const app = express();
const puerto = process.env.PORT || 3001;
const methodOverRide = require('method-override')
const session = require ('express-session')
const cors = require ('cors')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())
app.use(session({
    secret: "Mensaje",
    resave: false,
    saveUninitialized: true 
}))


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
