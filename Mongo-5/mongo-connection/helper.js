import { client } from './index.js';

function getAllMovies() {
    return client.db("node_may25").collection("movies").find().toArray();
}

function addMovie(newMovie) {
    return client.db("node_may25").collection("movies").insertOne(newMovie);
}

function getMovieById(movieid) {
    return client.db("node_may25").collection("movies").findOne({ id: movieid });
}

function deleteMovieById(deletemovieid) {
    return client.db("node_may25").collection("movies").findOneAndDelete({ id: deletemovieid });
}

function updateMovieById(movieid, updatedMovie) {
    return client.db("node_may25").collection("movies")
        .findOneAndUpdate({ id: movieid }, { $set: updatedMovie });
}

export { getAllMovies, addMovie, getMovieById, deleteMovieById, updateMovieById }