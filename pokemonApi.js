// Morning/Afternoon Challenge
// Pokemon Callbacks (gotta callback em all)!
// This morning we're gonna be playing around with callbacks by getting data from the popular https://pokeapi.co/. It's basically an app a lot like our rails apps which just returns JSON information about different pokemon.

// Core
// Head over to https://pokeapi.co/ and play around on the website, take a look at some of the different routes that you can request data from, and the format of the data that gets returned. This is actually a really good example of the type of API you might consume as a front end developer!

// Head over to Postman and try making some requests in there. Specifically, see if you can get the following data (in separate requests)

// The first 350 pokemon available
// https://pokeapi.co/api/v2/pokemon?limit=350offset=0

// The pokemon with id 199 - what's its name?
// https://pokeapi.co/api/v2/pokemon/199/ - slowking

// All of the flying type pokemon
//pokeapi.co/api/v2/type/3

// Below you'll find a JS function for making an HTTP Get request called makeGetRequest, this function can be used to get data from the pokeapi (or any other API for that matter). Copy the function and bring it into your code, it takes two args, the URL and a callback which will get called with the data from the request. Test the function by running the following code makeGetRequest('https://pokeapi.co/api/v2/pokemon/ditto', (data) => {console.log(data)})

// Now, add onto the callback function so that it not only console logs the data (which will be a JSON string), but converts it into a javascript object (deserialization).

//below code was written by Mike and basically does the get request for us
https: function makeGetRequest(theUrl, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", theUrl, true);
  request.onload = (res) => callback(res.currentTarget.responseText);
  request.send();
}

// makeGetRequest("https://pokeapi.co/api/v2/pokemon/ditto", (data) => {
//   const pokemonObject = JSON.parse(data);
//   console.log(pokemonObject);
// });

//ReferenceError: XMLHttpRequest is not defined // don't do this in node, won't work

/////////////////////////////////////////////////////////////////////

/*
Beast

Write a function called getPokemonStats(pokemonName, callback) which will take as an argument a pokemon's name and pass an array of their stats to the callback, basically each stat will be an object with name and baseStat that looks like this:

 [{name: "speed", baseStat: 45}, {name: "attack", baseStat: 52}, ...]

Add in some error handling, so if the user passes in a pokemonName  that doesn't exist the function passes to the callback "No pokemon data found"
*/

//////////////////////////////////////////////////////////////////////

function getPokemonStats(pokemonName, callback) {
  makeGetRequest(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, (data) => {
    const pokemonData = JSON.parse(data);
    const statsArray = [];
    for (pokemonStat of pokemonData.stats) {
      statsArray.push({
        //push the stats as an object into the statsArray
        name: pokemonStat.stat.name,
        baseStat: pokemonStat.base_stat,
      });
      //   console.log(statsArray);
    }
    // once we've done parsing through the data we can make a callback to send it back to the user, we can think of the above code as a blackbox and then the line just below will send the data back to the user
    callback(statsArray);
  });
}

getPokemonStats("ditto", (statsArray) => {
  // not sure why the callback is defined like this
  console.log(statsArray);
});
