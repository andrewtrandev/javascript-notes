// https://edabit.com/challenges

/*
Create a function that counts the number of syllables a word has.Each syllable is separated with a dash -.

Examples
numberSyllables("buf-fet") ➞ 2

numberSyllables("beau-ti-ful") ➞ 3

numberSyllables("mon-u-men-tal") ➞ 4

numberSyllables("on-o-mat-o-poe-ia") ➞ 6
*/

///////////////////////////////////////////////////////////////////////////////////////
// function numberSyllables(word) {
//   wordArray = word.split("-");
//   let counter = 0;
//   for (let syllable in wordArray) {
//     counter++;
//   }
//   return counter;
// }

// console.log(numberSyllables("on-o-mat-o-poe-ia"));
///////////////////////////////////////////////////////////////////////////////////////

/*
Create a function that takes a string and returns the word count. The string will be a sentence.

Examples
countWords("Just an example here move along") ➞ 6

countWords("This is a test") ➞ 4

countWords("What an easy task, right") ➞ 5
*/
///////////////////////////////////////////////////////////////////////////////////////

// function countWords(str) {
//   return str.split(" ").length;
// }

///////////////////////////////////////////////////////////////////////////////////////
/*
Which Function Returns the Larger Number?
Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

If f returns the larger number, return the string f.
If g returns the larger number, return the string g.
If the functions return the same number, return the string neither.
Examples
whichIsLarger(() => 5, () => 10) ➞ "g"

whichIsLarger(() => 25,  () => 25) ➞ "neither"

whichIsLarger(() => 505050, () => 5050) ➞ "f"
Notes
This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).
*/
/////////////////////////////

// function whichIsLarger(f, g) {
//   let callf = f();
//   let callg = g();

//   if (callf > callg) {
//     return "f";
//   } else if (callf < callg) {
//     return "g";
//   } else {
//     return "neither";
//   }
// }

// console.log(
//   whichIsLarger(
//     () => 5,
//     () => 10
//   )
// );

////////////////////////////////////////////////////////////////////////////

/*
Add up the Numbers from a Single Number
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
Notes
Expect any positive number between 1 and 1000.
*/

///////////////////////////////

//      SOLUIION

// function addUp(num) {
//   let count = 0;
//   for (i = 0; i < num + 1; i++) {
//     count += i;
//   }
//   return count;
// }

// console.log(addUp(4));

/////////////////////////////////////////////////////////////////////////////////////////

/*

Create a function that takes an array and returns an array of the accumulating product.

Examples
accumulatingProduct([1, 2, 3, 4]) ➞ [1, 2, 6, 24]
// [1, 2, 6, 24] can be written as [1, 1 x 2, 1 x 2 x 3, 1 x 2 x 3 x 4]

accumulatingProduct([1, 5, 7]) ➞ [1, 5, 35]

accumulatingProduct([1, 0, 1, 0]) ➞ [1, 0, 0, 0]

accumulatingProduct([]) ➞ []
*/

//////////////////////////////////////////////////
//          SOLUTION  - 5/5 that felt really hard

// function accumulatingProduct(arr) {
//   console.log(arr.length);
//   let arrayReturn = [];
//   let multiple = arr[0];

//   for (i = 1; i < arr.length + 1; i++) {
//     arrayReturn.push(multiple);
//     multiple *= arr[i];
//   }
//   return arrayReturn;
// }

// console.log(accumulatingProduct([1, 2, 3, 4]));

// make a for loop and go through each number
// if the number is array[0] do nothing
// if the number is array[1] multiply it by array[0]
//if the number is arr[2] mutiply it by arr[1] and arr[0]

//////////////////////////////////////////////////////

//          ALTERNATE SOLUTION // don't really understand how to use map

// const accumulatingProduct = (arr) => {
//   let product = 1;        // this variable is one so that we can get the first value of arr[0]
//   return arr.map((num) => (product *= num));     // map works by returning the callback on each of the values into a new array.
// };                                               // on the first run it will do product = product * num[0] , product = 1
//                                                  // on second run product = product * num[1], product = 2
//                                                  // third run, product = 6
//                                                  // fourth run, product = 24

