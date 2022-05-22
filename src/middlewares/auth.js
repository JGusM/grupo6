// const path = require('path');
// const fs = require('fs');

// const userFilePath = path.join(__dirname, '../data/users.json');
// const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

// const userLoginInfoFilePath = path.join(__dirname, '../data/userLoginInfo.json');
// const usersLoginInfo = JSON.parse(fs.readFileSync(userLoginInfoFilePath, 'utf-8'));

const db = require("../database/models");

module.exports = async (req, res, next) => {
    // Por defecto el usuario no está logeado
    res.locals.user = false;
    
    
    // Si existe el usuario en session
    if (req.session.user) {
        // Se lo pasamos a la vista
        res.locals.user = req.session.user;
        
        
        return next();
        
        // O si tiene la cookie de recordar
    } else if (req.cookies.rememberToken) {     
        try {
            const userToken = await db.Userlogin.findOne({
              where: { token: req.cookies.rememberToken },
            });
        
        
        // y existe el token en nuestra base
        if (userToken) {       
            let user = await db.User.findOne({ where: { id: userToken.userId } })
            
            // y existe el usuario en nuestra base
            if(user) {
                delete user.dataValues.password;
                
                // Se lo pasamos a la sesión a la vista
                req.session.user = user;
                res.locals.user = user;
                
                
            }
        }
    } catch (error) {
        console.log(error);
      }
    }
    next();
}