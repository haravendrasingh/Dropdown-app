var express = require("express");
var router = express.Router();
const optionService = require("../app/services/optionService");
const responseBuilder = require("../app/services/responseBuilder");
var urlProvider = require("../app/config/urlProvider");
var appConstants = require("../app/config/appConstants");

router.post(urlProvider.OPTIONS_ADD, (req, res, next) => {
  console.log(req.body);
  optionService
    .addOption(req)
    .then(option => {
      let response = responseBuilder.getResponse(200, option, "success");
      res.status(200).send(response);
    })
    .catch(err => {
      console.log("again catched========================");
      next(err);
    });
});





module.exports = router;
