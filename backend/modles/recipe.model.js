const mongoose = require('mongoose');

// Define a schema for the recipe
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  steps: {
    type: [String],
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

// // Define a model for the recipe schema
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
