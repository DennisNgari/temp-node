//fs The file module
//Synchronous-blocking
const { readFileSync, writeFileSync } = require("fs");
console.log("Start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

//Write a file.
//flag "a" appends the result.
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first},${second}`,
  { flag: "a" }
);

console.log("Done with the task");
console.log("Starting the next One");
