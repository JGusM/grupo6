module.exports = (sequelize, dataTypes) => {
  let alias = "Category";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(400), //acá estarían las 3 categorías
      allowNull: false,
    },
  };
  let config = {
    tableName: "productcategory",
    timestamps: false,
  };
  const Productcategory = sequelize.define(alias, cols, config);

  //acá definimos la relación de uno a muchos entre Product y Productcategory
  Productcategory.associate = function (models) {
    Productcategory.hasMany(models.Product, {
      // models.Product -> alias de la tabla
      as: "products", //alias  de la relación - esto es lo que se llama desde el controlador
      foreignKey: "categoryld", //comparar con DER, ver cómo se llama ahí
    });
  };

  return Productcategory;
};
