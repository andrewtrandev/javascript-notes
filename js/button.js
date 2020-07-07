const b1 = document.querySelector("#b1")
const b2 = document.querySelector("#b2")

function handleClick() {
  console.log("clicked")
}

b1.addEventListener("click", handleClick)

b2.addEventListener("click", () => {
    b1.removeEventListener('click', handleClick)
  })

  // can't use anonymous functions for this cause you need a reference to it
  //type of event and same function that is being called


  const button = document.querySelector("input[type=submit]")


  //prevent default
button.addEventListener("click", (event) => {
  event.preventDefault()
})