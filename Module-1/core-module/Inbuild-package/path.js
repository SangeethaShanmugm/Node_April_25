var path = require("path");

var p = "A:\\DA\\E-batch\\Node_April_25\\Module-1\\core-module\\path.js";

console.log(path.dirname(p))
console.log(path.basename(p))//last portion
console.log(path.extname(p))//extension of file
console.log(path.isAbsolute(p))