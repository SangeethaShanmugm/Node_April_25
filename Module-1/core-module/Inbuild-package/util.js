var util = require("util");

var text = "Congratulations %s on his %dth birthday";


var result = util.format(text, "John", 11)
console.log(result)

const name = "Jack";
const age = 20;

const formattedString = util.format("Name: %s, Age: %d", name, age);

console.log(formattedString);

const obj = {
    name: "Mickenzie",
    age: 30,
    details: {
        city: "NY"
    }
}
//util.inspect(obj, options)
console.log(util.inspect(obj, { showHidden: false, depth: null, colors: true }))
console.log(obj)