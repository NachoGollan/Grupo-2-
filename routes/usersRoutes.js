const express = require ("express")
const usersController = require("../controllers/usersController")
const multer = require('multer')
const router = express.Router()
const path = require('path')
const validatorLogin = require ('../middlewares/validatorLogin')

const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const validatorReg = require("../middlewares/validatorRegistro")


const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/profile_images'))
    },
    filename: (req, file, cb) => {
        const newFileName = 'user-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName )
    }
})

const upload = multer({ storage })

//Ruteo login
router.get('/login', usersController.login)
router.post('/login', validatorLogin, usersController.processLogin)

//Ruteo register
router.get('/register',validatorReg, usersController.register)
router.post('/', upload.single('image'), usersController.createUser)

router.get('/profile/:id', usersController.profile)
router.put('/profile/:id', upload.single('image'), usersController.editProfile)
router.delete('/profile/:id', usersController.deleteUser)


//Api routes
router.get('/api/:id', usersController.apiUserId)
router.get('/api', usersController.apiUser)

module.exports = router