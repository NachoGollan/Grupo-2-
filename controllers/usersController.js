const path = require ("path")


const usersController = {
    register:(req,res) => {
        res.render('/users/register', {
            
        })
    },
    login:(req,res) => {
        res.render('login', {
            
        })
    }

}

module.exports = usersController