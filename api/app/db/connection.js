var Mongoose = require('mongoose');

exports.createMongooseConnections = (dbName, host = 'localhost', port = 27017) => {
    const url = `mongodb://${host}:${port}/${dbName}`;
    Mongoose.connect(url,{ useNewUrlParser: true });
    Mongoose.connection.on('connected', function () {
        console.log('mongoose connected to '+dbName)
    });
    Mongoose.connection.on('error', function (err) {
        console.log('mongoose unable to connect to '+dbName,'\n error=',err)
    });
    Mongoose.connection.on('disconnected', function () {
        console.log('mongoose disconnected from '+dbName)
    });
}
