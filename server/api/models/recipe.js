const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: 'Please enter  title'
    },
    img: {
        type: String,
        required: 'Please enter image'
    },
    process: {
        type: String,
        required: 'Please enter recipe'
    },
    ingredients:{
        type:String,
        require:'Please enter ingraddients'
    }
},
    {
        timestamps: true,
    });


const Recipe = new mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;