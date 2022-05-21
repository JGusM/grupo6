// Acá va express y el router
const express = require('express');
const router = express.Router(); 

// Aca va el controller
const controller = require('../controllers/mainController');


// Acá definimos las rutas
router.get('/', controller.index); 






// Acá exportamos el resultado
module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible
