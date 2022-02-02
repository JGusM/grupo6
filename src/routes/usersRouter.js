// Acá nos falta express y el router
const express = require('express');
const router = express.Router(); 

// Aća nos falta traer el controller
const controller = require('../controllers/usersController');


// Acá definimos las rutas
router.get('/login', controller.login); 
router.get('/register', controller.register); 






// Acá exportamos el resultado
module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible
