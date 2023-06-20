const express = require('express');
const router = express.Router(); 
const matiereController = require("../controller/matiereController");
const matiereService = require("../services/matiereService");
const authentification = require("../security/auth");

router.get("/" ,authentification.authentification,matiereController.getMatiere);
router.post("/" ,authentification.authentification,matiereController.saveMatiere);
router.put("/" ,authentification.authentification,matiereController.updateMatiere);
router.delete("/:id" ,authentification.authentification,matiereController.deleteMatiere);
router.post("/uploadImageMatiere" ,authentification.authentification,matiereService.getMulter('./public/img/matiere').single('file'),matiereController.uploadMatiereImage);
router.post("/uploadImageProf" ,authentification.authentification,matiereService.getMulter('./public/img/prof').single('file'),matiereController.uploadProfImage);


module.exports = router;  