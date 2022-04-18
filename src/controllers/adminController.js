const path = require("path");
const fs = require("fs");
const db = require("../database/models");

//const productsFilePath = path.join(__dirname, "../data/products.json");
//const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
  dashboard: (req, res) => {
    db.Product.findAll(
      {
        include: ['categories'],
      }
    )
      .then(function (products) {
        res.render("adminDashboard", {
          tituloPagina: "DASHBOARD",
          products,
        });
      })
      .catch((error) => res.send(error));
  },
};

module.exports = controlador;




/*código previo a la db:
const path = require("path");
const fs = require("fs");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
  dashboard: (req, res) => {
    res.render("adminDashboard", { tituloPagina: "DASHBOARD", products });
  }
 };

module.exports = controlador;
*/