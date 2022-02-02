// Acá nos falta express y el router
const express = require('express');
const router = express.Router(); 

// Aća nos falta traer el controller
const controller = require('../controllers/productsController');


// Acá definimos las rutas

router.get('/detail', controller.product); 
router.get('/cart', controller.cart); 






// Acá exportamos el resultado
module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible
