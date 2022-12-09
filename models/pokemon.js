const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const pokemon = mongoose.model("Pokemon", pokemonSchema)

module.exports = pokemon