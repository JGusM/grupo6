// Acá nos falta express y el router
const express = require("express");
const router = express.Router();
const adminRoute= require("../middlewares/adminRoute");

// Aća nos falta traer el controller
const controller = require("../controllers/adminController");

// Acá definimos las rutas

//ruta pra obtener todos los productos para borrar, editar y crear
router.get("/dashboard", adminRoute, controller.dashboard);

router.get("/users", adminRoute, controller.adminUsers);

// Acá exportamos el resultado
module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible
