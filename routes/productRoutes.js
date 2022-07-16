const express = require ("express")
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/:id', productController.obtenerProducto)
router.get('/productDetails', productController.productDetails)
router.get('/productCart', productController.productCart)

//CREATE ONE PRODUCTS//
router.get('/productCreate', productController.productCreate)
router.post('/', productController.crearProducto)


module.exports = router