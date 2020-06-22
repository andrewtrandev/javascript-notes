// let name = 'Andrew'

// console.log(`Hello ${name}`)

// let person = {
//     name: "Mike",
//     profession: "Programmer",
//     age: 60,
//     accountInfo: {
//         accountNum: 1234
//     },
//     hobbies: [
//         "Coding",
//         "Teaching coding"
//     ]
// }

// console.log( person )

// console.log("Hello world")

/*
Create a new variable called user, set the value to: tom
Write an if statement: if the user's name is tom, say 'Hello Tom'
Add an else condition: say 'Hello someone other than Tom'
Add a new variable called age, set the value to: 18
If the user is 18, say 'welcome to the casino!'
Research 'prompt'. Use it in your code to ask the user for their age.
If the user is less than 18 years old, use the alert method to deny entry.
*/

// let user = "tom"

// // let age = 18

// let age = prompt("Please enter your age")

// if (user === "tom") {
// console.log("Hello Tom")
// } if (age == 18) {
//     console.log('welcome to the casino!')
// } else if (age < 18) {
// alert('no entry')
// } else {
//     console.log('Hello someone other than Tom')
// }

//////////////////////////////////////////////////////////////////////////

/*Assign an empty array to a students variable.
Use the push method to add a student called Sarah
Use prompt to ask the user for their name, add it to the array.
Use a loop to ask the user for 3 names, add them all to the array.
Loop through the array and use the alert method to read each user back to the user. */

// let students = []
// students.push('Sarah')

// console.log(students)

// let i

// for (i=0; i <4; i++) {
//     students.push(prompt('What is your name'))
//     alert(students[i+1])
// }

/////////////////////////////////////////////////////////////////////////

// Store hashes in your students array
// Each student should have a name and age property.

// let students = []
// let student={}
// let i

// for (i=0; i<2; i++) {
//     // store the prompt in student["name"]
//     student["name"]= prompt('What is your name')
//     student["age"] = prompt('What is your age')
//     students.push(student)
// }

// console.log(students)

//////////////////////////////

// Ross's way

// let students=[]

// i = 0;
// while (i < 3) {
//   let name = prompt("Give me a name");
//   let age = prompt("Give me their age");
//   students.push({
//     name: name,
//     age: age
//   });
//   i++;
// }

// for (student of students) {
//   alert(`${student.name} is ${student.age}`);

//////////////////////////////////////////////////////////////////////

/* If you finish the challenge above, try converting the ruby code below into JS:

1. 

age = 10
if age >= 18
    puts "Come in an enjoy a drink!"
else
    puts "Go away! Come back in #{18 - age} years"
end

*/

////////////////////////////

// let age = 10

// if (age >= 18) { //don't forget curly braces
//     console.log('Come in an enjoy a drink!') //console.log is our new print
// } else {
//     // note for string interpolation we change the quotation marks to back ticks and we also change #{} to ${}
//     console.log(`Go away! Come back in ${18 - age} years`)
// }

///////////////////////////////////////////////////////////////

/*is_subscriber = true;
is_active = true;

if is_subscriber && is_active
    puts "You're an active subscriber"
elsif is_subscriber && !is_active
    puts "Thanks for subscribing, now start using the site"
elsif !is_subscriber && is_active
    puts "You use the site a lot, would you like to subscribe?"
else
    puts "Please subscribe and use the site"
end */

//////////////////////////

// let is_subscriber = false;
// let is_active = true;

// if (is_subscriber && is_active) {
//     console.log("You're an active subscriber");
// } else if (is_subscriber && !is_active) {
//     console.log("Thanks for subscribing, now start using the site");
// } else if (!is_subscriber && is_active) {
//     console.log("You use the site a lot, would you like to subscribe");
//     }    else
//     console.log("Please subscribe and use the site");

///////////////////////////////////////////////////////////////
/*
def say_hi(name)
    puts "Hi #{name}"
end

say_hi(gets.chomp)*/

// function say_hi(name) {
//  console.log(`Hi ${name}`);
// }

// say_hi(prompt("please enter name"))

//remember prompt won't work with node so we'll need to run this in the browser

////////////////////////////////////////////////////////////////////
// DAY 2

// let luckyNums = [4, 8, 15, 16, 23, 42]

// let [first, second, ...otherNumbers] = luckyNums
// // the names don't matter for the above
// //... spread operator - maps all the other numbers to otherNumbers

// console.log(first)
// console.log(second)
// console.log(otherNumbers)

//////////////////////////////////////

// let bobBirds = ["robin", "crow"]
// let sallyBirds = ["bluejay", "cardinal"]

// let allBirds = ["Falcon", ...bobBirds, "Bald Eagle", ...sallyBirds]

// console.log(allBirds)

////////////////////////////////

// let favColors = {
//     sally: "blue",
//     tom: "red",
//     scott: "purple"
// }

// let { sally, tom, scott } = favColors
//// so in the above we're making an object and assigning it's value as the first object

// console.log( sally, tom , scott )

//////////////////////////////

// let user = {
//     email: "mike@code.com",
//     name: "Mike",

// }

// const { email, name } = user

// console.log(email)

/////////////////////////////

// let age = 25

// if(age >= 18) {
//     console.log("You may drink")
// } else {
//     console.log("try something non-alco")
// }

// let age = 8

// if(age >= 18) {
//     console.log("You are an adult")
// } else if (age > 12) {
//     console.log("You are a teenager")
// } else {
//     console.log("You are a child")
// }

////////////////////////////////////
////                Ternary
// let age = 19

// let allowed = age >= 18 ? "come in" : "go away"

// console.log(allowed)

////////////////////////////////////
///           Switch Statement

// let favBird = "robinss"

// switch(favBird) {
//     case "crow":
//         console.log("you like crows")
//         break
//     case "robin":
//         console.log("you like robins")
//         break
//     default:
//         console.log("You like some other bird")
// }

////////////////////////////////////
////                LOOPS

////            WHILE LOOP

// let count = 0

// while(count < 10) {
//     console.log(count)
//     count++
// }

///////////////////////////////
//          DO WHILE LOOP

// do {
//     console.log(count)
//     count++
// } while(count < 10)

///////////////////////////
//          FOR LOOP

// let i = 0
// while(i < 10) {
//     console.log(i)
//     i++
// }

// for( let i = 0; i < 10 ; i++){
//     console.log(i)
// }

