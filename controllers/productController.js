const path = require ("path")


const productController = {
    productDetails:(req,res) => {
        res.render('productDetails', {
            
        })
    },
    productCart:(req,res) => {
        res.render('/product/productCart', {
            
        })
    },
    productCreate:(req,res) => {
        res.render('productCreate', {
            
        })
    }
    

}

module.exports = productController