const path = require('path');

const controlador = {
    product: (req, res)=>{
        res.render('productDetail', {tituloPagina: "PRODUCTO"})
    },
    cart: (req, res)=>{
        res.render('productCart', {tituloPagina: "CARRITO"})
    }   
}

module.exports = controlador