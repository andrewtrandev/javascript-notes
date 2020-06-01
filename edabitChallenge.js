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
