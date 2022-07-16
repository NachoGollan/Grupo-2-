const path = require ("path")
const fs = require('fs')

const productFilePath = path.join(__dirname, '../data/productDataBase.JSON')
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const mainController = {
    index:(req,res) => {
        let vinos = []
        let espumantes = []
        let destilados = []
        
        vinos = products.filter(product => {
            return product.category == 'vinos'
        }) 

        espumantes = products.filter(product => {
            return product.category == 'espumantes'
        }) 

        destilados = products.filter(product => {
            return product.category == 'destilados'
        }) 

        res.render('index', {
            vinos: vinos,
            espumantes: espumantes,
            destilados
        })
    },
    menu:(req,res) => {
        res.render('menu', {
            
        })
    }

}

module.exports = mainController