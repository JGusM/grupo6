module.exports = (req, res, next) => {
    // si existe un admin en session
    if (req.session.user && req.session.user.userRole == "admin") {
      // Lo dejamos pasar
      next();
    } else {
      res.redirect("/");
    }
  };