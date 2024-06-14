const express = require("express");
const app = express();
const { router } = require("./routes/moviesRoutes.js");

const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

module.exports = { app };
