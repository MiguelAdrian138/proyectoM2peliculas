const mongoose = require('mongoose')



const dbConn = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://adrianmiguel138:9yvVZml5xtwY7sO2@proyectosoyhenry.jgkuxiv.mongodb.net/proyecto_Peliculas"
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    
  }
};


module.exports = {
    dbConn
}