// let people = ["Mike", "Joe", "Katie"]

// for(let i = 0; i < people.length; i++){
//     console.log( people[i] )
// }

////////////////////////////////////////
//////        FOR OF LOOPS

// let people = ["Mike", "Joe", "Katie"]
// for (let person of people){
//     console.log(person)
// }

//////          FOR IN LOOP

// let people = ["Mike", "Joe", "Katie"]
// let user = {
//     email: "mike@dane.com",
//     password: "supersecure"
// }

// for (let field in user){
//     console.log(user[field])
// }

//////////////////////////////////
////////            FOR EACH

// let people = ["Mike", "Joe", "Katie"]
// let user = {
//     email: "mike@dane.com",
//     password: "supersecure"
// }

// function printPerson(person){
//     console.log(person)
// }

// people.forEach(printPerson)

//// Making our own forEach function

// function forEach(array, func){
//     for(let i = 0; i < array.length; i++){
//         func(array[i], i, array)
//     }
// }

////// BREAK AND CONTINUE

// for(let i = 0; i < 10; i++){
//     if(i === 3){
//         continue;
//     }
//     console.log(i)
// }
// console.log("Out of the loop")

////////////////////////////////////////////////////////////
////            HOISTING  - DAY 4 - THURS

// var a = 1;
// console.log(a, b);
// var b = 2; // js sees that this value is eventually going to be defined and brings the var to the top; so when you do console.log, b will actually return undefined, whereas if you use const or let, it won't hoist

////////////////////////////

//functions get hoisted, so even though the function is below the function call, it still works
// const answer = sum(2, 2);
// console.log(answer);

// function sum(x, y) {
//   return x + y;
// }

//if you store a function in a let or const, it won't be hoistable

///////////////////////////////////////////////////////////
//              OBJECTS

// let person = {
//   name: "Mike",
//   profession: "Teacher",
// };

// person.age = 26;

// const key = "profession";

// console.log(person[key]);

// we use square brackets when we want to dynamically access
// in general we'll use dereferencing though with the .

//////////////////////////////////////////////////////////

// let person = {
//   name: "Mike",
//   profession: "Teacher",
//   userInfo: {
//     username: "username",
//     password: "pass",
//   },
// };

// person.age = 26;

// const key = "profession";

// console.log(person.userInfo.username); //accessing a username that's in an object nested in another object

//objects are the core way we store data in javascript

////    ANOTHER WAY TO CREATE OBJECTS
// let myObj = new Object({
//   test: "hello",
// });
// myObj.name = "Mike";
// console.log(myObj);

//////////////////////////////////////////////////
///             CONSTRUCTOR FUNCTIONS

//use capitals for constructor functions

// function Book() {
//   this.title = "Harry potter";
//   this.author = "JK Rowling";
// }
// basically like classes in ruby where we're creating a blueprint for an object

// const myBook = new Book();
// myBook.title = "Not harryh potter";
// console.log(myBook.title);
//we use the new word to create an object with the type Book

// function Book(titleP, authorP) {
//   this.title = titleP;
//   this.author = authorP;
//   this.prettyPrint = () => {
//     return `${this.title} written by ${this.author}`;
//   };
//   this.printThis = function () {
//     console.log(this);
//   };
// }

// const myBook = new Book("Harry Potter"); // since we don't assign an author it gets entered as undefined
// const myBook2 = new Book("Lord of the flies", "asdfsadf");

// console.log(myBook);
// console.log(myBook2);
// console.log(myBook.prettyPrint()); // calling a class function
// console.log(myBook.printThis);

//////////////////////////////////////////////////////
////            PROTOTYPE

// function Chef(name) {
//   this.name = name;
//   this.makeChicken = () => console.log("The chef makes chicken");
//   this.makeSalad = () => console.log("The chef makes salad");
//   this.makeSpecialDish = () => console.log("The chef makes a special dish");
// }

// Chef.prototype.uniqueValue = "My unique value"; // a way to assign a unique value to all prototypes

// //a prototype is a super class
// //constructor functions start with caps

// function ItalianChef(name) {
//   // remember we have to pass in a name through the function
//   Chef.call(this, name); //like using Super in ruby to call a name from Chef and assign it
//   this.makePasta = () => console.log("The Italian chef makes pasta");
//   this.makeSpecialDish = () => console.log("The chef makes chicken parm");
// }
// ItalianChef.prototype = new Chef(); // a way for the italian chef to inherit the classes from chef

// myChef = new Chef();
// myItalianChef = new ItalianChef();

// myChef.makeChicken();
// myItalianChef.makeChicken();

// // console.log(myItalianChef); // myItalianChef inherits properties from Chef
// // console.log(myChef); //the Chef inherits properties from proto object
// //prototype chain

// // myChef.makePasta();
// myItalianChef.makePasta();

// myChef = new Chef("Gordan Ramsay");
// myItalianChef = new ItalianChef("Mike Dane");

// console.log(myChef);
// console.log(myItalianChef);

/////////////////////////////////////////////////////////////////
//////                      ES6 CLASSES

// USE THIS INSTEAD OF CONSTRUCTOR CLASSES

// class Book {
//   constructor(title, author, genre) {
//     this.title = title;
//     this.author = author;
//     this.genre = genre;
//   }

//   prettyPrint() {
//     return `${this.title} written by ${this.author}, genre: ${this.genre}`;
//   }
// }

// class FictionBook extends Book {
//   constructor(title, author) {
//     super(title, author, "Fiction");
//   }
// } // INHERITANCE - inheriting the book class

// const myBook = new Book("Harry Potter", "JK Rowling", "adventure");
// console.log(myBook.prettyPrint());

// const myFictionBook = new FictionBook("LOTR", "JRR Tolkien");
// console.log(myFictionBook.prettyPrint());

///////////////////////////////////////////////////////////////////////////////////////////
//                     ERROR HANDLING    - 29.5.20

// throw "test my error message";
// if we check our console we can see this

// throw {
//   message: "asdf"
//   status : 400
//   code : 122
// }; // generally errors will be objects and they may have statuses or codes

// Any time an error gets thrown, it'll stop executing code
// In a browser, javascript error won't crash the website
// In node.js, an error will crash the whole program

// function CustomError(message) {
//   this.message = message;
//   this.code = "my-custom-error";
//   throw "(╯°□°）╯︵ ┻━┻";
// }

