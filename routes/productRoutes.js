const express = require ("express")
const router = express.Router()
const productController = require('../controllers/productController')

//EDIT PRODUCTS//
router.get('/edit/:idProductoEditable', productController.editarProducto)
router.put('/edit/:idProductoEditable', productController.actualizarProducto)
router.delete('/edit/:idProductoEditable', productController.borrarProducto)


//CREATE PRODUCTS//

router.get('/create', productController.productCreate)
router.post('/', productController.crearProducto)

router.get('/cart', productController.productCart)
router.get('/:id', productController.obtenerProducto)

router.get('/list', productController.productList)

module.exports = router