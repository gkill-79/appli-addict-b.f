







const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('./src/db/sequelize');

const app = express();
const port = process.env.PORT || 3060;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

Sequelize.initDb();

// Routes de l'API
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API de l\'application de lutte contre les addictions !');
});

// À partir d'ici, vous pouvez ajouter d'autres routes pour gérer vos différentes fonctionnalités.

// Lancez le serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});


























