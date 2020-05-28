const mongoose = require('mongoose');
const config = require('../config');

exports.connect = () => {
  mongoose.connect(config.mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
  });
  mongoose.connection.once('open', () => {
    console.log("Connected to DB", config.mongo.uri);
  });
};