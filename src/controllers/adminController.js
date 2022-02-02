const path = require('path');

const controlador = {
    create:  (req, res)=>{
        res.render('productCreate', {tituloPagina: "CARGAR PRODUCTO"})
    },
    edit:  (req, res)=>{
        res.render('productEdit', {tituloPagina: "EDITAR PRODUCTO"})
    }
}

module.exports = controlador;