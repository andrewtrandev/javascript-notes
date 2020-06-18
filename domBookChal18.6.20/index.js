/*
DOM Manipulation - The Book List
The Book List
Create a webpage with an h1 of "My Book List".
Add a script tag to the bottom of the page, where all your JS will go.
Copy this array of books:
    var books = [
      {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
      }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
      }
    ];
  
Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
Bonuses:
Use a ul and li to display the books.
Add an img to each book that links to a URL of the book cover.
Change the style of the book depending on whether you have read it or not.
*/

console.log("hello");

let books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
];

const myUl = document.createElement("ul");
document.body.appendChild(myUl);
// console.log(myUl);

books.forEach((book) => {
  const myLi = document.createElement("li");
  myUl.appendChild(myLi); //append list to ul

  const p = document.createElement("p");
  p.innerText = `${book.title} - ${book.author}`; //write book title and author using string interpolation
  myLi.appendChild(p); //append para to list
});

const img1 = document.createElement("img");
img1.src =
  "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._AC_SY400_.jpg";
document.querySelector("li").appendChild(img1);
console.log(img1);

const img2 = document.createElement("img");
img2.src = "https://images.penguinrandomhouse.com/cover/9780307476708";
document.querySelectorAll("li")[1].appendChild(img2);

//document.querySelectorAll(".titanic")[1];  // can do something like this to grab the 2nd element

//innerText = renders in plain text
//innerHTML = lets you work with HTML rich text and doesnt auto encode/decode text
