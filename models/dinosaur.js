const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dinosaurSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Dinosaur must have a name']
    },
    type: {
        type: String,
        required: [true, 'Dinosaur must have a type']
    },
    length: {
        type: Number,
        required: [true, 'Dinosaur must have an average length']
    },
    diet: {
        type: String
    },
    whenItLived: {
        type: String
    },
    foundIn: {
        type: String
    }
});

const Dinosaur = mongoose.model('dinosaur', dinosaurSchema);

module.exports = Dinosaur;