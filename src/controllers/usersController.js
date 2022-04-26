const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
let db = require("../database/models");
const { validationResult } = require("express-validator");

const userFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const userLoginInfoFilePath = path.join(
  __dirname,
  "../data/userLoginInfo.json"
);
// const usersLoginInfo = JSON.parse(
//   fs.readFileSync(userLoginInfoFilePath, "utf-8")
// );
const controlador = {
  getLoginForm: (req, res) => {
    res.render("login", { tituloPagina: "LOGIN" });
  },
  getRegisterForm: (req, res) => {
    res.render("register", { tituloPagina: "REGISTER" });
  },
  authenticate: async (req, res) => {
    console.log(req.body);
    //PRIMERO Q TODO HACEMOS LOGICA PARA GUARDAR LOS DATOS DEL LOGIN EN UN JSON
    const { email, password } = req.body;

    //verifico si el mail q puso en el formulario esta en nuestra db
    let user = await db.User.findOne({ where: { email: email } });
   // let user = users.find((user) => user.email == email);

    if (user) {
      // y la contraseña es correcta...
      if (bcrypt.compareSync(password, user.password)) {
        // Eliminamos los datos sensibles y guardamos el usuario en sesión
        delete user.password;

        req.session.user = user;

        // Si pidió que lo recordemos
        if (req.body.remember) {
          // Generamos un token seguro, eso para que no pueda entrar cualquiera
          const token = crypto.randomBytes(64).toString("base64");
          user.token = token;
          // Lo guardamos en base, para poder chequearlo luego

          let userLoginInfo = {
          // [...userLoginInfo, user];
          // fs.writeFileSync(
          //   userLoginInfoFilePath,
          //   JSON.stringify(userLoginInfo, null, " ")
          // );

          token: user.token,
          userId: user.id,
        };

        await db.User.create(userLoginInfo);

          // Recordamos al usuario por 3 meses         msegs  segs  mins  hs   días
          res.cookie("rememberToken", token, {
            maxAge: 1000 * 60 * 60 * 24 * 90,
          });
        }

        // Finalmente lo mandamos a la home
        return res.redirect("/");
      } else {
        // Si la contraseña esta mal
        return res.render("login", {
          old: req.body,
          errors: {
            password: "El email o la contraseña son inválidos",
          },
        });
      }
    } else {
      // Si el email no existe
      return res.render("login", {
        old: req.body,
        errors: {
          email: "El email o la contraseña son inválidos",
        },
      });
    }
  },
  storeUser: async (req, res) => {
    // let errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.render("./users/register", {
    //     errors: errors.mapped(),
    //     old: req.body,
    //   }) } else { try {
    // Creamos un nuevo usuario tomando los datos del formulario
    let newUser = {
      //id: users[users.length - 1].id + 1,
      ...req.body,
      image: req.file 
      ? req.file.filename : "default-image.png",
      userRole: "user",
    };

    console.log(req.body);
    //encriptamos la contrasenia y borramos el password para q noo se guarde en nuestro json
    newUser.password = bcrypt.hashSync(req.body.password[0], 10);
    newUser.repassword;

    //escribimos en nuestro archivo json
    // let usersNews = [...users, newUser];
    // fs.writeFileSync(userFilePath, JSON.stringify(usersNews, null, " "));
    
    await db.User.create(newUser);
    
    res.redirect("/users/login");
  // } catch (error) {
  //   console.log(error);
  // }
// }
},
  profile: (req, res) => {
    res.render("profile", { tituloPagina: "PROFILE" });
  },
  logout: (req, res) => {
    // Borramos el registro de la base de datos si existe
    const token = usersLoginInfo.find(
      (user) => (user.token = req.cookies.rememberToken)
    );
    if (token) {
      let logerDeleter = usersLoginInfo.filter(
        (user) => user.token != req.cookies.rememberToken
      );
      fs.writeFileSync(
        userLoginInfoFilePath,
        JSON.stringify(logerDeleter, null, " ")
      );
    }
    // Destruimos la sesión
    req.session.destroy();

    // Destruimos la cookie de recordar
    res.clearCookie("rememberToken");

    // Redirigimos a la home
    res.redirect("/");
  },
};

module.exports = controlador;
