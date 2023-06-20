const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const assignementRoutes = require("./routes/assignementRoute");
const authRoutes = require("./routes/authRoute");
const matiereRoutes = require('./routes/matiereRoute');
const auteurRoutes = require('./routes/auteurRoute');
const { initDatabase } = require('./database/databaseConnector');



// initialiser la connexion sur le base de donnée
initDatabase();

// Importation des Routes
const path = require('path')
app.use(express.static(__dirname+'/public')); 

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , authorization ");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';
const image = '/image';


app.get('/',(req,res) => {
  res.send('Hello world');
})

app.use(`${prefix}/assignments`,assignementRoutes);
app.use(`${prefix}/matiere`,matiereRoutes);
app.use(`${prefix}/auteur`,auteurRoutes);
app.use(`${prefix}/auth`,authRoutes);

  

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;


