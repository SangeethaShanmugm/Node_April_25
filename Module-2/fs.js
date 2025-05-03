const fs = require("fs");

// fs.open("./cool.txt", 'r', (err, file) => {
//     if (err) console.log(err);
//     console.log("File opened successfully", file)
// })

//read file
// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//     if (err) console.log("Error❌:", err)
//     console.log("The content of the file:", data)
// })

//append file

const quote = "\nLive more, worry less🥳";

// fs.appendFile("./cool.txt", quote, () => {
//     console.log("Completed writing")
// })


// fs.unlink("./toRemove.txt", (err) => {
//     if (err) console.log(err);
//     console.log("Deleted Successfully");
// })

//clear file content -> 0 length
// fs.truncate("./cool.txt", 0, (err) => {
//     if (err) console.log(err);
//     console.log("Truncate Successfully");
// })


//Object  => { K : V }

const user = {
    name: "jack",
    age: 30,
    phone: 123436547
}

// console.log(user);

// const userData = JSON.stringify(user);
// console.log(userData);

// const userDataObj = JSON.parse(userData);
// console.log(userDataObj);

const movie = {
    name: "Avengers",
    type: "Hollywood"
}
//do stringify and store this data in movies.json file

const movieData = JSON.stringify(movie);
console.log("movieData", movieData);

fs.writeFile("movies.json", movieData, (err, moviesInfo) => {
    console.log("Writing JSON successful", moviesInfo)
})