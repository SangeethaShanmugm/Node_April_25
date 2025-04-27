const fs = require('fs');

// console.log("Hello Everyone🥳");

//create a new file

const quote = "Make everyday a little less ordinarily🥳🥳"

//callback function => function inside an another function(nested func)

// fs.writeFile("fun.pdf", quote, () => {
//     console.log("File written successfully")
// })

const quote2 = "Live more, worry less"

//backup => text-1.html, text-2.html...text-10.html
//`` => backtick, ${} => interpolation => substitute the value
// for (var i = 1; i <= 10; i++) {
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote, () => {
//         console.log(`File written successfully for text-${i}.html`);
//     })
// }


for (let i = 1; i <= 10; i++) {
    fs.writeFileSync(`./backup/note-${i}.html`, quote);
    console.log(`File written successfully for note-${i}.html`);
}