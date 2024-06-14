function clearForm() {
  const inputs = document.querySelectorAll("#formulario-pelicula input");
  inputs.forEach(input => {
    input.value = "";
  });
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const titleInput = document.getElementById("title").value;
  const yearInput = document.getElementById("year").value;
  const directorInput = document.getElementById("director").value;
  const durationInput = document.getElementById("duration").value;
  const genreInput = document.getElementById("genre").value;
  const rateInput = document.getElementById("rate").value;
  const posterInput = document.getElementById("poster").value;

  if (
    !titleInput ||
    !yearInput ||
    !directorInput ||
    !durationInput ||
    !genreInput ||
    !rateInput ||
    !posterInput
  ) {
    alert("Todos los campos son obligatorios.");
    return;
  }
  const yearPattern = /^\d{4}$/;
  if (!yearPattern.test(yearInput)) {
    alert("El año debe ser un número de 4 dígitos.");
    return;
  }

  const data = {
    title: titleInput,
    year: yearInput,
    director: directorInput,
    duration: durationInput,
    genre: genreInput,
    rate: rateInput,
    poster: posterInput,
  };

  try {
    const response = await axios.post("http://localhost:3000/movies", data);
    console.log("Respuesta del servidor:", response.data);
    console.log("data", data);
    alert("Película agregada Exitosamente");
    clearForm();
  } catch (error) {
    console.error("Error al agregar película:", error);
  }
}

const form = document.getElementById("formulario-pelicula");
form.addEventListener("submit", handleFormSubmit);
