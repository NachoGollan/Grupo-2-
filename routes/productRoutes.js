const express = require ("express")
const productController = require("../controllers/productController")
const router = express.Router()

router.get('/productDetails', productController.productDetails)
router.get('/productCart', productController.productCart)

//CREATE ONE PRODUCTS//
router.get('/productCreate', productController.productCreate)
router.post('/', productController.crearProducto)


module.exports = router