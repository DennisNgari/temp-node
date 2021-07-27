//CommonJs, every file is a  module by default.
// Modules - encapsulated code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");
console.log(data);
sayHi("Mike");
sayHi(names.peter);
sayHi(names.john);
