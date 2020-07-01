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

//      SOLUTION 1

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

/////////////////////////////////////////////////////////////

//      SOLUTION 2
//      if you don't want to use reverse string

// function palindrome(str) {
//   str = str.replace(/\W/g, ""); //replace any non word characters w/ nothing
//   str = str.toLowerCase();
//   reverseStr = str;
//   reverseStr = reverse(reverseStr);

//   if (str === reverseStr) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function reverse(string) {
//   string = string.split("");
//   let reverse = [];
//   for (i = string.length; i > 0; i--) {
//     // for string.length number of values
//     reverse.push(string[i - 1]); //push the last element into an array,
//   }
//   return reverse.join("");
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

/*
Only digits
Often we want a form  field to only contain digits. eg a phone number. 

Your challenge is to create the validation for this. 

eg:

onlyDigits("qrewer4wer") // returns false
onlyDigits("0O0") // returns false
onlyDigits("000") // returns true*/

////////////////////////////////////

//    SOL 1

// const onlyDigits = (string) => {
//   if (string.match(/\D/g)) {
//     return false;
//   } else {
//     return true;
//   }
// };

// console.log(onlyDigits("000")); // true
// console.log(onlyDigits("0O0")); //false
// console.log(onlyDigits("qrewer4wer")); //false

/////////////////////////////////////////////////////////////////////

/*
Pagination
Pagination Class Create a class that will handle content pagination. The class should take 2 parameters: 

items (default: []): An array of the contents to paginate.

pageSize (default: 10): Number of items to show on each page

It should have a property currentPage that starts on the first page when created.

You will have to implement the following methods:

prevPage Turn to previous page. If already at first page, notify user You are on the first page

nextPage Turn to next page. If already at last page, notify user You are on the last page

firstPage Go to first page 

lastPage Go to last page

goToPage Takes an integer as input and goes to that page. If page doesn't exist, stay on current page, and notify user that page doesn't exist Page not found 

Note: these methods should be chainable -> pagination.nextPage().nextPage()

getVisibleItems Return all items on current page (this will be an array of length pageSize) 
*/

////////////////////////////////////////////////////////////////////////

// UNFINISHED

// class Pagination {
//   pageSize = 10;
//   currentPage = 1;
//   constructor(items, pageSize) {
//     this.items = items;
//     this.pageSize = pageSize;
//     this.currentPage = 1;
//   }

//   prevPage() {
//     if (this.currentPage == 1) {
//       return `You are on the first page`;
//     } else {
//       this.currentPage -= 1;
//     }
//   }

//   nextPage() {
//     if (this.currentPage == this.pageSize) {
//       return `You are on the last page`;
//     } else {
//       return (this.currentPage += 1);
//     }
//   }

//   firstPage() {
//     return (this.currentPage = 1);
//   }

//   lastPage() {
//     return (this.currentPage = this.pageSize);
//   }

//   goToPage(page) {
//     if (page < this.currentPage || page > this.pageSize) {
//       return `Page not found`;
//     } else {
//       return (this.currentPage = page);
//     }
//   }

//   getVisibleItems() {
//     return this.items;
//   }
// }

// const page = new Pagination(["1", "2", "3"], 10);
// // page.nextPage();
// // // page.prevPage();
// // page.firstPage();
// // page.lastPage();
// // console.log(page.goToPage(15));

// page.nextPage().nextPage();
// // console.log(page);

///////////////////////////////////////////////////////////////////////////////////////////

/*    UNFINISHED

https://edstem.org/courses/4124/lessons/3325/slides/24569

Reading Speed
Franklin has just started to learn reading and has a new book. When he finds a word that he hasn't seen before, he will read each letter (not number or punctuation) at a rate of one second per letter, however, if he has seen the word before it will take one second to read the whole word, regardless of its length. Given a passage of text (string), predict how many seconds it will take Franklin to read the text.

INPUT

text a string of words separated by a space, that may contain numbers and punctuation.

OUTPUT

An integer representing how many seconds it would take to read the text.

EXAMPLE

How can they learn?

readingSpeed('Hello World!);
// => 10
Frankin needs to read each letter, remember that punctuation is ignored.

readingSpeed('Red fish Green fish');
// => 13
Frankin has seen the for fish the second time, so it only takes one second to read.

readingSpeed('Red Fish Green fish');
// => 13
Fish and fish are the same word. Your code should ignore case.
*/

/////////////////////////////////////////

//regex remove numbers and punctuation
//we need to count the letters in a word, .length, our reading time is the length
// words should be lowercased
// if word has been read, should be read in 1 second

//check if first word is equal to 2nd word, then 3rd word, then last word
// check if 2nd word is equal to 3rd word etc
//recursive?

// .match(/[a-z]/gm) // possibly useful to check if the letter is in a-z
// .toLowerCase() // convert text to lowercase

/*
function wordChecker(array) {
  let wordCount = {};
  for (x of array) {
    for (i = 0; i < array.length; i++) {
      if (x == array[i]) {
        wordCount[x] == 
      }
    }
  }
}
*/

/*
function readingSpeed(text) {
  text = text.toLowerCase();

  matchArray = text.match(/[a-z]/gm);
  readSpeed = matchArray.length;

  return readSpeed;

  text = text.split(" ");
  letterCount = text.split("");
  console.log(text);
}
*/

// readingSpeed("Hello World!"); // => 10

// readingSpeed("Red fish Green fish"); // => 13

// readingSpeed("Red Fish Green fish"); // => 13

/////////////////////////////////////////////////////////////////////////////
//    18.6.20     REFER TO domBookChal18.6.20
/*
DOM Manipulation - The Book List
The Book List
Create a webpage with an h1 of "My Book List".
Add a script tag to the bottom of the page, where all your JS will go.
Copy this array of books:
    var books = [
      {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
      }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
      }
    ];
  
Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
Bonuses:
Use a ul and li to display the books.
Add an img to each book that links to a URL of the book cover.
Change the style of the book depending on whether you have read it or not.
*/
//////////////////////////////////////////////////////////////////////////////

/*
https://edstem.org/courses/4124/lessons/3643/slides/26980

Conways Game of Life

Good morning ladies and gents, do we have a treat for you today. 

The rules are simple. You are presented with 2d array, containing 1's and 0's. 1's represent live cells, 0's represent dead cells.

Your task is to find what the next generation of the 2d array looks like based on the following rules:

    If a living cell has fewer than 2 neighbours, it dies.

    If a living cell has 2 or 3 neighbours, it continues to live.

    If a living cell has greater than 3 neighbours, it dies.

    If a dead cell has exactly 3 neighbours, it comes to life.


Good luck and have fun!

Note that a cell can have up to 8 neighbours (diagonal cells are neighbours!)

let game = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [0, 0, 1, 0, 0]
      ]

*/

let game = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 0],
];

//has to check horizontal and vertical rows

function conwaysGameOfLife(game) {}

function countNeighbors(game) {
  let count = 0;
  let x = 0;
  let y = 0;

  for (x = 0; x++;  )
}
