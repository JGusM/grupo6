// Acá nos falta express y el router
const express = require("express");
const router = express.Router();

// Aća nos falta traer el controller
const controller = require("../controllers/adminController");

// Acá definimos las rutas

//ruta pra obtener todos los productos para borrar, editar y crear
router.get("/dashboard", controller.dashboard);

//router.get("/cargar", controller.create);   HABRÍA QUE BORRARLO
//router.get("/editar", controller.edit);      HABRÍA QUE BORRARLO

// Acá exportamos el resultado
module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible
