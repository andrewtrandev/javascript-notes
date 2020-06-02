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

// EXAMPLE

// function adder(num1, num2, onComplete) {
//   // passing in numbers and a function
//   const answer = num1 + num2;

//   onComplete(answer); //calling the function at the end
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

// We can do something such as below ot be able to access the rails app and make a http get request to it, to get the students as json
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