// throw new CustomError("test");

/////////////////////////////////////
//        TRY CATCH

//    allows you to run error-prone code without the code crashing

// try {
//   //code that may throw an error
//   // code placed in here won't break the program
//   throw "(╯°□°）╯︵ ┻━┻"; // once it hits the error it won't run any code after it
// } catch (error) {
//   // (error) is the error

//   console.log(`This is the error: ${error}`); // this is the catch
// } finally {
//   // this code is always executed whether an error is thrown or not
//   console.log("Always executed");
// }

// try {

// } catch (error) {

// } finally {

// }

///////////////////////////////////
//      EXAMPLE

//    reminder to make errors as descriptive as possible

// class SubtractionError {
//   constructor(message) {
//     this.message = message;
//     this.code = "subtration-invalid-input";
//   }
// }

// function subtractTwoThings(num1, num2) {
//   let answer;
//   answer = num1 - num2;
//   if (isNaN(answer)) {
//     throw new SubtractionError(`you can't subtract ${num1} and ${num2}`);
//   }
//   return answer;
// }

// // console.log(subtractTwoThings(2, "sasd"));

// const num1 = prompt("enter a number");
// const num2 = prompt("enter another number");

// try {
//   subtractTwoThings(num1, num2);
// } catch (error) {
//   alert(error.message);
// }

/////////////////////////////////////////////////////
//        JAVASCRIPT ERRORS

//javascript has it's own error class; Error

//typically you want to inherit from the Error class to make your own custom errors

// class MyCustomError extends Error {
//   constructor(...params) {
//     super(...params);
//     this.severity = 5;
//   }
// }

// // //don't have to extend but recommended

// try {
//   throw new MyCustomError("something went wrong");
// } catch (error) {
//   console.log(error.severity);
// }

////////////////////////////////////////////////////////
//             CLOSURES / FUNCTIONS / FUNCTION SCOPE

// if (true) {
//   var myVar = 2;
//   let myLet = 3;
// }

// console.log(myVar); //myVar is in scope of console.log
// console.log(myLet); //myLet is however, out of scope

////////////////////////////////////
//        EXAMPLE OF FUNCTION SCOPE

//Can't access variables that are inside functions

// let owner = "Mike";

// function myDog() {
//   var dog = "Fido";
//   console.log(dog);
//   console.log(owner); // functions can access variables outside of it, can be problematic, since this function may change variables outside of it
// }

// myDog(); // this line will actually output the owner also because functions can access variables outside of them
// console.log(dog); // this will error with undefined, why because it can't access the value of dog, functions don't let you access variables inside them
// console.log(owner);

////////////////////////////////////
// /     EXAMPLE OF A SIDE-EFFECT

// let owner = "Mike";

// function myDog() {
//   owner = "Joe";
// }

// console.log(owner); // PRINTS MIKE
// myDog();
// console.log(owner); // PRINTS JOE, after running myDog();

/////////////////////////////////////////////////////////////////////
//                NESTED FUNCTIONS / HIGHER-ORDER FUNCTIONS

// function parentFunction(a) {
//   let b = 1;
//   function childFunction() {
//     // this child function has access to the parent function's variables and the parameters from the parent function also get passed to the childFunction automatically.
//     console.log("hello");
//     return a + b;
//   }
//   return childFunction(); //this returns a function at the end of code execution, and executes the function
// }

// console.log(parentFunction(2));

///////////////////////////////////////
///       CLOSURE EXAMPLE

// A way to turn global variables into local variables

// function generateChildFunction(user) {
//   user.email = user.email.toUpperCase();

//   function childFunction() {
//     // so we can feed variables and create variables, that the child function will have access to.
//     //Wilkens says that a child function creates a  storage place for all the variables from gnerateChildFunction
//     console.log(user);
//   }

//   return childFunction;
// }

// const myChildFunction = generateChildFunction({ email: "Mike@gmail.com" });

// myChildFunction();

///////////////////////////////////////////////
//      CLOSURE EXAMPLE 2

// function generateChildFunction(name) {
//   function childFunction(age) {
//     console.log(name, age);
//   }

//   return childFunction;
// }

// const mikeFunction = generateChildFunction("Mike"); // so this creates a function with the name of "Mike" using the top most function, it then returns a childFunction so now mikeFunction is now a function with the properites of childFunction.
// const joeFunction = generateChildFunction("Joe");

// mikeFunction(20); //since mikeFunction now has the properties of childFunction we can feed in an age and it'll console.log out the name and age. Weird how it still has access to the name though, is that because that property has been set or it's still pulling it from generateChildFunction?
// function childFunction(age) {
//   console.log(name, age);
// }
// joeFunction(15);

////////////////////////////////////////////////////

//      DATA SERIALIZATION / SERIALISATION / JSON

// const user = {
//   name: "Mike",
//   profession: "Coder",
//   isWorking: true,
//   age: 26,
//   hobbies: ["asdf", "asdf"],
// };

// //converting an object into a string
// // note you need quotation marks around the variables
// const userJSON = `{
//   "name": "Mike",
//   "profession":"Coder",
//   "isWorking":true,
//   "age":26,
//   "hobbies":["asdf","asdf"]
// }`;

// console.log(JSON.stringify(user));

// console.log(JSON.parse(userJSON)); // converting a string back into an object

// /////////////////////////////////////

//      XML

///////////////////////////////////////

//////////////////////////////////////
//              SHORT CIRCUITING       1.6.20

// console.log("val1" && "val2"); // returns val2
// console.log("" && "val2"); //returns empty string
// console.log(false || ""); // returns empty string, ohhh because if the first value is false it still has to check if the second value is true and if that is also false then it will return that most recent false value.

// OR has to check all values but AND should just circuit on the first falsy statement
//      https://www.sitepoint.com/javascript-truthy-falsy/

// falsey = false, 0, '' "" , null, undefined, NaN
// truthy = '0', 'false', [], {}, function(){}

///////////////////////////////////////////////////////////
//            CALLBACKS  / CALLBACK FUNCTIONS

// A function that is passed to another function as a parameter

// EXAMPLE

// function adder(num1, num2, onComplete) {
//   // passing in numbers and a function
//   const answer = num1 + num2;

//   onComplete(answer); //calling the function at the end, oh this could be named anything, it's usually named callback though. It's essentially run after the digits are added, and does whatever function is passed in the parameters.
// }

