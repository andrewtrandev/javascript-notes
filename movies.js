// Core

// Create a class called Movie with three fields, title, duration and rating

// Add a method to the class called printMovie which should print {title}, {duration} minutes, rated {rating}

// Create another field in the class called watchCount and give it an initial value of zero

// Now create a method called watch() which, when called, should increment the watchCount

// Modify the printMovie method to also print out the number of times the movie was watched.

////////////////////////////////////////////////////////

// class Movie {
//   constructor(title, duration, rating) {
//     this.title = title;
//     this.duration = duration;
//     this.rating = rating;
//     this.watchCount = 0;
//   }

//   printMovie() {
//     console.log(
//       `Movie: ${this.title}, Duration: ${this.duration}, Rating: ${this.rating}, Number of times watched: ${this.watchCount}`
//     );
//   }

//   watch() {
//     this.watchCount++;
//     console.log(this.watchCount);
//   }
// }

// myNewMovie = new Movie("Batman", 120, 4.5);
// console.log(myNewMovie);
// myNewMovie.printMovie();
// myNewMovie.watch();

/*
Let's introduce users into the program. Create a User class which takes two fields, email and name .

Now modify the Movie class's watch() method so that it accepts one parameter, user (this should be a user object) 

Since we have users now, modify the watchCount field so that instead of being an integer which counts the number of times the movie has been watched, it keeps track of how many times each particular user has  watched it (use email as a unique identifier)

Finally update the printMovie  method, it should still only print out the total number of times the movie has been watched, but you'll need to update the logic to do this since we're now storing the watchCount differently.
*/

class Movie {
  constructor(title, duration, rating) {
    this.title = title;
    this.duration = duration;
    this.rating = rating;
    this.watchCount = {};
  }

  getTotalWatchedCount() {
    let total = 0;
    for (let email in this.watchCount) {
      //unsure about which for loops to use
      total += this.watchCount[email]; //adds each of the times a movie has been watched by  a particular user
    }
    return total;
  }

  printMovie() {
    console.log(
      `Movie: ${this.title}, Duration: ${this.duration}, Rating: ${this.rating}`
    );
  }

  watch(user) {
    // if this.watchCount[user.email] exists
    if (this.watchCount[user.email]) {
      this.watchCount[user.email]++; //increment by 1
    } else {
      //else it doesn't exist
      this.watchCount[user.email] = 1; // set it's value to 1
    }
  }
}

class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

const myNewMovie = new Movie("Batman", 120, 4.5);
const myUser = new User("1@test.com", "Andrew");
const myUser2 = new User("1@test.com", "Bob");
myNewMovie.watch(myUser);
myNewMovie.watch(myUser);
myNewMovie.watch(myUser2);
console.log(myNewMovie.watchCount);

console.log(myNewMovie.getTotalWatchedCount());

/*
Beast Mode ++

Update the User class so it doesn't allow two users to be created who have the same email. If a user object is created with a non-unique email, set the email to null . I'll leave it up to you how to decide to keep track of taken emails, there's a few directions you could go.

Now modify the Movie class so that only the following ratings can be set (G, PG, PG-13, R, NR), if an "invalid" rating is set, change it to NR.

Finally build out a user interface for our app where a user can see all the movies that have been created along with their viewers on the browser!
*/
