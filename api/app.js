/**
 * Module dependencies.
 */
const appConsts = require('./app/config/appConstants')

var express = require('express')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
/********************* Routes********************************/
const optionsRoutes = require('./routes/optionsRoutes');

const dbConnector = require('./app/db/connection');
var urlProvider = require('./app/config/urlProvider');
// const errorHandler=require('./app/services/errorHandler')
var app = express();
 
app.use(cors())

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());



app.use(urlProvider.VERSION, optionsRoutes);



// app.use(function (err, req, res, next) {
//     let errorResponse=errorHandler.getResponse(err);
//     res.status(errorResponse.statusCode).send(errorResponse.response);
// });

// app.use(function(req, res, next) { //allow cross origin requests
//     res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Credentials", true);
//     next();
// });

app.listen(appConsts.PORT, () => {
    console.log('app is running at ', appConsts.PORT)
    dbConnector.createMongooseConnections('test');
});