module.exports = (sequelize, dataTypes) => {
  let alias = "Categories";
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
    timestamps: false,
  };
  const Productcategory = sequelize.define(alias, cols, config);

  //acá definimos la relación de uno a muchos entre Product y Productcategory
  Productcategory.associate = function (models) {
    Productcategory.hasmany(models.Products, {
      // models.Products -> alias de la tabla
      as: "products", //alias  de la relación - esto es lo que se llama desde el controlador
      foreignKey: "category_id", //comparar con DER, ver cómo se llama ahí
    });
  };

  return Productcategory;
};
