module.exports = (sequelize, dataTypes) => {
  let alias = "Product"; //así hay que llamarlo desde el controller
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: dataTypes.TEXT,
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
      type: dataTypes.STRING,
      allowNull: false,
    },

    //category_id: {
    //  type: dataTypes.INTEGER,
    // allowNull: false,
    //},
  };
  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Product = sequelize.define(alias, cols, config);

  //acá definimos la relación de uno a muchos entre Proudct y Productcategory
  Product.associate = function (models) {
    Product.belongsTo(models.Productcategory, {
      // models.Productcategory -> Productcategory es el valor de alias en Productcategory.js
      as: "category",
      foreignKey: "category_id", //comparar con DER, ver cómo se llama ahí
    });
  };

  return Product;
};
