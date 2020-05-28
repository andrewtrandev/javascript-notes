// JavaScript classes, introduced in ECMAScript 2015, are primarily syntactic sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

//CHALLENGE
// Create a Dog class. Each dog should have a name and a location.
// Add a speak method that logs "Woof! my name is {name}"
// Add a walk method that accepts two arguments: location (string) and distance (integer)
// Add a display_walks method that console.logs all of the dog's walks
// Add a total_distance method that returns the total distance of all the walks
// Research: what's the difference between console.log and return? Make sure you have a solid understanding

///////////////////////////////////////////////////////////////////

// class Dog {
//   constructor(name, location) {
//     this.name = name;
//     this.location = location;
//     this.walkHistory = [];
//     this.walked = 0;
//   }

//   speak() {
//     return `Woof! my name is ${this.name}`; // remember you gotta reference this
//   }

//   walk(location, distance) {
//     this.walkHistory.push([location, distance]);
//     this.walked += distance;
//     // return `Going for a ${distance} walk at ${location}`;
//   }

//   displayWalks() {
//     console.log(this.walkHistory);
//   }

//   totalDistance() {
//     return this.walked;
//   }
// }

// const pomeranian = new Dog("Peanut", "Erko");
// pomeranian.walk(20, "erko");
// pomeranian.walk(30, "marra");
// pomeranian.displayWalks();
// console.log(pomeranian.totalDistance());

////////////////////////////////////////////////////////////
//                      COMMENTS
//console.log(); is a function that writes the argument value on the console, like p in ruby

// return - returns the output/execution of the called method/ caller, won't show a value unless you console log it

/////////////////////////////////////////////////////////////////////

// Beast Mode
// Create a Walk class with properties: location and distance
// Update your Dog class: when the walk method is called, use this new Walk class to create a walk
// Introduce a timestamp to each walk, automatically add the current time when you instantiate a walk

/////////////////////////////////////////////////////////////////////

class Walk {
  constructor(location, distance) {
    this.location = location;
    this.distance = distance;
    this.time = new Date();
  }
}

class Dog {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.walkHistory = [];
    this.walked = 0;
  }

  speak() {
    return `Woof! my name is ${this.name}`; // remember you gotta reference this
  }

  walk(location, distance) {
    this.walkHistory.push(new Walk(location, distance));
  }
  // return `Going for a ${distance} walk at ${location}`;

  displayWalks() {
    console.log(this.walkHistory);
  }

  totalDistance() {
    return this.walked;
  }
}

const pomeranian = new Dog("Peanut", "Erko");
pomeranian.walk("erko", 20);
pomeranian.walk("marra", 30);
pomeranian.displayWalks();
// console.log(pomeranian.totalDistance());

// ////////////////////////////////////////////////////////////////////
// Beast Mode++
// Create a basic GUI in the browser to interact with your classes. Use buttons, prompts and lists to create and display dogs (view example).
// Add walks to the GUI. I.e. add a `New Walk` button to each dog and display their walks under their name.

// ////////////////////////////////////////////////////////////////////
