if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config');
var db = config.DB[process.env.NODE_ENV];
var PORT = config.PORT[process.env.NODE_ENV] || process.env.PORT;
var apiRouter = require('./routes/api');
var cors = require('cors');

app.use(cors());

mongoose.connect(db, function (err) {
  if (!err) {
    console.log(`connected to the Database: ${db}`);
  } else {
    console.log(`error connecting to the Database ${err}`);
  }
});

app.use(bodyParser.json());
app.use('/api', apiRouter);

app.use('/*', function (request, response) {
  response.status(404).send({ reason: 'ROUTE NOT FOUND' });
});

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});

app.use(function (error, request, response, next) {
  if (error.name === 'CastError') {
    return response.status(400).send({
      reason: `No id ${error.value} found`,
      stack_trace: error
    });
  }
  return next(error);
});

app.use(function (error, request, response) {
  return response.status(500).send({ error});
});