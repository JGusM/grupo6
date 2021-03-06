// express,  router y multer
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const db = require("../database/models");

const registerValidation = require("../middlewares/registerValidation");
const { validationResult } = require("express-validator");

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
router.get("/login", guestRoute,  controller.getLoginForm);
router.get("/register", guestRoute, controller.getRegisterForm);

router.post("/login", guestRoute, controller.authenticate);
router.post("/", upload.single("image"), controller.storeUser);




//logout
router.post("/logout", userRoute, controller.logout);

//profile
router.get("/profile",  controller.profile);
router.get("/edit",  controller.editProfile);
router.post("/edit/:id",upload.single("profilePicture"),  controller.saveProfile);
// Acá exportamos el resultado
module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible
