const express = require("express");
const path = require("path");

const app = express();

const rutasMain = require("./routes/mainRouter");
const rutasProducts = require("./routes/productsRouter");
const rutasUsers = require("./routes/usersRouter");
const rutasAdmin = require("./routes/adminRouter");

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.listen(3000, () => {
  console.log("servidor corriendo en puerto 3000");
});

app.use("/", rutasMain);
app.use("/products", rutasProducts);
app.use("/users", rutasUsers);
app.use("/admin", rutasAdmin);
