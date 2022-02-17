const path = require("path");

const controlador = {
  allProducts: (req, res) => {
    res.render("products", { tituloPagina: "PRODUCTOS" });
  },
  product: (req, res) => {
    res.render("productDetail", { tituloPagina: "DETALLE PRODUCTO" });
  },
  cart: (req, res) => {
    res.render("productCart", { tituloPagina: "CARRITO" });
  },
  // controlador para mostar formulario de creación:
  getformCreate: (req, res) => {
    res.render("productCreate", { tituloPagina: "CARGAR PRODUCTO" });
  },

  // create: (req, res) => {
  // ...
  // },
  //controlador para mostrar formulario de edición:
  getformEdit: (req, res) => {
    res.render("productEdit", { tituloPagina: "EDITAR PRODUCTO" });
  },
  // edit: (req, res) => {
  // ...
  //},
  // delete: (req, res) => {
  // ...
  // },
};

module.exports = controlador;
