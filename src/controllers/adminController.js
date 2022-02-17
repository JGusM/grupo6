const path = require("path");

const controlador = {
  dashboard: (req, res) => {
    res.render("adminDashboard", { tituloPagina: "DASHBOARD" });
  },
  // ESTOS HABRÍA QUE BORRARLOS PORQUE LOS PUSE EN PRODUCTS COMO DICE EL SPRINT 4
  //create: (req, res) => {
  // res.render("productCreate", { tituloPagina: "CARGAR PRODUCTO" });
  // },
  //edit: (req, res) => {
  //res.render("productEdit", { tituloPagina: "EDITAR PRODUCTO" });
  // },
};

module.exports = controlador;
