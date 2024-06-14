function validateMovie(req, res, next) {
  const { titulo, anio, genero, duracion, director, calificacion, imagen } =
    req.body;
  if (
    !titulo ||
    !anio ||
    !genero ||
    !duracion ||
    !director ||
    !calificacion ||
    !imagen
  ) {
    return res.status(400).send("Faltan datos obligatorios");
  }
  next();
}

module.exports = { validateMovie};
