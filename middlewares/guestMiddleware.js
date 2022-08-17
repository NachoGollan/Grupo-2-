
function guestMiddleware (req, res, next ){
    console.log(req.session.usuarioLogueado)
    if (req.session.usuarioLogueado != undefined){
        next ()
    } else{
        res.send('esta página es para usuarios')
    }
}

module.exports = guestMiddleware;