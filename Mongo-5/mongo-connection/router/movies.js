import express from "express";
import { getAllMovies, addMovie, getMovieById, deleteMovieById, updateMovieById } from '../helper.js';

const router = express.Router();

//rest endpoints

//get all movies
router.get('/', async (req, res) => {
    const movies = await getAllMovies()
    res.send(movies);
})

//add newmovies
router.post('/', async (req, res) => {
    const newMovie = req.body;
    console.log(newMovie)
    const result = await addMovie(newMovie)
    res.send(result);
})

//get particular movie id
router.get('/:movieid', async (req, res) => {
    const { movieid } = req.params;
    console.log("movieid", movieid, req.params)
    const movie = await getMovieById(movieid)
    // if (!movies) {
    //     return res.status(404).send({ message: "Movie not found" });
    // }
    // res.send(movies);
    return !movie
        ? res.status(404).send({ message: "Movie not found" })
        : res.send(movie)
})

//delete particular movie id
router.delete('/:deletemovieid', async (req, res) => {
    const { deletemovieid } = req.params;
    const movies = await deleteMovieById(deletemovieid)
    console.log(movies)
    return !movies
        ? res.status(404).send({ message: "Movie not found" })
        : res.send({ message: "Movie deleted successfully" })
})

//update -> add + particular id
router.put('/:movieid', async (req, res) => {
    const { movieid } = req.params;
    const updatedMovie = req.body;
    console.log(updatedMovie)
    const result = await updateMovieById(movieid, updatedMovie)
    res.send({ message: "Movie updated successfully" });
})

export const moviesRouter = router;

