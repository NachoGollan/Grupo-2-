const path = require ("path")
const fs = require('fs')

const productFilePath = path.join(__dirname, '../data/productDataBase.json')
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const mainController = {
    index:(req,res) => {
        let vinos = []
        let espumantes = []
        let destilados = []
        let descuento = []
        
        vinos = products.filter(product => {
            return product.category == 'VINOS'
        }) 

        espumantes = products.filter(product => {
            return product.category == 'ESPUMANTES'
        }) 

        destilados = products.filter(product => {
            return product.category == 'DESTILADOS'
        }) 

        descuento = products.filter(product => {
            return product.descuento != null
        }) 


        res.render('index', {
            vinos: vinos,
            espumantes: espumantes,
            destilados: destilados,
            descuento: descuento

        })
    },
    menu:(req,res) => {
        res.render('menu', {
            
        })
    }

}

module.exports = mainController