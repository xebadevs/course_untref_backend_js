const express = require("express");
const path = require("path");

const server = express();
const HOST = "127.0.0.1";
const PORT = 3000;

const coches = [
    { id: 1, marca: "Ford", anio: 2020, color: "rojo", img: "http://127.0.0.1:3000/public/img/coche1.png" },
    { id: 2, marca: "Fiat", anio: 2010, color: "rojo", img: "http://127.0.0.1:3000/public/img/coche2.png" },
    { id: 3, marca: "Chevrolet", anio: 2015, color: "blanco", img: null },
    { id: 4, marca: "Ford", anio: 2020, color: "negro", img: null },
];

server.use("/public", express.static(path.join(__dirname, "public")));

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, "views"));

server.get('/coches/:id/anio/:anio', (req, res) => {
    const { id, anio } = req.params;

    const coche = coches.find((elemento) => elemento.id === Number(id));
    if (coche) {
        coche.anio = anio;
    }

    if (!coche) {
        res.status(200).render("coches", { coches });
    }

    res.status(200).render("coche", { coche });
});

server.get('/coches', (req, res) => {
    const { id, anio } = req.query;

    const coche = coches.find((elemento) => elemento.id === Number(id));
    coche.anio = anio;

    if (!coche) {
        res.status(400).send("Id incorrecto de coche");
    }

    res.status(200).send(coche);
});

server.use('*', (req, res) => {
    res.status(404).send("<h1>Error 404</h1><p>No se encontro el recurso solicitado</p>");
});

server.listen(PORT, HOST, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});