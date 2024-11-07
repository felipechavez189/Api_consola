// index.js
const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;

// Importar los datos de las consolas y controladores
const { consolas } = require("./consolas");
const { getConsolas, getConsolaById } = require("./controllers/consolas.controllers");

// Middleware
app.use(cors());

// Rutas
app.get("/", getConsolas); // Obtener todas las consolas
app.get("/:id", getConsolaById); // Obtener consola por ID

// Iniciar el servidor
app.listen(puerto, () => {
    console.log(`Servidor arriba ok en el puerto ${puerto}`);
});
