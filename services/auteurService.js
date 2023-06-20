


let Auteur = require('../model/auteur');
const multer = require("multer");
const fs =  require('fs');
const path =  require('path');





// Récupérer tous les assignments (GET)
function getAuteurs() {
   return new Promise((resolve,reject)=>{
        Auteur.find((err, matieres) => {
            if (err) {
                reject(err)
            }
            resolve(matieres);
        });
   })
}

// Récupérer tous les assignments (GET)
function getAuteursPaginate(page,limit) {
    var aggregateQuery = Auteur.aggregate();
    return new Promise((resolve,reject)=>{
        Auteur.aggregatePaginate(aggregateQuery,
            {
                page: page || 1,
                limit: limit || 10,
            },
            (err, auteurs) => {
                if (err) {
                    reject(err);
                }
                resolve(auteurs);
            }
        );
    })
 }


// Récupérer un Matiere par son id (GET)
function getAuteurById(auteurId) {
    return new Promise((resolve, reject)=> {
        Auteur.findOne({ _id: auteurId }, (err, auteur) => {
            if (err) { reject(err) }
            resolve(auteur);
        })
    })
}

// Ajout d'un Matiere (POST)
function saveAuteur(auteurBody) {
    let auteur = new Auteur();
    auteur.nom = auteurBody.nom;
    auteur.image = auteurBody.image;
    return new Promise((resolve,reject) => {
        auteur.save((err) => {
            if (err) {
                reject(`cant save matiere ${err}`, );
            }
            resolve(`${auteur.nom} saved!`);
        });
    })
}

// Update d'un matiere (PUT)
function updateAuteur(auteurId,auteurBody) {
    return new Promise((resolve,reject) => {
        Auteur.findByIdAndUpdate({_id : auteurId}, auteurBody, { new: true }, (err) => {
            if (err) {
                reject(err)
            } 
            resolve(`Matière ${auteurId} modifié`);
        });
    })
}

// suppression d'un assignment (DELETE)
function deleteAuteur(id) {
    return new Promise((resolve,reject) => {
        Auteur.findByIdAndRemove(id, (err, auteur) => {
            if (err) {
                reject(err);
            }
            resolve(`${auteur.nom} deleted`);
        })
    })
}



function getMulterAuteur() {
    const path = './img/auteur';

    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true })
    }

    return multer({ dest: path });
} 

async function uploadImageAuteur(file,idAuteur){
    // Exemple : renommer le fichier
    const originalFileName = file.originalname;

    const fileExtension = path.extname(originalFileName);
    const newFileName = file.filename + `_${idAuteur}` + fileExtension;
    const newPath = path.join(file.destination, newFileName);

    await updateAuteur(idAuteur,{ image:newPath })

    fs.renameSync(file.path, newPath);
}



module.exports = { getAuteurs,getAuteursPaginate,getAuteurById,saveAuteur,updateAuteur,deleteAuteur,getMulterAuteur,uploadImageAuteur };
