const url = require("url");

const urlString = "https://github.com/SangeethaShanmugm?tab=repositories";

const parseUrl = url.parse(urlString, true);

console.log(parseUrl.hostname)
console.log(parseUrl.pathname)
console.log(parseUrl.query)
console.log(parseUrl.search)