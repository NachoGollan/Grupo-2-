const express = require ("express")
const usersController = require("../controllers/usersController")
const multer = require('multer')
const router = express.Router()
const path = require('path')

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

router.get('/login', usersController.login)
router.get('/register', usersController.register)

router.post('/', upload.single('image'), usersController.createUser)

module.exports = router