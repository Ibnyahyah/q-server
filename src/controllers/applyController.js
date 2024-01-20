const Applicant = require("../models/applicantModels");

exports.applySector = async (req, res, next) => {
  try {
    await Applicant.create({
      name: req.body.name,
      sector: req.body.sector,
      agreeWithTerms: req.body.agreeWithTerms,
    });
    res
      .status(200)
      .json({ status: "success", message: "Application successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Fail to get sectors",
      data: null,
    });
  }
};

exports.getAllApplicant = async (req, res, next) => {
  try {
    const sectors = await Applicant.find();
    res.status(200).json({
      status: "success",
      data: { sectors },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Fail to get applicant",
      data: null,
    });
  }
};
