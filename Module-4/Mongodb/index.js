const express = require('express')
const { MongoClient } = require('mongodb');
const app = express()
const PORT = 5000;

//req => what we send to server
//res => what we receive from server
const mongourl = 'mongodb://127.0.0.1:27017';
const dbName = 'node_may25'
let db;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/movies', async (req, res) => {
    const moviesList = await db.collection("movies").find().toArray()
    res.send(moviesList)
})


async function connection() {
    const client = new MongoClient(mongourl)
    await client.connect();
    console.log("Mongodb is connected");
    db = client.db(dbName);
}

connection().then(() => {
    app.listen(PORT, () => {
        console.log("Express server listening to PORT", PORT)
    })
})
