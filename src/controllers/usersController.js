const path = require('path');

const controlador = {
    login:  (req, res)=>{
        res.render('login', {tituloPagina: "LOGIN"})
    },
    register:  (req, res)=>{
        res.render('register', {tituloPagina: "REGISTER"})
    }
}

module.exports = controlador