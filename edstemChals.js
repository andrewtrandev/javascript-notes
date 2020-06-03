// https://edstem.org/courses/4124/challenges/14247

/*
Number Clamp
Have the function clamp(value, min, max) take the value parameter being passed and:

Return max if value is greater than max.

Return min if value is less than min.

Return value if neither of these conditions are met.

For example:

clamp(5, 1, 10) Should return 5, value is less than max and greater than min.
clamp(5, 1, 4) Should return 4, value is greater than max.
clamp(5, 6, 10) Should return 6, value is less then min.
*/

//////////////////////////////////////////////////////////////////////////

// function clamp(value, min, max) {
//   if (value < min) {
//     return min;
//   } else if (value > max) {
//     return max;
//   } else {
//     return value;
//   }
// }

// console.log(clamp(5, 1, 10));

////////////////////////////////////////////////////////////////////////////

// https://edstem.org/courses/4124/challenges/14249

/*
Reverse String
Try reverse a string at least 3 times in 3 different and creative ways:

This is a classic interview question that will 100% come up in your career. Whether you're the one that needs to solve this or hopefully you're the one asking the question. This may seem like a simple challenge but what if you needed to solve it several times in different ways!??!

Have the function reverseString(string) take the string parameter being passed and return the string in reverse order. 

For example: if the input string is "Hello JavaScript!" then your function should return the string !tpircSavaJ olleH.
*/

// METHOD 1
// function reverse(string) {
//   string = string.split("");
//   let reverse = [];
//   for (i = string.length; i > 0; i--) {
//     reverse.push(string[i - 1]);
//   }
//   return reverse.join("");
// }
// console.log(reverse("Andrew"));

//METHOD 2 - is this cheating?
// function reverse(string) {
//   string = string.split("").reverse();
//   return string.join("");
// }

// console.log(reverse("string"));

//METHOD 3 - this method is seriously terrble

// function reverse(string) {
//   let reverse = [];
//   for (i = string.length; i > 0; i--) {
//     reverse.push(string.charAt(i));
//   }

//   reverse.push(string.charAt(0));

//   return reverse.join("");
// }

// console.log(reverse("Hello"));

//METHOD 4 - recursive function, still don't really understand this 3/5
// function reverseString(str) {
//   if (str === "") return "";
//   // check if string is empty
//   else return reverseString(str.substr(1)) + str.charAt(0); // return
// }
// console.log(reverseString("hello"));

// for method 4, the base condition is if str ===  empty string
// the else statement calls the reverseString method and feeds in str.substr(1) and adds the starting character
// and then it'll do the same thing but with a shorter string because of str.subtr(1)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Needle in a Haystack
Sven has made a bet with friend Juan that he could find the literal needle hidden in a haystack. Sven knows of your talent coding and hopes that you can write a program to help him. You have a tool that can scan the pile of hay and represent it as a matrix (array of arrays). Each cell will contain either the string H representing hay or N representing the elusive needle. Return the location of the needle so that Sven can win his bet.

INPUT

An array of arrays (matrix) [[],[]] representing the haystack.


Input will always have exactly one 'N'.

OUTPUT

An array containing the pair of indexes that point to the location of the needle.

It must be in the format [x,y]

EXAMPLE

Doing the Impossible

Suppose we had the haystack:

const stack = [
  ['H', 'H', 'H'],
  ['H', 'H', 'H'],
  ['H', 'N', 'H']
]
In this example, we can see that the needle is in the 3rd array, and then the second element in that array. If we wanted to access the value N in code, we would need to call stack[2][1]. Once you have found the needle, return the position as a new array in this case [2, 1].

The Haystack will always contain a needle, so you don't need to consider that edge case. Check haystack.test.js for more examples.
*/

/////////////////////////////////////////////////////////
// const stack = [
//   ["H", "H", "H"],
//   ["H", "H", "H"],
//   ["H", "N", "H"],
// ];

// function findNeedle(haystack) {
//   for (i = 0; i < haystack.length; i++) {
//     //outer loop will loop through the arrays
//     for (j = 0; j < haystack.length; j++) {
//       // inner loop will loop through the elements within the array
//       if (haystack[i][j] == "N")
//         // if array [0] element [0] is N, else increment j++ and look check again, note inner loops will complete before outer loops, so this should check all the j elements of the array iz
//         // return `${haystack[i][j]} found at [${i}, ${j}]`;
//         return [i, j]; // return location of N as an array
//     }
//   }
// }

// console.log(findNeedle(stack));

////////////////////////////////////////////////////////////

/*
Palindrome
Whats the most important issue of 2020 so far?!
Thats right... We need to be able to tell if a string is a palindrome.
ie it reads the same forwards and backwards.

NB pay close attention to the examples below


eg.

palindrome("race car") // should return true

palindrome("not a palindrome") // should return false

palindrome("A man, a plan, a canal. Panama") // should return true

palindrome("never odd or even") // should return true

palindrome("nope") // should return false

palindrome("almostomla") // should return false

palindrome("My age is 0, 0 si ega ym.") // should return true

palindrome("1 eye for of 1 eye.") // should return false
*/

//////////////////////////////////////////////////////////////

// function palindrome(str) {
//   str = str.replace(/\W/g, ""); // using regex to replace any non word characters with nothing, g modifier makes it so it doesn't stop matching after the first instance
//   str = str.toLowerCase(); // downcase letters
//   reverseStr = str.split("").reverse().join(""); //make a second variable that we can use to reverse the string and check, we need to split it into an array, so we can use the reverse method
//   if (str === reverseStr) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindrome("race car")); // should return true

// console.log(palindrome("not a palindrome")); // should return false

// console.log(palindrome("A man, a plan, a canal. Panama")); // should return true

// console.log(palindrome("never odd or even")); // should return true

// console.log(palindrome("nope")); // should return false

// console.log(palindrome("almostomla")); // should return false

// console.log(palindrome("My age is 0, 0 si ega ym.")); // should return true

// console.log(palindrome("1 eye for of 1 eye.")); // should return false

//////////////////////////////////////////////////////////////////////
