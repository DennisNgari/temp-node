// npm -global command, comes with node
// npm --version

// local dependnacy - use it only in this project
// npm i <PackageName>

// Gloobal dependacy - use it in any project
// npm install -g </packageName>
// sudo install -g </packageName>

// package.json -manifest file (stores important info about project/package)
// Manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
