

let Matiere = require('../model/matiere');

// Récupérer tous les assignments (GET)
function getMatieres() {
   return new Promise((resolve,reject)=>{
        Matiere.find((err, matieres) => {
            if (err) {
                reject(err)
            }
            resolve(matieres);
        });
   })
}


// Récupérer un Matiere par son id (GET)
function getMatiereById(matiereId) {
    return new Promise((resolve, reject)=> {
        Matiere.findOne({ id: matiereId }, (err, assignment) => {
            if (err) { reject(err) }
            resolve(assignment);
        })
    })
}

// Ajout d'un Matiere (POST)
function saveMatiere(matiereBody) {
    let matiere = new Matiere();
    matiere.nom = matiereBody.nom;
    matiere.prof.nom = matiereBody.prof.nom;
    return new Promise((resolve,reject) => {
        matiere.save((err) => {
            if (err) {
                reject(`cant save matiere ${err}`, );
            }
            resolve(`${matiere.nom} saved!`);
        })
    })
}

// Update d'un matiere (PUT)
function updateMatiere(matiereId,matiereBody) {
    return new Promise((resolve,reject) => {
        Matiere.findByIdAndUpdate({_id : matiereId}, matiereBody, { new: true }, (err, assignmentUpdated) => {
            if (err) {
                reject(err)
            } 
            resolve(`Matière ${matiereId} modifié`);
        });
    })
}

// suppression d'un assignment (DELETE)
function deleteMatiere(id) {
    return new Promise((resolve,reject) => {
        Matiere.findByIdAndRemove(id, (err, assignment) => {
            if (err) {
                reject(err);
            }
            resolve(`${assignment.nom} deleted`);
        })
    })
}



module.exports = { getMatieres,getMatiereById,saveMatiere,updateMatiere,deleteMatiere };
