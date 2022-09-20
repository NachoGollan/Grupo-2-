const express = require ("express")
const router = express.Router()
const productController = require('../controllers/productController')

//PRODUCTOS//
router.get('/vinos', productController.vinos)
// router.get('/espumantes', productController.espumantes)
// router.get('/destilados', productController.vinos)
// router.get('/importados', productController.importados)
// router.get('/accesorios', productController.accesorios)
// router.get('/ofertas', productController.ofertas)

//EDIT PRODUCTS//
router.get('/edit/:idProductoEditable', productController.editarProducto)
router.put('/edit/:idProductoEditable', productController.actualizarProducto)
router.delete('/edit/:idProductoEditable', productController.borrarProducto)


//CREATE PRODUCTS//

router.get('/create', productController.productCreate)
router.post('/', productController.crearProducto)

router.get('/cart', productController.productCart)


router.get('/list', productController.productList)

router.get('/:id', productController.obtenerProducto)

module.exports = router