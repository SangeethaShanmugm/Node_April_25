import express from 'express';
import { MongoClient } from 'mongodb';
import { moviesRouter } from "./router/movies.js";
const app = express()
const PORT = 4000;

//Inbuilt middleware
app.use(express.json())

//req => what we send to server
//res => what we receive from server
const mongourl = 'mongodb://127.0.0.1:27017';

app.get('/', async (req, res) => {
    res.send("Welcome to Movies App");
})


function connection() {
    const client = new MongoClient(mongourl); 
    client.connect();
    console.log("Mongodb is connected");
    return client;
}

export const client = connection();

app.use("/movies", moviesRouter);

app.listen(PORT, () => {
    console.log("Express server listening to PORT", PORT);
})
