const express = require('express');
const router = express.Router();
const Dinosaur = require('../models/dinosaur');

// Get/search dinosaurs
router.get('/dinosaurs', function(request, response, next) {
    var query = {};

    if (request.query.searchString.length > 0) {
        query = {
            $or: [
                { name: {$regex: request.query.searchString, $options: 'i'} },
                { type: {$regex: request.query.searchString, $options: 'i'} },
                { diet: {$regex: request.query.searchString, $options: 'i'} },
                { foundIn: {$regex: request.query.searchString, $options: 'i'} },
                { whenItLived: {$regex: request.query.searchString, $options: 'i'} }
            ]
        };
    }

    Dinosaur.find(query).then(function(dinosaurs) {
        response.send(dinosaurs);
    });
});

// Add a dinosaur to the list
router.post('/dinosaurs', function(request, response, next) {
    Dinosaur.create(request.body).then(function(dinosaur) {
        response.send(dinosaur);
    }).catch(next);
});

// Update a dinosaur already in the database
router.put('/dinosaurs/:id', function(request, response, next) {
    Dinosaur.findByIdAndUpdate({ _id: request.params.id }, request.body).then(function() {
        Dinosaur.findOne({ _id: request.params.id }).then(function(dinosaur) {
            response.send(dinosaur);
        });
    });
});

// Delete a dinosaur already in the database
router.delete('/dinosaurs/:id', function(request, response, next) {
    Dinosaur.findByIdAndRemove({ _id: request.params.id }).then(function(dinosaur) {
        response.send(dinosaur);
    });
});

module.exports = router;