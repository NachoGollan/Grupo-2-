const express = require ("express")
const usersController = require("../controllers/usersController")
const router = express.Router()

router.get('/users/login', usersController.login)
router.get('/users/register', usersController.register)

module.exports = router