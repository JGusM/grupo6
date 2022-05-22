module.exports = (sequelize, dataTypes) => {
    let alias = "Userlogin"; //así hay que llamarlo desde el controller
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: dataTypes.STRING
        
      },
      lastName: {
        type: dataTypes.STRING
        
      },
      email: {
        type: dataTypes.STRING
        
      },
      password: {
        type: dataTypes.STRING
      },
      userRole: {
        type: dataTypes.STRING
        
      },
      image: {
        type: dataTypes.STRING
        
      },
      token: {
        type: dataTypes.STRING
      }
    };
  
    let config = {
      tableName: "userlogin",
      timestamps: false,

    };
    const Userlogin = sequelize.define(alias, cols, config); //"User" es una variable que creo que coincide con el nombre del archivo"
    
    Userlogin.associate = (models)=> {
      Userlogin.belongsTo(models.User, { 
          as: "User", 
          foreignKey: "userId"
      })
  }
    return Userlogin;
  };
  