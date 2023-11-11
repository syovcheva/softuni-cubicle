const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        imageUrl: String,
        difficultyLevel: Number,
        accessories: [{
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
            //  the name of the model that the accessory field refers to (from Accessory.js)
        }]
    });

const Cube = mongoose.model('Cube', cubeSchema);


module.exports = Cube;
// module.exports = mongoose.model('Cube', cubeSchema);