module.exports = (sequelize, dataTypes) => {
  let alias = "User"; //así hay que llamarlo desde el controller
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: dataTypes.STRING,
      
    },
    lastName: {
      type: dataTypes.STRING,
      
    },
    email: {
      type: dataTypes.STRING,
      
    },
    password: {
      type: dataTypes.STRING
    },
    userRole: {
      type: dataTypes.STRING,
      
    },
    image: {
      type: dataTypes.STRING,
      
    },
  };

  let config = {
    tableName: "user",
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const User = sequelize.define(alias, cols, config); //"User" es una variable que creo que coincide con el nombre del archivo"

  return User;
};
