const path = require ("path")
const fs = require('fs')

const productFilePath = path.join(__dirname, '../data/productDataBase.JSON')
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const mainController = {
    index:(req,res) => {
        res.render('index', {
            
        })
    },
    menu:(req,res) => {
        res.render('menu', {
            
        })
    }

}

module.exports = mainController