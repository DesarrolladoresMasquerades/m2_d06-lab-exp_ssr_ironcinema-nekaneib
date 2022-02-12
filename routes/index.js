const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;

router.get("/movies", (req,res)=>{
Movie.find()
    .then((movie)=>{
        res.render("movies", {movie})
    })
})

router.get("/movies/:id", (req,res)=>{
    const id = req.params.id
    Movie.findById(id)
    .then((movie)=>{
        res.render("movieDetails", movie)
    })
})
