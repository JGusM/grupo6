const path = require("path");
const fs = require("fs");
let db = require("../database/models");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
  allProducts: (req, res) => {
    res.render("products", { tituloPagina: "PRODUCTOS", products, toThousand });
  },
  detail: (req, res) => {
    let id = req.params.id;
    let product = products.find((product) => product.id == id);
    res.render("productDetail", {
      tituloPagina: "DETALLE PRODUCTO",
      product,
      toThousand,
    });
  },
  cart: (req, res) => {
    res.render("productCart", { tituloPagina: "CARRITO" });
  },
  // controlador para mostar formulario de creación:
  getformCreate: (req, res) => {
    res.render("productCreate", {
      tituloPagina: "CARGAR PRODUCTO",
    });
  },

  /* CRUD de DB: "getFormCreate:" quedaría así:
 Acá solamente se muestra el formulario de creación, puede quedar cómo estaba
 ya que no se vincula al JSON/ o BD, es sólo una vista estática */

  /*
  create: (req, res) => {
    //lo siguiente es un destructuring:
    const { name, price, discount, category, description } = req.body;

    const nuevoProducto = {
      id: products[products.length - 1].id + 1,
      name: name,
      price: price,
      discount: discount,
      category: category,
      description: description,
      //Descomente la img y puse el req.file.filename
      image: req.file.filename,
    };
    products.push(nuevoProducto);
    let productJSON = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, productJSON);

    res.redirect("/admin/dashboard");
  },
*/

  create: (req, res) => {
    db.Product.create({
      name: req.body.name,
      categoryId: req.body.category,
      image: "" /* req.body.image*/,
      description: req.body.description,
      discount: req.body.discount,
      price: req.body.price,
    })
      .then(() => {
        return res.redirect("/");
      })
      .catch((error) => res.send(error));
  },

  //controlador para mostrar formulario de edición:
  getformEdit: (req, res) => {
    //Traer el id que viene por params
    //Con ese id se hace un filter o find para buscarlo en el json
    //Ese producto que te devuelve el JSON, se lo enviamos a la vista

    //Aca se agrega el producto encontrado para enviarlo
    let id = req.params.id;
    let productFound = products.find((product) => product.id == id);
    res.render("productEdit", {
      tituloPagina: "EDITAR PRODUCTO",
      product: productFound,
    });
  },

  edit: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find((product) => product.id == id);
    productToEdit = {
      id: productToEdit.id,
      ...req.body,
      image: req.file ? req.file.filename : productToEdit.image,
    };

    let newProducts = products.map((product) => {
      if (product.id == productToEdit.id) {
        return (product = { ...productToEdit });
      }
      return product;
    });

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, " "));
    res.redirect("/");
  },

  /* CRUD de DB: "getFormEdit:" quedaría así:
  getFormEdit:  function (req, res){

    let pedidoProducto = db.Product.findByPk(req.params.id);
    let pedidoCategorias = db.Category.findAll();
    Promise.all ([pedidoProducto, pedidoCategorias])

    let pedidoProducto = db.Products.findByPk(req.params.id, {
      include:[{association: "categories"}]
    });
    let pedidoCategorias = db.Categories.findAll();
    promise.all ([pedidoProducto, pedidoCategorias])




    .then (function([Product, Categories]){
      return res.render("productEdit", {Product: Product, Categories:Categories})
      })
      .catch(error => res.send(error))
  }, */

  /*este sería el update: 
   edit: function (req, res){
     db.Product.update({
      name: req.body.name
      categoryId: req.body.category
      image: req.body.image
      description: req.body.description
      discount: req.body.discount
      price: req.body.price
    }, {
       where: { id: req.params.id}
     })
    .then (() => {
      return res.redirect("/"); 
    })
    .catch(eror => res.send(error))
  }, 
*/

  /*
  delete: (req, res) => {
    let id = req.params.id;
    let finalProducts = products.filter((product) => product.id != id);
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(finalProducts, null, " ")
    );
    res.redirect("/admin/dashboard");
  },
*/

  delete: function (req, res) {
    db.Product.destroy({
      where: { id: req.params.id },
      force: true,
    })
      .then(() => {
        return res.redirect("/");
      })
      .catch((error) => res.send(error));
  },
};

module.exports = controlador;
