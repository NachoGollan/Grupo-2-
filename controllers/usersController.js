const path = require("path")
const fs = require('fs')

const productFilePath = path.join(__dirname, '../data/users.json')
const users = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs')

const usersController = {
    register:(req,res) => {
        res.render('users/register', {
            
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
            password: bcryptjs.hashSync(data.password, 10),
            birthday: data.birthday,
        }

        users.push(newUser)
            fs.writeFileSync(productFilePath, JSON.stringify(users, null, ' '))
        res.redirect('/')
    } else {
        res.render('users/register')
    }
    },
    
    login:(req,res) => {
        res.render('users/login', {  
        })
    },

    processLogin: (req,res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()){
            let usuarioALoguearse
        for (i = 0; i < users.length; i++){
            if (users[i].email == req.body.email){
                if (bcryptjs.compareSync(req.body.password, users[i].password)){
                     usuarioALoguearse = users[i] 
                     break;
                }
            } 
        }

        if (usuarioALoguearse == undefined){
            return res.render('users/login', {errors:[{msg: 'Credenciales invalidas'}]})
        }
            req.session.usuarioLogueado = usuarioALoguearse

            res.redirect('/', {usuarioALoguearse} )
        }else{
            return res.render('users/login', {errors:[{msg: 'Complete los campos'}]})

        }
    }
}

module.exports = usersController 