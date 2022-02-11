// Acá nos falta express y el router
const express = require('express');
const router = express.Router(); 

// Aća nos falta traer el controller
const controller = require('../controllers/productsController');


// Acá definimos las rutas

router.get('/', controller.index); 
router.get('/detail', controller.product); 
router.get('/cart', controller.cart); 






// Acá exportamos el resultado
module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible

/*

1. /products (GET)
Listado de productos
2. /products/create (GET)
Formulario de creación de productos
3. /products/:id (GET)
Detalle de un producto particular
4. /products (POST)
Acción de creación (a donde se envía el formulario)
5. /products/:id/edit (GET)
Formulario de edición de productos
6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/:id (DELETE)
Acción de borrado

*/