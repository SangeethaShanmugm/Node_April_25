var input1 = process.argv[2];
var operator = process.argv[3];
var input2 = process.argv[4];


console.log("input1", input1, "operator", operator, "input2", input2);

var result;

if (operator == '+') {
    result = +input1 + +input2;
    // result = parseInt(input1) + parseInt(input2);
} else if (operator == '-') {
    result = +input1 - +input2;
} else if (operator == '*') {
    result = +input1 * +input2;
} else if (operator == '/') {
    result = +input1 / +input2;
}

console.log("The result is", result)