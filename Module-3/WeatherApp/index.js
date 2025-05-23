const express = require("express")
const request = require("request")
const app = express()
const PORT = 5000;

//req => what we send to server
//res => what we receive from server

const url = "https://api.openweathermap.org/data/2.5/weather?lat=12.96&lon=77.62&appid=2aa8342c3012d76d95588b3d6144ddca";

//setup ejs

app.use(express.static(__dirname + "/public"))//css
app.set("views", "./src/views")//pages
app.set("view engine", "ejs")//choose ejs template

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.get('/getWeather', (req, res) => {
    request(url, { json: true }, (error, response, body) => {
        if (error) {
            console.log("An error occured", error);
            return;
        } else {
            const output = response.body;
            console.log(output)
            // res.send(output)
            res.render("main", { output, title: "Weather App" })
        }

    })

})


app.listen(PORT, () => console.log("Express server listening to PORT", PORT))