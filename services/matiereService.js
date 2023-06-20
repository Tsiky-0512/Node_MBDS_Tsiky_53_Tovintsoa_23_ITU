

let Matiere = require('../model/matiere');
const fs =  require('fs');
const multer = require("multer");
const path =  require('path');




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
    matiere.nomProf = matiereBody.nomProf;
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


function getMulter(path) {
    // const path = '.public/img/matiere';

    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true })
    }

    return multer({ dest: path });
} 

async function uploadImageMatiere(file,idMatiere){
    // Exemple : renommer le fichier
    const originalFileName = file.originalname;

    const fileExtension = path.extname(originalFileName);
    const newFileName = file.filename + `_${idMatiere}` + fileExtension;
    const newPath = path.join(file.destination, newFileName);
    console.log("newPath",newPath);
    await updateMatiere(idMatiere,{ image:newPath })

    fs.renameSync(file.path, newPath);
}

async function uploadImageProfesseur(file,idMatiere){
    // Exemple : renommer le fichier
    const originalFileName = file.originalname;

    const fileExtension = path.extname(originalFileName);
    const newFileName = file.filename + `_prof_${idMatiere}` + fileExtension;
    const newPath = path.join(file.destination, newFileName);

    await updateMatiere(idMatiere,{ photoProf:newPath } )

    fs.renameSync(file.path, newPath);
}





module.exports = { getMatieres,getMatiereById,saveMatiere,updateMatiere,deleteMatiere,getMulter,uploadImageMatiere,uploadImageProfesseur };
