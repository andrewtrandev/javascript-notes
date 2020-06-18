// // const title = document.querySelector("h1");
// const form = document.querySelector("#page-form");
// const list = document.querySelector("ul");

// // console.log(title.innerText);
// // console.log(form.innerText);

// // title.style.background = "blue";
// // console.log(title.style); // we can output styles, with this we can see what we need to modify
// // console.log(form.style);

// const myDiv = document.createElement("div");
// myDiv.innerHTML = "<h1>Hello World</h1>";
// console.log(myDiv);

// document.body.appendChild(myDiv);

// //example of us create an LI element and appending it
// // note that our list is a ul that we have selected
// const myLI = document.createElement("li");
// myLI.innerHTML = "Appended LI";

// list.appendChild(myLI);

// const title = document.getElementsByClassName("odd");
// console.log(title);

//this will return a node list
// const oddListItems = document.querySelectorAll(".odd");

// console.log(Array.from(oddListItems));

///////////////////////////////
//  we can query
// const myUL = document.querySelector("ul");
// const myLI = myUL.querySelectorAll("li");
// // you can also chain these
// //e.g myUL = document.querySelector("ul").querySelectorAll("li")
// console.log(myLI);

////////////////////////////

// removing elements
// const myList = document.querySelector("ul");
// const firstLI = myList.children[0];

// console.log(firstLI);

// myList.removeChild(firstLI);
// myList.removeChild(myList.children[3]);

/////////////////////////////

//      Creating a timer and appending it to the end of the document

// const timer = document.createElement("p");
// timer.innerText = "0";

// document.body.appendChild(timer);
// let currentTime = 0;
// timer.innerText = "0s";
// setInterval(() => {
//   currentTime++;
//   timer.innerText = currentTime;
// }, 1000);

///////////////////////////

// const title = document.querySelector("h1#site-title");

// title.className = "blue large"; // we can add classes to a node
// title.classList.remove("blue"); //removing classes

////////////////////////

//grabbing a submit button and modifying it

// const submitBtn = document.querySelector("input[type=submit");

// // console.log(submitBtn); // check that it's the thing we want

// submitBtn.value = "Hello World"; //we can then change it's value

/////////////////////

//      EVENT LISTENERS

// https://www.w3schools.com/jsref/dom_obj_event.asp

//  HTML DOM EVENTS, you can respond to almost anything a user does

// event listeners - they're just chilling until the event happens

//event listened takes two params, the event and a callback

// const myButton = document.querySelector("button");
// const title = document.querySelector("h1");

// myButton.addEventListener("click", () => {
//   console.log("The user clicked");
//   title.style.background = "red";
// });

////////////////////////

// returns an event object that we can use to access vars such as where exactly the user clicked
// myButton.addEventListener("click", (event) => {
//   console.log(event);
// });

////////////////////////

//      example of us rendering what the user types in the search form
// const myTextBox = document.querySelector("input[type=text]");
// const typedText = document.querySelector("#typed-text");

// myTextBox.addEventListener("keyup", (e) => {
//   typedText.innerHTML = e.target.value;
// });

//////////////////////

//      BUBBLING

// the click event gets passed up to the parent elements, so when you click on the button it also logs a click event for the container and the body

const myBtn = document.querySelector("button");
const myContainer = document.querySelector("#container");

myBtn.addEventListener("click", (e) => {
  console.log("Button clicked");
});

myContainer.addEventListener("click", (e) => {
  console.log("container clicked");
});

document.body.addEventListener("click", (e) => {
  console.log("body clicked");
});

//how to stop event bubbling
//event.stopPropagation();

//preventing the default action of an event e.g stopping a rightclick
//event.preventDefault()
