const mongoose = require('mongoose');
const Recipe = require('../models/recipe');

//get data
const getAllData = async (req, res,) => {
    try {
        const recipeList = await Recipe.find().sort({ _id: -1 })
        if (recipeList.length != 0) {
            res.status(200).json({
                totalproducts: recipeList.length,
                data: recipeList
            });
        } else {
            res.status(204).json({
                message: 'No entries found in table'
            });
        }
    } catch (error) {
        res.send('Error => ' + error)
    }
}


//get single product data
const getSingleRecipe = async (req, res,) => {
    const id = req.params.id;
    try {
        const recipe = await Recipe.findById(id)
        if (recipe.length != 0) {
            res.status(200).json(recipe);
        } else {
            res.status(203).json({
                message: 'No valid entry found for provided ID'
            });
        }
    } catch (error) {
        res.send('Error => ' + error)
    }
};

//add product
const addRecipe = async (req, res) => {
    const recipe = Recipe({
        title: req.body.title,
        img: req.body.img,
        process: req.body.process,
        ingredients:req.body. ingredients
    });
    recipe.save()
        .then(result => {
            res.status(201).json({
                message: "Thank you for adding data"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err,
            });
        });
}



//delete product
const deleteData = async (req, res) => {
    const id = req.params.id;
    try {
         await Recipe.findByIdAndRemove(id)
        res.status(200).json({
            message: "Record Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports =
{
    getAllData,
    addRecipe,
    deleteData,
    getSingleRecipe
}