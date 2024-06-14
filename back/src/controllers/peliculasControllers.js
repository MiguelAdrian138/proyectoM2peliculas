const {
  obtenerPeliculas,
  createMovie,
} = require("../services/peliculasService");

const controladorPeliculas = async (req, res) => {
  try {
    const peliculas = await obtenerPeliculas();
    if (peliculas) {
      res.status(200).json(peliculas);
    } else {
      res.status(500).json({ error: "No se pudieron obtener las películas" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const createMovieController = async (req, res) => {
  try {
    const { title, year, director, direction, genre, rate, poster } = req.body;
    const movie = await createMovie({
      title,
      year,
      director,
      direction,
      genre,
      rate,
      poster,
    });

    res
      .status(201)
      .json(movie)
      .send(`Película creada con éxito: ${movie.titulo}`);
  } catch (error) {
    res.status(500).send(`Error al crear la película: ${error.message}`);
  }
};

module.exports = {
  controladorPeliculas,
  createMovieController,
};
