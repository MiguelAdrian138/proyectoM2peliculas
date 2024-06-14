const urlAPI = "http://localhost:3000/movies";
const contenedorPeliculas = document.querySelector("#contenedor-tarjetas");




async function obtenerPeliculas(urlAPI) {
  try {
    const respuesta = await axios.get(urlAPI);
    const data = respuesta.data;
    console.log(respuesta);
    console.log(data);
    renderizarPeliculas(data);
  } catch (error) {
    console.error("Error al obtener las películas:", error);
  }
}

function renderizarPeliculas(peliculas) {
  contenedorPeliculas.innerHTML = ""; 
  peliculas.forEach(pelicula => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-pelicula");

    const imagen = document.createElement("img");
    imagen.src = pelicula.poster;
    imagen.alt = pelicula.titulo;
    tarjeta.appendChild(imagen);

    const titulo = document.createElement("h2");
    titulo.textContent = pelicula.title;
    tarjeta.appendChild(titulo);

    const year = document.createElement("p");
    year.textContent = pelicula.year;
    tarjeta.appendChild(year);

    contenedorPeliculas.appendChild(tarjeta);
  });
}

obtenerPeliculas(urlAPI);