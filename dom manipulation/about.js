/*
DOM Manipulation - About Me
About Me'

Start with "about_me.html", and:

Add a script tag to the bottom of the HTML body. In the JavaScript:

Change the body tag's style so it has a font-family of "Arial, sans-serif".

Replace each of the spans (nickname, favourites, hometown) with your own information.

Iterate through each li and change the class to "list-item".

Create a new img element and set its src attribute to a picture of you. Append that element to the page.

In the HTML head:

Add a style tag that sets a rule for .list-item to make the colour red.
*/

//////////////////////////

//     CHANGE FONT STYLE AND FONT FAMILY
// console.log("hello");
// document.body.style.font = "20px Arial, sans-serif"; //font size and font family are required
// console.log(document.body);

//////////////////////////

//    WRITING IN SPANS

// const myNickname = document.querySelector("#nickname");
// const myFavorites = document.querySelector("#favorites");
// const myHometown = document.querySelector("#hometown");

// console.log(myNickname);
// console.log(myFavorites);
// console.log(myHometown);

// myNickname.innerHTML = "Andy";
// myFavorites.innerHTML = "Dog walks, Chicken";
// myHometown.innerHTML = "Erko";

///////////////////////////////////////////

//    Adding the class list-item to each li
// tools =  getElementsByTagName, Array.from, forEach

// let myLis = document.getElementsByTagName("li"); // get all li elements, could be more accurate
// myLis = Array.from(myLis); //convert htmlColection into array
// console.log(myLis);

// myLis.forEach((li) => {
//   li.className = "list-item";
// });

/*function error probably cause I'm trying to iterate over a htmlcollection? not sure
https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
Try converting to array
Success
Why does vinny's code work?
he's using querySelectorAll which returns a static NodeList
must mean that NodeLists are iterable while htmlCollections are not
*/

/* VINNY's way
const ul = document.querySelector("ul");
const list = ul.querySelectorAll("li");

list.forEach(li => {
    li.className = "list-item";
})
*/

//////////////////////////////////////////

//      ADDING IMAGE TO THE BODY
// const myHeader = document.querySelector("h1");
// console.log(myHeader);

// const myImg = document.createElement("IMG");
// myImg.src =
//   "https://wretchedanddivine.files.wordpress.com/2018/09/noface1.png?w=640";
// // myImg;
// console.log(myImg);

// myHeader.appendChild(myImg);

/* 
Vinny way - for creating image

const image = document.createElement("img");
image.setAttribute(
  "src","https://pbs.twimg.com/profile_images/893269493757100033/Nt-GxpeA_400x400.jpg"
);

document.body.appendChild(image)
*/

/////////////////////////////////////

//      BELOW CODE TO CREATE A STYLE TAG AND STYLE CLASS = LIST ITEMS WITH COLOR RED

// let myStyle = document.createElement("style");
// console.log(myStyle);

// myStyle.innerHTML = ".list-item { color: red;}"; //not sure if best way to add a color for the list item
// console.log(myStyle);
// document.head.appendChild(myStyle); //can append to doc head or body
