// express,  router y multer
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Almacenamiento de Multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/products");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage });

// Requerir controller
const controllerP = require("../../controllers/api/products/apiControllerProducts");
const controllerU = require("../../controllers/api/users/apiControllerUser");

// Acá definimos las rutas

//ruta del USUARIOS
router.get("/users", controllerU.users);
router.get("/user/:id", controllerU.userId);

// Lista todos los productos:
router.get("/products", controllerP.products);
router.get("/productsCategory", controllerP.productsCategory);
router.get("/product/:id", controllerP.detalleProduct);
/*
//Ruta para obtener 1 único producto
// /detail/:id (GET)
router.get("/detail/:id", controller.detail);

// Ruta obtener la vista del formulario donde se crea el producto
// /create (GET)
router.get("/create", controller.getformCreate);

// Ruta donde se envía el formulario del producto a cargar
router.post("/create", upload.single("image"), controller.create);

// Ruta para obtener vista del formulario con datos del producto
// /:id/edit (GET)
router.get("/:id/edit", controller.getFormEdit);

// Ruta para EDITAR producto
// /:id (PUT)
//En las rutas faltaba escribir un edit
//Cambie el metodo para que pueda recibir la imagen nueva y actualizar
router.patch("/:id/edit", upload.single("image"), controller.edit);

//Ruta para filtrar por Clave foránea
router.get("/:fk", controller.allProductsFk)
// Ruta para ELIMINAR producto
// /:id (DELETE)
router.delete("/:id", controller.delete);

// Acá exportamos el resultado*/
module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible
