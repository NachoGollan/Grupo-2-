const path = require("path")
const fs = require('fs')

const productFilePath = path.join(__dirname, '../data/users.json')
const users = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const usersController = {
    register:(req,res) => {
        res.render('users/register', {
            
        })
    },
    login:(req,res) => {
        res.render('users/login', {
            
        })
    },
    createUser:(req,res) => {
        if (req.file) {
        let data = req.body
        let newUser =
        {        
            id: users[users.length - 1].id + 1,
            first_name: data.first_name,
            last_name: data.last_name,
            image: req.file.filename,
            email: data.email,
            password: data.password,
            birthday: data.birthday,
        }
        users.push(newUser)
            fs.writeFileSync(productFilePath, JSON.stringify(users, null, ' '))
        res.redirect('/')
    } else {
        res.render('users/register')
    }
    }
}

module.exports = usersController 