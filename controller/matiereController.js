const userService = require("../services/matiereService");


const getMatiere = async (req, res) => {
    try {
        const user = await userService.getMatieres();
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

const getMatiereById = async (req, res) => {
    try {
        const user = await userService.getMatiereById(req.params.id);
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

const saveMatiere = async (req, res) => {
    try {
        console.log("ATO");

        const user = await userService.saveMatiere(req.body);
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


const updateMatiere = async (req, res) => {
    try {
        const user = await userService.updateMatiere(req.body._id,req.body);
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

const deleteMatiere = async (req,res) => {
    try {
        const user = await userService.deleteMatiere(req.params.id);
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


module.exports = { getMatiere, getMatiereById, saveMatiere, updateMatiere, deleteMatiere };
