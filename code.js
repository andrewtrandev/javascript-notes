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

class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }

  prettyPrint() {
    return `${this.title} written by ${this.author}, genre: ${this.genre}`;
  }
}

class FictionBook extends Book {
  constructor(title, author) {
    super(title, author, "Fiction");
  }
} // INHERITANCE - inheriting the book class

const myBook = new Book("Harry Potter", "JK Rowling", "adventure");
console.log(myBook.prettyPrint());

const myFictionBook = new FictionBook("LOTR", "JRR Tolkien");
console.log(myFictionBook.prettyPrint());
