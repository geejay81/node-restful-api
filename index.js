const express = require('express');

const app = express();
const portNumber = process.env.port || 3000;

app.get('/api', function(request, response) {
    console.log('GET /api');
    response.send('Hello World!');
});

app.listen(portNumber, function() {
    console.log('Listening on port ' + portNumber);
});