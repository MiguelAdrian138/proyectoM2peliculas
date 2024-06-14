// const {Movie} = require("../models/Movie");


// const obtenerPeliculas = async () => {
//   const movies = await Movie.find();
//   return movies
// };

// const createMovie = async (data) => {
//  const movie = new Movie(data);
//  return movie;
// }

// module.exports = {
//   obtenerPeliculas,
//   createMovie
// };


const {Movie} = require("../models/Movie");

const obtenerPeliculas = async () => {
  try {
    const movies = await Movie.find();
        console.log(movies);

    return movies;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const createMovie = async ({title, year, director,direction,genre, rate, poster}) => {
  try {
    const movie = new Movie({
      title,
      year,
      director,
      direction,
      genre,
      rate,
      poster,
    });
    await movie.save();
    return movie;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { obtenerPeliculas, createMovie };