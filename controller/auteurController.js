const auteurService = require("../services/auteurService");

const getAuteurs = async (req, res) => {
    try {
        const user = await auteurService.getAuteurs();
        res.status(200).json({
            data:user,
            status:200
        })
    } catch (error) {
        res.status(400).json({
            data:error,
            status:400
        })
    }
}

const getAuteursPaginate = async (req, res) => {
    try {
        const user = await auteurService.getAuteursPaginate(req.params.page,req.params.limit);
        res.status(200).json({
            data:user,
            status:200
        })
    } catch (error) {
        res.status(400).json({
            data:error.message,
            status:400
        })
    }
}

const getAuteurById = async (req, res) => {
    try {
        const user = await auteurService.getAuteurById(req.params.id);
        res.status(200).json({
            data:user,
            status:200
        })
    } catch (error) {
        res.status(400).json({
            data:error,
            status:400
        })
    }
}

const saveAuteur = async (req, res) => {
    try {
        const user = await auteurService.saveAuteur(req.body);
        res.status(200).json({
            data:user,
            status:200
        })
    } catch (error) {
        res.status(400).json({
            data:error,
            status:400
        })
    }
}


const updateAuteur = async (req, res) => {
    try {
        const user = await auteurService.updateAuteur(req.body._id,req.body);
        res.status(200).json({
            data:user,
            status:200
        })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            data:error.message,
            status:400
        })
    }
}

const deleteAuteur = async (req,res) => {
    try {
        const user = await auteurService.deleteAuteur(req.params.id);
        res.status(200).json({
            data:user,
            status:200
        })
    } catch (error) {
        res.status(400).json({
            data:error,
            status:400
        })
    }
}


module.exports = { getAuteurs, getAuteursPaginate, getAuteurById, saveAuteur, updateAuteur , deleteAuteur};