// console.log(accumulatingProduct([1, 2, 3, 4]));

//////////////////////////////////////////////////

//              MAP PRACTICE

// const array2 = [1, 2, 3, 4];
// let map3 = 1;
// const map2 = array2.map((x) => (map3 = map3 * 10)); // for x, call the following function for each of x, you don't even have to use x in the callback and it will still return an array, but I think in 99% cases you would have the element in the callback because you want to apply the function to it.

// console.log(map2);

//////////////////////////

// const array1 = [1, 4, 9, 16];

// pass a function to map
// const map1 = array1.map((x) => x * 2); // this will return [2, 8, 18, 32]
// const map1 = array1.map((x) => 1 * 2); // this returns [2, 2, 2, 2]
// console.log(map1);
// expected output: Array [2, 8, 18, 32]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The Fizz Buzz Test
// Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”

// Example
// fizzBuzz(10) ➞ [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']

// fizzBuzz(15) ➞ [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
// Notes
// Make sure to return array.

//////////////////////////////////////

//          SOLUTION

// function fizzBuzz(number) {
//   returnCount = [];
//   for (i = 1; i < number + 1; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       returnCount.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       returnCount.push("Fizz");
//     } else if (i % 5 === 0) {
//       returnCount.push("Buzz");
//     } else {
//       returnCount.push(i);
//     }
//   }
//   return returnCount;
// }
// console.log(fizzBuzz(15));

///////////////////////////////////////////////////////////////////////////////////

// Write a function redundant that takes in a string str and returns a function that returns str.

// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""
// Notes
// Your function should return a function, not a string.

///////////////////////////////////////////////////////////////////////////////

//    still don't really understand this question

////////////////////////////////////

//           SOLUTION

// function redundant(str) {
//   return () => str;
// }

// const f1 = redundant("apple");
// f1();

// const f2 = redundant("pear");
// f2();

// const f3 = redundant("");
// f3();

// console.log(f1());

/////////////////////////////////////////////////////////////////////////

/*
https://edabit.com/challenge/vtDnynHfWCnMaKYym

Algorithms I: Introduction to Recursion
Welcome to the beginning of this collection on Computer Science Algorithms. Admittedly there are other challenges on Edabit that deal with recursion and algorithmic processes, but these particular challenges are designed to give examples and to educate users on the topics being covered.

Recursion
In computer science, "recursion" is the act of writing a function that calls itself from within its own code. The function below better helps explain and illustrate recursion by simply counting down from a given number to zero:

function factorial(num) {
  let targetNumber = 0

  if (num == targetNumber)
    {console.log("Countdown complete!")}
  else
    {factorial(num - 1)}
}

Explanation
The above function starts by initializing the target number, which is zero, then it creates a base case by checking if the inputted number has reached the target number yet. If it has, then the function ends and it prints the statement, else the function inputs num subtracted by one and then runs the function again.

When using recursive functions a "Base Case" is needed. A base case will stop the function once it reaches its intended goal. In the absence of a base case, the program can either crash due to "Stack Overflow" or by initiating an "Infinite Loop."

On a side note, initializing variables in recursive functions can sometimes be problematic because when the function runs again it will reset the value of that variable. For this specific recursive function the variable works fine because the target number we're trying to reach is consistently zero.

Instructions
The recursive function for this challenge should return the factorial of an inputted integer. If anyone needs a refresher, factorials in mathematics are represented by an exclamation point placed to the right of a number: 4! = 4 x 3 x 2 x 1 = 24

Examples
factorial(5) ➞ 120

factorial(3) ➞ 6

factorial(2) ➞ 2
Notes
Puts statements can be added to the Countdown function example for illustrative purposes if need be.
Terms that are placed in italics ("example"), while not always necessary to completing the challenge, can be helpful or just generally good to know as an aspiring programmer or computer science student/enthusiast.
Several of the challenges that will be covered in this collection on algorithms can be solved non-recursively and without implementing the algorithms described in each challenge. I implore anyone solving these challenges to do them as intended. Not understanding the concepts taught will be an obstacle to later challenges and won't aid anyone in advancing their skills as a programmer.
If you are stuck please check the Resources tab, Comments tab, or if you're really stuck, use the Solutions tab to unlock the answers.
*/

