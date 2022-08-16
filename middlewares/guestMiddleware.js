function guestMiddleware (req, res, next ){
    if (req.session.usuarioLogueado != undefined){
        next ()
    } else{
        res.send('esta página es para usuarios')
    }
}

module.exports = guestMiddleware;