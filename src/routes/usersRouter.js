// express,  router y multer
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Almacenamiento de Multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/users");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage });

// controller
const controller = require("../controllers/usersController");
const guestRoute = require("../middlewares/guestRoute");
const userRoute = require("../middlewares/userRoute");

// Acá definimos las rutas
router.get("/login", controller.getLoginForm);
router.get("/register", controller.getRegisterForm);

router.post("/login", guestRoute, controller.authenticate);
router.post("/", guestRoute, upload.single("image"), controller.storeUser);

//logout
router.post("/logout", userRoute, controller.logout);
router.get("/profile", /* userRoute,*/ controller.profile);

// Acá exportamos el resultado
module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible
