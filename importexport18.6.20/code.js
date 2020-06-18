// import sayHi, { profession } from "./helpers.js";
// // default export is the first value
// //sayHi name doesn't matter, can rename this to anything, it's value is whatever the default export is
// // named exports go in curly braces and the names matter
// // export default doesn't work with variables such as let,consts

// console.log(profession);
// sayHi("andy");

//////////////////////////

// npm init -y // start npm project with default options
// npm i lodash     // install lodash library
// npm install --save-dev webpack
// npm install --save-dev webpack-cli
// ./node_modules/.bin/webpack code.js --mode=development

// anytime you change the code you need to rebuild the webpack
// avoid using require if you can
// webpack is optimising the code for the browser/web

// we can create a script in package.json that will keep watch on what gets changed and saved, and will rebuild the webpack

// below code
// "watch": "webpack code.js --watch --mode=development",
// we can then use   npm run watch   which will be a background process that's running that will keep an eye on any changes that are saved and rebuild the webpack

import lodash from "lodash";

console.log(lodash);
console.log("hereafteraasdsasdsdadsd");
