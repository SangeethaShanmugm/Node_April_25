import express from "express";

const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
    res.send("Babel Example")
})


app.listen(PORT, () => console.log("Server started on the PORT", PORT))