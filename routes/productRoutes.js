const express = require ("express")
const productController = require("../controllers/productController")
const router = express.Router()

router.get('/productDetails', productController.productDetails)
router.get('/productCart', productController.productCart)
router.get('/productCreate', productController.productCreate)

module.exports = router