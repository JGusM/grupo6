const path = require('path');

const controlador = {
    index: (req, res)=>{
        res.render('index', {tituloPagina: "HOME"})
    }
}




module.exports = controlador