const express = require('express');
const router = express.Router(); 
const assignmentController = require("../controller/assignementController");
const auth = require("../security/auth.js");

router.get("/" ,assignmentController.getAssignment);
router.post("/" ,assignmentController.postAssignment);
router.put("/" ,assignmentController.updateAssignment);
router.put("/:id" ,assignmentController.getAssignment);
router.put("/:id" ,assignmentController.deleteAssignment);

module.exports = router;