// function callOnAdderComplete(answer) {
//   //this gets called when the adder is complete
//   console.log("Done with adder", answer);
// }

// adder(2, 5, callOnAdderComplete);

///////////////////////////////////////////////////////////

//               SYNCHRONOUS / ASYNCHRONOUS

// synchronous code executes one line after the other

//  blocking code

// console.log("2");
// console.log("1"); // this line can't execute until the line above it executes
// console.log("3");

// Asynchronous code can be run in parallel or do things at the same time.

/////////////////////////////
// EXAMPLE of synchronous code, Mike coding a sleep method

// function wait(milliseconds) {
//   let start = Date.now();
//   let now = start;
//   while (now - start < milliseconds) {
//     now = Date.now();
//   }
// }

// console.log(1);
// wait(1000);
// console.log(2);

///////////////////////////////////////////////////////////

//     EXAMPLE OF ASYNCHRONOUS WAIT

// function wait(milliseconds) {
//   let start = Date.now();
//   let now = start;
//   while (now - start < milliseconds) {
//     now = Date.now();
//   }
// }

// console.log(1);
// // wait(5000)
// setTimeout(() => {
//   console.log(3);
// }, 1000);
// console.log(2);

// when you do something asynchronous it'll do it separately on a web api and then places it back on the callback queue when it is done, to be put back in the call stack, if nothing is happening

// you need a callback or a promise when you have async code

// console.log(1);
// setTimeout(() => {
//   console.log(3);
// }, 0);
// console.log(2);
// console.log(4);
// above will print out 1,2,3. async code will be pushed to the webapi and called back after all callstack queue is done

////////////////////////////////////////

//     BASIC CALLBACK

// code below doesn't work, cause dunno how to get jquery to work

// function getChuckNorrisJoke(cb) {
//   $.get("https://api.chucknorris.io/jokes/random", (data) => cb(data.value));
// }

// console.log(1);
// getChuckNorrisJoke((joke) => console.log(joke));
// console.log(2);

///////////////////////////////////////

//      EXAMPLE OF CALLBACK HELL

// function getChuckNorrisJoke(cb) {
//   $.get("https://api.chucknorris.io/jokes/random", (data) => cb(data.value));
// }

// function get5ChuckNorrisJokes() {
//   getChuckNorrisJoke((joke1) => {
//     getChuckNorrisJoke((joke2) => {
//       getChuckNorrisJoke((joke3) => {
//         getChuckNorrisJoke((joke4) => {
//           getChuckNorrisJoke((joke5) => {
//             let array = [joke1, joke2, joke3, joke4, joke5];
//             console.log(array);
//           });
//         });
//       });
//     });
//   });
// }

// get5ChuckNorrisJokes();

///////////////////////////////////////////////////////////////////////////////////////////////////

//                AJAX         2.6.20

/*
AJAX = Asynchronous JavaScript and XML
XHR = XMLHttpRequest
AJAX are useful as they can send any request and you don't need to refresh the page

Javascript has 1 thread, 1 call stack, and can only process 1 thing at a time
i.e Single threaded programming language 
XHR is the web api for sending and receiving data, this is used to make our code async
*/

// This code below, I think is used to make a XMLHttpRequest

////////////////////////////////

// function makeGetRequest(url, callback) {
//   const request = new XMLHttpRequest();
//   request.open("GET", url, true); //staging of the request

//   request.onload = (res) => {
//     //this grabs the raw response
//     //setting up a progress event, provides various information such as status,
//     // console.log(res);
//     console.log(res.target.responseText);
//     callback(res.target.responseText);
//   };

//   //   request.onerror = () => {        // this is used for errors
//   //     console.log("Connection Error");
//   //   };

//   request.send(); //this sends the http request
// }

// makeGetRequest("https://pokeapi.co/api/v2/pokemon/ditto", (rawData) => {
//   const pokemonData = JSON.parse(rawData);
//   console.log(pokemonData);
// });

///////////////////////////////////////////////////////////////////////////////

// https://edstem.org/courses/4124/lessons/2960/slides/21851

// mini exercise for AJAX and RAILS, can't get it working though
// turns out for whatever reason, vscode liveshare wasn't playing nice with the student_api.html, so we just manually opened it in chrome and it worked

// the interesting thing about rails is it also provides us routes to get to json, if we generate a resource by using scaffold

// super cool, so you can use javsacript to interact with RAILS and send GET/POST requests to rails, so the javascript can even interact with the rails database

///////////////////////////////////

// We can do something such as below to be able to access the rails app and make a http get request to it, to get the students as json
// below code, I've chucked into a html document and opened using chrome, we can then view the info in console

/*
<!DOCTYPE html>
<html>
  <head>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  </head>
  <body>
    <button>Get User Data</button>

    <script>
      document.querySelector("button").addEventListener("click", getUserData);

      function getUserData() {
        console.log("starting request");

        $.ajax({
          url: "http://localhost:3000/students.json",
          type: "GET",
          success: data => {
            console.log(data);
          },
          error: error => {
            console.log("Error");
            console.log(error);
          }
        });
      }
    </script>
  </body>
</html>
*/

///////////////////////////////////////////////////////

// This code block below is the same as above but I've also added a post button, so that we can post data to the rails app. I've applied ids to the buttons and used getElementById to target them, note that you need to change the function name and function that gets called in .addEventListener()

/*

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- <script src="jquery.min.js" type="text/javascript"></script>  note this code is broken, from the notes-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  </head>

  <body>
    <button id="get">
      Get User Data
    </button>
    <button id="post">
      Post User Data
    </button>
    <script>
      document.getElementById("get").addEventListener("click", getUserData);

      function getUserData() {
        console.log("starting request");

        $.ajax({
          url: "http://localhost:3000/students.json",
          type: "GET",
          success: (data) => {
            console.log(data);
          },
          error: (error) => {
            console.log("Error");
            console.log(error);
          },
        });
      }

      document.getElementById("post").addEventListener("click", postUserData);

      function postUserData() {
        console.log("starting request");

        $.ajax({
          url: "http://localhost:3000/students.json",
          // type: "GET",
          type: "POST",
          data: { student: { name: "John", location: "Brisbane" } },
          success: (data) => {
            console.log(data);
          },
          error: (error) => {
            console.log("Error");
            console.log(error);
          },
        });
      }
    </script>
  </body>
</html>
*/

