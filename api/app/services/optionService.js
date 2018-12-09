const optionProvider = require("../providers/optionProvider");

var appConstants = require("../config/appConstants");

exports.addOption = async req => {
  try {
    if (req.body) {
      console.log(req.body)
      try {
        let insertedOption = await optionProvider.save(req.body);
        return insertedOption;
      } catch (err) {
        console.log("catched========================");
        throw err;
      }
    } else { 
      
    }
  } catch (err) {
    throw err;
  }
};



