// Objects should feel familiar. They're just like hashes in Ruby.

// One of the most powerful aspects of JavaScript is being able to dynamically refer to properties of objects.

// const doggo = {
//   name: 'Edison',
//   breed: 'Groodle',
//   hobbies: ['walks', 'tennis balls', 'bamboozling']
// }

// console.log(doggo.name); // -> Edison

// Another way to refer to a property is using square bracket notation:

// console.log(doggo['name']); // -> Edison
// We can use square bracket notation to dynamically refer to a property:

// const my_property = 'name';
// console.log(doggo[my_property]); // -> Edison

////////////////////////////////////////////////////////////////////////////////////

// Assign a new empty object to a variable called me
// On the next line, add one key 'age' and set its value to your age
// On the next line, add one key 'current location' and set its value to your current location
// Use console.log to display the age and current location on screen
// Use code to add an array of hobbies to your me object
// Use code to delete your age key
// Iterate through me.hobbies and log each hobby to the screen

////////////////////////////////////////////////////////////////////////////////////

// let me = {
//   age: 26,
//   current_location: "sydney",
//   hobbies: [],
// };

// let hobbies = ["saving the world", "sleeping 8 hours", "walking dogs"];
// // you want to iterate over each hobby and push it into the hobbies array
// // my original method just pushed the whole array in, so it became a nested array
// // me["hobbies"].push[hobbies];

// hobbies.forEach((hobby) => me.hobbies.push(hobby));

// for (i = 0; i < me.hobbies.length; i++) {
//   console.log(me.hobbies[i]);
// }

// delete me.age;
// console.log(me);

////////////////////////////////////////////////////////////////////////////////////////////////////

// Beast Mode
// Using code:

// Add another item to the end of the hobbies array
// Delete the first item in the hobbies array
// Add a mother key, set its value to an empty object
// Add name, age and location keys to the mother object
// Add a print_details function to the me object.
// Call the function to log some details about yourself. I.e. me.print_details() should work
// Note the difference between calling me.print_details and me.print_details()

let me = {
  age: 26,
  current_location: "sydney",

  print_details() {
    return "";
  },
};

me.hobbies = ["saving the world", "sleeping 8 hours", "walking dogs"];

me.hobbies.shift();

me.mother = {};
me.mother.name = "Mai";
me.mother.age = 58;
me.mother.location = "Sydney";
console.log(me);

//////////////////////////////////////////////////////////////////////

// let me = {
//   age: 26,
// };

// me.age = 26;

// me["age"] = 26;

// me.current_location = "sydney";

// me.hobbies = ["coding", "blahblah"];

// console.log(me);
