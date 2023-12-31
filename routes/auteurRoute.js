const express = require('express');
const router = express.Router(); 
const auteurController = require("../controller/auteurController");
const auteurService = require("../services/auteurService");
const auth = require("../security/auth.js");

router.get("/" ,auth.authentification,auteurController.getAuteurs);
router.get("/:page/:limit" ,auth.authentification,auteurController.getAuteursPaginate);
router.post("/" ,auth.authentification,auteurController.saveAuteur);
router.put("/" ,auth.authentification,auteurController.updateAuteur);
router.get("/:id" ,auth.authentification,auteurController.getAuteurById);
router.delete("/:id" ,auth.authentification,auteurController.deleteAuteur);
router.post("/upload" ,auth.authentification,auteurService.getMulterAuteur().single('file'),auteurController.uploadAuteurImage);

module.exports = router;