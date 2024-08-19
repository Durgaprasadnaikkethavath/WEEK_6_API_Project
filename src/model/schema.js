const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: String,
  nutritionalInfo: {
    calories: Number,
    macronutrients: {
      protein: Number,
      fat: Number,
      carbohydrates: Number,
      sugar: Number,
      fiber: Number,
    },
    micronutrients: {
      vitamins: Map,
      minerals: Map,
    },
    sodium: Number,
    cholesterol: Number,
  },
  servingSize: String,
  allergens: [String],
  ingredients: [String],
  preparationMethods: String,
  certifications: [String],
  countryOfOrigin: String,
  brandOrManufacturer: String,
  dietaryRestrictions: [String],
  healthBenefits: String,
  bestPractices: String,
});

const FoodItem = new mongoose.model("FoodItems_api", foodItemSchema);

module.exports = FoodItem;
