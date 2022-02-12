const path = require('path');

const controlador = {
    index: (req, res) => {
        res.render('products', {tituloPagina: "PRODUCTOS"});
    },
    product: (req, res)=>{
        res.render('productDetail', {tituloPagina: "DETALLE PRODUCTO"})
    },
    cart: (req, res)=>{
        res.render('productCart', {tituloPagina: "CARRITO"})
    }   
}

module.exports = controlador