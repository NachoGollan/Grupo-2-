const express = require ("express")
const router = express.Router()
const productController = require('../controllers/productController')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/vinos'))
    },
    filename: (req, file, cb) => {
        const newFileName = 'product-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName )
    }
})
const upload = multer({ storage })



//EDIT PRODUCTS//
router.get('/edit/:idProductoEditable', productController.editarProducto)
router.put('/edit/:idProductoEditable', productController.actualizarProducto)
router.delete('/edit/:idProductoEditable', productController.borrarProducto)


//CREATE PRODUCTS//

router.get('/create', productController.productCreate)
router.post('/', productController.crearProducto)

router.get('/cart', productController.productCart)


router.get('/list', productController.productList)
//PRODUCT DETAIL
router.get('/:id', productController.obtenerProducto)



module.exports = router