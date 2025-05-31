// var => we can redeclare and reassign ✅
// let => we cannot redeclare but can reassign ✅
// const  => neither redeclare nor reassign ❌

//block  => {}
// scope => lifetime of a variable

{
    let x = 10;
    console.log(x)
}


// var a = 10;
// var a => declaration
// a = 10 => assignment

//var - redeclaration
var a = 10;
var a = 20;
console.log(a)

//var - reassignment
var b = 10;
b = 20;
console.log(b)

//let - redeclaration ❌

// let z = 10;
// let z = 20;
// console.log(z)//SyntaxError: Identifier 'z' has already been declared

//let  - reassignment

let z = 50;
z = 100;
console.log(z)

//const  - redeclaration

// const y = 20;
// const y = 50;
// console.log(y)

//const  - reassignment

// const y = 20;
// y = 50;
// console.log(y)//TypeError: Assignment to constant variable.


//var => global/functional scope
//let, const => block scope

//function - ES5

function double() {
    var n = 20;
    return n * 2
}

console.log("double", double())

//es6 -> arrow function

const double1 = (n) => n * 2

console.log("double1", double1(20))

//object  => {k:v} => ES5

var obj1 = {
    name: "jack",
    age: 20
}
console.log(obj1)
console.log(obj1.name) //dot notation
console.log(obj1.age)

//destructuring -> Es6

const { name, age } = obj1;
console.log("destructuring", name, age)

//assign - ES5

var o1 = {
    firstName: "John",
    lastName: "Andrew"
}

var o2 = {
    age: 20,
    city: "London"
}

var o3 = Object.assign(o1, o2);
console.log("ES5 object assign => ", o3)

//spread operator => Es6

var o3 = { ...o1, ...o2 }
console.log("ES6 object assign => ", o3)

//string literals = ES5

//An Avenger is an Action movie with rating of 5 and its from category Hollywood.

var movieName = "Avenger";
var type = "Action";
var rating = 5;
var category = "Hollywood";

var output = "An " + movieName + " is an " + type +
    " movie with rating of " + rating +
    " and its from category " + category + ".";

console.log("ES5 string literals => ", output);

//es6 => template literals

// `` => backtick + interpolation ${} => substitute value

var output = `An ${movieName} is an ${type} movie with rating of ${rating} and its from category ${category}.`;

console.log("ES6 string literals => ", output);

//set object 

var x = new Set();
x.add(1);
x.add(2);
x.add(3);
x.add(4);
x.add("Hello");
x.add("Hello")
// console.log(x)

var result = { a: 1, b: 2 }
x.add(result)
x.add(result)
console.log(x)