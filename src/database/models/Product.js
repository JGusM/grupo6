module.exports = (sequelize, dataTypes) => {
  let alias = "Product"; // así hay que llamarlo desde el controller
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
    //  categoryId: {
    //    type: dataTypes.INTEGER,
    //   allowNull: false,
    //  },
  };
  let config = {
    tableName: "product",
    timestamps: false,
  };
  const Product = sequelize.define(alias, cols, config);

  //acá definimos la relación de uno a muchos entre Product y Productcategory
  Product.associate = function (models) {
    //"Product es el nombre de la variable linea 41"
    Product.belongsTo(models.Category, {
      // models.Category ->  alias
      as: "categories", // alias de la relación - esto se llama desde el controlador
      foreignKey: "categoryld", //comparar con DER, ver cómo se llama ahí
    });
  };

  return Product;
};
