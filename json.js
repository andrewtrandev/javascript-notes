/*
JSON
When we send data across the web, it can only be text.

JSON (JavaScript Object Notation) is a format that uses human-readable text to transmit data objects consisting of key–value pairs and arrays.

JSON is text. We can convert any JavaScript object into JSON.

We can also convert JSON into a JavaScript object.

Try it for yourself. Turn a JS object into JSON:
*/
///////////////////////////////////////////////////////////////////

// lunch = { food: "Pork Bun Roll", price: 10 };
// lunchJson = JSON.stringify(lunch); //stringify is used to convert objects into strings/JSON

// console.log(lunch);
// console.log(lunchJson);
// console.log(typeof lunchJson); //string
// console.log((lunchJson = JSON.parse(lunchJson))); //parse is used to convert JSON/strings back into objects
// console.log(typeof lunchJson); // becomes object after parsing it

///////////////////////////////////////////////////////////////////
/*
Here's some JSON from Yahoo!'s weather API (2018-03-28)

Copy the JSON into your code and parse it using JSON.parse
Log the sunrise and sunset dates
Log the forecast for the week, make it look nice
Temperatures are in fahrenheit, fix this with a fahrenheitToCelcius method.
*/

const weather =
  '{"query":{"count":1,"created":"2018-03-28T00:57:28Z","lang":"en-US","results":{"channel":{"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"title":"Yahoo! Weather - Sydney, NSW, AU","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","description":"Yahoo! Weather for Sydney, NSW, AU","language":"en-us","lastBuildDate":"Wed, 28 Mar 2018 11:57 AM AEDT","ttl":"60","location":{"city":"Sydney","country":"Australia","region":" NSW"},"wind":{"chill":"77","direction":"0","speed":"11"},"atmosphere":{"humidity":"56","pressure":"1013.0","rising":"0","visibility":"16.1"},"astronomy":{"sunrise":"7:5 am","sunset":"6:56 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Sydney, NSW, AU at 11:00 AM AEDT","lat":"-33.856281","long":"151.020966","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","pubDate":"Wed, 28 Mar 2018 11:00 AM AEDT","condition":{"code":"32","date":"Wed, 28 Mar 2018 11:00 AM AEDT","temp":"77","text":"Sunny"},"forecast":[{"code":"32","date":"28 Mar 2018","day":"Wed","high":"83","low":"57","text":"Sunny"},{"code":"32","date":"29 Mar 2018","day":"Thu","high":"85","low":"61","text":"Sunny"},{"code":"30","date":"30 Mar 2018","day":"Fri","high":"85","low":"64","text":"Partly Cloudy"},{"code":"30","date":"31 Mar 2018","day":"Sat","high":"75","low":"66","text":"Partly Cloudy"},{"code":"30","date":"01 Apr 2018","day":"Sun","high":"90","low":"62","text":"Partly Cloudy"},{"code":"30","date":"02 Apr 2018","day":"Mon","high":"83","low":"66","text":"Partly Cloudy"},{"code":"30","date":"03 Apr 2018","day":"Tue","high":"75","low":"65","text":"Partly Cloudy"},{"code":"30","date":"04 Apr 2018","day":"Wed","high":"74","low":"63","text":"Partly Cloudy"},{"code":"30","date":"05 Apr 2018","day":"Thu","high":"81","low":"61","text":"Partly Cloudy"},{"code":"34","date":"06 Apr 2018","day":"Fri","high":"77","low":"62","text":"Mostly Sunny"}],"guid":{"isPermaLink":"false"}}}}}}';

// console.log(weather);

// // Copy the JSON into your code and parse it using JSON.parse
// const parsedWeather = JSON.parse(weather);

// console.log(parsedWeather);

// // Log the sunrise and sunset dates
// console.log(parsedWeather.query.results.channel.astronomy.sunrise);
// console.log(parsedWeather.query.results.channel.astronomy.sunset);

// // Log the forecast for the week, make it look nice
// console.log(parsedWeather.query.results.channel.item.forecast);

// const forecast = parsedWeather.query.results.channel.item.forecast;
// console.log(forecast);

// function printWeather(forecast) {
//   for (i = 0; i < forecast.length; i++) {
//     console.log(
//       `Date: ${forecast[i].date}, High: ${fahrenheitToCelcius(
//         forecast[i].high
//       )}C, Low: ${fahrenheitToCelcius(forecast[i].low)}C
//       `
//     );
//   }
// }
// in the above code I'm using my fahrenheit function and feeding in the forecast.high and low temps.
//looks console.log also prints out new lines (enters)

// printWeather(forecast);

// function fahrenheitToCelcius(temp) {
//   let celcius = (temp - 32) / 1.8;
//   return Math.round(celcius);
// }

/*
Beast Mode
The sunrise time is missing a zero. Create a method to fix this. E.g:
Input: 7:5 AM, output: 7:50AM
Input: 7:50 AM, output: 7:50AM
*/

// console.log(parsedWeather.query.results.channel.astronomy.sunrise);

// let sunrise = parsedWeather.query.results.channel.astronomy.sunrise;
// let colonindex = sunrise.indexOf(":"); // find the index of the colon

// if (sunrise[colonindex + 2] === " ") {
//   // if the spot where 0 should be is empty space, let's insert a 0
//   let sunriseArray = sunrise.split(""); // first we split the string into an array, so we can then use array helpers such as splice
//   sunriseArray.splice(colonindex + 2, 0, "0"); //splice inserts a new value at the specified point and can also remove values but I've set it to remove 0, specified point is colonindex + 2, value to insert is "0"
//   sunriseArray = sunriseArray.join(""); //rejoin the array
//   console.log(sunriseArray);
// }

// console.log(sunrise.length);

/*
Beast Mode++
Figure out a way to get the current weather from Yahoo! weather in your browser.

Hint 1: Get a brief understanding of CORS (a common interview question)
Hint 2: Get a brief understanding of JSONP (a common interview question)
Hint 3: Yahoo! Weather API & Demo
Got it? now use HTML elements to make it look nice!
*/