////////////////////////////////////////////////////////////////////////////////////////

//               CORS

// CORS = CROSS-ORIGIN RESOURCES SHARING

// A security relaxation measure to prevent the same-origin policy from not letting you make AJAX requests from servers other than the site you're visiting

// to disble CORS in a rails application we can chuck the following code into config/application.ruby , note it should go into the under the class

// config.action_dispatch.default_headers = {
//   'Access-Control-Allow-Origin' => '*'
// }

///////////////////////////////////////////////////////

//          JQUERY

// javascript library

/////////////////////////////////////////////////////

//            MIKE JAVASCRIPT REVIEW

/*
Most of the time Javascript is run from the browser

declaration and initialization of variables

console.log our print function

var myVar = "myVar"
let myLet = "myLet"
const myConst = "myConst"

const can't be modified
lets are scoped
vars are globally available
if const and lets are in a block of code, they can't be accessed

null = explicitly defined
undefined = not explicity defined

data structures - arrays and objects

let myArray = []
let myObject = {
    name: "Andrew",
    age: "100"
}

console.log(myObject.name)

lodash - javascript library for helper methods
axios - http requests
jquery 
react
vue.js
angular.js
svelte.js

objects are used alot in Javascript, Mike says an array is actually also an object with the keys specified as the indexes

*/

// let myObject = {
//   name: "Andrew",
//   age: "100",
// };

// const keyName = "name";
// console.log(myObject.name);
// console.log(myObject["name"]);
// console.log(myObject[keyName]); // the square brackets allow you to pass in variables e.g

////////////////////////////////////
//      FUNCTIONS / FUNCTION EXPRESSIONS

// A JS FUNCTION CAN BE STORED IN A VARIABLE FOR LATER USE

/////////////////////////////////
//    STANDARD FUNCTION AND HOISTING

// sayHi(); //hoisting, it can grab the function even though it's below it

// function sayHi(name, profession) {
//   console.log(`Hello ${name}, profession ${profession}`);
// }

///////////////////////////////
///       ANONYMOUS FUNCTION

// below is an anonymous function, it's stored in a variable and hence doesn't need a name, it is called using the variable name sayHi

// const sayHi = function (name, profession) {       //the function name is now a const object
//   console.log(`Hello ${name}, profession ${profession}`);
// };

// sayHi("Andrew", "programmer");

////////////////////////////////
//      FAT ARROW FUNCTION

// const sayHi = (name, profession) => {
//   // so the arrow goes on the right hand-side and acts like the function key word?
//   console.log(`Hello ${name}, profession ${profession}`);
// };

// console.log("andrew", "programmer");

////////////////////////////////////////////
//        MORE ON ARROW FUNCTIONS
// ES5
// var x = function (x, y) {
//   return x * y;
// };

// ES6
// const x = (x, y) => x * y;

// You don't need the function or return keyword, nor the curly brackets.
// You can only omit the return keyword, if it's a single statement
// you use const for functions as the function expression is always a constant value

/////////////////////////////////////////////////
//

// function myFunc() {
//   console.log("Hello word");
//   return "My return value";
// }

// const resultOfCallingFunc = myFunc;

// console.log(resultOfCallingFunc());

// we can do resultOfCallingFunc() and it'll call the function inside it

// if you try to console.log an uncalled function, you get the actual function itself

// whereas if you console.log the called function, it'll return the call of the function

//a function is a data type and you don't necessarily need to call it

////////////////////////////////////////////
//        HIGHER ORDER FUNCTIONS

// function sayHi(name) {
//   return () => {
//     console.log("func returned from sayHi");
//   };
// }

// const funcResult = sayHi();

// console.log(funcResult);

// ////////////////////////////////////////////

// function sayHi() {
//   return () => {
//     console.log("func returned from sayHi");
//   };
// }

// sayHi()(); // calling say hi and then called the function inside it
//outputs "func returned from sayHi"

///////////////////////////////////////////

// function sayHi(name) {
//   console.log(`hello ${name}`);
// }

// // we can pass in a function and it'll get coerced into a string

// sayHi(() => {
//   console.log("arrow func");
// });

///////////////////////////////////////////

//      CLOSURE

// anything declared inside a function can't get out, you can't access them from the outside

// but if they're declared outside a function, a function can access em, E.G variables, lets, consts

////////////////////////////////////////

// function generateSayHiFunc(name) {
//   return () => {
//     console.log(`Hello ${name}`);
//   };
// }

// const sayHiToMikeFunc = generateSayHiFunc("Mike");
// // generateSayHiFunc("Mike")()
// console.log(sayHiToMikeFunc);

// sayHiToMikeFunc; // this won't do anything unless we call it using ()
// //it also won't display anything unless we console.log it

//////////////////////////////////////

//  A FUNCTION GENERATING OTHER FUNCTIONS
//

// function generateSayHiFunc(name) {
//   if (name === "Mike") {
//     return () => {
//       console.log(`Hello ${name} you are the creator`);
//     };
//   } else {
//     return () => {
//       console.log(`Hello ${name}`);
//     };
//   }
// }

// const sayHiToMikeFunc = generateSayHiFunc("Mike");
// const sayHiToJoeFunc = generateSayHiFunc("Joe");
// const sayHiToKatieFunc = generateSayHiFunc("Katie");

// sayHiToMikeFunc();
// sayHiToJoeFunc();
// sayHiToKatieFunc();

////////////////////////////////////////////

//      SYNC / ASYNC

// JAVASCRIPT IS A SINGLE THREADED PROGRAMMING LANGUAGE

// it is synchronous and blocking

// time outs and ajax requests - the two main things async is used fgor

// console.log("before timeout");
// setTimeout(() => {
//   console.log("times up");
// }, 1000);
// console.log("after timeout");

// // the callback is a function that tells us that the async thing is over

// function myLongRunningFunc(callback) {
//   setTimeout(() => {
//     callback("Mike");
//   }, 3000);
// }

// myLongRunningFunc((name) => {
//   console.log(name);
// });

// //////////////////////////////////////////////////////

// //      AJAX REQUESTS

// function makeGetRequest(url, callback) {
//   const request = new XMLHttpRequest();
//   request.open("GET", url, true);
//   request.send();
//   request.onload = callback; // when the request is done, it'll initiate the callback, which we've fed in below in the makeGetRequest.
// }

