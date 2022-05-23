const db = require("../../../database/models");

const controlador = {
  products: (req, res) => {
    db.Product.findAll(
      {
        include: ['categories'],
      }
      )
     .then(products => {
             let respuesta = {
                 meta: {
                     status : 200,
                     total: products.length,
                     url: '/api/products'
                 },
                 data: products
             }
                 res.json(respuesta);
             })

  },
  productsCategory: (req, res) => {
    db.Category.findAll(
      {
        include: ['products'],
      }
      )
     .then(products => {
             let respuesta = {
                 meta: {
                     status : 200,
                     total: products.length,
                     url: '/api/productsCategory'
                 },
                 data: products
             }
                 res.json(respuesta);
             })

  },
  detalleProduct: (req, res) => {
    db.Product.findByPk(req.params.id)
        .then(product => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: product.length,
                    url: '/api/product/:id'
                },
                data: product
            }
            res.json(respuesta);
        });
}
};

module.exports = controlador;