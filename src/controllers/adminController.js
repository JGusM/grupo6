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
  adminUsers: (req, res) => {
    db.User.findAll()
      .then(function (users) {
        res.render("adminUsers", {
          tituloPagina: "LISTA DE USUARIOS", users
          
        });
      })
      .catch((error) => res.send(error));
  },
  adminIndex: (req, res) => {
    res.render("adminIndex", { tituloPagina: "PAGINA ADMIN" });
  },

  detail: (req, res) => {
    db.User.findByPk(req.params.id)
    .then(user => {
        res.render("profile", {tituloPagina: "DETALLE USUARIO", user,
           });
    });
},
getFormEdit:  function (req, res){
  db.User.findByPk(req.params.id)
  .then (function(user){
  return res.render("userEdit", {tituloPagina:"EDITAR PRODUCTO", user: user})
  })
  .catch(error => res.send(error))
}, 

edit:  async (req, res) => {
  try {
  const userToEdit = await db.User.findByPk(req.params.id);

   db.User.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
      }, {
     where: { id: req.params.id}
   });
 
     res.redirect("/admin/users"); 
  }
  catch(error) { res.send(error)
}}, 

delete: function (req, res) {
  console.log("ENTRE")
  db.User.destroy({
    where: { id: req.params.id },
    force: true,
  })
    .then(() => {
      return res.redirect("/admin/users");
    })
    .catch((error) => res.send(error));
},

}

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