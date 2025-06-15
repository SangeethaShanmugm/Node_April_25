import express from "express";
import fs from "fs";
const app = express()
const PORT = 6500;
const getMovies = () => {
    const data = fs.readFileSync("./db.json", 'utf-8');
    console.log(data)
    return JSON.parse(data)
}

// getMovies();

app.get("/", (req, res) => {
    res.send('<h1>Welcome to Testing api</h1>')
})

app.get("/movies", (req, res) => {
    fs.readFile('db.json', (err, result) => {
        if (err) throw err;
        res.send(JSON.parse(result))
    })
})

//movies by id

app.get("/movies/:id", (req, res) => {
    const movieId = req.params.id
    console.log(movieId)
    const movies = getMovies();
    const movie = movies.find(mov => mov._id === movieId)
    res.send(movie);
})

app.get("/content", (req, res) => {
    fs.appendFile("./mytext.txt", '\ncontent', (err) => {
        if (err) throw err;
        else {
            fs.readFile("./mytext.txt", 'utf-8', (err, data) => {
                if (err) throw err;
                res.send(data)
            })
        }
    })
})



app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})