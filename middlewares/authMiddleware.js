function authMiddleware (req, res, next ){
    if (req.session.usuarioLogueado != undefined){
        next ()
    } else{
        res.send('esta página es para invitados')
    }
}

module.exports = authMiddleware;