const path = require("path")
const fs = require('fs')

const productFilePath = path.join(__dirname, '../data/productDataBase.JSON')
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
        res.render('product/productCreate', {

        })
    },
    crearProducto: (req, res) => {
        let data = req.body
        let newProduct =
        {
            id: products[products.lenght - 1].id + 1,
            name: data.name,
            description: data.description,
            image: '',
            category: data.category,
            price: data.price,
        }
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
        res.redirect('/')
    },
    obtenerProducto: (req, res) => {
        const idProducto = req.params.id;
        const producto = products.find(element => {
            return element.id == idProducto;
        });
        
        res.render('product/productDetails', { producto: producto })
    },
    editarProducto: (req, res) => {
        const idProducto = req.params.idProducto;

        const producto = products.find(element => {
            return element.id == idProducto;
        });

        const productoEditado = producto[idProducto]
        res.render ('product/productEdit', {productoEditado: productoEditado})
    }, 

}

module.exports = productController