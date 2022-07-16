const express = require ("express")
const router = express.Router()

const productsController = require("../controllers/productController")

router.get('/productDetails', productsController.productDetails)
router.get('/productCart', productsController.productCart)

//CREATE ONE PRODUCTS//
router.get('/productCreate', productsController.productCreate)
router.post('/', productsController.crearProducto)


module.exports = router