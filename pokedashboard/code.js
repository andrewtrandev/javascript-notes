async function getPokemon(name) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      )
      return response.data
    } catch (e) {
      return null
    }
  }
  
  const searchBtn = document.querySelector("#search-btn")
  
  searchBtn.addEventListener("click", () => {
   getPokemon(searchBar.value)
  })
  

  // can use searchBar.value to get the value 