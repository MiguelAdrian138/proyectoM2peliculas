const { app } = require("./src/server");
const PORT = 3000;
const { dbConn } = require('./src/config/DBconn');

dbConn().then(res => {
    app.listen(PORT, () => {
        console.log(`Servidor iniciado en el puerto ${PORT}`);
    })
})



// app.get("/movies", async (req, res) => {
//   try {
//     const peliculas = await obtenerPeliculas();
//     res.json(peliculas);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error al obtener las películas");
//   }
// });
