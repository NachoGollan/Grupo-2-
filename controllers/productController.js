const path = require("path")
const fs = require('fs')

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
        res.render('product/productCreate', {

        })
    },
    crearProducto: (req, res) => {
        let data = req.body
        let newProduct =
        {        
            id: products[products.length - 1].id + 1,
            name: data.name,
            description: data.description,
            image: '',
            category: data.category,
            price: data.price,
        }
        products.push(newProduct)
        fs.writeFileSync(productFilePath, JSON.stringify(products, null, ' '))
        res.redirect('/')
    },
    obtenerProducto: (req, res) => {
        let idProducto = req.params.id;
        const producto = products.find(element => {
            return element.id == idProducto;
        });
        
        res.render('product/productDetails', { producto: producto })
    },
    editarProducto: (req, res) => {
        let idProduct = req.params.idProductoEditable
        let productoEditable = products[idProduct-1]

            
        res.render ('product/productEdit', {productoEditable: productoEditable})
    }, 
    actualizarProducto: (req,res) => {
        let idProduct = req.params.idProductoEditable
        let producto = products[idProduct-1]

            producto['name'] = productoEditable.name,
            producto['description'] = productoEditable.description,
            producto['image'] = '',
            producto['category'] = productoEditable.category,
            producto['descuento'] = productoEditable.descuento,
            producto['price'] = productoEditable.price,
        
        fs.writeFileSync(productFilePath, JSON.stringify(products))
        res.redirect('product/productEdit/'+idProduct)
    }

    }


module.exports = productController