// makeGetRequest("https://randomuser.me/api/", (data) => {
//   console.log(data.target.responseText);
// });

// oh since this request is async, we need a callback to tell us when this request is done

//////////////////////////////////////////////////////

//              PROMISES  4.6.20

// a promise can be in 3 states,
// pending - doing its thang,
// reject - error has been thrown,
//  resolved - everything is ok, action is done

//resolve is a function that can be passed a value and will return it on completion

// resolve and reject are functions provided by the Promise constructor

// let myPromise = new Promise((resolve, reject) => {
//   resolve("The promised value");
//   reject("the error message");
//   // console.log("In Promise");
// });

/*
 resolve is the function that gets passed to .then
reject is the function that gets passed to .catch
 .then and .catch are async code, so they'll come after sync code
*/

// myPromise
//   .then((thePromisedValue) => {
//     console.log(thePromisedValue); //the params thePromisedValue and error could be anything
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//////////////////////////////////////////////////////////////////////

// function adderWithPromise(num1, num2) {
//   return new Promise((resolve, reject) => {
//     // long winded async code
//     resolve(num1 + num2);
//   });
// }

// console.log(adderWithPromise(2, 5)); //this returns us a promise with the value of 7, but we want the value back

// below code is used to get back our promise value. We use .then to get the resolve function from the promise.

// adderWithPromise(2, 5).then((sum) => {
//   console.log(sum);
// });

//////////////////////////////////////////////////

//        CHAINING THENS / PIPELINING

/*
we can chain .then and .catch together
.catch is usually placed at the end and can be useful to output errors
*/

// adderWithPromise(2, 5)
//   .then((sum) => {
//     return sum + 60;
//   })
//   .then((valueFromPreviousThen) => {
//     // throw "myerror";
//     console.log(valueFromPreviousThen);
//   })
//   .catch((e) => {
//     console.log(`Error: ${e}`);
//   });

////////////////////////////////////////////////////

//    PROMISIFYING

// We can wrap a promise around a http get request, so you don't need a callback

// function makeGetRequest(url) {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.open("GET", url, true);
//     request.onload = (data) => {
//       resolve(data.target.responseText);
//     };

//     request.onerror = reject;
//     request.send();
//   });
// }

//making a function that takes a pokemon name and sends it off as a http get request (which is also a function we've created that has been promisified), this function returns a promise with the pokemon data and parses it into a Javascript Object. The resolve is given the value of myPokemon.

// we parse it into a javascript object, so it's more readable

// function getPokemon(pokemonName) {
//   return new Promise((resolve, reject) => {
//     makeGetRequest(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//       .then((rawPokemonData) => {
//         const myPokemon = JSON.parse(rawPokemonData);
//         resolve(myPokemon);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   });
// }

// calling getPokemon with ditto, we can then grab the promise resolve function using .then and output it

// getPokemon("ditto").then((myPokemon) => {
//   console.log(myPokemon);
// });

//////////////////////////////////////////////////////////////

//      PROMISE.ALL   / PROMISE.RACE

// const favPokemon = [
//   getPokemon("charmander"),
//   getPokemon("squirtle"),
//   getPokemon("bulbasaur"),
//   getPokemon("pikachu"),
// ];

// //Promise.all - this waits for all the promises to resolve and then combines all the promises into an array

// Promise.all(favPokemon).then((favPokemonResults) => {
//   console.log(favPokemonResults);
// });

// // Promise.race returns the first value, not used much

// Promise.race(favPokemon).then((favPokemonResults) => {
//   console.log(favPokemonResults);
// });

////////////////////////////////////////////////////////////////

//        PROMISIFYING - PART 2

// promisifying - converting code that uses callbacks to use promises
// Mike says promises are cleaner/modern versus callbacks

// function setTimeoutPromise(miliseconds) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, miliseconds);
//   });
// }

// setTimeoutPromise(1000).then(() => {
//   console.log("Times up");
// });

//////////////////////////////////////////////////////////////

//        FETCH
//  https://javascript.info/fetch

// the response we get back is raw http, which we need to convert to json by doing response.json()
// we then need to method chain another .then to output the joke
// Fetch returns a promise, that's why we can use the .then method

// fetch("https://api.chucknorris.io/jokes/random")
//   .then((response) => {
//     return response.json();
//   })
//   .then((joke) => {
//     console.log(joke);
//     console.log(joke.value);
//   });

//generally when you make a http request you use fetch or an external library

//////////////////////////////////////////////////////////

//        EXTERNAL LIBRARIES

// Mike recommends looking at GitHub stars, latest commits and npm weekly downloads to see if something is useful/relevant

// https://github.com/axios/axios

// If we want to use javascript in the browser we need to include the script tag

//<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// if your page relies on the script then put it in the head
// if your page doesn't then you put it before the ending body tag
// you also want to grab scripts from a CDN

// console.log(axios);

// axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
//   console.log(response.data.value);
// });

////////////////////////////////////////////////////////////////////////

//        ASYNC / AWAIT     5.6.20

// async function run() {
//   const response = await axios.get("https://api.chucknorris.io/jokes/random");
//   console.log(response.data.value);
// }
// run();
// console.log("after run func");

//async allows us to make async code
// the previous methods we were using were given to us by js, i.e setTimeout, axios, fetch

// we can use await to wait for the async operation to be finished
// if we don't use await, it acts as synchronous code
// await must be used inside functions

// function for grabbing a pokemon's data from the api

// function getPokemon(pokemonName) {
//   return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
// }

// async function run() {
//   const response = await getPokemon("charmander");
//   console.log(response);
// }

// run(); // this gets printed first though, if you don't have await
// console.log("after run");

////////////////////////////////////////

//    ERROR HANDLING FOR ASYNC/AWAIT - USE TRY/CATCH

// async function run() {
//   try {
//     const response = await getPokemon("charmander");
//     console.log(response);
//     // throw "error";
//   } catch (error) {
//     console.log(error);
//   }
// }

//////////////////////////////////////

//        FOR LOOP AND ASYNC/AWAIT

// a way for us to output each value 1 by 1 instead of all at the same time in something like a Promise.all

// async function run() {
//   const pokemonNames = ["pikachu", "charmander", "squirtle"];

