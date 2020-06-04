console.log("Hello");

function kanyeQuote() {
  axios.get("https://api.kanye.rest").then(function (response) {
    console.log(response.data);
    alert(response.data.quote);
    // window.alert(response.data.quote);
    // document.write(response.data.quote); // not useful, deletes button
  });
}

// config to send headers
const config = {
  headers: {
    Accept: "application/json",
  },
};

function dadJoke() {
  axios
    .get("https://icanhazdadjoke.com/", config)
    .then((res) => {
      console.log(res.data), alert(res.data.joke);
    })
    .catch((err) => console.error(err));
}
