module.exports = (sequelize, dataTypes) => {
  let alias = "Category";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(400),  //acá estarían las 3 categorías
      allowNull: false,
    },
    
  };
  let config = {
    timestamps: false,   
    
  };
  const Productcategory = sequelize.define(alias, cols, config);

  //acá definimos la relación de uno a muchos entre Proudct y Productcategory
  Productcategory.associate = function (models) {
        Productcategory.hasmany(models.Product, { // models.Product -> Product es el valor de alias en Product.js
            as: "Product", //nombre de la tabla
            foreignKey: "category_id" //comparar con DER, ver cómo se llama ahí
        })
     }

  return Productcategory;