//   for (let i = 0; i < pokemonNames.length; i++) {
//     const response = await getPokemon(pokemonNames[i]);
//     console.log(response.data.name);
//   }
// }
// run();

///////////////////////////////////////

//        FOR EACH AND ASYNC/AWAIT

// need to chuck async before pokemonName because forEach runs a function on each value, so I think it needs to apply async to each one of them
// if you code it like the normal for loop it'll error

// function run() {
//   const pokemonNames = ["pikachu", "charmander", "squirtle"];

//   pokemonNames.forEach(async (pokemonName) => {
//     const response = await getPokemon(pokemonName);
//     console.log(response.data);
//   });
// }

// run();
//////////////////////////////////////

// async functions always return a promise
// example of us awaiting an array of values using Promise.all

// async function run() {
//   const pokemonNames = [
//     getPokemon("pikachu"),
//     getPokemon("charmander"),
//     getPokemon("squirtle"),
//   ];

//   const arrayOfPokemon = await Promise.all(pokemonNames);

//   console.log(arrayOfPokemon); // display results of promises
// }

// console.log(run()); //promise pending

/////////////////////////////////////

//  GETTING OUTPUT FROM ASYNC
//  cause they always return promises

// async function getPokemon(pokemonName) {
//   const result = await axios.get(
//     `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//   );
//   return result;
// }

// //    METHOD 1 - WE CAN WAIT FOR IT IN ANOTHER ASYNC FUNCTION
// async function run() {
//   console.log(await getPokemon("charmander"));
// }

// //    METHOD 2 - WE CAN USE A .THEN TO GET THE RESULT
// getPokemon("charmander").then((res) => {
//   console.log(res);
// });

// run();

///////////////////////////////////////////////////////

//    DOM - 15.6.20
//    ALSO REFER TO dom15.6.20 folder

//    DOCUMENT OBJECT MODEL

//    Check dom.html and dom.js

// any time we want to manipulate the dom, the code needs to be below the rendered html, e.g the script tag should be above closing body tag

// document.write("hello world") - this will write something onto the DOM whereever the script tag is, not used much

// document.querySelector("h1") - grabs css selectors

//example of us assigning a const to the query selector
//const title = document.querySelector("h1");
//console.log(title);

// a node is one part of the document, basically anything in the html document is considered a node, even spaces.

// we can also create elements
//const myDiv = document.createElement("div");

//if we want to add this div to the document body you need to append it to an exisiting node

//document.body.appendChild(myDiv); // this would append the div to the end of the body

//example of us create an LI element and appending it
// note that our list is a ul that we have selected
//const list = document.querySelector("ul");

//const myLI = document.createElement("li");
//myLI.innerHTML = "Appended LI";

//list.appendChild(myLI);

//Mike recomments using query selectors

// can be used to grab multiple elements
//returns a html collection object, even though it looks like an array
//const title = document.getElementsByClassName("odd");

// can use querySelectorAll to find all the odd classes
//const oddListItems = document.querySelectorAll(".odd");

//console.log(Array.from(oddListItems));

//////////////////////////////////////////

// 16.6.20

// COOKIES - contains metadata about anything regarding users

// third party cookies - saves cookie data about you and stores it server-side, this data could be large

// ads delivered through iframes

//document.cookie - can type this in console to see cookies of a website

//cookie is stored in plaintext
//document.cookie.split(';') - to split the key value pairs of a cookie into an array

///////////////////////////
//setting cookies
//document.cookie = "identifierkey=value" - this will get appended onto the existing cookies

// can also modify existing cookies by setting a new value on the key

//////////////////////
// setting expiration date for cookies
// let expiry = new Date();
// expiry.toUTCString();
// console.log(expiry);

// document.cookie = "lang=english;expires=2020-06-16T01:15:59.700Z";

/////////////////////////
//    localStorage

// can type localStorage into the console of a browser to access it
//stored in browser and unique to the particulr url
// localStorage.name = "andrew" //putting this into localStorage

// localStorage.setItem("workplace, coderacademy") // another way of setting a key/value, legacy way of doing things

// with localStorage, clients can modify what is in there

//if you wanted to store objects in localStorage you can JSON.stringify() them
// localStorage.setItem("book", JSON.stringify())

////////////////////////
//    sessionStorage

// can type sessionStorage into browser

// stored specifically to a browser and tab

// cookies get sent with the GET request and local and session storage doesn't

/////////////////////////////////////
//      17.6.20
//    NODE.js

// node versions matter
// dom manipulation doesn't work in node.js

// running node.js on the server means it's not run on the browser
// node.js is async

// HTML can combine multiple js files together e.g using <script> tags

// commonjs / requiredjs - a way to include external code in node.js through modules

////////////////////////////////
//below code exports an object, that can be used by other files
/*module.exports = { 
  name: "andy",
  function
}
*/

////////////////////////////////
// place below code in the file that requires the module
// const helpers = require("./filename"); //doesn't require .js at the end

////////////////////////////////
//    filesystem
// filesystem is a node module that we have access to that isn't supported on browser

// const fs = require("fs");
// import fs from "fs";

//below code creates a nodetext file (if doesn't exist) and appends "hello world to it"
// fs.appendFile("./nodetext", "hello world", () => {
//   console.log("saved");
// });

// console.log("after append file");

//we can also run methods sync or async
// fs.appendFileSync("./nodetext", "hello world", () => {
//   console.log("saved");
// });

///////////////////////////////////

//      NPM - node package manager

//    starting a npm project
// start in it's own folder
//    npm init
//   name your package
//  entry point : the file that gets run usually (index.js)

//    package.json basically like gemfile in ruby, manages dependencies

///////////////////////////
//    SCRIPTS IN package.json

//    we can also write scripts in package.json, to interact with the app, chuck these in the scripts section of the package.json
//    "start": "node index.js" // creating a start script
// npm run start // would run the script

////////////////////////
//      IMPORTING a library into a npm project

// npm install packagename e.g npm install lodash

// package-lock.json - specifies exact version of libraries, also includes integrity files
// Mike says don't worry about the package-lock.json file

// node modules - holds all the files for the libraries, don't worry about it, you don't upload node modules because it's such a big file. You can even delete the node modules folder and type npm install and it'll download all the dependencies required that are defined in package.json

// use npm run start / npm start  - instead of node index.js

//requiring a module
// const lodash = require("lodash"); //don't need to set a path since, I think it checked your node_modules

