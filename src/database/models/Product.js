module.exports = (sequelize, dataTypes) => {
  let alias = "Producto";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(400),
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING(400),
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL,
      allowNull: false,
    },
    discount: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: dataTypes.BLOB,
      allowNull: false,
    },
    category_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };
  let config = {
    timestamps: true, //No sé si va false o true? mmm
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Producto = sequelize.define(alias, cols, config);

  //acá definimos la relación de uno a muchos entre Proudct y Productcategory
  Product.associate = function (models) {
    Product.belongsTo(models.Productcategory, {
      // models.Productcategory -> Productcategory es el valor de alias en Productcategory.js
      as: "categoría",
      foreignKey: "category_id", //comparar con DER, ver cómo se llama ahí
    });
  };

  return Product;
};
