const express = require('express');
const router = express.Router(); 
const assignmentController = require("../controller/assignementController");
const auth = require("../security/auth.js");

router.get("/" ,assignmentController.getAssignments);
router.post("/" ,assignmentController.postAssignment);
router.put("/" ,assignmentController.updateAssignment);
router.get("/:id" ,assignmentController.getAssignment);
router.delete("/:id" ,assignmentController.deleteAssignment);

module.exports = router;