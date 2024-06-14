const express = require("express");
const router = express.Router();
const {controladorPeliculas, createMovieController} = require("../controllers/peliculasControllers");
const { validateMovie } = require("../middleware/validations");

router.get("/movies", controladorPeliculas);
router.post("/movies",createMovieController);

module.exports = { router };

// router.get("/movies", async (req, res) => {
//   const peliculas = await controladorPeliculas();
//   res.json(peliculas);
// });
