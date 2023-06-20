let Assignment = require('../model/assignment');
let Matiere = require('../model/matiere');
let Auteur = require('../model/auteur');

const getDetailsAssignementsList = async (assignementList) => {
    try {
        // Récupérer les IDs uniques de matières et d'auteurs dans la liste de documents
        const matiereIds = [...new Set(assignementList.map(d => d.matiereId))];
        const auteurIds = [...new Set(assignementList.map(d => d.auteurId))];

        // Récupérer les détails de matières et d'auteurs correspondants aux IDs
        const [matieres, auteurs] = await Promise.all([
            Matiere.find({ _id: { $in: matiereIds } }),
            Auteur.find({ _id: { $in: auteurIds } })
        ]);

        // Créer un objet pour stocker les détails de matière et d'auteur associés à chaque document
        const listDetailsAssignement = assignementList.map(assignement => {
            const matiere = matieres.find(m => m._id.equals(assignement.matiereId));
            const auteur = auteurs.find(a => a._id.equals(assignement.auteurId));
            return {
                ...assignement,
                matiere,
                auteur,
            };
        });

        return listDetailsAssignement;
    } catch (error) {
        throw error;
    }
}


const getDetailsAssignement = async (assignement) => {
    try {

        // Récupérer les détails de matières et d'auteurs correspondants aux IDs
        const [matieres, auteurs] = await Promise.all([
            Matiere.find({ _id: { $in: assignement?.matiereId } }),
            Auteur.find({ _id: { $in: assignement?.auteurId } })
        ]);

        return {
            ...assignement,
            matieres,
            auteurs,
        };
    } catch (error) {
        throw error;
    }
}
module.exports = { getDetailsAssignementsList,getDetailsAssignement };
