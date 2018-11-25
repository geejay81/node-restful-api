const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/dinodb');
mongoose.Promise = global.Promise;

const portNumber = process.env.port || 3000;

// Order is key in the lines below
// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/api', routes);
app.use(function(error, request, response, next) {
    response.status(422).send({ error: error.message });
});

app.listen(portNumber, function() {
    console.log('Listening on port ' + portNumber);
});