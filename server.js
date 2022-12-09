require('dotenv').config()
const mongoose = require("mongoose")
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const pokemon = require('./models/pokemon.js')

//Middleware
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
app.use(express.urlencoded({ extended: false }))

//Views
app.set('views', './views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Mongoose
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('strictQuery', false)
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
})

//Root
app.get('/', (req, res) => {
    res.send(`<h1 style='color:blue'>Welcome to the Pokemon App!</h1>`)
})

//Index
app.get("/pokemon", (req, res) => {
  pokemon.find({}, (error, allPokemon) => {
    res.render("Index", {
      pokemon: allPokemon,
    })
  })
})

//New
app.get("/pokemon/new", (req, res) => {
    res.render("New");
  })

//Delete

//Update

//Create
app.post("/pokemon", (req, res) => {
    pokemon.create(req.body, (error, createdPokemon) => {
      res.redirect("/pokemon")
    })
  })

//Edit

//Show
app.get("/pokemon/:pokemonId", function (req, res) {
  pokemon.findById(req.params.pokemonId, (err, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    });
  });
})

//Port
app.listen(port,() => {
    console.log('Listening on port' , port)
})