import mongoose, { model } from "mongoose";

const scheme = mongoose.Schema;
const productModel = new scheme(
    {
        name: { type: String, required: true },
        poster: String,
        price: Number,
        description: String,
    },
    { timestamps: true }
)

export default model("products", productModel)