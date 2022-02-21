const path = require("path");
const fs = require("fs");

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
    res.render("productCreate", { tituloPagina: "CARGAR PRODUCTO" });
  },

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
      image: "", //req.file.fieldname,
    };
    products.push(nuevoProducto);
    let productJSON = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, productJSON);

    res.redirect("/");
  },

  //controlador para mostrar formulario de edición:
  getformEdit: (req, res) => {
    res.render("productEdit", { tituloPagina: "EDITAR PRODUCTO" });
  },

  // edit: (req, res) => {
  // let id = req.params.id;
  /* 		let productToEdit = products.find(product => product.id == id)
		let image

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: req.file ? req.file.filename : productToEdit.image
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/'); */
  //},

  // delete: (req, res) => {
  // let id = req.params.id;
  //	let finalProducts = products.filter(product => product.id != id);
  //	fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
  //		res.redirect('/');
  // },
};

module.exports = controlador;
