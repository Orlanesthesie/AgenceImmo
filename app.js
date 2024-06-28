const express = require("express");
const mustacheExpress = require("mustache-express");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const cors = require("cors");

require("./config/database"); // Inclure la connexion à la base de données

const app = express();
const port = 3000;

// Middleware pour analyser les requêtes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Pour analyser les requêtes URL-encoded
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());

// Configurer le moteur de templates Mustache
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

// Servir des fichiers statiques (optionnel)
app.use(express.static("public"));
app.use("/", require("./routes/annonces"));

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});