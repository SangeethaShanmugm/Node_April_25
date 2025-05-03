import express from 'express'
import fs from "fs"

const app = express()
const PORT = 5000;

//req => what we send to server
//res => what we receive from server

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/movies', (req, res) => {
    fs.readFile("./movie_list.json", (err, result) => {
        if (err) console.log(err)
        res.send(result)
        // res.send(JSON.parse(result))
    })
})


app.listen(PORT, () => console.log("Express server listening to PORT", PORT))