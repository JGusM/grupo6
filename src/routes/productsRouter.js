// Acá nos falta express y el router
const express = require("express");
const router = express.Router();

// Aća nos falta traer el controller
const controller = require("../controllers/productsController");

// Acá definimos las rutas

//ruta del carrito
router.get("/cart", controller.cart);

// Lista todos los productos:
router.get("/", controller.allProducts);

//Ruta para obtener 1 único producto
// /detail/:id (GET)
router.get("/detail/:id", controller.detail); 

// Ruta obtener la vista del formulario donde se crea el producto
// /create (GET)
router.get("/create", controller.getformCreate);

// Ruta donde se envía el formulario del producto a cargar
router.post("/create", controller.create);

// Ruta para obtener vista del formulario con datos del producto
// /:id/edit (GET)
router.get("/:id/edit", controller.getformEdit);

// Ruta para EDITAR producto
// /:id (PUT)

// Ruta para ELIMINAR producto
// /:id (DELETE)

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
