const mongoose = require("mongoose");7
const dbConfig = require("./database.config");
mongoose.Promise = global.Promise;
//mongoose.set('debug', true);

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
const uri = dbConfig.url;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

const initDatabase = () => {
    mongoose.connect(uri, options)
    .then(() => {
        console.log("Connecté à la base MongoDB assignments dans le cloud !");
        console.log("at URI = " + uri);
        console.log("vérifiez with http://localhost:8010/api/assignments que cela fonctionne")
    },
    err => {
        console.log('Erreur de connexion: ', err);
    });
}

module.exports = {
    initDatabase
}