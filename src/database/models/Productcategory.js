module.exports = (sequelize, dataTypes) => {
  let alias = "Categoria";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fitness: {
      type: dataTypes.STRING(400),
      allowNull: false,
    },
    functional: {
      type: dataTypes.STRING(400),
      allowNull: false,
    },
    yogapilates: {
      type: dataTypes.STRING(400),
      allowNull: false,
    },
    
  };
  let config = {
    timestamps: true,   //No sé si va false o true? mmm
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Productcategory = sequelize.define(alias, cols, config);

  //acá definimos la relación de uno a muchos entre Proudct y Productcategory
  Productcategory.associate = function (models) {
        Productcategory.hasmany(models.Producto, { // models.Product -> Product es el valor de alias en Product.js
            as: "Producto",
            foreignKey: "category_id" //comparar con DER, ver cómo se llama ahí
        })
     }

  return Productcategory;