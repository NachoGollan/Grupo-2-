const path = require ("path")
const fs = require('fs')
const db = require('../database/models')

const productFilePath = path.join(__dirname, '../data/productDataBase.json')
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const mainController = {
    index  : (req,res) => {
        db.Product.findAll()
            .then(( productos ) => {
                let vinos = []
                let espumantes = []
                let descuento = []
                let destilados = []
                vinos = productos.filter(product => {
                    return product.category_id == 1
                }) 

                espumantes = productos.filter(product => {
                    return product.category_id == 2
                }) 

                descuento = productos.filter(product => {
                    return product.offer == 1
                }) 
                destilados = productos.filter(product => {
                    return product.category_id == 3
                }) 
               res.render('index', {
                vinos: vinos,
                espumantes: espumantes,
                destilados: destilados,
                descuento: descuento })
            })
    },

    menu:(req,res) => {
        res.render('menu', {
            
        })
    }

}

module.exports = mainController