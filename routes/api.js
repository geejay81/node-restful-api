const express = require('express');
const router = express.Router();
const Dinosaur = require('../models/dinosaur');

// Get a list of all dinosaurs
router.get('/dinosaurs', function(request, response) {
    console.log('GET /api/dinosaurs');
    response.send([]);
});

// Add a dinosaur to the list
router.post('/dinosaurs', function(request, response) {
    Dinosaur.create(request.body).then(function(dinosaur) {
        response.send(dinosaur);
    });
});

// Update a dinosaur already in the database
router.put('/dinosaurs/:id', function(request, response) {
    console.log('POST /api/dinosaurs/' + id);
    console.log(request.body);
    response.send({ result: "Not yet implemented" });
});

// Delete a dinosaur already in the database
router.delete('/dinosaurs/:id', function(request, response) {
    console.log('DELETE /api/dinosaurs/' + id);
    console.log(request.body);
    response.send({ result: "Not yet implemented" });
});

module.exports = router;