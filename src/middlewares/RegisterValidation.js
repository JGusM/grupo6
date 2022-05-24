const { check } = require("express-validator");
const db = require("../database/models");

const registerValidation = [

   check("password")
     .notEmpty()
     .withMessage("Debe ingresar una Contraseña")
     .bail()
     .isLength({ min: 5, max: 20 })
     .withMessage("La Contraseña debe tener entre 5 y 20 caracteres")
     .bail(),
  check("rePassword")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Las contraseñas ingresadas deben coincidir"),

];

module.exports = registerValidation;