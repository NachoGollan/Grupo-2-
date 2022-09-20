const express = require ("express")
const mainController = require("../controllers/mainController")
const router = express.Router()


router.get('/', mainController.index)
router.get('/menu', mainController.menu)


module.exports = router