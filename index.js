const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const app = express();
const portNumber = process.env.port || 3000;

// Order is key in the lines below
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(portNumber, function() {
    console.log('Listening on port ' + portNumber);
});