const express = require ("express")
const router = express.Router()
const productController = require('../controllers/productController')

//CREATE ONE PRODUCTS//
router.get('/productCreate', productController.productCreate)
router.post('/', productController.crearProducto)

router.get('/productDetails', productController.productDetails)
router.get('/productCart', productController.productCart)
router.get('/:id', productController.obtenerProducto)




module.exports = router