import express from 'express';
import mongoose from "mongoose"
import productModel from "./model/productModel.js"
const app = express()
const PORT = 8000;

//Inbuilt middleware
app.use(express.json())

//req => what we send to server
//res => what we receive from server
const mongourl = 'mongodb://127.0.0.1:27017/node_may25';

mongoose.connect(mongourl);
console.log("Mongodb is connected");

app.get('/', async (req, res) => {
    res.send("Welcome to Product App");
})

//add new product

app.post('/addProduct', async (req, res) => {
    productModel.create(req.body).then(() => {
        res.send("Product Added Successfully");
    })
})

//get product

app.get('/getProduct', async (req, res) => {
    productModel.find().then((result) => {
        res.send(result);
    })
})

//delete product

app.delete('/deleteProduct', async (req, res) => {
    productModel.findOneAndDelete({ name: req.body.name }).then((result) => {
        res.send("Product deleted Successfully");
    })
})

//update product

app.put('/editProduct', async (req, res) => {
    productModel.findOneAndUpdate(
        { name: req.body.name },
        {
            $set: {
                name: req.body.name,
                poster: req.body.poster,
                price: req.body.price,
                description: req.body.description,
            }
        }
    ).then((result) => {
        res.send("Product updated Successfully");
    })
})


app.listen(PORT, () => {
    console.log("Express server listening to PORT", PORT);
})
