const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const auth = require('./middlewares/auth');

const rutasMain = require("./routes/mainRouter");
const rutasProducts = require("./routes/productsRouter");
const rutasUsers = require("./routes/usersRouter");
const rutasAdmin = require("./routes/adminRouter");

//Agregue configuracion del session
app.use(
  session({
    secret: "sticker wizzard",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cookieParser());

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(methodOverride("_method"));
app.use(auth);

//Borre al listenen para instalar nodemon en el proyecto para poder los cambios que se hacen en tiempo real
//Si esto no se instalaba cuando eliminabas o actualizabas un producto tenias que bajar y subir el backedn todo el
app.use("/", rutasMain);
app.use("/products", rutasProducts);
app.use("/users", rutasUsers);
app.use("/admin", rutasAdmin);

module.exports = app;
