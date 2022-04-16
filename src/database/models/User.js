module.exports = (sequelize, dataTypes) => {
  let alias = "User"; //así hay que llamarlo desde el controller
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };

  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const User = sequelize.define(alias, cols, config); //"User" es una variable que creo que coincide con el nombre del archivo"

  return User;
};
