const path = require("path")
const fs = require('fs')
const db = require('../database/models')


const productController = {
    productList: (req,res) => {
    },
    productDetails: (req, res) => {
        res.render('product/productDetails', {

        }) 
    },
    productCart: (req, res) => {
        res.render('product/productCart', {

        })
    },
    productCreate: (req, res) => {
        let obtenerCategorias = db.Category.findAll()
        let obtenerMarcas = db.Brand.findAll()
            Promise.all([obtenerCategorias, obtenerMarcas])
                .then(function([category, brand]) {
                    return res.render('product/productCreate', { category, brand})
                })
    },
    crearProducto: (req, res) => {
        db.Product.create({
            product_name: req.body.name,
            descript: req.body.description,
            category_id: req.body.category,
            brand_id: req.body.brand,
            image: '',
            discount: req.body.descuento,
            details: req.body.details,
            offer: req.body.enOferta,
            price: req.body.price,
            imported: req.body.imported
        })
        
        res.redirect('/')
    },
    obtenerProducto: (req, res) => {
        let producto = db.Product.findByPk(req.params.id)
        let marcas = db.Brand.findAll()
        Promise.all([producto, marcas])
            .then( ([product,brand]) =>{
               res.render('product/productDetails', { product,brand})  
            })
       
    },
    editarProducto: (req, res) => {
        let producto = db.Product.findByPk(req.params.idProductoEditable)
        let listadoCategorias = db.Category.findAll()
        let listadoMarcas = db.Brand.findAll()
        Promise.all([producto, listadoCategorias, listadoMarcas])
        .then(function([productoEditable, category, brand ]) {
            return res.render('product/productEdit', { productoEditable, category, brand})
        })

    }, 
    actualizarProducto: (req,res) => {
        db.Product.update({
            product_name: req.body.name,
            descript: req.body.description,
            category_id: req.body.category,
            brand_id: req.body.brand,
            image: '',
            discount: req.body.descuento,
            details: req.body.details,
            offer: req.body.enOferta,
            price: req.body.price,
            imported: req.body.imported
        }, {
            where: {
                product_id: req.params.idProductoEditable
            }
        })
        res.redirect('/')
    },
    borrarProducto: (req, res) => {
        db.Product.destroy({
            where: {
                product_id: req.params.idProductoEditable
            }
        })
        res.redirect('/')
        
    }

    }


module.exports = productController