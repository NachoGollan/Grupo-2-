const path = require ("path")


const mainController = {
    index:(req,res) => {
        res.render('index', {
            
        })
    },
    menu:(req,res) => {
        res.render('menu', {
            
        })
    }

}

module.exports = mainController