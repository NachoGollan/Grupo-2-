const path = require("path")
const fs = require('fs')
const db = require('../database/models')


const productController = {


    productList: (req,res) => {
        let productosDB = db.Product.findAll()
        let marcasDB = db.Brand.findAll()
        Promise.all([productosDB, marcasDB])
            .then( function ([prodDB,brandsDB]) {
               res.render('product/productList', { prodDB,brandsDB})  
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
        if (req.file) {
        db.Product.create({
            product_name: req.body.name,
            descript: req.body.description,
            category_id: req.body.category,
            brand_id: req.body.brand,
            image: req.file.filename,
            discount: req.body.descuento,
            details: req.body.details,
            offer: req.body.enOferta,
            price: req.body.price,
            imported: req.body.imported
        })
        
        res.redirect('/')

    }
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
        
    },  vinos: (req,res) => {
        db.Product.findAll()
            .then(( productos ) => {
                let productosDB = []
                productoDB = productos.filter(product => {
                    return productos.category_id == 1
                }) 

               res.render('product/productos', { productosDB })
            })
        
    },
    apiProduct: (req, res) => {
        let productos = db.Product.findAll()


        // let categorias = (id) => {
        //     let dbCategorias = db.Category.findAll()
        //     for(i=0; i<dbCategorias.length; i++){
        //     }
        // }


        let vino = db.Product.findAll({
            where: {
                category_id : 1
            }
        })
        let espumantes = db.Product.findAll({
            where: {
                category_id : 2
            }
        })
        let destilados = db.Product.findAll({
            where: {
                category_id : 3
            }
        })
        let accesorios = db.Product.findAll({
            where: {
                category_id : 4
            }
        })
        Promise.all([productos, vino, espumantes, destilados, accesorios])
        .then(([productos, vino, espumantes, destilados, accesorios]) => {
            return res.json({
                count: productos.length,
                products: productos,
                countByCategory: {
                    vinos: vino.length,
                    espumantes: espumantes.length,
                    destilados: destilados.length,
                    accesorios: accesorios.length
                }
            })
        })
    },
    apiProductId: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(producto => {
            return res.json({
                product_name: producto.product_name,
                descript: producto.descript,
                category_id: producto.category_id,
                brand_id: producto.brand_id,
                image: producto.image,
                discount: producto.discount,
                details: producto.details,
                offer: producto.offer,
                price: producto.price,
                imported: producto.imported
            })
        })
    }



}


module.exports = productController