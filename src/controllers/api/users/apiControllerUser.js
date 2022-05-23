const db = require("../../../database/models");

const controlador = {
  users: (req, res) => {
    db.User.findAll(
      {
        include: ['userlogin'],
      }
      )
     .then(products => {
             let respuesta = {
                 meta: {
                     status : 200,
                     total: products.length,
                     url: '/api/users'
                 },
                 data: products
             }
                 res.json(respuesta);
             })

  },/*
  detalleProduct: (req,res) => {
    db.Product.findByPk(req.params.id)
    .then(product => {
        res.json( {
          data: product, status:200
        });
    });
  }*/
  userId: (req, res) => {
    db.User.findByPk(req.params.id)
        .then(product => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: product.length,
                    url: '/api/user/:id'
                },
                data: product
            }
            res.json(respuesta);
        });
}
};

module.exports = controlador;