/////////////////////////////////////////////////////////////////////////////////

//if factorial(2) = 2 x (2-1)
// and stop when n === 1
// first we set the base case for when recursion should stop

//      SOLUTION

// function factorial(num) {
//   let targetNumber = 1;
//   if (num === targetNumber) {
//     return num;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// console.log(factorial(3));

///////////////////////////
//      REFACTOR

// function factorial(num) {
//   if (num === 1) {
//     return num;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// console.log(factorial(3));

/////////////////////////////////////////////////////////////////////////////////
/*
https://edabit.com/challenge/7KbZc8QvzqrJPaE6Q

RegEx XIV: Group Ranges x|y
Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".

const REGEXP = /blue|red/

"red flag".match(REGEXP)  // red
"blue flag".match(REGEXP)  // blue

// Matches "blue" in "blue flag" and "red" in "red flag".
Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.

Examples
"red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]
Notes
Check the Resources tab if you get stuck.
*/

//////////////////////////////////////

//          SOLUTION

// const REGEXP = /red flag|blue flag/g;

// // console.log("red flag blue flag".match(REGEXP)); // ["red flag", "blue flag"]

// console.log("yellow flag red flag blue flag green flag".match(REGEXP)); //➞ ["red flag", "blue flag"]

// console.log(
//   "pink flag red flag black flag blue flag green flag red flag ".match(REGEXP)
// ); //➞ ["red flag", "blue flag", "red flag"]

///////////////////////////////////////////////////////////////////////////////////

/*

https://edabit.com/challenge/W6RRCaj8mZJgiRAgy

Promises II: What Is a Callback?
Callbacks are first-class functions. This means they have first-class characteristics, like being able to be passed to other functions. There was a time when callbacks were used to handle async operations, but we needed something better because of a few shortcomings (like problems with nested callbacks).

Here's a simple example of a callback:

function asyncFunc(cb) {
  let result = ""
  // After some time the result of an async opertion comes back and is put in the "result" variable.  We'll use a string for this example.   
  result = "hello"
  cb(result)
}

function callback(str) {
  console.log(str)
}

asyncFunc(callback)
console.log("goodbye")

// goodbye
// hello
"goodbye" appears before "hello" because the async operation in asyncFunc() is non-blocking, meaning that it is set aside until it finishes but in the meantime we go ahead and call the next function.

//////////////////////////////////////////////

Challenge
Fix anotherFunc() so that calls to it will change the doc variable to bye.
Keep the setTimeout to 100ms and do not change the callback function or the doc variable.
Notes
Check the Resources tab for more info on callbacks.
*/

/////////////////////////////////////////////

//leave set time out and do not change callback func or doc var
// change doc var to bye

//          SOLUTION

// function anotherFunc(callback) {
//   //feed in the call back
//   let str = "bye";
//   setTimeout(() => {}, 100);
//   return callback(str); //invoke the callback with str so that it replaces doc with the input str
// }

// var doc = "hello";

// function callback(str) {
//   doc = str;
// }

// console.log(doc); //prints out hello
// anotherFunc(callback);
// console.log(doc); //prints out bye

// //for whatever reason this example isn't clicking with me

//////////////////////////////////////////////////////////////////////////////////////////

/*
Return the Objects Keys and Values
Create a function that takes an object and returns the keys and values as separate arrays.

Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
Notes
Remember to sort the keys.
*/

//////////////////////////////////////////////

//for/in used to loop through the properties of an object

//    SOL 1

// function keysAndValues(array) {
//   let keys = [];
//   let values = [];
//   let result = [];
//   for (key in array) {
//     keys.push(key);
//     values.push(array[key]);
//   }
//   result.push(keys);
//   result.push(values);
//   return result;
// }

// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

//  SOL 2

