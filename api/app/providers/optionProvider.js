const optionSchema = require("../db/schema/optionSchema");

exports.save = async option => {
  try {
    console.log(option)
    let insertedOption = await optionSchema.DROPDOWN.create(option);
    return insertedOption;
  } catch (err) {
    console.log("record not inserted========================");
    throw err;
  }
};




