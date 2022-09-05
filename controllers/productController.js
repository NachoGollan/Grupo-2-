const path = require("path")
const fs = require('fs')
const db = require('../database/models')

const productFilePath = path.join(__dirname, '../data/productDataBase.json')
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const productController = {
    productDetails: (req, res) => {
        res.render('product/productDetails', {

        }) 
    },
    productCart: (req, res) => {
        res.render('product/productCart', {

        })
    },
    productCreate: (req, res) => {
        db.Category.findAll()
            .then(function(category) {
                return res.render('product/productCreate', { category:category})
            })
        db.Brand.findAll()
            .then(function(brand) {
                return res.render('product/productCreate', { brand:brand})
            })
    },
    crearProducto: (req, res) => {
        db.Product.create({
            product_name: req.body.name,
            descript: req.body.description,
            category_id: req.body.category,
            image: '',
            discount: req.body.descuento,
            offer: req.body.enOferta,
            price: req.body.price,
            imported: req.body.imported
        })
        
        res.redirect('/')
    },
    obtenerProducto: (req, res) => {
        let idProducto = req.params.id;
        const producto = products.find(element => {
            return element.id == idProducto;
        });
        
        res.render('product/productDetails', { producto })
    },
    editarProducto: (req, res) => {
        let idProduct = req.params.idProductoEditable
        let productoEditable = products.find((product) => {
            return product.id === +idProduct
        })

         res.render ('product/productEdit', {productoEditable})
    }, 
    actualizarProducto: (req,res) => {
        let idProduct = req.params.idProductoEditable
        let productsCopy = products
        let producto = productsCopy.find((product) => {
            return product.id === +idProduct
        })
        
            producto.name = req.body.name 
            producto.description = req.body.description
            producto.category = req.body.category
            producto.descuento = req.body.descuento
            producto.price = req.body.price
            producto.enOferta = req.body.enOferta
            producto.imported= req.body.imported
        

            let newProducts = [
                ...productsCopy
            ]
            
            fs.writeFileSync(productFilePath, JSON.stringify(newProducts, null, ' '))
            res.render('product/productDetails', {producto} )
    },
    borrarProducto: (req, res) => {
        let idProducto = req.params.idProductoEditable;
        const productsCopy = products
        const newProducts = productsCopy.filter(element => {
            return element.id !== +idProducto;
        })
        
        fs.writeFileSync(productFilePath, JSON.stringify(newProducts, null, ' '))
        res.redirect('/')
        
    }

    }


module.exports = productController