// function keysAndValues(object) {
//   let result = [];
//   result.push(Object.keys(object)); //grabs the keys of the object and returns as array
//   result.push(Object.values(object)); // grabs values of an object and returns as an array
//   return result;
// }

//  SOL 3 - bit confusing, map returns a new array

// function keysAndValues(object) {
//   console.log(Object.keys(object));
//   return [Object.keys(object), Object.keys(object).map((x) => object[x])]; //for each key map it to object[key] which gives the value
// }

////////////////////////////////////////////////////////////////////////////////////

/*
https://edabit.com/challenge/rLybgi7vcxL2ykt8F

Promises I: What Is a Closure?
Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.

function parent(x) {
  return function closure() {    // Closure is declared here.
    return x
  }
}

const remember = parent("remembers me")
// Seems like the variable x would be gone after
// parent is executed, but it's not.

closure()
// Returns "remembers me" because the inner
// function remembers x.

Fix the greetingMaker() function so that it works with the greeting() function.
The greeting() function has already been created (check the Tests tab).

Example
const greeting = greetingMaker("Hello")
greeting("James") ➞ "Hello, James"
Notes
Check the Resources tab for more info on closures.
*/

////////////////////////////////////////////////////////

// This is kinda trippy cause when you invoke greetingMaker it returns a function called greeting but greeting can still access parameters defined in it's parent scope - greetingMaker even though you would think it should be self-enclosed or separated from it's parent.

// function greetingMaker(salutation) {
//   return function greeting(name) {
//     return salutation + ", " + name;
//   };
// }

// //Method 1 of invoking closure
// const greeting = greetingMaker("Hello");
// console.log(greeting("Andrew"));

// //Method 2 of invoking closure
// console.log(greetingMaker("hello")("andrew")); // we can also invoke the closure like this, this invokes greetingMaker and then invokes the function "greeting" which is inside it

///////////////////////////////////////////////////////////////////
/*
https://edabit.com/challenge/WjXHgXLAvMxNvD6h2

No Conditionals?
Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.

Examples
flip(1) ➞ 0

flip(0) ➞ 1
Notes
Try completing this challenge without using any:

Conditionals
Ternary operators
Negations
Bit operators
*/

//    SOL 1

// function flip(y) {
//   x = [1, 0];
//   return x[y];
// }

////////////////////////////////////////////////////////////////////////////////////

/*
https://edabit.com/challenge/yyKv8f4FrZPDaJbDs

An Introduction to the Map-Reduce Pattern
You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.

Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.

Examples
magnitude([3, 4]) ➞ 5

magnitude([0, 0, -10]) ➞ 10

magnitude([]) ➞ 0

magnitude([2, 3, 6, 1, 8] ) ➞ 10.677078252031311
Notes
The array can have any length.
The input array will contain integers (except for empty array [] ➞ 0).
Use both .map() and .reduce().
Don't use Math.hypot().

*/

//    STARTER CODE
//var magnitude = vector => //code goes here

///////////////////////////////////////

//    SOL 1 - had to look at solutions, cause couldn't figure out how to structure the answer

//sqrt -  to find the square root
//map - vector.map((vector) => vector * vector), so for each vector we'll use map to return a new array and make each value equal to vector * vector
//reduce - .reduce((acc, curr) => acc + curr, 0), we'll then apply reduce and apply the reducer function that we provide as (accumulator, currentvalue) => accumulator + currentvalue, initialValue = 0
// var magnitude = (vector) => {
//   return Math.sqrt(
//     vector.map((vector) => vector * vector).reduce((acc, curr) => acc + curr, 0) // if I don't have the zero at the end of this reduce method then the empty array errors. I think this 0 is the initial value. AH yep https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//     // According to the above link, calling reduce() on an empty arrow without an initialValue will throw a TypeError
//   );
// };

// console.log(magnitude([3, 4]));

// console.log(magnitude([2, 3, 6, 1, 8])); //➞ 10.677078252031311

// console.log(magnitude([0, 0, -10])); //  ➞ 10

// console.log(magnitude([])); //  ➞ 0
