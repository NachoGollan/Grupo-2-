const express = require ("express")
const router = express.Router()
const productController = require('../controllers/productController')

//CREATE PRODUCTS//
router.get('/productCreate', productController.productCreate)
router.post('/', productController.crearProducto)

//EDIT PRODUCTS//
router.get('/productEdit', productController.editarProducto)
router.get('/productEdit/:idProductoEditable', productController.editarProducto)
router.put('/productEdit', productController.actualizarProducto )


router.get('/productDetails', productController.productDetails)
router.get('/productCart', productController.productCart)
router.get('/:id', productController.obtenerProducto)





module.exports = router