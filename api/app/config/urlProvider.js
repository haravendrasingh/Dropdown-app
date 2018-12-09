/**
* @providesModule Url
*/

'use strict';
let webProtocol='http://';
let domain="localhost:5000";
let VERSION = "/app";

let OPTIONS = {
    BASE:"/convertCSV",
    ADD:'/options',
    EDIT:'/options/:optionId'
}

let urlProvider = {
    PROTOCOL:webProtocol,
    DOMAIN:domain,
    VERSION:VERSION,
    OPTIONS_BASE: OPTIONS.BASE,
    OPTIONS_ADD: OPTIONS.ADD,
    OPTIONS_EDIT: OPTIONS.EDIT,

};

module.exports =
    Object.freeze(urlProvider); // freeze prevents changes by users