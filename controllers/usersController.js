const path = require("path")
const db = require('../database/models')
const productFilePath = path.join(__dirname, '../data/users.json')

const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs')

const usersController = {

    register:(req,res) => {
        db.UserRole.findAll()
        .then(function(roles){
            res.render('users/register', {roles})
        })
        
    },
    
    createUser:(req,res) => {
        if (req.file) {
        db.User.create({
            user_name: req.body.user_name,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            role_id: req.body.roleId,
            image: req.file.filename,
            email: req.body.email,
            passwd: bcryptjs.hashSync(req.body.password, 10),
            birthday: req.body.birthday
        })
        
        res.redirect('/')
        
    }
        
    },
    
    login:(req,res) => {
        res.render('users/login', {  
        })
    },

    processLogin: (req,res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()){
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then((usuario) => {
                    
                    if(usuario && (bcryptjs.compareSync(req.body.password, usuario.passwd))){
                        req.session.usuarioLogueado = usuario
                        res.render('users/login', {usuario})                
                    }else{
                            return res.render('users/login', {errors:[{msg: 'Contraseña incorrecta'}]})
                    }
                })         
        }else{
            return res.render('users/login', {errors:[{msg: 'Complete los campos'}]})
        }
    },    

    profile:(req,res) => {
        let usersList = db.User.findByPk(req.params.id)
        let userRole = db.UserRole.findAll()
        Promise.all([usersList, userRole])
        .then(function([user, role ]) {
    
            return res.render('users/profile', { user, role})
        })       
    },

    editProfile:(req,res) => {
        //if (req.file) { POR EL MOMENTO EL UPDATE CON ESTE IF COMENTADO
        db.User.update({
            
            user_name: req.body.user_name,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            role_id: req.body.roleId,
            //image: req.file.filename,
            email: req.body.email,
            passwd: bcryptjs.hashSync(req.body.password, 10),
            birthday: req.body.birthday
        },
          {
            where:{user_id: req.params.id}
          }     
    )
//}
        res.redirect('/')
    
    

    },

    deleteUser: (req, res) => {
        db.User.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.redirect('/')
        
    }

}

module.exports = usersController