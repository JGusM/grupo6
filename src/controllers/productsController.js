const path = require('path');

const controlador = {
    product: (req, res)=>{
        res.render('productDetail')
    },
    cart: (req, res)=>{
        res.render('productCart')
    }   
}

module.exports = controlador