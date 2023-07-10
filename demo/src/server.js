const express = require("express");
const server = express();
const path = require("path");
const { jsonwebtoken } = require("./security.js");

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const user = {
  id: 623623634,
  name: "Torsten",
  surname: "Kling",
  username: "torsten",
  password: "zxcvasdf",
  isAdmin: true,
};

server.post("/login", (req, res) => {
  const { username, isAdmin } = req.body;

  if (username === user.username && password === user.password) {
    return res.status(200).send( token: generateToken(username, user.isAdmin));
  }

  res.status(401).send("Credenciales invalidas");
});

server.get("/recurso", (req, res) => {
  res
    .status(200)
    .send("Este es un recurso protegido solo para administradores");
});

server.get("/recurso", (req, res) => {
  res.status(200).send("Este es un recurso publico");
});

// Control de rutas inexistentes
server.use("*", (req, res) => {
  res
    .status(404)
    .send(
      `<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>`
    );
});

// Método oyente de peteciones
server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(
    `Ejecutandose en http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/coches`
  );
});
