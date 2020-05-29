const express = require('express');
const config = require('./config');
const database = require('./app/database');
const app = express();

const port = config.port;

database.connect();

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});