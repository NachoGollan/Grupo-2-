const path = require('path')
const fs = require('fs')
const productFilePath = path.join(__dirname, '../data/productDataBase.json')
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const productsController = {
    productDetails:(req,res) => {
        res.render('product/productDetails')
    },
    productCart:(req,res) => {
        res.render('product/productCart')
    },
    productCreate:(req,res) => {
        res.render('product/productCreate')
    },
    crearProducto: (req,res) => {
        let newProduct =
        {
            id: products[products.length -1].id +1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            image: '',
            categoria: req.body.categoria,
            precio: req.body.precio
        }
    products.push(newProduct)
    fs.writeFileSync(productFilePath, JSON.stringify(products, null, ' '))
    res.redirect('/')
    },
   





}

module.exports = productsController