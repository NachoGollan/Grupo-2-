const express = require ("express")
const router = express.Router()
const productController = require('../controllers/productController')



//EDIT PRODUCTS//
//router.get('/productEdit', productController.editarProducto)
//router.put('/productEdit', productController.actualizarProducto )
router.get('/edit/:idProductoEditable', productController.editarProducto)
router.put('/edit/:idProductoEditable', productController.actualizarProducto)
router.delete('/edit/:idProductoEditable', productController.borrarProducto)





// router.get('/', productController.productDetails)
router.get('/:id', productController.obtenerProducto)
router.get('/cart', productController.productCart)

//CREATE PRODUCTS//
router.get('/create', productController.productCreate)
router.post('/', productController.crearProducto)




module.exports = router