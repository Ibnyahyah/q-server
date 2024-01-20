const applicantController = require("../controllers/applyController");

const router = require("express").Router();

router
  .route("/")
  .get(applicantController.getAllApplicant)
  .post(applicantController.applySector);

module.exports = router;
