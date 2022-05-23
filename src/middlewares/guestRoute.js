// module.exports = (req, res, next) => {
//   // Si existe el usuario en session
//   if (req.session.user) {
//     // Lo dejamos pasar

//     res.redirect("/users/profile");
//   } else {
//     next();
//   }
// };

module.exports = (req, res, next) => {
  // si existe un usuario logueado
  if (req.session.user) {
    // Lo dejamos pasar
    res.redirect("/");
  } else {
    next();
  }
};

