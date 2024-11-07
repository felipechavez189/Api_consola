// controllers/consolas.controllers.js
const { consolas } = require("../consolas");

// Obtener todas las consolas
const getConsolas = (req, res) => {
    res.json(consolas);
};

// Obtener una consola por su ID
const getConsolaById = (req, res) => {
    const id = parseInt(req.params.id);
    const consola = consolas.find(c => c.id === id);

    if (consola) {
        res.json(consola);
    } else {
        res.status(404).json({ mensaje: "Consola no encontrada" });
    }
};

module.exports = {
    getConsolas,
    getConsolaById
};
