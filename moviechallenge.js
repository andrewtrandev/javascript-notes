// Most Watched Movies Amongst Friends
// Challenge
// Implement topWatchlistedMoviesAmongFriends method that will return an array of top four movie titles, that have been most watchlisted by friends of a given user.
// If there are no such movies, then an empty list should be returned or as many movies as possible.
// Movies that have equal watchlist count, should be ordered alphabetically.
// Use the arrays below to test your solution:

// Examples

// E.g. topWatchlistedMoviesAmongFriends(62289), should return: ["Schindler's List", "Pulp Fiction", "The Dark Knight", "The Shawshank Redemption"]

// In the example above, user with id 62289 has two friends: user with id=15291 and with id=7001.

// Schindler's List is watchlisted by both users, so it will be the most watchlisted

// E.g. topWatchlistedMoviesAmongFriends(15291), should return: ["The Dark Knight", "Schindler's List", "The Shawshank Redemption", "Pulp Fiction"]

// In the example above, user with id 15291 has three friends: users with id=7001, id=51417 and id=62289.

// The Dark Knight is the most watched.

// Schindler's and Shawshank have both been watched twice, so will be in alphabetical order.

// Pulp Fiction and The Godfather have both been watched once, but Pulp fiction comes earlier alphabetically ("P.." vs "T.."), so it makes the top 4.

///////////////////////////////////////////////////////

let movies = [
  {
    title: "The Shawshank Redemption",

    duration: "PT142M",

    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],

    ratings: [],

    watchlist: [15291, 51417, 62289, 6146, 71389, 93707],
  },
  {
    title: "The Godfather",

    duration: "PT175M",

    actors: ["Marlon Brando", "Al Pacino", "James Caan"],

    ratings: [],

    watchlist: [62289, 66380, 34139, 6146],
  },
  {
    title: "The Dark Knight",

    duration: "PT152M",

    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],

    ratings: [],

    watchlist: [51417, 62289, 6146, 71389, 7001],
  },
  {
    title: "Pulp Fiction",

    duration: "PT154M",

    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],

    ratings: [],

    watchlist: [7001, 9250, 34139, 6146],
  },
  {
    title: "Schindler's List",

    duration: "PT195M",

    actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],

    watchlist: [15291, 51417, 7001, 9250, 93707],
  },
];

let users = [
  {
    userId: 15291,

    email: "Constantin_Kuhlman15@yahoo.com",

    friends: [7001, 51417, 62289],
  },
  {
    userId: 7001,

    email: "Keven6@gmail.com",

    friends: [15291, 51417, 62289, 66380],
  },
  {
    userId: 51417,

    email: "Margaretta82@gmail.com",

    friends: [15291, 7001, 9250],
  },
  {
    userId: 62289,

    email: "Marquise.Borer@hotmail.com",

    friends: [15291, 7001],
  },
];

// Mike recommends building multiple helper functions
// Remember we can also feed functions into each other in Javascript
// First we want to find the right user

// function getUserById(userId){
//     for ( let user of users) // for each user in users array
//     if (user.userId === userId) {  //if the userId matches the one we want to find
//         return user         // return that user
//     }
// }
// console.log(getUserById(62289))   // checking if we get the right user

// function getFriendsOfUser(userId){
//     return  userfriends=getUserById(userId).friends  //return the user's friends, by feeding in the userfound function
// }
// console.log(getFriendsOfUser(62289)) // checking we find the right friends

// function getWatchlistOfFriends(userfriends) {
//     //check if movies.watchlist is equal to friend's id
//     let moviesWatchList = []
//         for (let friend of userfriends) {
//         movies.forEach(function(movie){
//            if (movie.watchlist.includes(friend))
//              moviesWatchList.push(movie.title)
//             })
//         }
//         return moviesWatchList

// }

// console.log(getWatchlistOfFriends(62289))

// E.g. topWatchlistedMoviesAmongFriends(62289), should return: ["Schindler's List", "Pulp Fiction", "The Dark Knight", "The Shawshank Redemption"]

//Mike Review

//break big problem into smaller problems

function getUserById(userId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId === userId) {
      return users[i];
    }
  }
}

function getWatchlistedMoviesOfUser(userId) {
  let watchlistedMovies = [];
  movies.forEach((movie) => {
    if (movie.watchlist.includes(userId)) {
      watchlistedMovies.push(movie.title);
    }
  });
  return watchlistedMovies;
}

function getWatchlistedMoviesOfUsersFriends(userId) {
  let watchlistedMovies = [];
  getUserById(userId).friends.forEach((friendId) => {
    const friendMovies = getWatchlistedMoviesOfUser(friendId);
    watchlistedMovies = [...watchlistedMovies, ...friendMovies];
  });
  return watchlistedMovies;
}

//Frequency object to count how many times something shows up

function generateArrayFrequencyObject(arr) {
  let frequencies = {};
  arr.forEach((element) => {
    if (frequencies[element]) {
      //this movie is already in the hash
      frequencies[element]++;
    } else {
      //the movie isn't in the object, so undefined
      frequencies[element] = 1;
    }
  });
  return frequencies;
}

function generateOrderedArrayFromFrequencyObject(freqObj) {
  const numItems = Object.keys(freqObj).length;
  let orderedItems = [];
  let currentFrequency = 1;
  while (orderedItems.length < numItems) {
    let tempArray = [];
    for (let movieName in freqObj) {
      if (currentFrequency === freqObj[movieName]) {
        tempArray.push(movieName);
      }
      orderedItems = [...tempArray.sort(), ...orderedItems];
      currentFrequency++;
    }
  }
  return orderedItems;
}

console.log(getWatchlistedMoviesOfUsersFriends(15291));

console.log(
  generateArrayFrequencyObject([
    "Schindler's List",
    "Pulp Fiction",
    "The Dark Knight",
    "The Shawshank Redemption",
  ])
);

function topWatchlistedMoviesAmongFriends(userId) {
  const friendsWatchlistedMovies = getWatchlistedMoviesOfUsersFriends;
  const movieFrequencyObject = generateArrayFrequencyObject(
    friendsWatchlistedMovies
  );
}
