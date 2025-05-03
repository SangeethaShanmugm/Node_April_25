//read fun.txt and remove line  -> Happy Day

const fs = require("fs");

fs.readFile("./fun.txt", "utf-8", (err, data) => {
    if (err) console.log(err)
    console.log("Content of file:", data)

    //remove specific line
    const modifiedContent = data //"Hello Everyone\nHappy Day\nPositive Day"
        .split("\n") //["Hello Everyone","Happy Day","Positive Day"]
        .filter(line => line.trim() !== "Happy Day") //["Hello Everyone","Positive Day"]
        .join("\n");

    fs.writeFile("./fun.txt", modifiedContent, (err) => {
        if (err) {
            console.error("Error writing file:", err)
        } else {
            console.log("Specific content removed successfully")
        }
    })
})