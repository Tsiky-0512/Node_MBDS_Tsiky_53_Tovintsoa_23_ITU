const express = require('express');
const router = express.Router(); 
const matiereController = require("../controller/matiereController");
const authentification = require("../security/auth");

router.get("/" ,authentification.authentification,matiereController.getMatiere);
router.post("/" ,authentification.authentification,matiereController.saveMatiere);
router.put("/" ,authentification.authentification,matiereController.updateMatiere);
router.delete("/:id" ,authentification.authentification,matiereController.deleteMatiere);


module.exports = router;  