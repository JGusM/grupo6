// Acá nos falta express y el router
const express = require("express");
const router = express.Router();

// Aća nos falta traer el controller
const controller = require("../controllers/adminController");

// Acá definimos las rutas
router.get("/cargar", controller.create);
router.get("/editar", controller.edit);
router.get("/dashboard", controller.dashboard);

// Acá exportamos el resultado
module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible
