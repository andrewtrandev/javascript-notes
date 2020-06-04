// fetch().then((response) => {
//   return response;
// });

// console.log(axios);

axios.get("https://api.kanye.rest").then(function (response) {
  console.log(response.data);
});
