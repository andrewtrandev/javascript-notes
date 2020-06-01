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
///////////////////////////////////////////////////////////////////////////////////////
function whichIsLarger(f, g) {
  let callf = f();
  let callg = g();

  if (callf > callg) {
    return "f";
  } else if (callf < callg) {
    return "g";
  } else {
    return "neither";
  }
}

console.log(
  whichIsLarger(
    () => 5,
    () => 10
  )
);
///////////////////////////////////////////////////////////////////////////////////////
/*
Create a function that takes an array and returns an array of the accumulating product.

Examples
accumulatingProduct([1, 2, 3, 4]) ➞ [1, 2, 6, 24]
// [1, 2, 6, 24] can be written as [1, 1 x 2, 1 x 2 x 3, 1 x 2 x 3 x 4]

accumulatingProduct([1, 5, 7]) ➞ [1, 5, 35]

accumulatingProduct([1, 0, 1, 0]) ➞ [1, 0, 0, 0]

accumulatingProduct([]) ➞ []
*/

///////////////////////////////////////////////////////////////////////////////////////

// function accumulatingProduct(arr) {
//   let answer = [];
//   answer.push(arr[0]);
//   for (i = 1; i < arr.length; i++) {
//     answer.push(arr[i] * arr[i - 1]);
//   }
//   return answer;
// }

// console.log(accumulatingProduct([1, 2, 3, 4]));

//1, 2x1, 3x2, 4x3x2, // x * x-1
