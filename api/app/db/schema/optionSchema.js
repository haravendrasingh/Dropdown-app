const dbConsts = require('../../db/dbConstants')
var mongoose = require('mongoose');
let optionSchema = new mongoose.Schema({
    options: {
        type: Array,
        default:[]
    },
    
});



let DROPDOWN = mongoose.model(dbConsts.COLLECTIONS.DROPDOWN, optionSchema);

module.exports = Object.freeze({
    DROPDOWN: DROPDOWN
})