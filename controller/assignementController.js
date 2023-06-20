let Assignment = require('../model/assignment');
let assignementService = require('../services/assignementService');

// Récupérer tous les assignments (GET)
function getAssignmentsSansPagination(req, res) {
    Assignment.find((err, assignments) => {
        if (err) {
            res.send(err)
        }

        res.send(assignments);
    });
}

function getAssignments(req, res) {
    var aggregateQuery = Assignment.aggregate();

    Assignment.aggregatePaginate(aggregateQuery,
        {
            page: parseInt(req.query.page) || 1,
            limit: parseInt(req.query.limit) || 10,
        },
        async (err, assignments) => {
            if (err) {
                res.send({
                    data:error.message,
                    status:400
                });
            }
            const result = await assignementService.getDetailsAssignementsList(assignments?.docs);
            console.log(result);
            const response = {
                data:result ,
                totalDocs : assignments?.totalDocs || 0,
                limit: assignments?.limit || 0,
                page: assignments?.page || 0,
                totalPages: assignments?.totalPages || 0,
            }
            res.send({
                ...response,
                status:200
            });
        }
    );
}

// Récupérer un assignment par son id (GET)
function getAssignment(req, res) {
    let assignmentId = req.params.id;

    Assignment.findOne({ _id: assignmentId }, (err, assignment) => {
        if (err) { res.send(err) }
        res.json(assignment);
    })
}

// Ajout d'un assignment (POST)
function postAssignment(req, res) {
    let assignment = new Assignment();
    assignment.id = req.body?.id;
    assignment.nom = req.body?.nom;
    assignment.dateDeRendu = req.body?.dateDeRendu;
    assignment.matiereId = req.body?.matiereId;
    assignment.auteurId = req.body?.auteurId;

    console.log("POST assignment reçu :");
    console.log(assignment)

    assignment.save((err) => {
        if (err) {
            res.send({data:err.message,status:400});
        }
        res.json({ message: `${assignment.nom} saved!` })
    })
}

// Update d'un assignment (PUT)
function updateAssignment(req, res) {
    console.log("UPDATE recu assignment : ");
    console.log(req.body);

    Assignment.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, assignmentUpdated) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.json({ message: assignmentUpdated?.nom + 'updated' })
        }

        // console.log('updated ', assignment)
    });

}

// suppression d'un assignment (DELETE)
function deleteAssignment(req, res) {

    Assignment.findByIdAndRemove(req.params.id, (err, assignment) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: `${assignment.nom} deleted` });
    })
}



module.exports = { getAssignments, postAssignment, getAssignment, updateAssignment, deleteAssignment };