// console.log(lodash);

///////////////////////////

//    SEMANTIC VERSIONING

/*
1.0.0 - new product - First release
1.0.1 - patch release- backwards compat bug fix 
1.1.0 - minor release - backwards compat new features
2.0.0 - major release- changes that break backward compat  
 */

//https://docs.npmjs.com/about-semantic-versioning

// ^ caret - gives you most up to date backwards compat package e.g "lodash": "^4.17.15"

/////////////////////////

//    devDependencies - basically the same as dependencies
//    devDependencies - would be modules only required for the developer e.g testing modules, linters, e.g eslint, prettier, jest
// dependencies - things required for the app
// npm install inquirer --save-dev

/////////////////////////////

//    GETTING USER INPUT FROM NODE

// use inquirer module
// const inquirer = require("inquirer")

// inquirer.prompt([
//   {
//     type: "input",
//     name: "color",
//     message: "What's your favorite color",
//   }
// ])

//inquirer is promise based, so you can use async function and await

////////////////////////////////////////////////////////////////////////

//      18.6.20 WEBPACK

// Refer to importexport18.6.20 folder

/////////////////////////////////////////////////

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
// we can then use   npm run watch

/////////////////////////////////////////////////

// need multiple script tags to use multiple js files
// ordering for js files also matters due to code dependencies

//good practice to keep script tags as little as possible because browser has to make a get request for each one

// webpack - javascript bundler
// allows us to use node libraries on the browser

////////////////////////////////////////////

//  Build Pipeline

// all the steps it takes to go from the code you write to the code that is executed, it may get bundled, minified.

/////////////////////////////////////////

// 21.6.20    REACT - TicTacToe Intro

//https://reactjs.org/tutorial/tutorial.html#inspecting-the-starter-code

/*React is a declarative, efficient, flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components"

React has a few different kinds of components.justify

React.Component 
We use components to tell React what we want to see on the screen. When our data changes, React will efficient update and re-render our components
*/

// class ShoppingList extends React.Component {
//   render() {
//     return (
//       <div className="shopping-list">
//         <h1>Shopping List for {this.props.name}</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     );
//   }
// }

/* Here the ShoppingList is a React component class, or React component type. A component takes in parameters, called props(properties) and returns a hierarchy of views to display via the render method.

Render returns a react element, which is a light-weight description of what to render.justify

React develops use "JSX" to make these structures easier to write.

JSX allows you to use JavaScript within the braces. Each React element is a JavaScript object that you can store in a variable or pass around in your program. 

The ShoppingList component above only renders built-in DOM components like <div /> and <li />. But you can compose and render custom React components too. We can now refer to the whole shopping list by writing <ShoppingList />. Each React component is encapsulated and can operate independently*/

/* You can properties from a Parent to a Child component.

Use arrow function syntax for event handlers

Below 2 code snippets do the same thing, send an alert when a square is clicked*/

// class Square extends React.Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={function () {
//           alert("click");
//         }}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => alert("click")}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

/* We can have components "remember" things by using state. 
We do this by setting this.state in the constructor of a component. this.state should be considered private to a React component that it's defined in.
*/

//////////////////////////////////////////////

//    REACT CONCEPTS

///////////////////////////

//    JSX


// Javacsript + XML
// JSX has to be transpiled to code that can work in JS using Babel
// JSX produces React elements and can act as a visual aid when working with UI inside the JS code.

// const element = <h1>Hello, world!</h1>
// Above is an example of JSX, note the semi-colon after the tags

// Babel transpiles the above code to 
// React.createElement("h1", null, "Hello, World!");

/////////////////////////////////////

//    EMBEDDING EXPRESSIONS IN JSX

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

/*
can put any valid JS expression in the curly braces.
recommended to split JSX over multiple lines for readability. Also wrapping in parentheses to avoid automatic semicolon insertion
use camel case
*/

// const element = <img src={user.avatarUrl} />;
// for the above code, if the tag is empty, we can close it immediately with />

////////////////////////////////////
//JSX PREVENTS INJECTION ATTACKS

// const title = response.potentiallyMaliciousInput;
// // This is safe:
// const element = <h1>{title}</h1>;

// By default, React DOM escapes any values embedded in JSX before rendering them. Thus you can never inject anything that's not explicity written in your application. Everything is converted to a string before being rendered.


///////////////////////////////////

//    REACT 22.6.20

// React is modular, and component based, components are parts of your application.
// allows you to combine HTML and javascript into components that get rendered by React

// React:
// A JS library to build user interfaces
// Used to build re-ussable components (HTML elements)
// The view layer of an MVC application

// React DOM - rendering onto the DOM
// React Active - renders content onto a mobile device


///////////////////////////////////
// BOOTSTRAPPING A REACT APP
// create-react-app myapp
// delete src folder
// touch index.js
// import React fromt 'react'
// import ReactDom from 'react-dom'

// gives us a .gitignore file
// yarn/npm basically the same

// cd into the folder
// npm start

// automatically boots your app on localhost:3000 and also gives you hot reloading which is basically like live server.
// also runs it on your local network so that your phone can access it

// npm run build - takes all your code and build it (webpack, minify, babel etc) and puts it in the public folder. 

// people would usually take the whole public folder and host that

// React renders the index.html in the public folder

////////////////////////////////

// functional components - simplest

// const Greeting = () => {
//   return <h1>Hello! World</h1>
// }

// ReactDOM.render(
//   <Greeting />,
//   document.getElementById("root")
// )

//example of us creating a Greeting component, capital for the function is convention
// components can have value and state

// const Greeting = () => {
//   return (
//     <div>
//   <h1>Hello! World</h1>
//   <p>I am a paragraph</p>
//   </div>
//   )
// }

// in above code
// multiple elements need to be wrapped in a div or another component, or they won't render, gives you a parsing error. These elements will be nested in a div

// const Greeting = () => {
//   return (
//     <>
//   <h1>Hello! World</h1>
//   <p>I am a paragraph</p>
//   </>
//   )
// }

// in above code

// we can also wrap elements in a fragment, which would put the elements right under the root
// https://reactjs.org/docs/fragments.html

// ReactDOM.render is the function that renders our JSX

// You want to put components in their own file and import and export them

// The idea is you want your code to be as reusable and readable of your website, so if you're going to reuse a component of have a large component chuck it in it's own file?

